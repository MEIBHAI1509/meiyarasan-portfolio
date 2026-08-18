"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

import { ArrowDown, ArrowUpRight } from "lucide-react";

import { scrollToSection } from "@/lib/navigation";

import type { Group, Mesh } from "three";

import { Magnetic } from "@/components/effects/magnetic";

function createParticlePositions(count: number) {
  const positions = new Float32Array(count * 3);

  const random = (seed: number) => {
    const value = Math.sin(seed * 12.9898) * 43758.5453;
    return value - Math.floor(value);
  };

  for (let i = 0; i < count; i++) {
    const radius = 2.5 + random(i * 3 + 1) * 2.5;
    const theta = random(i * 3 + 2) * Math.PI * 2;
    const phi = Math.acos(
      2 * random(i * 3 + 3) - 1,
    );

    const x =
      radius * Math.sin(phi) * Math.cos(theta);

    const y =
      radius * Math.sin(phi) * Math.sin(theta);

    const z = radius * Math.cos(phi);

    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
  }

  return positions;
}

function ParticleField() {
  const particleCount =
    typeof window !== "undefined" &&
      window.matchMedia("(max-width: 640px)")
        .matches
      ? 350
      : 900;

  const positions = useMemo(
    () => createParticlePositions(particleCount),
    [],
  );

  const pointsRef = useRef<THREE.Points | null>(null);

  useFrame((_, delta) => {
    if (!pointsRef.current) {
      return;
    }

    pointsRef.current.rotation.y += delta * 0.025;
    pointsRef.current.rotation.x += delta * 0.008;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.018}
        sizeAttenuation
        transparent
        opacity={0.55}
        depthWrite={false}
      />
    </points>
  );
}

function CoreObject() {
  const groupRef = useRef<Group | null>(null);
  const meshRef = useRef<Mesh | null>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) {
      return;
    }

    groupRef.current.rotation.y += delta * 0.15;

    groupRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.35) *
      0.08;

    if (meshRef.current) {
      const scale =
        1 +
        Math.sin(
          state.clock.elapsedTime * 1.5,
        ) *
        0.025;

      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <group ref={groupRef}>
      <Float
        speed={1.2}
        rotationIntensity={0.25}
        floatIntensity={0.45}
      >
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1.55, 2]} />

          <meshStandardMaterial
            metalness={0.8}
            roughness={0.2}
            wireframe
          />
        </mesh>

        <mesh scale={0.82}>
          <icosahedronGeometry args={[1.55, 2]} />

          <meshStandardMaterial
            transparent
            opacity={0.08}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      </Float>
    </group>
  );
}

function HeroScene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 8],
        fov: 42,
      }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
    >
      <ambientLight intensity={0.35} />

      <directionalLight
        position={[4, 4, 5]}
        intensity={2}
      />

      <pointLight
        position={[-4, -2, 4]}
        intensity={2}
      />

      <Suspense fallback={null}>
        <CoreObject />

        <ParticleField />

        <Environment preset="night" />
      </Suspense>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </Canvas>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-zinc-950"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[140px]" />

        <div className="absolute -right-32 top-20 h-72 w-72 rounded-full bg-secondary/10 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-16 pt-28 sm:px-8 lg:px-10">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-4">
          {/* Left */}
          <div className="max-w-3xl">
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 backdrop-blur-md">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />

                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                  Available for opportunities
                </span>
              </div>
            </motion.div>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="text-sm font-medium text-zinc-500"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
              className="mt-3 text-[3.25rem] font-bold leading-[0.95] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]"
            >
              Meiyarasan
              <span className="text-primary-light">.</span>
            </motion.h1>

            <motion.h2
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
              className="mt-3 text-xl font-medium tracking-tight text-zinc-400 sm:text-2xl"
            >
              Frontend Developer{" "}
              <span className="text-zinc-700">
                /
              </span>{" "}
              Full Stack Developer
            </motion.h2>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.35,
              }}
              className="mt-6 max-w-xl text-sm leading-7 text-zinc-500 sm:text-base"
            >
              I build responsive, interactive, and
              thoughtful digital experiences using
              modern web technologies.
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.45,
              }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Magnetic>
                <button
                  type="button"
                  onClick={() =>
                    scrollToSection("projects")
                  }
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-black transition-all duration-300 hover:shadow-[0_0_40px_rgba(167,139,250,0.18)]"
                >
                  View my work

                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </button>
              </Magnetic>

              <Magnetic strength={0.15}>
                <button
                  type="button"
                  onClick={() =>
                    scrollToSection("contact")
                  }
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
                >
                  Let&apos;s talk
                </button>
              </Magnetic>
            </motion.div>

            {/* Quick info */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.65,
              }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-[11px] text-zinc-700"
            >
              <span>React</span>

              <span className="h-1 w-1 rounded-full bg-zinc-800" />

              <span>Next.js</span>

              <span className="h-1 w-1 rounded-full bg-zinc-800" />

              <span>TypeScript</span>

              <span className="h-1 w-1 rounded-full bg-zinc-800" />

              <span>MERN</span>
            </motion.div>
          </div>

          {/* Right — 3D */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.25,
            }}
            className="relative mx-auto h-[300px] w-full max-w-[520px] sm:h-[420px] lg:h-[560px]"
          >
            <div className="absolute inset-0">
              <HeroScene />
            </div>

            {/* 3D label */}
            <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/[0.08] bg-black/30 px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-zinc-600 backdrop-blur-md">
              Creative · Code · Build
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        type="button"
        onClick={() => scrollToSection("about")}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          delay: 1,
        }}
        className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-zinc-700 transition-colors hover:text-zinc-400"
        aria-label="Scroll to about section"
      >
        <span className="text-[9px] uppercase tracking-[0.3em]">
          Scroll
        </span>

        <ArrowDown
          size={14}
          className="animate-bounce"
        />
      </motion.button>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent" />
    </section>
  );
}