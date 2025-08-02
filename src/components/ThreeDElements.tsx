import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const RectangleMesh = () => (
  <mesh position={[-3, 0, 0]}>
    <boxGeometry args={[2, 1, 0.5]} />
    <meshStandardMaterial color="#4CAF50" />
  </mesh>
);

const SphereMesh = () => (
  <mesh position={[0, 0, 0]}>
    <sphereGeometry args={[1, 32, 32]} />
    <meshStandardMaterial color="#2196F3" />
  </mesh>
);

const ConeMesh = () => (
  <mesh position={[3, 0, 0]}>
    <coneGeometry args={[1, 2, 32]} />
    <meshStandardMaterial color="#FF9800" />
  </mesh>
);

const CylinderMesh = () => (
  <mesh position={[0, 0, -3]}>
    <cylinderGeometry args={[0.8, 0.8, 2, 32]} />
    <meshStandardMaterial color="#9C27B0" />
  </mesh>
);

const TorusMesh = () => (
  <mesh position={[0, 0, 3]}>
    <torusGeometry args={[1, 0.4, 16, 32]} />
    <meshStandardMaterial color="#F44336" />
  </mesh>
);

const ThreeDElements = () => {
  return (
    <div className="w-full h-96 bg-gray-100 rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-4">3D Elements Collection</h3>
      <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <RectangleMesh />
        <SphereMesh />
        <ConeMesh />
        <CylinderMesh />
        <TorusMesh />
        <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
      </Canvas>
    </div>
  );
};

export default ThreeDElements;