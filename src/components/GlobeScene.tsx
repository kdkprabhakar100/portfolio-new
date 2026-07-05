"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from "three";

function OrbitalGlobe() {
  const group = useRef<Group>(null);

  useFrame((state, delta) => {
    if (!group.current) return;

    group.current.rotation.y += delta * 0.12;
    group.current.rotation.x +=
      (state.pointer.y * 0.18 - group.current.rotation.x) * 0.025;
    group.current.rotation.z +=
      (-state.pointer.x * 0.12 - group.current.rotation.z) * 0.025;
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.65) * 0.12;
  });

  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[2.05, 36, 36]} />
        <meshStandardMaterial
          color="#67f7ef"
          emissive="#0f7775"
          emissiveIntensity={1.1}
          wireframe
          transparent
          opacity={0.62}
        />
      </mesh>

      <points>
        <sphereGeometry args={[2.12, 54, 54]} />
        <pointsMaterial color="#d8ffff" size={0.018} transparent opacity={0.9} />
      </points>

      <mesh rotation={[1.05, 0.2, 0.4]}>
        <torusGeometry args={[2.55, 0.008, 8, 180]} />
        <meshBasicMaterial color="#ff8a4c" transparent opacity={0.72} />
      </mesh>

      <mesh rotation={[0.15, 0.7, 1.15]}>
        <torusGeometry args={[2.78, 0.006, 8, 180]} />
        <meshBasicMaterial color="#56fff3" transparent opacity={0.44} />
      </mesh>

      <mesh rotation={[0.85, 1.1, 0.15]}>
        <torusGeometry args={[2.38, 0.006, 8, 180]} />
        <meshBasicMaterial color="#56fff3" transparent opacity={0.28} />
      </mesh>
    </group>
  );
}

function StarField() {
  const stars = useRef<Group>(null);

  useFrame((_, delta) => {
    if (stars.current) stars.current.rotation.y -= delta * 0.008;
  });

  return (
    <group ref={stars}>
      <points>
        <sphereGeometry args={[18, 46, 46]} />
        <pointsMaterial color="#a7cfce" size={0.025} transparent opacity={0.3} />
      </points>
      <points rotation={[0.7, 0.3, 0.2]}>
        <sphereGeometry args={[11, 34, 34]} />
        <pointsMaterial color="#ffffff" size={0.018} transparent opacity={0.22} />
      </points>
    </group>
  );
}

export default function GlobeScene() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 7.8], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.8} />
      <pointLight position={[4, 3, 5]} intensity={14} color="#69fff8" />
      <pointLight position={[-4, -3, 4]} intensity={10} color="#ff773c" />
      <StarField />
      <OrbitalGlobe />
    </Canvas>
  );
}
