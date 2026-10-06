"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function NotFoundScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;

    if (!container) return;

    // ---------------------------------------------
    // Scene
    // ---------------------------------------------

    const scene = new THREE.Scene();

    // ---------------------------------------------
    // Camera
    // ---------------------------------------------

    const camera = new THREE.PerspectiveCamera(
      42,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );

    camera.position.set(0, 0.4, 7);

    // ---------------------------------------------
    // Renderer
    // ---------------------------------------------

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, 2)
    );

    renderer.setSize(
      container.clientWidth,
      container.clientHeight
    );

    renderer.outputColorSpace = THREE.SRGBColorSpace;

    container.appendChild(renderer.domElement);

    // ---------------------------------------------
    // Lights
    // ---------------------------------------------

    const ambientLight = new THREE.AmbientLight(
      0xffffff,
      1.8
    );

    scene.add(ambientLight);

    const purpleLight = new THREE.PointLight(
      0x7c3aed,
      7,
      12
    );

    purpleLight.position.set(-3, 2, 4);

    scene.add(purpleLight);

    const cyanLight = new THREE.PointLight(
      0x06b6d4,
      6,
      12
    );

    cyanLight.position.set(3, 1, 4);

    scene.add(cyanLight);

    // ---------------------------------------------
    // Character
    // ---------------------------------------------

    const character = new THREE.Group();

    character.position.y = -0.45;

    scene.add(character);

    // ---------------------------------------------
    // Materials
    // ---------------------------------------------

    const bodyMaterial =
      new THREE.MeshStandardMaterial({
        color: 0x18181b,
        roughness: 0.32,
        metalness: 0.65,
      });

    const purpleMaterial =
      new THREE.MeshStandardMaterial({
        color: 0x7c3aed,
        emissive: 0x7c3aed,
        emissiveIntensity: 0.35,
        roughness: 0.3,
        metalness: 0.45,
      });

    const cyanMaterial =
      new THREE.MeshStandardMaterial({
        color: 0x06b6d4,
        emissive: 0x06b6d4,
        emissiveIntensity: 0.45,
        roughness: 0.25,
        metalness: 0.5,
      });

    const eyeMaterial =
      new THREE.MeshBasicMaterial({
        color: 0x67e8f9,
      });

    // ---------------------------------------------
    // Body
    // ---------------------------------------------

    const body = new THREE.Mesh(
      new THREE.SphereGeometry(
        0.85,
        32,
        32
      ),
      bodyMaterial
    );

    body.scale.set(
      1,
      1.15,
      0.8
    );

    character.add(body);

    // ---------------------------------------------
    // Head
    // ---------------------------------------------

    const head = new THREE.Mesh(
      new THREE.SphereGeometry(
        0.72,
        32,
        32
      ),
      bodyMaterial
    );

    head.position.y = 1.25;

    character.add(head);

    // ---------------------------------------------
    // Face
    // ---------------------------------------------

    const face = new THREE.Mesh(
      new THREE.SphereGeometry(
        0.55,
        32,
        32
      ),
      purpleMaterial
    );

    face.scale.set(
      1,
      0.75,
      0.25
    );

    face.position.set(
      0,
      1.25,
      0.62
    );

    character.add(face);

    // ---------------------------------------------
    // Eyes
    // ---------------------------------------------

    const eyeGeometry =
      new THREE.SphereGeometry(
        0.08,
        16,
        16
      );

    const leftEye = new THREE.Mesh(
      eyeGeometry,
      eyeMaterial
    );

    leftEye.position.set(
      -0.2,
      1.32,
      0.72
    );

    character.add(leftEye);

    const rightEye = new THREE.Mesh(
      eyeGeometry,
      eyeMaterial
    );

    rightEye.position.set(
      0.2,
      1.32,
      0.72
    );

    character.add(rightEye);

    // ---------------------------------------------
    // Antenna
    // ---------------------------------------------

    const antenna = new THREE.Mesh(
      new THREE.CylinderGeometry(
        0.025,
        0.025,
        0.35,
        12
      ),
      cyanMaterial
    );

    antenna.position.y = 2.15;

    character.add(antenna);

    const antennaBall = new THREE.Mesh(
      new THREE.SphereGeometry(
        0.08,
        16,
        16
      ),
      cyanMaterial
    );

    antennaBall.position.y = 2.35;

    character.add(antennaBall);

    // ---------------------------------------------
    // Arms
    // ---------------------------------------------

    const armGeometry =
      new THREE.CapsuleGeometry(
        0.13,
        0.55,
        8,
        16
      );

    const leftArm = new THREE.Mesh(
      armGeometry,
      bodyMaterial
    );

    leftArm.position.set(
      -1,
      0.25,
      0
    );

    leftArm.rotation.z = -0.5;

    character.add(leftArm);

    const rightArm = new THREE.Mesh(
      armGeometry,
      bodyMaterial
    );

    rightArm.position.set(
      1,
      0.25,
      0
    );

    rightArm.rotation.z = 0.5;

    character.add(rightArm);

    // ---------------------------------------------
    // Hands
    // ---------------------------------------------

    const handGeometry =
      new THREE.SphereGeometry(
        0.18,
        16,
        16
      );

    const leftHand = new THREE.Mesh(
      handGeometry,
      cyanMaterial
    );

    leftHand.position.set(
      -1.28,
      -0.05,
      0
    );

    character.add(leftHand);

    const rightHand = new THREE.Mesh(
      handGeometry,
      cyanMaterial
    );

    rightHand.position.set(
      1.28,
      -0.05,
      0
    );

    character.add(rightHand);

    // ---------------------------------------------
    // Legs
    // ---------------------------------------------

    const legGeometry =
      new THREE.CapsuleGeometry(
        0.16,
        0.55,
        8,
        16
      );

    const leftLeg = new THREE.Mesh(
      legGeometry,
      bodyMaterial
    );

    leftLeg.position.set(
      -0.35,
      -1,
      0
    );

    character.add(leftLeg);

    const rightLeg = new THREE.Mesh(
      legGeometry,
      bodyMaterial
    );

    rightLeg.position.set(
      0.35,
      -1,
      0
    );

    character.add(rightLeg);

    // ---------------------------------------------
    // Particles
    // ---------------------------------------------

    const particleCount = 100;

    const positions =
      new Float32Array(
        particleCount * 3
      );

    for (
      let i = 0;
      i < particleCount;
      i++
    ) {
      positions[i * 3] =
        (Math.random() - 0.5) * 8;

      positions[i * 3 + 1] =
        (Math.random() - 0.5) * 5;

      positions[i * 3 + 2] =
        (Math.random() - 0.5) * 4;
    }

    const particleGeometry =
      new THREE.BufferGeometry();

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(
        positions,
        3
      )
    );

    const particleMaterial =
      new THREE.PointsMaterial({
        color: 0xa78bfa,
        size: 0.035,
        transparent: true,
        opacity: 0.6,
      });

    const particles = new THREE.Points(
      particleGeometry,
      particleMaterial
    );

    scene.add(particles);

    // ---------------------------------------------
    // Mouse
    // ---------------------------------------------

    const mouse = {
      x: 0,
      y: 0,
    };

    const targetMouse = {
      x: 0,
      y: 0,
    };

    const handleMouseMove = (
      event: MouseEvent
    ) => {
      targetMouse.x =
        (event.clientX /
          window.innerWidth) *
          2 -
        1;

      targetMouse.y =
        -(event.clientY /
          window.innerHeight) *
          2 +
        1;
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    // ---------------------------------------------
    // Animation
    // ---------------------------------------------

    const clock = new THREE.Clock();

    let animationFrameId: number;

    const animate = () => {
      animationFrameId =
        requestAnimationFrame(
          animate
        );

      const elapsed =
        clock.getElapsedTime();

      // -----------------------------------------
      // Smooth mouse
      // -----------------------------------------

      mouse.x +=
        (targetMouse.x - mouse.x) *
        0.05;

      mouse.y +=
        (targetMouse.y - mouse.y) *
        0.05;

      // -----------------------------------------
      // Natural floating
      // -----------------------------------------

      character.position.y =
        -0.45 +
        Math.sin(elapsed * 1.5) *
          0.12;

      // Slight breathing
      // -----------------------------------------

      const breathing =
        1 +
        Math.sin(elapsed * 1.2) *
          0.015;

      character.scale.set(
        breathing,
        breathing,
        breathing
      );

      // -----------------------------------------
      // Body follows cursor slightly
      // -----------------------------------------

      character.rotation.y +=
        (mouse.x * 0.18 -
          character.rotation.y) *
        0.035;

      character.rotation.x +=
        (-mouse.y * 0.05 -
          character.rotation.x) *
        0.035;

      // -----------------------------------------
      // Head follows cursor
      // -----------------------------------------

      head.rotation.y +=
        (mouse.x * 0.38 -
          head.rotation.y) *
        0.06;

      head.rotation.x +=
        (-mouse.y * 0.22 -
          head.rotation.x) *
        0.06;

      // -----------------------------------------
      // Eyes subtly follow cursor
      // -----------------------------------------

      leftEye.position.x =
        -0.2 +
        mouse.x * 0.025;

      rightEye.position.x =
        0.2 +
        mouse.x * 0.025;

      leftEye.position.y =
        1.32 +
        mouse.y * 0.02;

      rightEye.position.y =
        1.32 +
        mouse.y * 0.02;

      // -----------------------------------------
      // Arms remain mostly relaxed
      // -----------------------------------------

      leftArm.rotation.z =
        -0.5 +
        Math.sin(elapsed * 1.2) *
          0.025;

      rightArm.rotation.z =
        0.5 +
        Math.sin(elapsed * 1.2 + 1) *
          0.025;

      // -----------------------------------------
      // Antenna
      // -----------------------------------------

      antenna.rotation.z =
        Math.sin(elapsed * 1.5) *
        0.08;

      antennaBall.position.y =
        2.35 +
        Math.sin(elapsed * 2) *
          0.035;

      // -----------------------------------------
      // Particles
      // -----------------------------------------

      particles.rotation.y =
        elapsed * 0.015;

      particles.rotation.x =
        Math.sin(elapsed * 0.2) *
        0.03;

      // -----------------------------------------
      // Lights follow cursor
      // -----------------------------------------

      purpleLight.position.x =
        -3 + mouse.x * 1.5;

      purpleLight.position.y =
        2 + mouse.y * 0.8;

      cyanLight.position.x =
        3 + mouse.x * 1.5;

      cyanLight.position.y =
        1 + mouse.y * 0.8;

      renderer.render(
        scene,
        camera
      );
    };

    animate();

    // ---------------------------------------------
    // Resize
    // ---------------------------------------------

    const handleResize = () => {
      const width =
        container.clientWidth;

      const height =
        container.clientHeight;

      camera.aspect =
        width / height;

      camera.updateProjectionMatrix();

      renderer.setSize(
        width,
        height
      );

      renderer.setPixelRatio(
        Math.min(
          window.devicePixelRatio,
          2
        )
      );
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    // ---------------------------------------------
    // Cleanup
    // ---------------------------------------------

    return () => {
      cancelAnimationFrame(
        animationFrameId
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "resize",
        handleResize
      );

      particleGeometry.dispose();
      particleMaterial.dispose();

      renderer.dispose();

      if (
        container.contains(
          renderer.domElement
        )
      ) {
        container.removeChild(
          renderer.domElement
        );
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="not-found-scene"
      aria-hidden="true"
    />
  );
}