import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Box, Sphere, Torus } from '@react-three/drei';
import { Mesh } from 'three';

function RotatingBox() {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <Box ref={meshRef} position={[-2, 0, 0]} args={[1, 1, 1]}>
      <meshStandardMaterial color="#8B5CF6" />
    </Box>
  );
}

function FloatingSphere() {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <Sphere ref={meshRef} position={[0, 0, 0]} args={[0.8, 32, 32]}>
      <meshStandardMaterial color="#06D6A0" wireframe />
    </Sphere>
  );
}

function SpinningTorus() {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += delta * 0.3;
    }
  });

  return (
    <Torus ref={meshRef} position={[2, 0, 0]} args={[0.6, 0.3, 16, 100]}>
      <meshStandardMaterial color="#F72585" />
    </Torus>
  );
}

const ThreeScene = () => {
  return (
    <div className="w-full h-64 rounded-lg overflow-hidden border border-border bg-card">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <RotatingBox />
        <FloatingSphere />
        <SpinningTorus />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default ThreeScene;