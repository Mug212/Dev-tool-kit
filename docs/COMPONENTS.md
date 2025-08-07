# Component Documentation

This guide provides detailed documentation for all components available in the Developer Toolkit.

## 🧩 UI Components

### Button

A versatile button component with multiple variants and sizes.

#### Usage

```tsx
import { Button } from './components/ui/button'

// Basic usage
<Button>Click me</Button>

// With variants
<Button variant="destructive">Delete</Button>
<Button variant="outline">Cancel</Button>
<Button variant="ghost">Subtle</Button>

// With sizes
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>

// With icons
<Button>
  <Plus className="w-4 h-4 mr-2" />
  Add Item
</Button>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default" \| "destructive" \| "outline" \| "secondary" \| "ghost" \| "link"` | `"default"` | Button style variant |
| `size` | `"default" \| "sm" \| "lg" \| "icon"` | `"default"` | Button size |
| `asChild` | `boolean` | `false` | Renders as child element |

### Card

A flexible content container component.

#### Usage

```tsx
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/ui/card'

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Main content of the card</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

#### Components

- `Card` - Main container
- `CardHeader` - Header section
- `CardTitle` - Title element
- `CardDescription` - Description text
- `CardContent` - Main content area
- `CardFooter` - Footer section

### Dialog

Modal dialog component for overlays and forms.

#### Usage

```tsx
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './components/ui/dialog'

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>
        Dialog description text
      </DialogDescription>
    </DialogHeader>
    <div>Dialog content goes here</div>
  </DialogContent>
</Dialog>
```

### Input

Form input component with consistent styling.

#### Usage

```tsx
import { Input } from './components/ui/input'
import { Label } from './components/ui/label'

<div>
  <Label htmlFor="email">Email</Label>
  <Input 
    id="email" 
    type="email" 
    placeholder="Enter your email" 
  />
</div>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `string` | `"text"` | Input type |
| `placeholder` | `string` | - | Placeholder text |
| `disabled` | `boolean` | `false` | Disabled state |

### Select

Dropdown selection component.

#### Usage

```tsx
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select'

<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select an option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
    <SelectItem value="option3">Option 3</SelectItem>
  </SelectContent>
</Select>
```

### Checkbox

Checkbox input component.

#### Usage

```tsx
import { Checkbox } from './components/ui/checkbox'
import { Label } from './components/ui/label'

<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>
```

### Radio Group

Radio button group component.

#### Usage

```tsx
import { RadioGroup, RadioGroupItem } from './components/ui/radio-group'
import { Label } from './components/ui/label'

<RadioGroup defaultValue="option1">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option1" id="option1" />
    <Label htmlFor="option1">Option 1</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option2" id="option2" />
    <Label htmlFor="option2">Option 2</Label>
  </div>
</RadioGroup>
```

### Toast

Notification component for user feedback.

#### Usage

```tsx
import { useToast } from './hooks/use-toast'
import { Button } from './components/ui/button'

function ToastExample() {
  const { toast } = useToast()

  return (
    <Button
      onClick={() => {
        toast({
          title: "Success!",
          description: "Your action was completed successfully.",
        })
      }}
    >
      Show Toast
    </Button>
  )
}
```

#### Toast Types

```tsx
// Success toast
toast({
  title: "Success",
  description: "Operation completed successfully",
})

// Error toast
toast({
  title: "Error",
  description: "Something went wrong",
  variant: "destructive",
})

// With action
toast({
  title: "Scheduled: Catch up",
  description: "Friday, February 10, 2023 at 5:57 PM",
  action: (
    <ToastAction altText="Goto schedule to undo">
      Undo
    </ToastAction>
  ),
})
```

### Progress

Progress indicator component.

#### Usage

```tsx
import { Progress } from './components/ui/progress'

<Progress value={33} className="w-full" />
```

### Badge

Small status or label component.

#### Usage

```tsx
import { Badge } from './components/ui/badge'

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="outline">Outline</Badge>
```

### Separator

Visual divider component.

#### Usage

```tsx
import { Separator } from './components/ui/separator'

<div>
  <p>Content above</p>
  <Separator className="my-4" />
  <p>Content below</p>
</div>

// Vertical separator
<div className="flex">
  <p>Left content</p>
  <Separator orientation="vertical" className="mx-4" />
  <p>Right content</p>
</div>
```

### Avatar

User avatar component with fallback support.

#### Usage

```tsx
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar'

<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
```

