"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const PARTICLE_COUNT = 900;

function createParticlePositions() {
  const positions = new Float32Array(PARTICLE_COUNT * 3);

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const radius = 2.5 + Math.random() * 2.5;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    positions[i * 3] =
      radius * Math.sin(phi) * Math.cos(theta);

    positions[i * 3 + 1] =
      radius * Math.sin(phi) * Math.sin(theta);

    positions[i * 3 + 2] =
      radius * Math.cos(phi);
  }

  return positions;
}

const PARTICLE_POSITIONS = createParticlePositions();

function AnimatedCore() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.x += delta * 0.15;
    meshRef.current.rotation.y += delta * 0.25;

    const targetX = state.pointer.x * 0.25;
    const targetY = state.pointer.y * 0.25;

    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      targetY,
      0.03,
    );

    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      targetX,
      0.03,
    );
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.5}
      floatIntensity={1}
    >
      <Sphere
        ref={meshRef}
        args={[1.35, 64, 64]}
        scale={1.15}
      >
        <MeshDistortMaterial
          color="#7c3aed"
          emissive="#2e1065"
          emissiveIntensity={0.35}
          roughness={0.25}
          metalness={0.7}
          distort={0.3}
          speed={2}
        />
      </Sphere>
    </Float>
  );
}

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;

    pointsRef.current.rotation.y += delta * 0.025;
    pointsRef.current.rotation.x += delta * 0.008;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[PARTICLE_POSITIONS, 3]}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.018}
        color="#a78bfa"
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  );
}

interface OrbitalRingProps {
  rotation: [number, number, number];
  color: string;
  radius: number;
}

function OrbitalRing({
  rotation,
  color,
  radius,
}: OrbitalRingProps) {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!ringRef.current) return;

    ringRef.current.rotation.z += delta * 0.2;
  });

  return (
    <mesh ref={ringRef} rotation={rotation}>
      <torusGeometry args={[radius, 0.008, 16, 128]} />

      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.45}
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />

      <pointLight
        position={[3, 3, 3]}
        intensity={15}
        color="#a78bfa"
      />

      <pointLight
        position={[-3, -2, 2]}
        intensity={10}
        color="#67e8f9"
      />

      <ParticleField />

      <AnimatedCore />

      <OrbitalRing
        radius={1.8}
        rotation={[0.8, 0.3, 0]}
        color="#a78bfa"
      />

      <OrbitalRing
        radius={2.15}
        rotation={[1.5, 0.4, 0.7]}
        color="#67e8f9"
      />

      <OrbitalRing
        radius={2.5}
        rotation={[0.2, 1.2, 0.5]}
        color="#ffffff"
      />
    </>
  );
}

export function HeroScene() {
  return (
    <div className="h-[500px] w-full">
      <Canvas
        camera={{
          position: [0, 0, 6],
          fov: 45,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <Scene />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
}