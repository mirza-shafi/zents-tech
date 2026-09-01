"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircleQuestion, X, Send } from "lucide-react";
import { AnimatePresence, m, useReducedMotion } from "motion/react";
import { faqs, contact } from "@/lib/site-data";

type Message = { role: "user" | "assistant"; content: string };

const starters = faqs.slice(0, 3).map((f) => f.q);

const greeting: Message = {
  role: "assistant",
  content: "Hi! Ask a question — I'll answer from what's actually published on this site.",
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([greeting]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, sending]);

  async function send(text: string) {
    const question = text.trim();
    if (!question || sending) return;

    const next = [...messages, { role: "user" as const, content: question }];
    setMessages(next);
    setInput("");
    setSending(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      const reply: string =
        data.reply ||
        `Something went wrong on my end. Email ${contact.email} or WhatsApp ${contact.whatsappNumber} and a real person will reply within one business day.`;
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Couldn't reach the server. Email ${contact.email} or WhatsApp ${contact.whatsappNumber} directly instead.`,
        },
      ]);
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="fixed right-5 bottom-5 z-50 sm:right-6 sm:bottom-6">
      <AnimatePresence>
        {open && (
          <m.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="absolute right-0 bottom-16 flex h-[460px] w-[320px] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[0_20px_50px_-12px_rgba(18,22,28,0.35)] sm:w-[360px]"
          >
            <div className="flex items-start justify-between gap-3 border-b border-border bg-[var(--footer-bg)] px-4 py-3.5">
              <div>
                <p className="font-display text-sm font-bold text-[var(--footer-fg)]">Chat with Zents Tech</p>
                <p className="mt-0.5 text-[11px] leading-snug text-[var(--footer-muted)]">
                  Answers pulled from this site — for anything else, we&rsquo;ll say so.
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="mt-0.5 shrink-0 text-[var(--footer-muted)] transition-colors hover:text-[var(--footer-fg)]"
              >
                <X className="size-4" />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={
                    m.role === "user"
                      ? "ml-auto max-w-[85%] rounded-xl rounded-tr-sm bg-primary px-3 py-2 text-sm text-primary-foreground"
                      : "max-w-[85%] rounded-xl rounded-tl-sm bg-muted px-3 py-2 text-sm text-foreground"
                  }
                >
                  {m.content}
                </div>
              ))}
              {sending && (
                <div className="max-w-[85%] rounded-xl rounded-tl-sm bg-muted px-3 py-2 text-sm text-muted-foreground">
                  Typing…
                </div>
              )}
            </div>

            {messages.length === 1 && (
              <div className="flex flex-col gap-1.5 border-t border-border p-3">
                {starters.map((q) => (
                  <button
                    key={q}
                    onClick={() => send(q)}
                    className="rounded-lg border border-border px-3 py-2 text-left text-xs font-medium transition-colors hover:border-primary/40 hover:bg-accent"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 border-t border-border p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question…"
                disabled={sending}
                className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary/50 disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={sending || !input.trim()}
                aria-label="Send"
                className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-opacity disabled:opacity-40"
              >
                <Send className="size-4" />
              </button>
            </form>
          </m.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_12px_28px_-8px_rgba(15,118,110,0.55)] transition-transform hover:scale-105"
      >
        {open ? <X className="size-5" /> : <MessageCircleQuestion className="size-6" />}
      </button>
    </div>
  );
}
