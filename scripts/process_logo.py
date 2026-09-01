"""
One-off script to remove the studio-mockup background from the Zents Tech
logo and produce a transparent, trimmed wordmark. Not part of the app build;
safe to delete after the derived assets in public/ are generated.

Approach: flood-fill the background starting from the image border through
"background-like" pixels (light + low-saturation), rather than a global
color threshold — the logo's own dark shadow gradients are also
low-saturation, so a global threshold punches holes in the letters. Flood
fill only removes background/drop-shadow that is contiguously connected to
the outer edge, leaving letter interiors untouched.
"""
import numpy as np
from PIL import Image
from scipy.ndimage import label, gaussian_filter

SRC = "public/logo.png"

im = Image.open(SRC).convert("RGB")
arr = np.asarray(im).astype(np.float32)
r, g, b = arr[..., 0], arr[..., 1], arr[..., 2]

sat = np.max(arr, axis=-1) - np.min(arr, axis=-1)
lum = arr.mean(axis=-1)

# Generous candidate mask for "could be background or its soft shadow".
candidate = (sat < 35) & (lum > 140)

labels, n = label(candidate)
border_labels = set(labels[0, :]) | set(labels[-1, :]) | set(labels[:, 0]) | set(labels[:, -1])
border_labels.discard(0)

# Also fold in small enclosed background-colored islands (e.g. a stray
# render-highlight artifact fully inside a letter counter) — but only small
# ones, so a genuinely large intentional highlight on a letter is untouched.
keep_labels = set(border_labels)
for lbl in range(1, n + 1):
    if lbl in border_labels:
        continue
    size = int((labels == lbl).sum())
    if 0 < size < 3000:
        keep_labels.add(lbl)

is_bg = np.isin(labels, list(keep_labels))

# Soften into an anti-aliased alpha ramp at the cutout boundary.
alpha = (~is_bg).astype(np.float32)
alpha = gaussian_filter(alpha, sigma=1.0)

# Decontaminate edge colors so anti-aliased pixels don't carry a pale halo
# from the light studio background once composited on a dark page.
bg_color = np.array([238.0, 238.0, 240.0])
safe_alpha = np.clip(alpha, 0.2, 1.0)[..., None]
fg = (arr - (1 - safe_alpha) * bg_color) / safe_alpha
fg = np.clip(fg, 0, 255)

out = np.dstack([fg, alpha * 255]).astype(np.uint8)
result = Image.fromarray(out, mode="RGBA")

# Trim to the bounding box of visible (non-transparent) content, with a small margin.
alpha_channel = np.array(result)[..., 3]
ys, xs = np.where(alpha_channel > 10)
pad = 6
x0, x1 = max(xs.min() - pad, 0), min(xs.max() + pad, result.width)
y0, y1 = max(ys.min() - pad, 0), min(ys.max() + pad, result.height)
trimmed = result.crop((x0, y0, x1, y1))
trimmed.save("public/logo-transparent.png")
print("trimmed size", trimmed.size)

# Also produce a version composited onto the site's dark brand background,
# for use anywhere that needs an opaque backdrop.
brand_bg = (13, 17, 19, 255)  # matches --background: #0d1113
on_dark = Image.new("RGBA", trimmed.size, brand_bg)
on_dark.alpha_composite(trimmed)
on_dark.convert("RGB").save("public/logo-on-dark.png")
print("on-dark size", on_dark.size)

# --- Favicon / app icon: crop just the arrow-through-N mark -----------------
# The full wordmark is illegible at 16-32px; the mark alone reads fine.
mark = trimmed.crop((465, 0, 745, 280))
side = max(mark.size)
pad_frac = 0.09
canvas_size = int(side * (1 + pad_frac * 2))
square = Image.new("RGBA", (canvas_size, canvas_size), (0, 0, 0, 0))
offset = ((canvas_size - mark.width) // 2, (canvas_size - mark.height) // 2)
square.alpha_composite(mark, offset)

sizes = [16, 32, 48, 180, 192, 512]
icons = {s: square.resize((s, s), Image.LANCZOS) for s in sizes}

icons[512].save("public/icon-512.png")
icons[192].save("public/icon-192.png")
icons[180].save("public/apple-icon.png")
icons[32].save("src/app/icon.png")
icons[16].save("public/favicon-16.png")

# Classic multi-resolution .ico for maximum browser compatibility.
icons[48].save(
    "src/app/favicon.ico",
    format="ICO",
    sizes=[(16, 16), (32, 32), (48, 48)],
    append_images=[icons[16], icons[32]],
)
print("icons written")

# --- Open Graph share image (1200x630, opaque brand background) ------------
og_w, og_h = 1200, 630
og = Image.new("RGB", (og_w, og_h), brand_bg[:3])
logo_for_og = trimmed.copy()
target_w = int(og_w * 0.62)
scale = target_w / logo_for_og.width
logo_for_og = logo_for_og.resize((target_w, int(logo_for_og.height * scale)), Image.LANCZOS)
pos = ((og_w - logo_for_og.width) // 2, (og_h - logo_for_og.height) // 2)
og.paste(logo_for_og, pos, logo_for_og)
og.save("public/og-image.png")
print("og image written", og.size)
