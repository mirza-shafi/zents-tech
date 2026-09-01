"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line } from "@react-three/drei";
import * as THREE from "three";
import { useReducedMotion } from "motion/react";

type NodeDef = {
  label: string;
  position: [number, number, number];
  color: string;
};

export const workflowNodes: NodeDef[] = [
  { label: "Manual task", position: [-3, 0.4, 0], color: "#94a3b8" },
  { label: "AI / automation", position: [-1, -0.5, 0.6], color: "#2dd4bf" },
  { label: "Your tools", position: [1, 0.5, -0.4], color: "#818cf8" },
  { label: "Outcome", position: [3, -0.3, 0.2], color: "#4ade80" },
];

function Node({ position, color }: NodeDef) {
  return (
    <Float speed={1.6} rotationIntensity={0.5} floatIntensity={0.9}>
      <group position={position}>
        <mesh>
          <icosahedronGeometry args={[0.55, 0]} />
          <meshStandardMaterial color={color} wireframe roughness={0.4} />
        </mesh>
        <mesh>
          <icosahedronGeometry args={[0.32, 0]} />
          <meshStandardMaterial color={color} transparent opacity={0.35} />
        </mesh>
      </group>
    </Float>
  );
}

/** Small emissive spheres that loop from one node to the next, standing
 * in for "data moving through the system" — fills the empty space
 * between nodes with motion instead of bare connecting lines. */
function FlowParticles({
  from,
  to,
  color,
  count = 3,
}: {
  from: [number, number, number];
  to: [number, number, number];
  color: string;
  count?: number;
}) {
  const refs = useRef<(THREE.Mesh | null)[]>([]);
  const a = useMemo(() => new THREE.Vector3(...from), [from]);
  const b = useMemo(() => new THREE.Vector3(...to), [to]);

  useFrame((state) => {
    refs.current.forEach((mesh, i) => {
      if (!mesh) return;
      const phase = (state.clock.elapsedTime * 0.22 + i / count) % 1;
      mesh.position.lerpVectors(a, b, phase);
      const material = mesh.material as THREE.MeshStandardMaterial;
      material.opacity = Math.sin(phase * Math.PI) * 0.9;
    });
  });

  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <mesh key={i} ref={(el) => { refs.current[i] = el; }}>
          <sphereGeometry args={[0.07, 10, 10]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.6} transparent opacity={0} />
        </mesh>
      ))}
    </>
  );
}

function Rig({ reduceMotion }: { reduceMotion: boolean }) {
  const group = useRef<THREE.Group>(null);
  const pointerYaw = useRef(0);
  const pointerPitch = useRef(0);

  useFrame((state) => {
    if (!group.current) return;
    // A gentle side-to-side sway, capped well short of 90° so the nodes
    // never visually swap left-right order and drift out of sync with the
    // static HTML labels underneath — a full continuous spin would do that.
    const sway = reduceMotion ? 0 : Math.sin(state.clock.elapsedTime * 0.3) * 0.22;
    pointerYaw.current = THREE.MathUtils.lerp(pointerYaw.current, state.pointer.x * 0.15, 0.04);
    pointerPitch.current = THREE.MathUtils.lerp(pointerPitch.current, state.pointer.y * 0.15, 0.04);
    group.current.rotation.y = sway + pointerYaw.current;
    group.current.rotation.x = pointerPitch.current;
  });

  return (
    <group ref={group}>
      {workflowNodes.slice(0, -1).map((n, i) => (
        <Line
          key={n.label}
          points={[n.position, workflowNodes[i + 1].position]}
          color="#c7cdd4"
          lineWidth={1}
          transparent
          opacity={0.6}
        />
      ))}
      {!reduceMotion &&
        workflowNodes.slice(0, -1).map((n, i) => (
          <FlowParticles
            key={`flow-${n.label}`}
            from={n.position}
            to={workflowNodes[i + 1].position}
            color={workflowNodes[i + 1].color}
          />
        ))}
      {workflowNodes.map((n) => (
        <Node key={n.label} {...n} />
      ))}
    </group>
  );
}

function Scene({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <>
      <ambientLight intensity={0.9} />
      <directionalLight position={[3, 4, 5]} intensity={0.6} />
      <Rig reduceMotion={reduceMotion} />
    </>
  );
}

export function WorkflowScene3D() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="h-[220px] w-full sm:h-[260px] md:h-[300px]">
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 8.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Scene reduceMotion={!!shouldReduceMotion} />
        </Suspense>
      </Canvas>
    </div>
  );
}
