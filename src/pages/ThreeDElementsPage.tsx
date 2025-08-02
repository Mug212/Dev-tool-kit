import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ThreeDElements from '@/components/ThreeDElements';
import { Button } from '@/components/ui/button';

const codeSnippets = {
  rectangle: `<mesh>\n  <boxGeometry args={[2,1,0.5]} />\n  <meshStandardMaterial color="#4CAF50" />\n</mesh>`,
  sphere: `<mesh>\n  <sphereGeometry args={[1,32,32]} />\n  <meshStandardMaterial color="#2196F3" />\n</mesh>`,
  cone: `<mesh>\n  <coneGeometry args={[1,2,32]} />\n  <meshStandardMaterial color="#FF9800" />\n</mesh>`
};

const handleCopy = (code: string) => {
  navigator.clipboard.writeText(code).then(() => {
    // You can add a toast notification here to inform the user that the code has been copied.
    console.log('Code copied to clipboard');
  });
};

const ThreeDElementsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">3D Elements Showcase</h1>
          <p className="text-muted-foreground">
            A collection of interactive 3D elements built with React Three Fiber
          </p>
        </div>

        <div className="grid gap-6">
          <ThreeDElements />

          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Individual 3D Elements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

              <div className="bg-card/20 border border-border/40 rounded-lg p-4">
                <h3 className="font-medium mb-2">Rectangle</h3>
                <div className="h-48 mb-2">
                  <Canvas camera={{ position: [2, 2, 2], fov: 50 }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <mesh>
                      <boxGeometry args={[2, 1, 0.5]} />
                      <meshStandardMaterial color="#4CAF50" />
                    </mesh>
                    <OrbitControls />
                  </Canvas>
                </div>
                <Button variant="outline" size="sm" className="w-full" onClick={() => handleCopy(codeSnippets.rectangle)}>
                  Copy Code
                </Button>
              </div>

              <div className="bg-card/20 border border-border/40 rounded-lg p-4">
                <h3 className="font-medium mb-2">Sphere</h3>
                <div className="h-48 mb-2">
                  <Canvas camera={{ position: [2, 2, 2], fov: 50 }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <mesh>
                      <sphereGeometry args={[1, 32, 32]} />
                      <meshStandardMaterial color="#2196F3" />
                    </mesh>
                    <OrbitControls />
                  </Canvas>
                </div>
                <Button variant="outline" size="sm" className="w-full" onClick={() => handleCopy(codeSnippets.sphere)}>
                  Copy Code
                </Button>
              </div>

              <div className="bg-card/20 border border-border/40 rounded-lg p-4">
                <h3 className="font-medium mb-2">Cone</h3>
                <div className="h-48 mb-2">
                  <Canvas camera={{ position: [2, 2, 2], fov: 50 }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <mesh>
                      <coneGeometry args={[1, 2, 32]} />
                      <meshStandardMaterial color="#FF9800" />
                    </mesh>
                    <OrbitControls />
                  </Canvas>
                </div>
                <Button variant="outline" size="sm" className="w-full" onClick={() => handleCopy(codeSnippets.cone)}>
                  Copy Code
                </Button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeDElementsPage;
