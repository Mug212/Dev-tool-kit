# Developer Toolkit

A comprehensive collection of reusable React components, 3D elements, animations, and developer utilities built with modern web technologies.

![Developer Toolkit Preview](src/assets/hero-image.jpg)

## ✨ Features

- **500+ UI Components** - Production-ready React components with shadcn/ui
- **45+ 3D Elements** - Interactive 3D models and animations with Three.js
- **200+ Code Snippets** - Useful snippets for common development tasks
- **Design Tools** - Color palettes, gradients, and design utilities
- **Animations** - CSS and JavaScript animations ready to implement
- **Developer Utilities** - Tools for debugging, testing, and optimization

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

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
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the toolkit in action.

## 📦 Using Components in Your Project

### Installing in an Existing Project

You can install and use individual components from this toolkit in your existing React projects.

1. **Install the required dependencies:**
   ```bash
   npm install @radix-ui/react-* class-variance-authority clsx lucide-react
   npm install tailwindcss @tailwindcss/typography
   npm install @react-three/fiber @react-three/drei three # For 3D components
   ```

2. **Copy the desired components** from the `src/components` directory to your project.

3. **Set up Tailwind CSS** with the configuration from `tailwind.config.ts`

4. **Copy the design system** from `src/index.css` for consistent styling.

### Component Usage Examples

#### UI Components
```tsx
import { Button } from './components/ui/button'
import { Card } from './components/ui/card'

function MyApp() {
  return (
    <Card>
      <Button variant="primary">Click me</Button>
    </Card>
  )
}
```

#### 3D Elements
```tsx
import { ThreeScene } from './components/ThreeScene'

function MyApp() {
  return (
    <div className="h-screen">
      <ThreeScene />
    </div>
  )
}
```

## 🛠️ Technology Stack

- **Frontend Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI primitives
- **3D Graphics:** Three.js + React Three Fiber
- **Animations:** CSS animations + Framer Motion concepts
- **State Management:** React Query (TanStack Query)
- **Routing:** React Router DOM
- **Design System:** Custom design tokens with semantic color system

## 📁 Project Structure

```
src/
├── components/           # Reusable components
│   ├── ui/              # Base UI components (shadcn/ui)
│   ├── ThreeScene.tsx   # 3D scene components
│   └── ...
├── pages/               # Application pages
│   ├── Index.tsx        # Main dashboard
│   ├── UIComponents.tsx # UI components showcase
│   ├── ThreeDElements.tsx # 3D elements showcase
│   └── ...
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── assets/              # Static assets
└── styles/              # Global styles
```

## 🎨 Design System

The project uses a comprehensive design system with:

- **Semantic Color Tokens** - HSL-based color system supporting light/dark themes
- **Typography Scale** - Consistent font sizes and line heights
- **Spacing System** - Standardized margins and padding
- **Component Variants** - Multiple style variants for each component
- **Animation System** - Smooth transitions and micro-interactions

### Design Tokens Usage

```css
/* Colors use semantic tokens */
.primary-button {
  background: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
}

/* Gradients use design system */
.hero-gradient {
  background: var(--gradient-primary);
}
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📖 Component Documentation

### Core UI Components

- **Button** - Multiple variants (primary, secondary, outline, ghost)
- **Card** - Content containers with consistent styling
- **Dialog** - Modal dialogs and overlays
- **Input** - Form input components
- **Select** - Dropdown selection components
- **Toast** - Notification components

### 3D Components

- **ThreeScene** - Main 3D canvas wrapper
- **ThreeDElements** - Collection of 3D models and animations

### Layout Components

- **Header** - Navigation header with theme toggle
- **Dashboard** - Main dashboard layout
- **ComponentShowcase** - Component demonstration layouts

## 🚀 Deployment

### Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Deployment Options

1. **Lovable Platform** (Recommended)
   - Click "Publish" in the Lovable editor
   - Automatic deployment with custom domain support

2. **Vercel**
   ```bash
   npm install -g vercel
   vercel --prod
   ```

3. **Netlify**
   ```bash
   npm run build
   # Upload dist/ folder to Netlify
   ```

4. **GitHub Pages**
   ```bash
   npm run build
   # Configure GitHub Pages to serve from dist/ folder
   ```

## 📦 Publishing to npm

To publish this toolkit as an npm package:

### 1. Package Preparation

Update `package.json`:
```json
{
  "name": "your-developer-toolkit",
  "version": "1.0.0",
  "description": "A comprehensive React component toolkit",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "files": [
    "dist",
    "README.md"
  ],
  "keywords": ["react", "components", "ui", "3d", "toolkit"],
  "repository": "your-repo-url",
  "license": "MIT"
}
```

### 2. Create Entry Point

Create `src/index.ts`:
```typescript
// Export all components
export * from './components/ui/button'
export * from './components/ui/card'
export * from './components/ThreeScene'
// ... export all components you want to make available

// Export utilities
export * from './lib/utils'
export * from './hooks/useTheme'
```

### 3. Build Configuration

Add build script for npm package:
```json
{
  "scripts": {
    "build:lib": "tsc && vite build --mode library",
    "prepublishOnly": "npm run build:lib"
  }
}
```

### 4. Publishing Steps

```bash
# Login to npm
npm login

# Publish package
npm publish

# Or publish with tag
npm publish --tag beta
```

### 5. Installation Instructions for Users

```bash
npm install your-developer-toolkit
```

```tsx
import { Button, Card } from 'your-developer-toolkit'
import 'your-developer-toolkit/dist/style.css'

function App() {
  return <Button>Hello World</Button>
}
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the base component library
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [Three.js](https://threejs.org/) for 3D graphics
- [Tailwind CSS](https://tailwindcss.com/) for styling system
- [Lucide](https://lucide.dev/) for icons

---

Built with ❤️ using modern web technologies