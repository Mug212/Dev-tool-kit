import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import ComponentShowcase from '@/components/ComponentShowcase';
import Header from '@/components/Header';
import ThreeScene from '@/components/ThreeScene';

const UIComponents = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();

  const sampleComponents = [
    {
      title: "Gradient Button",
      description: "Modern button with gradient background and hover effects",
      category: "Buttons",
      code: `<Button variant="hero" className="bg-gradient-primary hover:shadow-primary">
  Get Started
</Button>`,
      preview: <Button variant="hero">Get Started</Button>
    },
    {
      title: "Glassmorphism Card",
      description: "Transparent card with backdrop blur effect",
      category: "Cards",
      code: `<Card className="bg-card/50 backdrop-blur-sm border-border/50">
  <CardContent className="p-6">
    <h3 className="text-lg font-semibold mb-2">Card Title</h3>
    <p className="text-muted-foreground">Card content goes here</p>
  </CardContent>
</Card>`,
      preview: (
        <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-4">
          <h3 className="text-lg font-semibold mb-2">Card Title</h3>
          <p className="text-muted-foreground">Card content goes here</p>
        </Card>
      )
    },
    {
      title: "3D Scene Component",
      description: "Interactive 3D scene with rotating objects",
      category: "3D Elements",
      code: `import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';

function Scene() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box>
        <meshStandardMaterial color="#8B5CF6" />
      </Box>
      <OrbitControls />
    </Canvas>
  );
}`,
      preview: <ThreeScene />
    },
    {
      title: "Status Badge",
      description: "Colorful status indicators with various states",
      category: "Badges",
      code: `<Badge variant="default" className="bg-accent text-accent-foreground">
  Active
</Badge>`,
      preview: (
        <div className="flex gap-2">
          <Badge variant="default" className="bg-accent text-accent-foreground">Active</Badge>
          <Badge variant="secondary">Pending</Badge>
          <Badge variant="destructive">Error</Badge>
        </div>
      )
    }
  ];

  const categories = ['all', 'Buttons', 'Cards', '3D Elements', 'Badges', 'Forms', 'Navigation'];

  const filteredComponents = sampleComponents.filter(component => {
    const matchesSearch = component.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         component.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || component.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="icon" onClick={() => navigate('/')}>
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold">UI Components</h1>
            <p className="text-muted-foreground">Copy-paste React components with modern styling</p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search components..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-muted/50"
            />
          </div>
          
          <div className="flex gap-2 flex-wrap">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "ghost"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category === 'all' ? 'All' : category}
              </Button>
            ))}
          </div>
        </div>

        {/* Components Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredComponents.map((component, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ComponentShowcase {...component} />
            </div>
          ))}
        </div>

        {filteredComponents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No components found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UIComponents;