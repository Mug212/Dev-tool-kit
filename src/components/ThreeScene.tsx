import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Mesh } from 'three';
import * as THREE from 'three';

const getRandomColor = () => {  return `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`;
};

const getRandomPosition = () => {
  const x = (Math.random() - 0.5) * 10;
  const y = (Math.random() - 0.5) * 10;
  const z = (Math.random() - 0.5) * 10;
  return [x, y, z] as [number, number, number];
};

const getRandomRotation = () => {
  const x = Math.random() * Math.PI * 2;
  const y = Math.random() * Math.PI * 2;
  const z = Math.random() * Math.PI * 2;
  return [x, y, z] as [number, number, number];
};

interface RandomMeshProps {
  type: 'box' | 'sphere' | 'torus' | 'cylinder' | 'cone' | 'dodecahedron';
  position: [number, number, number];
  rotation: [number, number, number];
  color: string;
}

function RandomMesh({ type, position, rotation, color }: RandomMeshProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Add some subtle animation to all random meshes
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.1;
    }
  });

  const geometryProps = (() => {
    switch (type) {
      case 'box': return <boxGeometry args={[1, 1, 1]} />;
      case 'sphere': return <sphereGeometry args={[0.8, 32, 32]} />;
      case 'torus': return <torusGeometry args={[0.6, 0.3, 16, 100]} />;
      case 'cylinder': return <cylinderGeometry args={[0.7, 0.7, 1.5, 32]} />;
      case 'cone': return <coneGeometry args={[0.7, 1.5, 32]} />;
      case 'dodecahedron': return <dodecahedronGeometry args={[0.8]} />;
    }
  })();

  return (
    <mesh ref={meshRef} position={position} rotation={rotation}>
      {geometryProps}
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

interface RandomMeshesProps {
  count: number;
}

function RandomMeshes({ count }: RandomMeshesProps) {
  const meshes = React.useMemo(() => {
    const types = ['box', 'sphere', 'torus', 'cylinder', 'cone', 'dodecahedron'];
    const generatedMeshes = [];
    for (let i = 0; i < count; i++) {
      const type = types[Math.floor(Math.random() * types.length)] as RandomMeshProps['type'];
      generatedMeshes.push(
        <RandomMesh
          key={i}
          type={type}
          position={getRandomPosition()}
          rotation={getRandomRotation()}
          color={getRandomColor()}
        />
      );
    }
    return generatedMeshes;
  }, [count]);

  return <>{meshes}</>;
}

const ThreeScene = () => {
  return (
    <div className="w-full h-64 rounded-lg overflow-hidden border border-border bg-card">
      <Canvas camera={{ position: [0, 0, 15] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <pointLight position={[-10, -10, -10]} />
        <RandomMeshes count={30} />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default ThreeScene;