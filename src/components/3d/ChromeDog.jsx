import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Float, Center } from '@react-three/drei';
import * as THREE from 'three';

export default function ChromeDog({ modelPath, scale = 1 }) {
  const dogRef = useRef();
  const { scene } = useGLTF('/dog.glb');

  const clonedScene = useMemo(() => {
    const clone = scene.clone(true);
    const chromeMaterial = new THREE.MeshPhysicalMaterial({
      color: '#aaaaaa',
      metalness: 1,
      roughness: 0.05,
      envMapIntensity: 2,
      clearcoat: 1,
      clearcoatRoughness: 0,
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

  return (
    <Float speed={2} rotationIntensity={0} floatIntensity={0.5}>
      <Center>
        <primitive object={clonedScene} ref={dogRef} scale={scale} />
      </Center>
    </Float>
  );
}
