import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Palette, 
  Code2, 
  Box, 
  Copy, 
  Sparkles, 
  FileCode, 
  Layers, 
  Zap,
  Brush,
  Database
} from 'lucide-react';
import ToolCard from '@/components/ToolCard';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const navigate = useNavigate();

  const handleToolClick = (toolId: string) => {
    switch (toolId) {
      case 'ui-components':
        navigate('/ui-components');
        break;
      // Add more navigation cases as we create more pages
      default:
        console.log(`Opening ${toolId}`);
    }
  };

  const toolCategories = [
    {
      id: 'ui-components',
      title: 'UI Components',
      description: 'Ready-to-use React components with copy-paste functionality',
      icon: Layers,
      count: 120,
      gradient: 'primary' as const
    },
    {
      id: '3d-elements',
      title: '3D Elements',
      description: 'Interactive 3D models and animations for modern web experiences',
      icon: Box,
      count: 45,
      gradient: 'accent' as const
    },
    {
      id: 'code-snippets',
      title: 'Code Snippets',
      description: 'Useful code snippets for common development tasks',
      icon: FileCode,
      count: 200,
      gradient: 'card' as const
    },
    {
      id: 'design-tools',
      title: 'Design Tools',
      description: 'Color palettes, gradients, and design utilities',
      icon: Palette,
      count: 80,
      gradient: 'primary' as const
    },
    {
      id: 'animations',
      title: 'Animations',
      description: 'CSS and JavaScript animations ready to implement',
      icon: Sparkles,
      count: 60,
      gradient: 'accent' as const
    },
    {
      id: 'utilities',
      title: 'Developer Utilities',
      description: 'Helpful tools for debugging, testing, and optimization',
      icon: Zap,
      count: 35,
      gradient: 'card' as const
    }
  ];

  const categories = [
    { id: 'all', label: 'All Tools', icon: Database },
    { id: 'ui-components', label: 'UI Components', icon: Layers },
    { id: '3d-elements', label: '3D Elements', icon: Box },
    { id: 'design-tools', label: 'Design Tools', icon: Brush },
    { id: 'utilities', label: 'Utilities', icon: Zap }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Developer Toolkit
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Everything you need to build amazing web experiences. Copy-paste components, 3D elements, and developer utilities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg" className="animate-glow">
              <Copy className="w-4 h-4" />
              Start Building
            </Button>
            <Button variant="outline" size="lg">
              View Documentation
            </Button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "ghost"}
                onClick={() => setActiveCategory(category.id)}
                className="gap-2"
              >
                <Icon className="w-4 h-4" />
                {category.label}
              </Button>
            );
          })}
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolCategories
            .filter(tool => activeCategory === 'all' || tool.id === activeCategory)
            .map((tool, index) => (
              <div key={tool.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ToolCard {...tool} onClick={() => handleToolClick(tool.id)} />
              </div>
            ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-6 bg-card/30 rounded-xl border border-border/50 backdrop-blur-sm">
            <div className="text-2xl font-bold text-primary">500+</div>
            <div className="text-sm text-muted-foreground">Components</div>
          </div>
          <div className="text-center p-6 bg-card/30 rounded-xl border border-border/50 backdrop-blur-sm">
            <div className="text-2xl font-bold text-accent">45+</div>
            <div className="text-sm text-muted-foreground">3D Models</div>
          </div>
          <div className="text-center p-6 bg-card/30 rounded-xl border border-border/50 backdrop-blur-sm">
            <div className="text-2xl font-bold text-primary">200+</div>
            <div className="text-sm text-muted-foreground">Code Snippets</div>
          </div>
          <div className="text-center p-6 bg-card/30 rounded-xl border border-border/50 backdrop-blur-sm">
            <div className="text-2xl font-bold text-accent">10k+</div>
            <div className="text-sm text-muted-foreground">Developers</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;