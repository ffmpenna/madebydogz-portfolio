import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing';
import { ChromeDog, BackgroundElements } from './';

export default function Canva() {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ powerPreference: 'high-performance', antialias: false }}
      camera={{ position: [0, 1, 6], fov: 45 }}
      shadows
      className="touch-none"
    >
      <Suspense>
        <color attach="background" args={['#050505']} />
        <fog attach="fog" args={['#050505', 5, 20]} />

        {/* 1. LUZ AMBIENTE (Preenche as sombras para não ficarem 100% pretas) */}
        <ambientLight intensity={0.6} />

        {/* 2. LUZ PRINCIPAL BRANCA (Vem de frente/cima para dar volume e mostrar que é 3D) */}
        <directionalLight
          position={[0, 5, 5]}
          intensity={2.5}
          color="#ffffff"
          castShadow
          shadow-mapSize={[512, 512]}
        />

        {/* 3. HOLOFOTE ROXO (Recorte na lateral direita/trás) */}
        <spotLight
          position={[5, 3, 2]} // Movido mais pra baixo e pra lateral
          angle={0.6} // Ângulo mais aberto para cobrir mais o corpo
          penumbra={0.5} // Borda da luz mais suave
          intensity={5} // Intensidade maior porque luzes coloridas perdem força em objetos cinzas
          color="#a855f7"
          castShadow
          shadow-mapSize={[512, 512]}
        />

        {/* 4. HOLOFOTE AZUL (Recorte na lateral esquerda/trás) */}
        <spotLight
          position={[-5, 3, 2]}
          angle={0.6}
          penumbra={0.5}
          intensity={5}
          color="#06b6d4"
          castShadow
          shadow-mapSize={[512, 512]}
        />

        <ChromeDog modelPath="/dog.glb" scale={0.03} />

        <BackgroundElements />

        <EffectComposer disableNormalPass multisampling={0}>
          {/* Ajustei o Bloom para pegar os brilhos do Neon batendo na pedra */}
          <Bloom luminanceThreshold={0.5} luminanceSmoothing={0.4} intensity={1.2} />
          <Noise opacity={0.05} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>

        <OrbitControls
          enableZoom={true}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
      </Suspense>
    </Canvas>
  );
}
