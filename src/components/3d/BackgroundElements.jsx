import { Float, Stars, Sparkles } from '@react-three/drei';

export default function BackgroundElements() {
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
}