## 🎯 3D Components

### ThreeScene

Main 3D scene wrapper component using React Three Fiber.

#### Usage

```tsx
import { ThreeScene } from './components/ThreeScene'

<div className="h-96">
  <ThreeScene>
    {/* 3D content goes here */}
  </ThreeScene>
</div>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `camera` | `object` | `{ position: [0, 0, 5] }` | Camera configuration |
| `controls` | `boolean` | `true` | Enable orbit controls |
| `shadows` | `boolean` | `true` | Enable shadows |

### ThreeDElements

Collection of interactive 3D models and animations.

#### Usage

```tsx
import { ThreeDElements } from './components/ThreeDElements'

<ThreeDElements 
  elementType="cube"
  animation="rotate"
  color="#ff6b6b"
/>
```

#### Available Elements

- `cube` - Animated cube
- `sphere` - Rotating sphere  
- `torus` - Animated torus
- `plane` - Interactive plane

## 🎨 Layout Components

### Header

Navigation header with theme toggle and mobile menu.

#### Usage

```tsx
import Header from './components/Header'

<Header />
```

#### Features

- Responsive navigation
- Dark/light theme toggle
- Mobile hamburger menu
- Smooth animations

### Dashboard

Main dashboard layout component.

#### Usage

```tsx
import Dashboard from './components/Dashboard'

<Dashboard />
```

#### Features

- Tool category grid
- Filter functionality
- Statistics display
- Responsive design

### ComponentShowcase

Component demonstration layout.

#### Usage

```tsx
import ComponentShowcase from './components/ComponentShowcase'

<ComponentShowcase />
```

## 🔧 Utility Components

### LoadingSpinner

Loading indicator component.

#### Usage

```tsx
import { LoadingSpinner } from './components/ui/loading-spinner'

<LoadingSpinner size="lg" />
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Spinner size |

### BackToTop

Scroll-to-top button component.

#### Usage

```tsx
import { BackToTop } from './components/BackToTop'

// Place at the end of your layout
<BackToTop />
```

#### Features

- Auto-hide/show based on scroll position
- Smooth scroll animation
- Accessible keyboard navigation

### ErrorBoundary

Error boundary wrapper for handling React errors.

#### Usage

```tsx
import ErrorBoundary from './components/ErrorBoundary'

<ErrorBoundary>
  <YourComponent />
</ErrorBoundary>
```

#### Features

- Catches JavaScript errors
- Displays fallback UI
- Logs errors for debugging

## 🎛️ Form Components

### Form

Form wrapper with validation support.

#### Usage

```tsx
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './components/ui/form'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'

function MyForm() {
  const form = useForm()

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
```

## 🎪 Advanced Components

### Accordion

Collapsible content component.

#### Usage

```tsx
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/ui/accordion'

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. It comes with default styles that matches the other components.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

### Tabs

Tab navigation component.

#### Usage

```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs'

<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    Account settings content
  </TabsContent>
  <TabsContent value="password">
    Password settings content
  </TabsContent>
</Tabs>
```

### Popover

Floating content component.

#### Usage

```tsx
import { Popover, PopoverContent, PopoverTrigger } from './components/ui/popover'

<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open popover</Button>
  </PopoverTrigger>
  <PopoverContent>
    <div className="grid gap-4">
      <div className="space-y-2">
        <h4 className="font-medium leading-none">Dimensions</h4>
        <p className="text-sm text-muted-foreground">
          Set the dimensions for the layer.
        </p>
      </div>
    </div>
  </PopoverContent>
</Popover>
```

## 🎯 Customization Guide

### Extending Components

```tsx
import { Button, buttonVariants } from './components/ui/button'
import { cn } from './lib/utils'

// Create custom variant
const GradientButton = ({ className, ...props }) => {
  return (
    <Button
      className={cn(
        buttonVariants({ variant: "default" }),
        "bg-gradient-to-r from-purple-500 to-pink-500",
        className
      )}
      {...props}
    />
  )
}
```

### Theme Customization

```css
/* Override CSS variables */
:root {
  --primary: 270 95% 75%;
  --primary-foreground: 0 0% 100%;
  --destructive: 0 84% 60%;
}
```

### Animation Customization

```css
/* Add custom animations */
@keyframes slide-up {
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
}

.animate-slide-up {
  animation: slide-up 0.3s ease-out;
}
```

For more detailed customization options, see the [Installation Guide](INSTALLATION.md).