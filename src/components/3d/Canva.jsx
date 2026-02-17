import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing';
import ChromeDog from './ChromeDog';
import BackgroundElements from './BackgroundElements';

export default function Canva() {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ powerPreference: 'high-performance', antialias: false }}
      camera={{ position: [0, 1, 6], fov: 45 }}
      shadows
    >
      <Suspense fallback={null}>
        <color attach="background" args={['#050505']} />
        <fog attach="fog" args={['#050505', 5, 20]} />
        <ambientLight intensity={0.2} />
        <spotLight
          position={[5, 5, 5]}
          angle={0.3}
          penumbra={1}
          intensity={3}
          color="#a855f7"
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <spotLight
          position={[-5, 5, 5]}
          angle={0.3}
          penumbra={1}
          intensity={3}
          color="#06b6d4"
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <Environment preset="warehouse" />

        <ChromeDog modelPath="/dog.glb" scale={0.03} />

        <BackgroundElements />

        <EffectComposer disableNormalPass multisampling={0}>
          <Bloom luminanceThreshold={0.8} luminanceSmoothing={0.025} intensity={1.5} />
          <Noise opacity={0.05} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>
        <OrbitControls enableZoom={true} />
      </Suspense>
    </Canvas>
  );
}
