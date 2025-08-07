# Contributing to Developer Toolkit

Thank you for your interest in contributing! This guide will help you get started with contributing to the Developer Toolkit project.

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- Git
- Basic knowledge of React, TypeScript, and Tailwind CSS

### Development Setup

1. **Fork the repository**
   ```bash
   git fork https://github.com/your-username/developer-toolkit
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/your-username/developer-toolkit.git
   cd developer-toolkit
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## 📝 Contributing Guidelines

### Code Style

- Use TypeScript for all new code
- Follow the existing code style and conventions
- Use semantic naming for components and variables
- Write descriptive commit messages

### Component Guidelines

#### UI Components
- Follow the shadcn/ui pattern for consistency
- Use Radix UI primitives when possible
- Implement proper accessibility features
- Support both light and dark themes

#### 3D Components
- Use React Three Fiber for 3D elements
- Keep performance in mind (use `useMemo` and `useCallback`)
- Provide fallbacks for devices that don't support WebGL

#### Design System
- Use semantic color tokens from `index.css`
- Don't use hardcoded colors (use HSL color functions)
- Follow the spacing and typography scales
- Create component variants instead of custom styles

### File Structure

```
src/
├── components/
│   ├── ui/              # Base UI components
│   │   ├── button.tsx   # Individual component files
│   │   └── ...
│   ├── ThreeScene.tsx   # 3D components
│   └── ...
├── pages/               # Page components
├── hooks/               # Custom hooks
├── lib/                 # Utilities
└── assets/              # Static assets
```

### Naming Conventions

- **Components**: PascalCase (e.g., `ButtonComponent.tsx`)
- **Files**: kebab-case for utilities, PascalCase for components
- **Variables**: camelCase
- **Constants**: UPPER_SNAKE_CASE
- **CSS Classes**: Use Tailwind utilities, semantic tokens

## 🧪 Testing

### Adding Tests

- Write unit tests for utility functions
- Test component rendering and interactions
- Include accessibility tests where appropriate

```bash
# Run tests
npm run test

# Run tests in watch mode
npm run test:watch
```

## 📦 Adding New Components

### UI Component Template

```tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const componentVariants = cva(
  "base-styles-using-semantic-tokens",
  {
    variants: {
      variant: {
        default: "default-variant-styles",
        secondary: "secondary-variant-styles",
      },
      size: {
        default: "default-size-styles",
        lg: "large-size-styles",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ComponentProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof componentVariants> {
  // Additional props here
}

const Component = React.forwardRef<HTMLElement, ComponentProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <element
        className={cn(componentVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Component.displayName = "Component"

export { Component, componentVariants }
```

### 3D Component Template

```tsx
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

interface ThreeDComponentProps {
  // Component props
}

export function ThreeDComponent({ ...props }: ThreeDComponentProps) {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      // Animation logic
    }
  })

  return (
    <mesh ref={meshRef} {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  )
}
```

## 🎨 Design System Contributions

### Adding Colors

Update `src/index.css`:

```css
:root {
  /* New semantic color */
  --your-color: 210 40% 50%;
  --your-color-foreground: 210 40% 98%;
}

.dark {
  --your-color: 210 40% 60%;
  --your-color-foreground: 210 40% 10%;
}
```

Update `tailwind.config.ts`:

```typescript
module.exports = {
  theme: {
    extend: {
      colors: {
        "your-color": "hsl(var(--your-color))",
        "your-color-foreground": "hsl(var(--your-color-foreground))",
      }
    }
  }
}
```

### Adding Animations

Create reusable animations in `src/index.css`:

```css
@keyframes your-animation {
  0% { transform: translateY(0); }
  100% { transform: translateY(-10px); }
}

.animate-your-animation {
  animation: your-animation 1s ease-in-out infinite alternate;
}
```

## 📋 Pull Request Process

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow the coding guidelines
   - Add tests if applicable
   - Update documentation

3. **Test your changes**
   ```bash
   npm run build
   npm run lint
   npm run test
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**
   - Use a descriptive title
   - Explain what you changed and why
   - Include screenshots for UI changes
   - Reference any related issues

### Commit Message Format

Use conventional commits:

- `feat:` new feature
- `fix:` bug fix
- `docs:` documentation changes
- `style:` formatting changes
- `refactor:` code refactoring
- `test:` adding tests
- `chore:` maintenance tasks

Examples:
```
feat: add new button variant for premium actions
fix: resolve theme toggle accessibility issue
docs: update installation instructions
```

## 🐛 Reporting Issues

When reporting issues, please include:

- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Browser and OS information
- Screenshots or videos if applicable

## 💬 Getting Help

- Create an issue for bugs or feature requests
- Start a discussion for questions
- Check existing issues before creating new ones

## 🏆 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes for significant contributions
- Special thanks for first-time contributors

Thank you for contributing to Developer Toolkit! 🎉