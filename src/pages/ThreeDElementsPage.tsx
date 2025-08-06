import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ThreeDElements from '@/components/ThreeDElements';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

// Animated Components
function RotatingCube() {
  const meshRef = useRef<any>();
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta;
      meshRef.current.rotation.y += delta * 0.5;
    }
  });
  
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#FF5722" />
    </mesh>
  );
}

function BouncingSphere() {
  const meshRef = useRef<any>();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.5;
    }
  });
  
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial color="#3F51B5" />
    </mesh>
  );
}

function PulsingTorus() {
  const meshRef = useRef<any>();
  
  useFrame((state) => {
    if (meshRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.2;
      meshRef.current.scale.setScalar(scale);
    }
  });
  
  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[1, 0.3, 16, 100]} />
      <meshStandardMaterial color="#E91E63" />
    </mesh>
  );
}

function FloatingRings() {
  const group = useRef<any>();
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });
  
  return (
    <group ref={group}>
      <mesh position={[0, 1, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1, 0.1, 8, 50]} />
        <meshStandardMaterial color="#FF6B6B" />
      </mesh>
      <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <torusGeometry args={[1.5, 0.1, 8, 50]} />
        <meshStandardMaterial color="#4ECDC4" />
      </mesh>
      <mesh position={[0, -1, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1, 0.1, 8, 50]} />
        <meshStandardMaterial color="#45B7D1" />
      </mesh>
    </group>
  );
}

const codeSnippets = {
  // Basic Shapes
  rectangle: `import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Rectangle() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <boxGeometry args={[2, 1, 0.5]} />
        <meshStandardMaterial color="#4CAF50" />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
}`,

  sphere: `import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Sphere() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#2196F3" />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
}`,

  cone: `import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Cone() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <coneGeometry args={[1, 2, 32]} />
        <meshStandardMaterial color="#FF9800" />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
}`,

  cylinder: `import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Cylinder() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <cylinderGeometry args={[1, 1, 2, 32]} />
        <meshStandardMaterial color="#9C27B0" />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
}`,

  torus: `import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Torus() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <torusGeometry args={[1, 0.4, 16, 100]} />
        <meshStandardMaterial color="#E91E63" />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
}`,

  plane: `import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Plane() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2, 2]} />
        <meshStandardMaterial color="#607D8B" />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
}`,

  octahedron: `import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Octahedron() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#00BCD4" />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
}`,

  dodecahedron: `import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Dodecahedron() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <dodecahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#795548" />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
}`,

  icosahedron: `import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Icosahedron() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#FFC107" />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
}`,

  tetrahedron: `import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Tetrahedron() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <tetrahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#673AB7" />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
}`,

  torusKnot: `import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function TorusKnot() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <torusKnotGeometry args={[1, 0.3, 100, 16]} />
        <meshStandardMaterial color="#8BC34A" />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
}`,

  wireframeSphere: `import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function WireframeSphere() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial color="#00E676" wireframe />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
}`,

  glowingCube: `import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function GlowingCube() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial 
          color="#00E5FF" 
          emissive="#0066CC" 
          emissiveIntensity={0.2} 
        />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
}`,

  rotatingCube: `import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';

function RotatingCube() {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta;
    meshRef.current.rotation.y += delta * 0.5;
  });
  
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#FF5722" />
    </mesh>
  );
}

function Scene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <RotatingCube />
      <OrbitControls />
    </Canvas>
  );
}`,

  bouncingSphere: `import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';

function BouncingSphere() {
  const meshRef = useRef();
  
  useFrame((state) => {
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.5;
  });
  
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial color="#3F51B5" />
    </mesh>
  );
}

function Scene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <BouncingSphere />
      <OrbitControls />
    </Canvas>
  );
}`,

  pulsingTorus: `import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';

function PulsingTorus() {
  const meshRef = useRef();
  
  useFrame((state) => {
    const scale = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.2;
    meshRef.current.scale.setScalar(scale);
  });
  
  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[1, 0.3, 16, 100]} />
      <meshStandardMaterial color="#E91E63" />
    </mesh>
  );
}

function Scene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <PulsingTorus />
      <OrbitControls />
    </Canvas>
  );
}`,

  multipleShapes: `import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function MultipleShapes() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      <mesh position={[-2, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#FF4444" />
      </mesh>
      
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial color="#44FF44" />
      </mesh>
      
      <mesh position={[2, 0, 0]}>
        <coneGeometry args={[0.8, 1.5, 32]} />
        <meshStandardMaterial color="#4444FF" />
      </mesh>
      
      <OrbitControls />
    </Canvas>
  );
}`,

  floatingRings: `import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';

function FloatingRings() {
  const group = useRef();
  
  useFrame((state) => {
    group.current.rotation.y = state.clock.elapsedTime * 0.5;
  });
  
  return (
    <group ref={group}>
      <mesh position={[0, 1, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1, 0.1, 8, 50]} />
        <meshStandardMaterial color="#FF6B6B" />
      </mesh>
      <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <torusGeometry args={[1.5, 0.1, 8, 50]} />
        <meshStandardMaterial color="#4ECDC4" />
      </mesh>
      <mesh position={[0, -1, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1, 0.1, 8, 50]} />
        <meshStandardMaterial color="#45B7D1" />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <FloatingRings />
      <OrbitControls />
    </Canvas>
  );
}`
};

