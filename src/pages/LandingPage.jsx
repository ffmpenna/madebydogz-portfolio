import React, { useRef, Suspense, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  useGLTF,
  Environment,
  Float,
  Stars,
  Sparkles,
  Center,
  OrbitControls,
} from '@react-three/drei';
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';
import { useNavigate } from 'react-router-dom'; // <--- IMPORTANTE

// --- Componente Otimizado do Cachorro ---
function ChromeDog({ modelPath, scale = 1 }) {
  const dogRef = useRef();
  // Ajuste o caminho se necessário (ex: /dog.glb)
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

// --- Elementos de Fundo ---
const BackgroundElements = React.memo(() => {
  return (
    <group>
      <Stars
        radius={100}
        depth={50}
        count={3000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <Sparkles
        count={200}
        scale={[10, 10, 10]}
        size={3}
        speed={0.4}
        opacity={0.5}
        color="#a3a3a3"
      />
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[4, 2, -5]} rotation={[0.5, 0.5, 0]}>
          <icosahedronGeometry args={[1, 0]} />
          <meshBasicMaterial color="#333" wireframe />
        </mesh>
      </Float>
      <gridHelper position={[0, -3, 0]} args={[20, 20, '#222', '#000']} />
    </group>
  );
});

export default function LandingPage() {
  const navigate = useNavigate(); // Hook de navegação
  const [exiting, setExiting] = useState(false); // Estado da animação

  const handleExplore = () => {
    // 1. Ativa o estado de saída (tela fica preta)
    setExiting(true);

    // 2. Espera 1.5 segundos (tempo da animação) e navega
    setTimeout(() => {
      navigate('/home');
    }, 1000);
  };

  return (
    <div className="relative h-screen w-full bg-[#050505] overflow-hidden">
      {/* --- OVERLAY DE TRANSIÇÃO (O EFEITO VISUAL) --- */}
      {/* Se 'exiting' for true: opacity-100 (preto total), pointer-events-auto (bloqueia cliques).
          Se 'exiting' for false: opacity-0 (invisível), pointer-events-none (deixa clicar no 3D).
      */}
      <div
        className={`absolute inset-0 z-50 bg-black transition-opacity duration-[1000ms] ease-in-out
        ${exiting ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />

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

          {/* IMPORTANTE: Garanta que o arquivo dog.glb está na pasta public */}
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

      {/* UI Overlay */}
      <div
        className={`absolute inset-0 pointer-events-none flex flex-col items-center justify-between p-12 z-10 transition-opacity duration-500 ${exiting ? 'opacity-0' : 'opacity-100'}`}
      >
        <header className="flex justify-between w-full uppercase text-xs font-bold tracking-[0.5em] text-neutral-500">
          <span>Chrome Series</span>
          <span>Vol. 1</span>
        </header>

        <div className="text-center mix-blend-difference">
          <h1 className="text-5xl md:text-9xl font-black text-white tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
            MADEBYDOGZ
          </h1>
          <p className="text-red-400 tracking-widest mt-2 font-mono text-sm">
            DIGITAL SCULPTURE
          </p>
        </div>

        {/* BOTÃO COM AÇÃO */}
        <button
          onClick={handleExplore}
          className="pointer-events-auto border border-white/20 bg-white/5 backdrop-blur-sm text-white px-8 py-3 rounded-full hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 font-medium tracking-wide text-sm"
        >
          EXPLORE O UNDERGROUND
        </button>
      </div>
    </div>
  );
}
