import React, { useState, useEffect, HTMLAttributes } from 'react';
import { Palette, PenTool, Type, Layers, GitBranch, Code, Droplet, Wind, Grid, Box, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Placeholder components for each tool
const PlaceholderTool = ({ name }: { name: string }) => (
  <div className="bg-card p-8 rounded-lg border-border border">
    <h2 className="text-2xl font-bold mb-4 text-card-foreground">{name}</h2>
    <p className="text-muted-foreground">Functionality for this tool will be implemented here.</p>
  </div>
);



import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import tinycolor from 'tinycolor2';

import * as icons from 'lucide-react';

const IconSetLibrary = () => {
  const [search, setSearch] = useState('');
  const filteredIcons = Object.keys(icons).filter(name => 
    name.toLowerCase().includes(search.toLowerCase()) && name !== 'createReactComponent'
  );

  return (
    <div className="bg-card p-8 rounded-lg border-border border">
      <h2 className="text-2xl font-bold mb-4 text-card-foreground">Icon Set Library</h2>
      <Input 
        type="text" 
        placeholder="Search for icons..." 
        value={search} 
        onChange={e => setSearch(e.target.value)} 
        className="mb-4"
      />
      <div className="grid grid-cols-12 gap-4">
        {filteredIcons.map(name => {
          const Icon = icons[name];
          return (
            <div key={name} className="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-accent">
              <Icon className="w-8 h-8 text-primary" />
              <div className="text-xs text-center mt-1 text-muted-foreground">{name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const ThreeDModelViewer = () => {
  return (
    <div className="bg-card p-8 rounded-lg border-border border h-[500px]">
      <h2 className="text-2xl font-bold mb-4 text-card-foreground">3D Model Viewer</h2>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {/* Torus */}
        <mesh position={[0, 0, 0]}>
          <torusGeometry args={[1, 0.4, 32, 100]} />
          <meshStandardMaterial color="#3b82f6" />
        </mesh>
        {/* Box */}
        <mesh position={[-3, 0, 0]}>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshStandardMaterial color="#ef4444" />
        </mesh>
        {/* Sphere */}
        <mesh position={[3, 0, 0]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="#10b981" />
        </mesh>
        {/* Cone */}
        <mesh position={[0, 0, -3]}>
          <coneGeometry args={[1, 2, 32]} />
          <meshStandardMaterial color="#f59e0b" />
        </mesh>
        {/* Cylinder */}
        <mesh position={[0, 0, 3]}>
          <cylinderGeometry args={[1, 1, 2, 32]} />
          <meshStandardMaterial color="#6366f1" />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

const CSSGridLayoutGenerator = () => {
  const [columns, setColumns] = useState(3);
  const [rows, setRows] = useState(2);
  const [gap, setGap] = useState(16);

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gap: `${gap}px`,
  };

  const css = `display: grid;\ngrid-template-columns: repeat(${columns}, 1fr);\ngrid-template-rows: repeat(${rows}, 1fr);\ngap: ${gap}px;`;

  return (
    <div className="bg-card p-8 rounded-lg border-border border">
      <h2 className="text-2xl font-bold mb-4 text-card-foreground">CSS Grid Layout Generator</h2>
      <div className="flex gap-4 mb-4 items-center">
        <label>Columns:</label>
        <Input type="number" min="1" max="12" value={columns} onChange={(e) => setColumns(parseInt(e.target.value, 10))} />
        <label>Rows:</label>
        <Input type="number" min="1" max="12" value={rows} onChange={(e) => setRows(parseInt(e.target.value, 10))} />
        <label>Gap (px):</label>
        <Input type="number" min="0" max="50" value={gap} onChange={(e) => setGap(parseInt(e.target.value, 10))} />
      </div>
      <div className="w-full h-64 bg-input rounded-lg p-4" style={gridStyle}>
        {[...Array(columns * rows)].map((_, i) => (
          <div key={i} className="bg-primary rounded-lg flex items-center justify-center text-primary-foreground">{i + 1}</div>
        ))}
      </div>
      <textarea 
        className="w-full h-24 bg-input rounded-md p-2 mt-4" 
        readOnly 
        value={css}
        aria-label="Generated CSS code"
        placeholder="Generated CSS will appear here"
      />
    </div>
  );
}

const TailwindColorShadesGenerator = () => {
  const [baseColor, setBaseColor] = useState('#3b82f6');
  const [shades, setShades] = useState({});

  const generateShades = () => {
    const newShades = {};
    const color = tinycolor(baseColor);
    newShades[50] = color.lighten(35).toHexString();
    newShades[100] = color.lighten(30).toHexString();
    newShades[200] = color.lighten(20).toHexString();
    newShades[300] = color.lighten(10).toHexString();
    newShades[400] = color.lighten(5).toHexString();
    newShades[500] = color.toHexString();
    newShades[600] = color.darken(5).toHexString();
    newShades[700] = color.darken(10).toHexString();
    newShades[800] = color.darken(15).toHexString();
    newShades[900] = color.darken(20).toHexString();
    setShades(newShades);
  };

  React.useEffect(() => {
    generateShades();
  }, [baseColor]);

  return (
    <div className="bg-card p-8 rounded-lg border-border border">
      <h2 className="text-2xl font-bold mb-4 text-card-foreground">Tailwind Color Shades Generator</h2>
      <div className="flex gap-4 mb-4 items-center">
        <Input type="color" value={baseColor} onChange={(e) => setBaseColor(e.target.value)} />
        <Button onClick={generateShades}>Generate Shades</Button>
      </div>
      <div className="grid grid-cols-10 gap-2">
        {Object.entries(shades).map(([name, hex]) => (
          <div key={name}>
            <div className="w-full h-16 rounded-lg" style={{ backgroundColor: hex as string }}></div>
            <div className="text-sm text-center mt-1">{name}</div>
            <div className="text-xs text-center text-muted-foreground">{hex as string}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const GlassmorphismGenerator = () => {
  const [blur, setBlur] = useState(10);
  const [transparency, setTransparency] = useState(0.2);
  const [color, setColor] = useState('#ffffff');

  const rgbaColor = `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, ${transparency})`;
  const style = {
    background: rgbaColor,
    backdropFilter: `blur(${blur}px)`,
    WebkitBackdropFilter: `blur(${blur}px)`,
    border: '1px solid rgba(255, 255, 255, 0.3)',
  };
  const css = `background: ${rgbaColor};\nbackdrop-filter: blur(${blur}px);\n-webkit-backdrop-filter: blur(${blur}px);\nborder: 1px solid rgba(255, 255, 255, 0.3);`;

  return (
    <div className="bg-card p-8 rounded-lg border-border border">
      <h2 className="text-2xl font-bold mb-4 text-card-foreground">Glassmorphism Generator</h2>
      <div className="flex gap-4 mb-4 items-center">
        <label>Blur:</label>
        <Input type="range" min="0" max="50" value={blur} onChange={(e) => setBlur(parseInt(e.target.value, 10))} />
        <label>Transparency:</label>
        <Input type="range" min="0" max="1" step="0.1" value={transparency} onChange={(e) => setTransparency(parseFloat(e.target.value))} />
        <Input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
      </div>
      <div className="w-full h-48 rounded-lg mb-4 flex items-center justify-center" style={style}>
        <div className="p-4 bg-primary rounded-lg">Preview Content</div>
      </div>
      <textarea 
        className="w-full h-24 bg-input rounded-md p-2" 
        readOnly 
        value={css}
        aria-label="Generated CSS code"
        placeholder="Generated CSS will appear here"
      />
    </div>
  );
}



const SVGShapeGenerator = () => {
  const [shape, setShape] = useState('circle');
  const [fill, setFill] = useState('#3b82f6');
  const [stroke, setStroke] = useState('#1e40af');
  const [strokeWidth, setStrokeWidth] = useState(2);

  const svgCode = () => {
    switch (shape) {
      case 'circle':
        return `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" stroke="${stroke}" stroke-width="${strokeWidth}" fill="${fill}" /></svg>`;
      case 'rectangle':
        return `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><rect width="80" height="80" x="10" y="10" stroke="${stroke}" stroke-width="${strokeWidth}" fill="${fill}" /></svg>`;
      case 'polygon':
        return `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><polygon points="50,10 90,90 10,90" stroke="${stroke}" stroke-width="${strokeWidth}" fill="${fill}" /></svg>`;
      default:
        return '';
    }
  };

  return (
    <div className="bg-card p-8 rounded-lg border-border border">
      <h2 className="text-2xl font-bold mb-4 text-card-foreground">SVG Shape Generator</h2>
      <div className="flex gap-4 mb-4 items-center">
        <select 
          value={shape} 
          onChange={(e) => setShape(e.target.value)} 
          className="bg-input p-2 rounded-md"
          aria-label="Select shape type"
        >
          <option value="circle">Circle</option>
          <option value="rectangle">Rectangle</option>
          <option value="polygon">Polygon</option>
        </select>
        <Input type="color" value={fill} onChange={(e) => setFill(e.target.value)} />
        <Input type="color" value={stroke} onChange={(e) => setStroke(e.target.value)} />
        <Input type="number" value={strokeWidth} onChange={(e) => setStrokeWidth(parseInt(e.target.value, 10))} className="w-24" />
      </div>
      <div className="w-full h-48 rounded-lg mb-4 flex items-center justify-center" dangerouslySetInnerHTML={{ __html: svgCode() }}></div>
      <Input type="text" readOnly value={svgCode()} />
    </div>
  );
}

const CSSGradientGenerator = () => {
  const [color1, setColor1] = useState('#ff0000');
  const [color2, setColor2] = useState('#0000ff');
  const [angle, setAngle] = useState(90);

  const gradient = `linear-gradient(${angle}deg, ${color1}, ${color2})`;

  return (
    <div className="bg-card p-8 rounded-lg border-border border">
      <h2 className="text-2xl font-bold mb-4 text-card-foreground">CSS Gradient Generator</h2>
      <div className="flex gap-4 mb-4">
        <Input type="color" value={color1} onChange={(e) => setColor1(e.target.value)} />
        <Input type="color" value={color2} onChange={(e) => setColor2(e.target.value)} />
        <Input type="number" value={angle} onChange={(e) => setAngle(parseInt(e.target.value, 10))} className="w-24" />
      </div>
      <div className="w-full h-48 rounded-lg mb-4" style={{ background: gradient }}></div>
      <Input type="text" readOnly value={gradient} />
    </div>
  );
}

const FontPairingTool = () => {
  const [headingFont, setHeadingFont] = useState('Roboto');
  const [bodyFont, setBodyFont] = useState('Open Sans');

  const googleFonts = ['Roboto', 'Open Sans', 'Lato', 'Montserrat', 'Oswald', 'Raleway', 'Merriweather', 'Nunito', 'Playfair Display'];

  const generatePairing = () => {
    const randomHeading = googleFonts[Math.floor(Math.random() * googleFonts.length)];
    let randomBody = googleFonts[Math.floor(Math.random() * googleFonts.length)];
    while (randomBody === randomHeading) {
      randomBody = googleFonts[Math.floor(Math.random() * googleFonts.length)];
    }
    setHeadingFont(randomHeading);
    setBodyFont(randomBody);
  };

  return (
    <div className="bg-card p-8 rounded-lg border-border border">
      <link href={`https://fonts.googleapis.com/css2?family=${headingFont.replace(' ', '+')}:wght@700&family=${bodyFont.replace(' ', '+')}&display=swap`} rel="stylesheet" />
      <h2 className="text-2xl font-bold mb-4 text-card-foreground">Font Pairing Tool</h2>
      <Button onClick={generatePairing}>Generate Pairing</Button>
      <div className="mt-4">
        <h3 style={{ fontFamily: `'${headingFont}', sans-serif` }} className="text-4xl font-bold">{headingFont}</h3>
        <p style={{ fontFamily: `'${bodyFont}', sans-serif` }} className="text-lg mt-2">{bodyFont} - The quick brown fox jumps over the lazy dog.</p>
      </div>
    </div>
  );
}

const ColorPaletteGenerator = () => {
  const [colors, setColors] = useState<string[]>([]);

  const generatePalette = () => {
    const newColors = Array.from({ length: 5 }, () => 
      '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')
    );
    setColors(newColors);
  };

  return (
    <div className="bg-card p-8 rounded-lg border-border border">
      <h2 className="text-2xl font-bold mb-4 text-card-foreground">Color Palette Generator</h2>
      <Button onClick={generatePalette}>Generate Palette</Button>
      <div className="flex mt-4 gap-4">
        {colors.map((color, index) => (
          <div key={index} className="w-24 h-24 rounded-lg flex items-center justify-center text-white font-bold" style={{ backgroundColor: color }}>
            {color}
          </div>
        ))}
      </div>
    </div>
  );
}

const designTools = [
  { id: 'color-palette-generator', name: 'Color Palette Generator', icon: <Palette className="w-8 h-8 text-primary" />, category: 'Color', component: ColorPaletteGenerator },
  { id: 'font-pairing-tool', name: 'Font Pairing Tool', icon: <Type className="w-8 h-8 text-primary" />, category: 'Typography', component: FontPairingTool },
  { id: 'css-gradient-generator', name: 'CSS Gradient Generator', icon: <Layers className="w-8 h-8 text-primary" />, category: 'CSS', component: CSSGradientGenerator },
  { id: 'svg-shape-generator', name: 'SVG Shape Generator', icon: <GitBranch className="w-8 h-8 text-primary" />, category: 'Graphics', component: SVGShapeGenerator },

  { id: 'glassmorphism-generator', name: 'Glassmorphism Generator', icon: <Droplet className="w-8 h-8 text-primary" />, category: 'CSS', component: GlassmorphismGenerator },
  { id: 'tailwind-color-shades-generator', name: 'Tailwind Color Shades Generator', icon: <Wind className="w-8 h-8 text-primary" />, category: 'Color', component: TailwindColorShadesGenerator },
  { id: 'css-grid-layout-generator', name: 'CSS Grid Layout Generator', icon: <Grid className="w-8 h-8 text-primary" />, category: 'Layout', component: CSSGridLayoutGenerator },
  { id: '3d-model-viewer', name: '3D Model Viewer', icon: <Box className="w-8 h-8 text-primary" />, category: 'Graphics', component: ThreeDModelViewer },
  { id: 'icon-set-library', name: 'Icon Set Library', icon: <PenTool className="w-8 h-8 text-primary" />, category: 'Graphics', component: IconSetLibrary },
];

const DesignTools: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTool, setSelectedTool] = useState<(typeof designTools)[0] | null>(null);

  const categories = [...new Set(designTools.map(tool => tool.category))];

  const filteredTools = designTools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? tool.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  if (selectedTool) {
    const ToolComponent = selectedTool.component;
    return (
      <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
        <Button onClick={() => setSelectedTool(null)} variant="outline" className="mb-8 flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to Tools
        </Button>
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-primary">{selectedTool.name}</h1>
        </header>
        <ToolComponent />
      </div>
    );
  }

  return (
    <div className="p-4 md:p-8 bg-background text-foreground min-h-screen">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-primary">Design Tools</h1>
        <p className="text-muted-foreground mt-2">A collection of tools to streamline your design workflow.</p>
      </header>

      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <Input
          type="text"
          placeholder="Search tools..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <div className="flex flex-wrap gap-2">
          <Button variant={!selectedCategory ? 'default' : 'outline'} onClick={() => setSelectedCategory(null)}>All</Button>
          {categories.map(category => (
            <Button key={category} variant={selectedCategory === category ? 'default' : 'outline'} onClick={() => setSelectedCategory(category)}>{category}</Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTools.map((tool) => (
          <Card key={tool.id} onClick={() => setSelectedTool(tool)} className="bg-card border-border hover:shadow-lg hover:border-primary transition-all duration-300 cursor-pointer">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-semibold text-card-foreground">{tool.name}</CardTitle>
              {tool.icon}
            </CardHeader>
            <CardContent>
              <Badge variant="secondary">{tool.category}</Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DesignTools;