// 3D Element data
const threeDElements = [
  // Basic Shapes
  { name: 'Rectangle', key: 'rectangle', category: 'Basic Shapes', description: 'A simple rectangular box geometry' },
  { name: 'Sphere', key: 'sphere', category: 'Basic Shapes', description: 'A perfect sphere with configurable detail' },
  { name: 'Cone', key: 'cone', category: 'Basic Shapes', description: 'A cone with customizable radius and height' },
  { name: 'Cylinder', key: 'cylinder', category: 'Basic Shapes', description: 'A cylinder with adjustable dimensions' },
  { name: 'Torus', key: 'torus', category: 'Basic Shapes', description: 'A donut-shaped torus geometry' },
  { name: 'Plane', key: 'plane', category: 'Basic Shapes', description: 'A flat plane surface' },
  
  // Complex Shapes
  { name: 'Octahedron', key: 'octahedron', category: 'Polyhedrons', description: 'An eight-faced polyhedron' },
  { name: 'Dodecahedron', key: 'dodecahedron', category: 'Polyhedrons', description: 'A twelve-faced polyhedron' },
  { name: 'Icosahedron', key: 'icosahedron', category: 'Polyhedrons', description: 'A twenty-faced polyhedron' },
  { name: 'Tetrahedron', key: 'tetrahedron', category: 'Polyhedrons', description: 'A four-faced triangular pyramid' },
  { name: 'Torus Knot', key: 'torusKnot', category: 'Complex Shapes', description: 'A mathematical torus knot' },
  
  // Special Effects
  { name: 'Wireframe Sphere', key: 'wireframeSphere', category: 'Special Effects', description: 'A sphere with wireframe material' },
  { name: 'Glowing Cube', key: 'glowingCube', category: 'Special Effects', description: 'A cube with emissive glow effect' },
  
  // Animated Elements
  { name: 'Rotating Cube', key: 'rotatingCube', category: 'Animated', description: 'A cube with continuous rotation' },
  { name: 'Bouncing Sphere', key: 'bouncingSphere', category: 'Animated', description: 'A sphere with bouncing animation' },
  { name: 'Pulsing Torus', key: 'pulsingTorus', category: 'Animated', description: 'A torus with pulsing scale animation' },
  
  // Groups
  { name: 'Multiple Shapes', key: 'multipleShapes', category: 'Groups', description: 'Multiple shapes arranged together' },
  { name: 'Floating Rings', key: 'floatingRings', category: 'Groups', description: 'Three rotating rings in formation' },
];

const categories = ['All', 'Basic Shapes', 'Polyhedrons', 'Complex Shapes', 'Special Effects', 'Animated', 'Groups'];

