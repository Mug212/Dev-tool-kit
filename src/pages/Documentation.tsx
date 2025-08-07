import { useState } from 'react';
import { 
  Book, 
  Download, 
  Package, 
  Rocket, 
  Settings, 
  Code2, 
  FileText,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const Documentation = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const { toast } = useToast();

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    toast({
      title: "Copied!",
      description: "Code copied to clipboard",
    });
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const installationSteps = [
    {
      title: "Clone Repository",
      code: "git clone <YOUR_GIT_URL>\ncd developer-toolkit",
      description: "Get the complete project source code"
    },
    {
      title: "Install Dependencies",
      code: "npm install\n# or\nyarn install",
      description: "Install all required packages"
    },
    {
      title: "Start Development",
      code: "npm run dev",
      description: "Launch the development server"
    },
    {
      title: "Build for Production",
      code: "npm run build",
      description: "Create optimized production build"
    }
  ];

  const componentExamples = [
    {
      title: "Button Component",
      code: `import { Button } from './components/ui/button'

<Button variant="primary">Primary Button</Button>
<Button variant="outline">Outline Button</Button>
<Button variant="ghost">Ghost Button</Button>`,
      description: "Versatile button component with multiple variants"
    },
    {
      title: "Card Component",
      code: `import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
</Card>`,
      description: "Flexible content container"
    },
    {
      title: "3D Scene",
      code: `import { ThreeScene } from './components/ThreeScene'

<div className="h-96">
  <ThreeScene>
    {/* 3D content */}
  </ThreeScene>
</div>`,
      description: "Interactive 3D scene wrapper"
    }
  ];

  const deploymentMethods = [
    {
      title: "Lovable Platform",
      description: "One-click deployment with custom domain support",
      steps: [
        "Click 'Publish' in Lovable editor",
        "Configure domain settings",
        "Deploy instantly"
      ],
      badge: "Recommended"
    },
    {
      title: "Vercel",
      description: "Deploy to Vercel with automatic CI/CD",
      steps: [
        "Connect GitHub repository",
        "Configure build settings",
        "Deploy with git push"
      ],
      badge: "Popular"
    },
    {
      title: "Netlify",
      description: "Static site deployment with form handling",
      steps: [
        "Build project locally",
        "Drag & drop dist folder",
        "Configure redirects"
      ],
      badge: "Simple"
    }
  ];

  const npmPublishing = {
    preparation: `{
  "name": "your-developer-toolkit",
  "version": "1.0.0",
  "description": "A comprehensive React component toolkit",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "files": ["dist", "README.md"],
  "keywords": ["react", "components", "ui", "3d"],
  "license": "MIT"
}`,
    entryPoint: `// src/index.ts
export { Button } from './components/ui/button'
export { Card } from './components/ui/card'
export { ThreeScene } from './components/ThreeScene'
export { cn } from './lib/utils'`,
    publishing: `npm login
npm run build:lib
npm publish`,
    usage: `npm install your-developer-toolkit

import { Button } from 'your-developer-toolkit'
import 'your-developer-toolkit/dist/style.css'`
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Book className="w-8 h-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Documentation
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete guide to installation, usage, and deployment of the Developer Toolkit
          </p>
        </div>

        <Tabs defaultValue="getting-started" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
            <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
            <TabsTrigger value="components">Components</TabsTrigger>
            <TabsTrigger value="deployment">Deployment</TabsTrigger>
            <TabsTrigger value="npm-package">NPM Package</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          {/* Getting Started Tab */}
          <TabsContent value="getting-started" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  Quick Start
                </CardTitle>
                <CardDescription>
                  Get up and running with the Developer Toolkit in minutes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {installationSteps.map((step, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                          {index + 1}
                        </div>
                        <h3 className="font-semibold">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground ml-8">{step.description}</p>
                      <div className="ml-8 relative">
                        <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                          <code className="text-sm">{step.code}</code>
                        </pre>
                        <Button
                          size="sm"
                          variant="outline"
                          className="absolute top-2 right-2"
                          onClick={() => copyToClipboard(step.code, `step-${index}`)}
                        >
                          {copiedCode === `step-${index}` ? (
                            <Check className="w-4 h-4" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Technology Stack</CardTitle>
                <CardDescription>Modern web technologies powering the toolkit</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    "React 18 + TypeScript",
                    "Vite Build Tool",
                    "Tailwind CSS",
                    "Radix UI Primitives",
                    "Three.js + R3F",
                    "React Query"
                  ].map((tech) => (
                    <div key={tech} className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                      <Code2 className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Components Tab */}
          <TabsContent value="components" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Component Library</CardTitle>
                <CardDescription>
                  Production-ready components with copy-paste functionality
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {componentExamples.map((example, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">{example.title}</h3>
                        <Badge variant="outline">React</Badge>
                      </div>
                      <p className="text-muted-foreground">{example.description}</p>
                      <div className="relative">
                        <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                          <code className="text-sm">{example.code}</code>
                        </pre>
                        <Button
                          size="sm"
                          variant="outline"
                          className="absolute top-2 right-2"
                          onClick={() => copyToClipboard(example.code, `component-${index}`)}
                        >
                          {copiedCode === `component-${index}` ? (
                            <Check className="w-4 h-4" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </Button>
                      </div>
                      {index < componentExamples.length - 1 && (
                        <Separator className="my-4" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Component Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">UI Components (120+)</h4>
                    <p className="text-sm text-muted-foreground">
                      Buttons, cards, forms, navigation, and more
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">3D Elements (45+)</h4>
                    <p className="text-sm text-muted-foreground">
                      Interactive 3D models and animations
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Code Snippets (200+)</h4>
                    <p className="text-sm text-muted-foreground">
                      Reusable code patterns and utilities
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Design Tools (80+)</h4>
                    <p className="text-sm text-muted-foreground">
                      Color palettes, gradients, and design utilities
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Deployment Tab */}
          <TabsContent value="deployment" className="space-y-6">
            <div className="grid gap-6">
              {deploymentMethods.map((method, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Rocket className="w-5 h-5" />
                        {method.title}
                      </CardTitle>
                      {method.badge && (
                        <Badge variant={method.badge === "Recommended" ? "default" : "secondary"}>
                          {method.badge}
                        </Badge>
                      )}
                    </div>
                    <CardDescription>{method.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {method.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs">
                            {stepIndex + 1}
                          </div>
                          <span className="text-sm">{step}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* NPM Package Tab */}
          <TabsContent value="npm-package" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Publishing to NPM
                </CardTitle>
                <CardDescription>
                  Create and publish your own npm package from the toolkit
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">1. Package Configuration</h3>
                    <div className="relative">
                      <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                        <code className="text-sm">{npmPublishing.preparation}</code>
                      </pre>
                      <Button
                        size="sm"
                        variant="outline"
                        className="absolute top-2 right-2"
                        onClick={() => copyToClipboard(npmPublishing.preparation, 'npm-config')}
                      >
                        {copiedCode === 'npm-config' ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">2. Entry Point</h3>
                    <div className="relative">
                      <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                        <code className="text-sm">{npmPublishing.entryPoint}</code>
                      </pre>
                      <Button
                        size="sm"
                        variant="outline"
                        className="absolute top-2 right-2"
                        onClick={() => copyToClipboard(npmPublishing.entryPoint, 'npm-entry')}
                      >
                        {copiedCode === 'npm-entry' ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">3. Publishing</h3>
                    <div className="relative">
                      <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                        <code className="text-sm">{npmPublishing.publishing}</code>
                      </pre>
                      <Button
                        size="sm"
                        variant="outline"
                        className="absolute top-2 right-2"
                        onClick={() => copyToClipboard(npmPublishing.publishing, 'npm-publish')}
                      >
                        {copiedCode === 'npm-publish' ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">4. Usage by Others</h3>
                    <div className="relative">
                      <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                        <code className="text-sm">{npmPublishing.usage}</code>
                      </pre>
                      <Button
                        size="sm"
                        variant="outline"
                        className="absolute top-2 right-2"
                        onClick={() => copyToClipboard(npmPublishing.usage, 'npm-usage')}
                      >
                        {copiedCode === 'npm-usage' ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Resources Tab */}
          <TabsContent value="resources" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Documentation Files
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-between">
                    <span>Installation Guide</span>
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="w-full justify-between">
                    <span>Component Reference</span>
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="w-full justify-between">
                    <span>Contributing Guide</span>
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    Quick Downloads
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-between">
                    <span>Source Code (ZIP)</span>
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="w-full justify-between">
                    <span>Component Library</span>
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="w-full justify-between">
                    <span>Design System</span>
                    <Download className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Community & Support</CardTitle>
                <CardDescription>
                  Get help and connect with other developers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="text-center p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">GitHub Issues</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Report bugs and request features
                    </p>
                    <Button variant="outline" size="sm">
                      Open Issues
                    </Button>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Discussions</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Ask questions and share ideas
                    </p>
                    <Button variant="outline" size="sm">
                      Join Discussion
                    </Button>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Contributing</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Help improve the toolkit
                    </p>
                    <Button variant="outline" size="sm">
                      Contribute
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Documentation;