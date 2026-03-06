import { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useTexture, Float, Center } from '@react-three/drei';
import * as THREE from 'three';

export default function StoneDog({ modelPath = '/dog.glb', scale = 1 }) {
  const dogRef = useRef();
  const { scene } = useGLTF(modelPath);

  const normalMap = useTexture('/stone_map.jpg');

  const clonedScene = useMemo(() => {
    const clone = scene.clone(true);

    normalMap.wrapS = THREE.RepeatWrapping;
    normalMap.wrapT = THREE.RepeatWrapping;
    normalMap.repeat.set(3, 3);

    const stoneMaterial = new THREE.MeshStandardMaterial({
      color: '#ffffff',
      metalness: 0.05,
      roughness: 0.9,
      normalMap: normalMap,
      normalScale: new THREE.Vector2(5, 5),
    });

    clone.traverse((child) => {
      if (child.isMesh) {
        child.material = stoneMaterial;
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    return clone;
  }, [scene, normalMap]);

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
