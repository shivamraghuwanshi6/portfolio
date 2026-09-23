"use client";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  Points,
  PointMaterial,
} from "@react-three/drei";
import type { Group, Points as ThreePoints } from "three";

// Fixed seed so particles are identical on every render
function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function makePositions(count: number) {
  const rand = seeded(42);
  const arr = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = 4 + rand() * 6;
    const theta = rand() * Math.PI * 2;
    const phi = Math.acos(2 * rand() - 1);
    arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    arr[i * 3 + 2] = r * Math.cos(phi);
  }
  return arr;
}

const POSITIONS = makePositions(1800);

function Particles() {
  const ref = useRef<ThreePoints>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.03;
    ref.current.rotation.x += delta * 0.01;
  });

  return (
    <Points ref={ref} positions={POSITIONS} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#a78bfa"
        size={0.03}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

function Core() {
  const group = useRef<Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const { x, y } = state.pointer;
    group.current.rotation.y += (x * 0.6 - group.current.rotation.y) * 0.05;
    group.current.rotation.x += (-y * 0.4 - group.current.rotation.x) * 0.05;
  });

  return (
    <group ref={group} position={[1.8, 0, 0]}>
      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1}>
        <mesh>
          <sphereGeometry args={[1.2, 64, 64]} />
          <MeshDistortMaterial
            color="#6d28d9"
            emissive="#4c1d95"
            emissiveIntensity={0.6}
            roughness={0.2}
            metalness={0.8}
            distort={0.35}
            speed={2}
          />
        </mesh>
        <mesh>
          <icosahedronGeometry args={[1.9, 1]} />
          <meshBasicMaterial color="#8b5cf6" wireframe transparent opacity={0.25} />
        </mesh>
      </Float>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 2]}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 3, 3]} intensity={2} />
      <pointLight position={[-4, -2, 2]} intensity={40} color="#3b82f6" />
      <Core />
      <Particles />
    </Canvas>
  );
}