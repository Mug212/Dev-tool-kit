import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import React from 'react';

// Map theme tokens to readable names
const themeColors = {
  rectangle: 'hsl(var(--primary))',
  sphere:     'hsl(var(--accent))',
  cone:       'hsl(var(--warning))',
  cylinder:   'hsl(var(--secondary))',
  torus:      'hsl(var(--destructive))',
};

/* Individual meshes ------------------------------------------------------- */
const RectangleMesh = () => (
  <mesh position={[-3, 0, 0]}>
    <boxGeometry args={[2, 1, 0.5]} />
    <meshStandardMaterial color={themeColors.rectangle} />
  </mesh>
);

const SphereMesh = () => (
  <mesh position={[0, 0, 0]}>
    <sphereGeometry args={[1, 32, 32]} />
    <meshStandardMaterial color={themeColors.sphere} />
  </mesh>
);

const ConeMesh = () => (
  <mesh position={[3, 0, 0]}>
    <coneGeometry args={[1, 2, 32]} />
    <meshStandardMaterial color={themeColors.cone} />
  </mesh>
);

const CylinderMesh = () => (
  <mesh position={[0, 0, -3]}>
    <cylinderGeometry args={[0.8, 0.8, 2, 32]} />
    <meshStandardMaterial color={themeColors.cylinder} />
  </mesh>
);

const TorusMesh = () => (
  <mesh position={[0, 0, 3]}>
    <torusGeometry args={[1, 0.4, 16, 32]} />
    <meshStandardMaterial color={themeColors.torus} />
  </mesh>
);

/* Main collection component ---------------------------------------------- */
const ThreeDElements = () => (
  <div className="w-full h-96 rounded-lg border bg-card/40 p-4 backdrop-blur-md">
    <h3 className="mb-4 text-lg font-semibold">3D Elements Collection</h3>

    <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      {/* meshes */}
      <RectangleMesh />
      <SphereMesh />
      <ConeMesh />
      <CylinderMesh />
      <TorusMesh />

      <OrbitControls enableZoom enablePan enableRotate />
    </Canvas>
  </div>
);

export default ThreeDElements;