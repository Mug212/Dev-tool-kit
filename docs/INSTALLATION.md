# Installation Guide

This guide covers different ways to install and use the Developer Toolkit in your projects.

## 📦 Method 1: Clone the Complete Project

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm

### Steps

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd developer-toolkit
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🔧 Method 2: Copy Individual Components

### Setting Up Your Project

1. **Initialize a new React + TypeScript project**
   ```bash
   # Using Vite (recommended)
   npm create vite@latest my-project -- --template react-ts
   cd my-project

   # Or using Create React App
   npx create-react-app my-project --template typescript
   cd my-project
   ```

2. **Install required dependencies**
   ```bash
   # Core dependencies
   npm install class-variance-authority clsx tailwind-merge lucide-react

   # Radix UI primitives (install as needed)
   npm install @radix-ui/react-slot @radix-ui/react-button
   npm install @radix-ui/react-dialog @radix-ui/react-popover
   # ... add other Radix components as needed

   # For 3D components
   npm install three @react-three/fiber @react-three/drei
   npm install @types/three

   # For animations and interactions
   npm install @tanstack/react-query react-router-dom

   # Theme support
   npm install next-themes
   ```

3. **Set up Tailwind CSS**
   ```bash
   npm install -D tailwindcss postcss autoprefixer @tailwindcss/typography
   npx tailwindcss init -p
   ```

### Configuration Files

#### `tailwind.config.js`
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
}
```

#### `src/index.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96%;
    --secondary-foreground: 222.2 84% 4.9%;
    --muted: 210 40% 96%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96%;
    --accent-foreground: 222.2 84% 4.9%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 221.2 83.2% 53.3%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 217.2 91.2% 59.8%;
    --primary-foreground: 222.2 84% 4.9%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 224.3 76.3% 94.1%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

#### `src/lib/utils.ts`
```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### Copying Components

1. **Create the components directory structure**
   ```bash
   mkdir -p src/components/ui
   ```

2. **Copy desired components**
   Copy individual component files from the toolkit's `src/components/ui/` directory to your project.

3. **Copy utility files**
   ```bash
   # Copy utility functions
   cp src/lib/utils.ts your-project/src/lib/utils.ts
   
   # Copy hooks if needed
   cp -r src/hooks/ your-project/src/hooks/
   ```

## 🎯 Method 3: Using as npm Package

### Creating the Package

1. **Prepare the package structure**
   ```bash
   # Create build configuration for library
   npm install -D @types/node typescript vite
   ```

2. **Update `package.json`**
   ```json
   {
     "name": "developer-toolkit-ui",
     "version": "1.0.0",
     "type": "module",
     "main": "./dist/index.cjs",
     "module": "./dist/index.js",
     "types": "./dist/index.d.ts",
     "exports": {
       ".": {
         "import": "./dist/index.js",
         "require": "./dist/index.cjs",
         "types": "./dist/index.d.ts"
       },
       "./styles": "./dist/style.css"
     },
     "files": ["dist"],
     "peerDependencies": {
       "react": ">=18.0.0",
       "react-dom": ">=18.0.0"
     }
   }
   ```

3. **Create library entry point**
   ```typescript
   // src/index.ts
   export { Button } from './components/ui/button'
   export { Card, CardContent, CardHeader } from './components/ui/card'
   export { Dialog, DialogContent, DialogTrigger } from './components/ui/dialog'
   // ... export all components

   // Export utilities
   export { cn } from './lib/utils'
   ```

4. **Build and publish**
   ```bash
   npm run build
   npm login
   npm publish
   ```

### Using the Published Package

```bash
npm install developer-toolkit-ui
```

```tsx
import { Button, Card } from 'developer-toolkit-ui'
import 'developer-toolkit-ui/styles'

function App() {
  return (
    <Card>
      <Button>Hello World</Button>
    </Card>
  )
}
```

## 🚀 Method 4: Using with Existing Design Systems

### Integration with Chakra UI

```tsx
import { ChakraProvider } from '@chakra-ui/react'
import { Button as ToolkitButton } from './components/ui/button'

// Create wrapper component
function CustomButton({ children, ...props }) {
  return (
    <ChakraProvider>
      <ToolkitButton {...props}>{children}</ToolkitButton>
    </ChakraProvider>
  )
}
```

### Integration with Material-UI

```tsx
import { ThemeProvider } from '@mui/material/styles'
import { Button as ToolkitButton } from './components/ui/button'

// Adapt the component
function MUIButton({ children, ...props }) {
  return (
    <ThemeProvider theme={yourMUITheme}>
      <ToolkitButton {...props}>{children}</ToolkitButton>
    </ThemeProvider>
  )
}
```

## 🔧 Customization

### Theme Customization

```css
/* Override design tokens */
:root {
  --primary: 270 95% 75%; /* Purple theme */
  --primary-foreground: 0 0% 100%;
  --accent: 270 100% 87%;
}
```

### Component Customization

```tsx
import { Button, buttonVariants } from './components/ui/button'
import { cn } from './lib/utils'

// Create custom variant
const CustomButton = ({ className, ...props }) => {
  return (
    <Button
      className={cn(
        buttonVariants({ variant: "outline" }),
        "hover:bg-purple-100", // Custom styles
        className
      )}
      {...props}
    />
  )
}
```

## ⚡ Performance Optimization

### Tree Shaking

```typescript
// Import only what you need
import { Button } from './components/ui/button'
import { Card } from './components/ui/card'

// Instead of
import * from './components/ui'
```

### Lazy Loading 3D Components

```tsx
import { lazy, Suspense } from 'react'

const ThreeScene = lazy(() => import('./components/ThreeScene'))

function App() {
  return (
    <Suspense fallback={<div>Loading 3D scene...</div>}>
      <ThreeScene />
    </Suspense>
  )
}
```

## 🐛 Troubleshooting

### Common Issues

1. **CSS conflicts**
   ```bash
   # Make sure Tailwind is properly configured
   npm install -D tailwindcss-animate
   ```

2. **TypeScript errors**
   ```bash
   # Install missing type definitions
   npm install -D @types/react @types/react-dom
   ```

3. **Build errors**
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

### Environment Requirements

- Node.js 18 or higher
- Modern browser with ES2020 support
- WebGL support for 3D components

For more help, check the [Contributing Guide](CONTRIBUTING.md) or create an issue.