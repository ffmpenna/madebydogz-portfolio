import { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
// 1. Removemos o useTexture daqui, já que o cromo liso não usa imagens
import { useGLTF, Float, Center } from '@react-three/drei';
import * as THREE from 'three';

export default function StoneDog({ modelPath = '/dog.glb', scale = 1 }) {
  const dogRef = useRef();
  const { scene } = useGLTF(modelPath);

  const clonedScene = useMemo(() => {
    const clone = scene.clone(true);

    // 2. A MÁGICA DO CROMO ESTÁ AQUI:
    const chromeMaterial = new THREE.MeshStandardMaterial({
      color: '#a7a7a7', // Base branca/prateada
      metalness: 1.0, // 100% metal (obriga o material a refletir o ambiente)
      roughness: 0.05, // Quase 0% de rugosidade (superfície lisa como um espelho)
      envMapIntensity: 0.1, // Opcional: Dobra a força do reflexo para ficar bem estourado/brilhante
    });

    clone.traverse((child) => {
      if (child.isMesh) {
        child.material = chromeMaterial;
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    return clone;
  }, [scene]); // Removemos o normalMap das dependências

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
