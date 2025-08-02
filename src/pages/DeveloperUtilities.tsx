import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import ComponentShowcase from '@/components/ComponentShowcase';
import Header from '@/components/Header';

const DeveloperUtilities = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();

  const utilityTools = [
    {
      title: "Color Palette Generator",
      description: "Generate color palettes based on a primary color",
      category: "Design Tools",
      code: `<ColorPaletteGenerator />`,
      preview: <div>Color Palette Generator Preview</div>
    },
    {
      title: "Gradient Generator",
      description: "Create and customize CSS gradients",
      category: "Design Tools",
      code: `<GradientGenerator />`,
      preview: <div>Gradient Generator Preview</div>
    },
    {
      title: "Shadow Generator",
      description: "Generate CSS box-shadow styles",
      category: "Design Tools",
      code: `<ShadowGenerator />`,
      preview: <div>Shadow Generator Preview</div>
    },
    {
      title: "Typography Scale",
      description: "Create a consistent typography scale for your project",
      category: "Design Tools",
      code: `<TypographyScale />`,
      preview: <div>Typography Scale Preview</div>
    },
    {
      title: "SVG to JSX Converter",
      description: "Convert SVG code to JSX for use in React components",
      category: "Data Tools",
      code: `<SvgToJsxConverter />`,
      preview: <div>SVG to JSX Converter Preview</div>
    },
    {
      title: "Aspect Ratio Calculator",
      description: "Calculate aspect ratios for images and videos",
      category: "Design Tools",
      code: `<AspectRatioCalculator />`,
      preview: <div>Aspect Ratio Calculator Preview</div>
    },
    {
      title: "CSS Unit Converter",
      description: "Convert between different CSS units (px, em, rem, etc.)",
      category: "Data Tools",
      code: `<CssUnitConverter />`,
      preview: <div>CSS Unit Converter Preview</div>
    },
    {
      title: "Lorem Ipsum Generator",
      description: "Generate placeholder text",
      category: "Data Tools",
      code: `<LoremIpsumGenerator />`,
      preview: <div>Lorem Ipsum Generator Preview</div>
    },
    {
      title: "URL Encoder/Decoder",
      description: "Encode and decode URLs",
      category: "Encoding",
      code: `<UrlEncoderDecoder />`,
      preview: <div>URL Encoder/Decoder Preview</div>
    },
    {
      title: "Favicon Generator",
      description: "Generate favicons for your website",
      category: "Design Tools",
      code: `<FaviconGenerator />`,
      preview: <div>Favicon Generator Preview</div>
    },
    {
      title: "JSON Formatter",
      description: "Format and validate JSON data",
      category: "Data Tools",
      code: `<JsonFormatter />`,
      preview: <div>JSON Formatter Preview</div>
    },
    {
      title: "Base64 Encoder/Decoder",
      description: "Encode and decode Base64 strings",
      category: "Encoding",
      code: `<Base64Converter />`,
      preview: <div>Base64 Converter Preview</div>
    },
    {
      title: "Color Picker",
      description: "Pick colors and get their values in different formats",
      category: "Design Tools",
      code: `<ColorPicker />`,
      preview: <div>Color Picker Preview</div>
    },
  ];

  const categories = [
    'all',
    ...Array.from(new Set(utilityTools.map(c => c.category)))
  ];

  const filteredTools = utilityTools.filter(tool => {
    const categoryMatch = selectedCategory === 'all' || tool.category === selectedCategory;
    const searchMatch = tool.title.toLowerCase().includes(searchTerm.toLowerCase()) || tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-6 py-8">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Button>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Developer Utilities
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of tools to make your development workflow easier.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder="Search for a utility..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <Filter className="h-5 w-5 text-muted-foreground" />
            {categories.map(category => (
              <Badge 
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className="cursor-pointer whitespace-nowrap"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool, index) => (
            <Card key={index}>
              <ComponentShowcase {...tool} />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeveloperUtilities;