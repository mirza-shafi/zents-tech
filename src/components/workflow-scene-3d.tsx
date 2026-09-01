"use client";

import { useRef, Suspense } from "react";
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

function Rig({ reduceMotion }: { reduceMotion: boolean }) {
  const group = useRef<THREE.Group>(null);
  const autoYaw = useRef(0);
  const pointerYaw = useRef(0);
  const pointerPitch = useRef(0);

  useFrame((state, delta) => {
    if (!group.current) return;
    if (!reduceMotion) {
      autoYaw.current += delta * 0.08;
    }
    // Subtle pointer-driven tilt, layered on top of the continuous spin.
    pointerYaw.current = THREE.MathUtils.lerp(pointerYaw.current, state.pointer.x * 0.18, 0.04);
    pointerPitch.current = THREE.MathUtils.lerp(pointerPitch.current, state.pointer.y * 0.18, 0.04);
    group.current.rotation.y = autoYaw.current + pointerYaw.current;
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
    <div className="h-[240px] w-full sm:h-[300px] md:h-[380px]">
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
