import { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useTexture, Float, Center } from '@react-three/drei';
import * as THREE from 'three';

export default function StoneDog({ modelPath = '/dog.glb', scale = 1 }) {
  const dogRef = useRef();
  const { scene } = useGLTF(modelPath);

  // 1. CARREGANDO A TEXTURA (Coloque o caminho correto de onde você salvou na pasta public)
  const normalMap = useTexture('/stone_map.jpg');

  const clonedScene = useMemo(() => {
    const clone = scene.clone(true);

    // 2. AJUSTANDO A ESCALA DA TEXTURA
    // Se os poros ficarem muito grandes e esticados, aumente esses números (ex: 4, 4)
    // Se ficarem muito pequenos, diminua (ex: 1, 1)
    normalMap.wrapS = THREE.RepeatWrapping;
    normalMap.wrapT = THREE.RepeatWrapping;
    normalMap.repeat.set(3, 3);

    // 3. O NOVO MATERIAL COM O NORMAL MAP
    const stoneMaterial = new THREE.MeshStandardMaterial({
      color: '#bdbdbd', // Cinza cimento
      metalness: 0.05, // Quase zero, só pra luz dar um micro-brilho nas bordas
      roughness: 0.9, // Bem fosco
      normalMap: normalMap, // A mágica acontece aqui!
      // Controla a fundura dos poros. Valores maiores = buracos mais fundos
      normalScale: new THREE.Vector2(5, 5),
      flatShading: true, // Deixa as faces mais planas, reforçando o estilo "esculpido" da pedra
    });

    clone.traverse((child) => {
      if (child.isMesh) {
        child.material = stoneMaterial;
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    return clone;
  }, [scene, normalMap]); // Não esqueça de colocar o normalMap aqui nas dependências!

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

// Preload do modelo (A textura o useTexture já cuida de forma otimizada com o Suspense)
useGLTF.preload('/dog.glb');
