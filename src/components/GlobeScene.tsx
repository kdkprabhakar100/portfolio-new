"use client";

import { Float, Stars } from "@react-three/drei";
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
  });

  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.35}>
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
          <pointsMaterial
            color="#d8ffff"
            size={0.018}
            transparent
            opacity={0.9}
          />
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
      </Float>
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
      <Stars
        radius={35}
        depth={24}
        count={900}
        factor={2}
        saturation={0}
        fade
        speed={0.25}
      />
      <OrbitalGlobe />
    </Canvas>
  );
}
