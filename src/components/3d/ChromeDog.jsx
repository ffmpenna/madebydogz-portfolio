import { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Float, Center } from '@react-three/drei';
import * as THREE from 'three';

export default function ChromeDog({ modelPath = '/dog.glb', scale = 1 }) {
  const dogRef = useRef();

  const { scene } = useGLTF(modelPath);

  const clonedScene = useMemo(() => {
    const clone = scene.clone(true);

    const chromeMaterial = new THREE.MeshStandardMaterial({
      color: '#aaaaaa',
      metalness: 1,
      roughness: 0.05,
      envMapIntensity: 2,
    });

    clone.traverse((child) => {
      if (child.isMesh) {
        child.material = chromeMaterial;
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    return clone;
  }, [scene]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (dogRef.current) {
      dogRef.current.rotation.y = t * 0.2;
    }
  });

  useEffect(() => {
    return () =>
      clonedScene.traverse((child) => {
        if (child.isMesh && child.material) child.material.dispose();
      });
  }, [clonedScene]);

  return (
    <Float speed={2} rotationIntensity={0} floatIntensity={0.5}>
      <Center>
        <group ref={dogRef}>
          <primitive object={clonedScene} scale={scale} />
        </group>
      </Center>
    </Float>
  );
}

useGLTF.preload('/dog.glb');