const ThreeDElementsPage = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const handleCopy = (code: string, elementName: string) => {
    navigator.clipboard.writeText(code).then(() => {
      toast({
        title: "Code copied!",
        description: `${elementName} code copied to clipboard`,
      });
    });
  };

  const filteredElements = threeDElements.filter(element => {
    const matchesCategory = selectedCategory === 'All' || element.category === selectedCategory;
    const matchesSearch = element.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         element.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const render3DElement = (elementKey: string) => {
    const commonProps = {
      camera: { position: [3, 3, 3] as [number, number, number], fov: 45 },
      style: { background: 'linear-gradient(135deg, rgba(0,0,0,0.1), rgba(255,255,255,0.05))' },
      gl: { antialias: true, alpha: true }
    };

    switch (elementKey) {
      case 'rectangle':
        return (
          <Canvas {...commonProps}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={0.8} />
            <pointLight position={[-5, -5, -5]} intensity={0.3} />
            <mesh>
              <boxGeometry args={[1.5, 0.8, 0.4]} />
              <meshStandardMaterial 
                color="hsl(var(--primary))" 
                metalness={0.3} 
                roughness={0.4} 
              />
            </mesh>
            <OrbitControls 
              enableZoom={true} 
              enablePan={false} 
              autoRotate 
              autoRotateSpeed={1}
              maxDistance={8}
              minDistance={2}
            />
          </Canvas>
        );
      case 'sphere':
        return (
          <Canvas {...commonProps}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={0.8} />
            <pointLight position={[-5, -5, -5]} intensity={0.3} />
            <mesh>
              <sphereGeometry args={[0.8, 32, 32]} />
              <meshStandardMaterial 
                color="hsl(var(--accent))" 
                metalness={0.2} 
                roughness={0.3} 
              />
            </mesh>
            <OrbitControls 
              enableZoom={true} 
              enablePan={false} 
              autoRotate 
              autoRotateSpeed={1.5}
              maxDistance={8}
              minDistance={2}
            />
          </Canvas>
        );
      case 'cone':
        return (
          <Canvas {...commonProps}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={0.8} />
            <pointLight position={[-5, -5, -5]} intensity={0.3} />
            <mesh>
              <coneGeometry args={[0.8, 1.6, 32]} />
              <meshStandardMaterial 
                color="#FF9800" 
                metalness={0.4} 
                roughness={0.2} 
              />
            </mesh>
            <OrbitControls 
              enableZoom={true} 
              enablePan={false} 
              autoRotate 
              autoRotateSpeed={2}
              maxDistance={8}
              minDistance={2}
            />
          </Canvas>
        );
      case 'cylinder':
        return (
          <Canvas {...commonProps}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={0.8} />
            <pointLight position={[-5, -5, -5]} intensity={0.3} />
            <mesh>
              <cylinderGeometry args={[0.8, 0.8, 1.6, 32]} />
              <meshStandardMaterial 
                color="#9C27B0" 
                metalness={0.3} 
                roughness={0.3} 
              />
            </mesh>
            <OrbitControls 
              enableZoom={true} 
              enablePan={false} 
              autoRotate 
              autoRotateSpeed={1}
              maxDistance={8}
              minDistance={2}
            />
          </Canvas>
        );
      case 'torus':
        return (
          <Canvas {...commonProps}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={0.8} />
            <pointLight position={[-5, -5, -5]} intensity={0.3} />
            <mesh>
              <torusGeometry args={[0.8, 0.3, 16, 100]} />
              <meshStandardMaterial 
                color="#E91E63" 
                metalness={0.2} 
                roughness={0.4} 
              />
            </mesh>
            <OrbitControls 
              enableZoom={true} 
              enablePan={false} 
              autoRotate 
              autoRotateSpeed={1.5}
              maxDistance={8}
              minDistance={2}
            />
          </Canvas>
        );
      case 'plane':
        return (
          <Canvas {...commonProps}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={0.8} />
            <pointLight position={[-5, -5, -5]} intensity={0.3} />
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
              <planeGeometry args={[2, 2]} />
              <meshStandardMaterial 
                color="#607D8B" 
                metalness={0.1} 
                roughness={0.8} 
                side={2}
              />
            </mesh>
            <OrbitControls 
              enableZoom={true} 
              enablePan={false} 
              autoRotate 
              autoRotateSpeed={0.5}
              maxDistance={8}
              minDistance={2}
            />
          </Canvas>
        );
      case 'octahedron':
        return (
          <Canvas {...commonProps}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={0.8} />
            <pointLight position={[-5, -5, -5]} intensity={0.3} />
            <mesh>
              <octahedronGeometry args={[1, 0]} />
              <meshStandardMaterial 
                color="#00BCD4" 
                metalness={0.6} 
                roughness={0.1} 
              />
            </mesh>
            <OrbitControls 
              enableZoom={true} 
              enablePan={false} 
              autoRotate 
              autoRotateSpeed={2}
              maxDistance={8}
              minDistance={2}
            />
          </Canvas>
        );
      case 'dodecahedron':
        return (
          <Canvas {...commonProps}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={0.8} />
            <pointLight position={[-5, -5, -5]} intensity={0.3} />
            <mesh>
              <dodecahedronGeometry args={[0.8, 0]} />
              <meshStandardMaterial 
                color="#795548" 
                metalness={0.4} 
                roughness={0.3} 
              />
            </mesh>
            <OrbitControls 
              enableZoom={true} 
              enablePan={false} 
              autoRotate 
              autoRotateSpeed={1}
              maxDistance={8}
              minDistance={2}
            />
          </Canvas>
        );
      case 'icosahedron':
        return (
          <Canvas {...commonProps}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={0.8} />
            <pointLight position={[-5, -5, -5]} intensity={0.3} />
            <mesh>
              <icosahedronGeometry args={[0.9, 0]} />
              <meshStandardMaterial 
                color="#FFC107" 
                metalness={0.5} 
                roughness={0.2} 
              />
            </mesh>
            <OrbitControls 
              enableZoom={true} 
              enablePan={false} 
              autoRotate 
              autoRotateSpeed={1.5}
              maxDistance={8}
              minDistance={2}
            />
          </Canvas>
        );
      case 'tetrahedron':
        return (
          <Canvas {...commonProps}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={0.8} />
            <pointLight position={[-5, -5, -5]} intensity={0.3} />
            <mesh>
              <tetrahedronGeometry args={[1, 0]} />
              <meshStandardMaterial 
                color="#673AB7" 
                metalness={0.3} 
                roughness={0.4} 
              />
            </mesh>
            <OrbitControls 
              enableZoom={true} 
              enablePan={false} 
              autoRotate 
              autoRotateSpeed={2}
              maxDistance={8}
              minDistance={2}
            />
          </Canvas>
        );
      case 'torusKnot':
        return (
          <Canvas {...commonProps}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={0.8} />
            <pointLight position={[-5, -5, -5]} intensity={0.3} />
            <mesh>
              <torusKnotGeometry args={[0.8, 0.25, 100, 16]} />
              <meshStandardMaterial 
                color="#8BC34A" 
                metalness={0.4} 
                roughness={0.3} 
              />
            </mesh>
            <OrbitControls 
              enableZoom={true} 
              enablePan={false} 
              autoRotate 
              autoRotateSpeed={1}
              maxDistance={8}
              minDistance={2}
            />
          </Canvas>
        );
      case 'wireframeSphere':
        return (
          <Canvas {...commonProps}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={0.8} />
            <pointLight position={[-5, -5, -5]} intensity={0.3} />
            <mesh>
              <sphereGeometry args={[0.9, 16, 16]} />
              <meshStandardMaterial 
                color="#00E676" 
                wireframe 
                metalness={0.1} 
                roughness={0.9} 
              />
            </mesh>
            <OrbitControls 
              enableZoom={true} 
              enablePan={false} 
              autoRotate 
              autoRotateSpeed={1.5}
              maxDistance={8}
              minDistance={2}
            />
          </Canvas>
        );
      case 'glowingCube':
        return (
          <Canvas {...commonProps}>
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 5, 5]} intensity={0.6} />
            <mesh>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial 
                color="#00E5FF" 
                emissive="#0066CC" 
                emissiveIntensity={0.3} 
                metalness={0.2}
                roughness={0.1}
              />
            </mesh>
            <OrbitControls 
              enableZoom={true} 
              enablePan={false} 
              autoRotate 
              autoRotateSpeed={1}
              maxDistance={8}
              minDistance={2}
            />
          </Canvas>
        );
      case 'rotatingCube':
        return (
          <Canvas {...commonProps}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={0.8} />
            <pointLight position={[-5, -5, -5]} intensity={0.3} />
            <RotatingCube />
            <OrbitControls 
              enableZoom={true} 
              enablePan={false} 
              maxDistance={8}
              minDistance={2}
            />
          </Canvas>
        );
      case 'bouncingSphere':
        return (
          <Canvas {...commonProps}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={0.8} />
            <pointLight position={[-5, -5, -5]} intensity={0.3} />
            <BouncingSphere />
            <OrbitControls 
              enableZoom={true} 
              enablePan={false} 
              maxDistance={8}
              minDistance={2}
            />
          </Canvas>
        );
      case 'pulsingTorus':
        return (
          <Canvas {...commonProps}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={0.8} />
            <pointLight position={[-5, -5, -5]} intensity={0.3} />
            <PulsingTorus />
            <OrbitControls 
              enableZoom={true} 
              enablePan={false} 
              maxDistance={8}
              minDistance={2}
            />
          </Canvas>
        );
      case 'multipleShapes':
        return (
          <Canvas {...commonProps}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={0.8} />
            <pointLight position={[-5, -5, -5]} intensity={0.3} />
            <mesh position={[-1.5, 0, 0]}>
              <boxGeometry args={[0.8, 0.8, 0.8]} />
              <meshStandardMaterial color="#FF4444" metalness={0.3} roughness={0.4} />
            </mesh>
            <mesh position={[0, 0, 0]}>
              <sphereGeometry args={[0.6, 32, 32]} />
              <meshStandardMaterial color="#44FF44" metalness={0.2} roughness={0.3} />
            </mesh>
            <mesh position={[1.5, 0, 0]}>
              <coneGeometry args={[0.6, 1.2, 32]} />
              <meshStandardMaterial color="#4444FF" metalness={0.4} roughness={0.2} />
            </mesh>
            <OrbitControls 
              enableZoom={true} 
              enablePan={false} 
              autoRotate 
              autoRotateSpeed={0.5}
              maxDistance={8}
              minDistance={2}
            />
          </Canvas>
        );
      case 'floatingRings':
        return (
          <Canvas {...commonProps}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={0.8} />
            <pointLight position={[-5, -5, -5]} intensity={0.3} />
            <FloatingRings />
            <OrbitControls 
              enableZoom={true} 
              enablePan={false} 
              maxDistance={8}
              minDistance={2}
            />
          </Canvas>
        );
      default:
        return (
          <div className="flex items-center justify-center h-full text-muted-foreground">
            <p>3D Element not found</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero text-foreground">
      <div className="container mx-auto p-6">
        <div className="mb-6">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            3D Elements Showcase
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            A collection of interactive 3D elements built with React Three Fiber
          </p>
          
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search 3D elements..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-card text-card-foreground hover:bg-muted'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          <ThreeDElements />

          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-6">Individual 3D Elements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredElements.map(element => (
                <div key={element.key} className="glass-effect border border-border/40 rounded-lg p-4 hover-lift transition-all duration-300 group">
                  <h3 className="font-semibold mb-2 gradient-text group-hover:text-primary transition-colors">{element.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{element.description}</p>
                  <div className="h-48 mb-4 rounded-lg overflow-hidden bg-gradient-card border border-border/20 shadow-lg">
                    <div className="w-full h-full">{render3DElement(element.key)}</div>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="hero" 
                      size="sm" 
                      className="flex-1 hover-lift"
                      onClick={() => handleCopy(codeSnippets[element.key as keyof typeof codeSnippets], element.name)}
                    >
                      Copy Code
                    </Button>
                    <span className="px-3 py-1 text-xs bg-gradient-accent text-accent-foreground rounded-full font-medium">
                      {element.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {filteredElements.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No 3D elements found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeDElementsPage;