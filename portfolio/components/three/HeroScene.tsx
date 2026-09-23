"use client";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import type { Mesh } from "three";

function Shape() {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x += 0.003;
    ref.current.rotation.y += 0.004;
    ref.current.position.x += (state.pointer.x * 0.8 - ref.current.position.x) * 0.05;
    ref.current.position.y += (state.pointer.y * 0.5 - ref.current.position.y) * 0.05;
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.3, 0]} />
      <meshStandardMaterial color="#7c3aed" wireframe />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 3]} />
      <Shape />
    </Canvas>
  );
}