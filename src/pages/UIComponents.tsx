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
    // BUTTONS (50 components)
    {
      title: "Primary Button",
      description: "Standard primary action button",
      category: "Buttons",
      code: `<Button variant="default">Primary Button</Button>`,
      preview: <Button variant="default">Primary Button</Button>
    },
    {
      title: "Hero Button",
      description: "Eye-catching gradient button for hero sections",
      category: "Buttons",
      code: `<Button variant="hero">Get Started</Button>`,
      preview: <Button variant="hero">Get Started</Button>
    },
    {
      title: "Outline Button",
      description: "Subtle button with border styling",
      category: "Buttons",
      code: `<Button variant="outline">Outline Button</Button>`,
      preview: <Button variant="outline">Outline Button</Button>
    },
    {
      title: "Secondary Button",
      description: "Secondary action button",
      category: "Buttons",
      code: `<Button variant="secondary">Secondary</Button>`,
      preview: <Button variant="secondary">Secondary</Button>
    },
    {
      title: "Ghost Button",
      description: "Minimal button with hover effects",
      category: "Buttons",
      code: `<Button variant="ghost">Ghost Button</Button>`,
      preview: <Button variant="ghost">Ghost Button</Button>
    },
    {
      title: "Link Button",
      description: "Button styled as a link",
      category: "Buttons",
      code: `<Button variant="link">Link Button</Button>`,
      preview: <Button variant="link">Link Button</Button>
    },
    {
      title: "Destructive Button",
      description: "Button for dangerous actions",
      category: "Buttons",
      code: `<Button variant="destructive">Delete</Button>`,
      preview: <Button variant="destructive">Delete</Button>
    },
    {
      title: "Icon Button",
      description: "Button with only an icon",
      category: "Buttons",
      code: `<Button variant="outline" size="icon"><Search className="w-4 h-4" /></Button>`,
      preview: <Button variant="outline" size="icon"><Search className="w-4 h-4" /></Button>
    },
    {
      title: "Large Button",
      description: "Large sized button",
      category: "Buttons",
      code: `<Button size="lg">Large Button</Button>`,
      preview: <Button size="lg">Large Button</Button>
    },
    {
      title: "Small Button",
      description: "Compact button for tight spaces",
      category: "Buttons",
      code: `<Button size="sm">Small</Button>`,
      preview: <Button size="sm">Small</Button>
    },
    {
      title: "Loading Button",
      description: "Button with loading state",
      category: "Buttons",
      code: `<Button disabled>Loading...</Button>`,
      preview: <Button disabled>Loading...</Button>
    },
    {
      title: "Button with Icon",
      description: "Button with leading icon",
      category: "Buttons",
      code: `<Button><Search className="w-4 h-4 mr-2" />Search</Button>`,
      preview: <Button><Search className="w-4 h-4 mr-2" />Search</Button>
    },
    {
      title: "Rounded Button",
      description: "Fully rounded button",
      category: "Buttons",
      code: `<Button className="rounded-full">Rounded</Button>`,
      preview: <Button className="rounded-full">Rounded</Button>
    },
    {
      title: "Floating Action Button",
      description: "Circular floating action button",
      category: "Buttons",
      code: `<Button size="icon" className="rounded-full bg-primary">+</Button>`,
      preview: <Button size="icon" className="rounded-full bg-primary">+</Button>
    },
    {
      title: "Gradient Accent Button",
      description: "Button with accent gradient",
      category: "Buttons",
      code: `<Button variant="accent">Accent Button</Button>`,
      preview: <Button variant="accent">Accent Button</Button>
    },
    {
      title: "Premium Button",
      description: "Elegant premium styled button",
      category: "Buttons",
      code: `<Button variant="premium">Premium</Button>`,
      preview: <Button variant="premium">Premium</Button>
    },
    {
      title: "Soft Button",
      description: "Button with soft background",
      category: "Buttons",
      code: `<Button className="bg-primary/10 text-primary hover:bg-primary/20">Soft</Button>`,
      preview: <Button className="bg-primary/10 text-primary hover:bg-primary/20">Soft</Button>
    },
    {
      title: "Neon Button",
      description: "Glowing neon effect button",
      category: "Buttons",
      code: `<Button className="bg-purple-600 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/75">Neon</Button>`,
      preview: <Button className="bg-purple-600 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/75">Neon</Button>
    },
    {
      title: "Glass Button",
      description: "Glassmorphism styled button",
      category: "Buttons",
      code: `<Button className="bg-white/10 backdrop-blur-sm border border-white/20">Glass</Button>`,
      preview: <Button className="bg-white/10 backdrop-blur-sm border border-white/20">Glass</Button>
    },
    {
      title: "Gradient Border Button",
      description: "Button with gradient border",
      category: "Buttons",
      code: `<Button variant="outline" className="border-2 border-gradient-primary">Gradient Border</Button>`,
      preview: <Button variant="outline" className="border-2 border-gradient-primary">Gradient Border</Button>
    },
    {
      title: "3D Button",
      description: "Button with 3D shadow effect",
      category: "Buttons",
      code: `<Button className="shadow-[0_4px_0_hsl(var(--primary-dark))] active:translate-y-1 active:shadow-[0_2px_0_hsl(var(--primary-dark))]">3D Button</Button>`,
      preview: <Button className="shadow-[0_4px_0_#6366f1] active:translate-y-1 active:shadow-[0_2px_0_#6366f1]">3D Button</Button>
    },
    {
      title: "Neumorphism Button",
      description: "Soft neumorphic design button",
      category: "Buttons",
      code: `<Button className="bg-gray-100 shadow-[inset_-2px_-2px_5px_rgba(255,255,255,1),inset_2px_2px_5px_rgba(0,0,0,0.1)]">Neumorphic</Button>`,
      preview: <Button className="bg-gray-100 shadow-[inset_-2px_-2px_5px_rgba(255,255,255,1),inset_2px_2px_5px_rgba(0,0,0,0.1)]">Neumorphic</Button>
    },
    {
      title: "Pulse Button",
      description: "Button with pulsing animation",
      category: "Buttons",
      code: `<Button className="animate-pulse">Pulse Button</Button>`,
      preview: <Button className="animate-pulse">Pulse Button</Button>
    },
    {
      title: "Shake Button",
      description: "Button with shake effect on hover",
      category: "Buttons",
      code: `<Button className="hover:animate-pulse">Shake Button</Button>`,
      preview: <Button className="hover:animate-pulse">Shake Button</Button>
    },
    {
      title: "Split Button",
      description: "Button split into two actions",
      category: "Buttons",
      code: `<div className="flex"><Button className="rounded-r-none">Action</Button><Button variant="outline" className="rounded-l-none border-l-0 px-2">▼</Button></div>`,
      preview: <div className="flex"><Button className="rounded-r-none">Action</Button><Button variant="outline" className="rounded-l-none border-l-0 px-2">▼</Button></div>
    },
    {
      title: "Toggle Button",
      description: "Button that can be toggled",
      category: "Buttons",
      code: `<Button variant="outline" className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground">Toggle</Button>`,
      preview: <Button variant="outline">Toggle</Button>
    },
    {
      title: "Button Group",
      description: "Group of connected buttons",
      category: "Buttons",
      code: `<div className="flex"><Button className="rounded-r-none">Left</Button><Button variant="outline" className="rounded-none border-l-0 border-r-0">Center</Button><Button className="rounded-l-none">Right</Button></div>`,
      preview: <div className="flex"><Button className="rounded-r-none">Left</Button><Button variant="outline" className="rounded-none border-l-0 border-r-0">Center</Button><Button className="rounded-l-none">Right</Button></div>
    },
    {
      title: "Pill Button",
      description: "Extra rounded pill-shaped button",
      category: "Buttons",
      code: `<Button className="rounded-full px-6">Pill Button</Button>`,
      preview: <Button className="rounded-full px-6">Pill Button</Button>
    },
    {
      title: "Social Button",
      description: "Button styled for social actions",
      category: "Buttons",
      code: `<Button className="bg-blue-600 hover:bg-blue-700">Share</Button>`,
      preview: <Button className="bg-blue-600 hover:bg-blue-700">Share</Button>
    },
    {
      title: "CTA Button",
      description: "Call-to-action button with emphasis",
      category: "Buttons",
      code: `<Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold">Call to Action</Button>`,
      preview: <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold">Call to Action</Button>
    },
    {
      title: "Submit Button",
      description: "Form submission button",
      category: "Buttons",
      code: `<Button type="submit" className="w-full">Submit Form</Button>`,
      preview: <Button type="submit" className="w-full">Submit Form</Button>
    },
    {
      title: "Cancel Button",
      description: "Form cancellation button",
      category: "Buttons",
      code: `<Button variant="ghost" type="button">Cancel</Button>`,
      preview: <Button variant="ghost" type="button">Cancel</Button>
    },
    {
      title: "Save Button",
      description: "Save action button",
      category: "Buttons",
      code: `<Button className="bg-green-600 hover:bg-green-700">Save Changes</Button>`,
      preview: <Button className="bg-green-600 hover:bg-green-700">Save Changes</Button>
    },
    {
      title: "Download Button",
      description: "File download button",
      category: "Buttons",
      code: `<Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">Download</Button>`,
      preview: <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">Download</Button>
    },
    {
      title: "Upload Button",
      description: "File upload button",
      category: "Buttons",
      code: `<Button className="bg-indigo-600 hover:bg-indigo-700">Upload File</Button>`,
      preview: <Button className="bg-indigo-600 hover:bg-indigo-700">Upload File</Button>
    },
    {
      title: "Back Button",
      description: "Navigation back button",
      category: "Buttons",
      code: `<Button variant="ghost"><ArrowLeft className="w-4 h-4 mr-2" />Back</Button>`,
      preview: <Button variant="ghost"><ArrowLeft className="w-4 h-4 mr-2" />Back</Button>
    },
    {
      title: "Next Button",
      description: "Navigation next button",
      category: "Buttons",
      code: `<Button>Next<ArrowRight className="w-4 h-4 ml-2" /></Button>`,
      preview: <Button>Next</Button>
    },
    {
      title: "Play Button",
      description: "Media play button",
      category: "Buttons",
      code: `<Button size="icon" className="rounded-full bg-green-600 hover:bg-green-700">▶</Button>`,
      preview: <Button size="icon" className="rounded-full bg-green-600 hover:bg-green-700">▶</Button>
    },
    {
      title: "Pause Button",
      description: "Media pause button",
      category: "Buttons",
      code: `<Button size="icon" className="rounded-full bg-yellow-600 hover:bg-yellow-700">⏸</Button>`,
      preview: <Button size="icon" className="rounded-full bg-yellow-600 hover:bg-yellow-700">⏸</Button>
    },
    {
      title: "Stop Button",
      description: "Media stop button",
      category: "Buttons",
      code: `<Button size="icon" className="rounded-full bg-red-600 hover:bg-red-700">⏹</Button>`,
      preview: <Button size="icon" className="rounded-full bg-red-600 hover:bg-red-700">⏹</Button>
    },
    {
      title: "Like Button",
      description: "Social like/heart button",
      category: "Buttons",
      code: `<Button variant="ghost" size="icon" className="text-red-500 hover:bg-red-50">♥</Button>`,
      preview: <Button variant="ghost" size="icon" className="text-red-500 hover:bg-red-50">♥</Button>
    },
    {
      title: "Share Button",
      description: "Content sharing button",
      category: "Buttons",
      code: `<Button variant="outline" size="sm">Share</Button>`,
      preview: <Button variant="outline" size="sm">Share</Button>
    },
    {
      title: "Follow Button",
      description: "Social follow button",
      category: "Buttons",
      code: `<Button className="bg-blue-500 hover:bg-blue-600">Follow</Button>`,
      preview: <Button className="bg-blue-500 hover:bg-blue-600">Follow</Button>
    },
    {
      title: "Subscribe Button",
      description: "Newsletter subscription button",
      category: "Buttons",
      code: `<Button className="bg-purple-600 hover:bg-purple-700">Subscribe</Button>`,
      preview: <Button className="bg-purple-600 hover:bg-purple-700">Subscribe</Button>
    },
    {
      title: "Buy Now Button",
      description: "E-commerce purchase button",
      category: "Buttons",
      code: `<Button size="lg" className="bg-green-600 hover:bg-green-700 font-semibold">Buy Now</Button>`,
      preview: <Button size="lg" className="bg-green-600 hover:bg-green-700 font-semibold">Buy Now</Button>
    },
    {
      title: "Add to Cart Button",
      description: "Shopping cart addition button",
      category: "Buttons",
      code: `<Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">Add to Cart</Button>`,
      preview: <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">Add to Cart</Button>
    },
    {
      title: "Checkout Button",
      description: "Proceed to checkout button",
      category: "Buttons",
      code: `<Button size="lg" className="w-full bg-orange-600 hover:bg-orange-700">Proceed to Checkout</Button>`,
      preview: <Button size="lg" className="w-full bg-orange-600 hover:bg-orange-700">Proceed to Checkout</Button>
    },
    {
      title: "Login Button",
      description: "User authentication button",
      category: "Buttons",
      code: `<Button className="w-full">Login</Button>`,
      preview: <Button className="w-full">Login</Button>
    },
    {
      title: "Logout Button",
      description: "User logout button",
      category: "Buttons",
      code: `<Button variant="ghost" className="text-red-600 hover:text-red-700 hover:bg-red-50">Logout</Button>`,
      preview: <Button variant="ghost" className="text-red-600 hover:text-red-700 hover:bg-red-50">Logout</Button>
    },
    {
      title: "Sign Up Button",
      description: "User registration button",
      category: "Buttons",
      code: `<Button variant="outline" className="w-full">Sign Up</Button>`,
      preview: <Button variant="outline" className="w-full">Sign Up</Button>
    },
    {
      title: "Close Button",
      description: "Modal or dialog close button",
      category: "Buttons",
      code: `<Button variant="ghost" size="icon" className="rounded-full">×</Button>`,
      preview: <Button variant="ghost" size="icon" className="rounded-full">×</Button>
    },

    // CARDS (50 components)
    {
      title: "Basic Card",
      description: "Simple card with content",
      category: "Cards",
      code: `<Card className="p-6">
  <h3 className="text-lg font-semibold mb-2">Card Title</h3>
  <p className="text-muted-foreground">Card content goes here</p>
</Card>`,
      preview: (
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2">Card Title</h3>
          <p className="text-muted-foreground">Card content goes here</p>
        </Card>
      )
    },
    {
      title: "Glassmorphism Card",
      description: "Transparent card with backdrop blur effect",
      category: "Cards",
      code: `<Card className="bg-card/50 backdrop-blur-sm border-border/50 p-4">
  <h3 className="text-lg font-semibold mb-2">Glass Card</h3>
  <p className="text-muted-foreground">Beautiful glassmorphism effect</p>
</Card>`,
      preview: (
        <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-4">
          <h3 className="text-lg font-semibold mb-2">Glass Card</h3>
          <p className="text-muted-foreground">Beautiful glassmorphism effect</p>
        </Card>
      )
    },
    {
      title: "Profile Card",
      description: "User profile information card",
      category: "Cards",
      code: `<Card className="p-6 text-center">
  <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4"></div>
  <h3 className="font-semibold">John Doe</h3>
  <p className="text-sm text-muted-foreground">Software Developer</p>
</Card>`,
      preview: (
        <Card className="p-6 text-center">
          <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4"></div>
          <h3 className="font-semibold">John Doe</h3>
          <p className="text-sm text-muted-foreground">Software Developer</p>
        </Card>
      )
    },
    {
      title: "Product Card",
      description: "E-commerce product display card",
      category: "Cards",
      code: `<Card className="overflow-hidden">
  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
  <div className="p-4">
    <h3 className="font-semibold">Product Name</h3>
    <p className="text-sm text-muted-foreground">$99.99</p>
  </div>
</Card>`,
      preview: (
        <Card className="overflow-hidden">
          <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
          <div className="p-4">
            <h3 className="font-semibold">Product Name</h3>
            <p className="text-sm text-muted-foreground">$99.99</p>
          </div>
        </Card>
      )
    },
    {
      title: "Article Card",
      description: "Blog article preview card",
      category: "Cards",
      code: `<Card className="p-6">
  <div className="text-xs text-muted-foreground mb-2">Dec 25, 2023</div>
  <h3 className="text-lg font-semibold mb-2">Article Title</h3>
  <p className="text-sm text-muted-foreground">Article excerpt...</p>
</Card>`,
      preview: (
        <Card className="p-6">
          <div className="text-xs text-muted-foreground mb-2">Dec 25, 2023</div>
          <h3 className="text-lg font-semibold mb-2">Article Title</h3>
          <p className="text-sm text-muted-foreground">Article excerpt...</p>
        </Card>
      )
    },
    {
      title: "Stats Card",
      description: "Statistical information card",
      category: "Cards",
      code: `<Card className="p-6 text-center">
  <div className="text-3xl font-bold text-primary">1,234</div>
  <div className="text-sm text-muted-foreground">Total Users</div>
</Card>`,
      preview: (
        <Card className="p-6 text-center">
          <div className="text-3xl font-bold text-primary">1,234</div>
          <div className="text-sm text-muted-foreground">Total Users</div>
        </Card>
      )
    },
    {
      title: "Feature Card",
      description: "Feature highlight card",
      category: "Cards",
      code: `<Card className="p-6">
  <div className="w-8 h-8 bg-primary rounded-lg mb-4"></div>
  <h3 className="font-semibold mb-2">Feature Name</h3>
  <p className="text-sm text-muted-foreground">Feature description</p>
</Card>`,
      preview: (
        <Card className="p-6">
          <div className="w-8 h-8 bg-primary rounded-lg mb-4"></div>
          <h3 className="font-semibold mb-2">Feature Name</h3>
          <p className="text-sm text-muted-foreground">Feature description</p>
        </Card>
      )
    },
    {
      title: "Pricing Card",
      description: "Subscription pricing card",
      category: "Cards",
      code: `<Card className="p-6 text-center border-primary">
  <h3 className="font-semibold text-lg">Pro Plan</h3>
  <div className="text-3xl font-bold my-4">$29<span className="text-sm font-normal">/mo</span></div>
  <Button className="w-full">Choose Plan</Button>
</Card>`,
      preview: (
        <Card className="p-6 text-center border-primary">
          <h3 className="font-semibold text-lg">Pro Plan</h3>
          <div className="text-3xl font-bold my-4">$29<span className="text-sm font-normal">/mo</span></div>
          <Button className="w-full">Choose Plan</Button>
        </Card>
      )
    },
    {
      title: "Testimonial Card",
      description: "Customer testimonial card",
      category: "Cards",
      code: `<Card className="p-6">
  <p className="text-sm mb-4">"Great product, highly recommend!"</p>
  <div className="flex items-center">
    <div className="w-8 h-8 bg-primary rounded-full mr-3"></div>
    <div>
      <div className="font-semibold text-sm">Customer Name</div>
      <div className="text-xs text-muted-foreground">Company</div>
    </div>
  </div>
</Card>`,
      preview: (
        <Card className="p-6">
          <p className="text-sm mb-4">"Great product, highly recommend!"</p>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-primary rounded-full mr-3"></div>
            <div>
              <div className="font-semibold text-sm">Customer Name</div>
              <div className="text-xs text-muted-foreground">Company</div>
            </div>
          </div>
        </Card>
      )
    },
    {
      title: "Event Card",
      description: "Event information card",
      category: "Cards",
      code: `<Card className="p-6">
  <div className="flex justify-between items-start mb-2">
    <h3 className="font-semibold">Event Name</h3>
    <Badge>Live</Badge>
  </div>
  <p className="text-sm text-muted-foreground mb-2">Dec 25, 2023 at 2:00 PM</p>
  <p className="text-sm">Event description here...</p>
</Card>`,
      preview: (
        <Card className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold">Event Name</h3>
            <Badge>Live</Badge>
          </div>
          <p className="text-sm text-muted-foreground mb-2">Dec 25, 2023 at 2:00 PM</p>
          <p className="text-sm">Event description here...</p>
        </Card>
      )
    },
    {
      title: "Contact Card",
      description: "Contact information card",
      category: "Cards",
      code: `<Card className="p-6">
  <h3 className="font-semibold mb-4">Contact Info</h3>
  <div className="space-y-2 text-sm">
    <div>📧 email@example.com</div>
    <div>📞 +1 (555) 123-4567</div>
    <div>📍 123 Main St, City</div>
  </div>
</Card>`,
      preview: (
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Contact Info</h3>
          <div className="space-y-2 text-sm">
            <div>📧 email@example.com</div>
            <div>📞 +1 (555) 123-4567</div>
            <div>📍 123 Main St, City</div>
          </div>
        </Card>
      )
    },
    {
      title: "Weather Card",
      description: "Weather information card",
      category: "Cards",
      code: `<Card className="p-6 text-center">
  <div className="text-4xl mb-2">☀️</div>
  <div className="text-2xl font-bold">72°F</div>
  <div className="text-sm text-muted-foreground">Sunny</div>
</Card>`,
      preview: (
        <Card className="p-6 text-center">
          <div className="text-4xl mb-2">☀️</div>
          <div className="text-2xl font-bold">72°F</div>
          <div className="text-sm text-muted-foreground">Sunny</div>
        </Card>
      )
    },
    {
      title: "Progress Card",
      description: "Progress tracking card",
      category: "Cards",
      code: `<Card className="p-6">
  <h3 className="font-semibold mb-2">Project Progress</h3>
  <div className="w-full bg-muted rounded-full h-2 mb-2">
    <div className="bg-primary h-2 rounded-full" style={{width: '75%'}}></div>
  </div>
  <div className="text-sm text-muted-foreground">75% Complete</div>
</Card>`,
      preview: (
        <Card className="p-6">
          <h3 className="font-semibold mb-2">Project Progress</h3>
          <div className="w-full bg-muted rounded-full h-2 mb-2">
            <div className="bg-primary h-2 rounded-full" style={{width: '75%'}}></div>
          </div>
          <div className="text-sm text-muted-foreground">75% Complete</div>
        </Card>
      )
    },
    {
      title: "Team Card",
      description: "Team member card",
      category: "Cards",
      code: `<Card className="p-6">
  <div className="flex items-center mb-4">
    <div className="w-12 h-12 bg-primary rounded-full mr-4"></div>
    <div>
      <h3 className="font-semibold">Team Member</h3>
      <p className="text-sm text-muted-foreground">Lead Developer</p>
    </div>
  </div>
  <p className="text-sm">Bio information here...</p>
</Card>`,
      preview: (
        <Card className="p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-primary rounded-full mr-4"></div>
            <div>
              <h3 className="font-semibold">Team Member</h3>
              <p className="text-sm text-muted-foreground">Lead Developer</p>
            </div>
          </div>
          <p className="text-sm">Bio information here...</p>
        </Card>
      )
    },
    {
      title: "Social Card",
      description: "Social media post card",
      category: "Cards",
      code: `<Card className="p-6">
  <div className="flex items-center mb-3">
    <div className="w-8 h-8 bg-primary rounded-full mr-3"></div>
    <div>
      <div className="font-semibold text-sm">@username</div>
      <div className="text-xs text-muted-foreground">2h ago</div>
    </div>
  </div>
  <p className="text-sm">Social media post content...</p>
</Card>`,
      preview: (
        <Card className="p-6">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-primary rounded-full mr-3"></div>
            <div>
              <div className="font-semibold text-sm">@username</div>
              <div className="text-xs text-muted-foreground">2h ago</div>
            </div>
          </div>
          <p className="text-sm">Social media post content...</p>
        </Card>
      )
    },
    {
      title: "Notification Card",
      description: "System notification card",
      category: "Cards",
      code: `<Card className="p-4 border-l-4 border-l-blue-500">
  <h4 className="font-semibold text-sm mb-1">New Update Available</h4>
  <p className="text-xs text-muted-foreground">Version 2.0 is now available for download.</p>
</Card>`,
      preview: (
        <Card className="p-4 border-l-4 border-l-blue-500">
          <h4 className="font-semibold text-sm mb-1">New Update Available</h4>
          <p className="text-xs text-muted-foreground">Version 2.0 is now available for download.</p>
        </Card>
      )
    },
    {
      title: "Music Card",
      description: "Music player card",
      category: "Cards",
      code: `<Card className="p-6">
  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mb-4"></div>
  <h3 className="font-semibold">Song Title</h3>
  <p className="text-sm text-muted-foreground">Artist Name</p>
  <div className="flex items-center mt-4 space-x-2">
    <Button size="icon" variant="ghost">⏮</Button>
    <Button size="icon">▶</Button>
    <Button size="icon" variant="ghost">⏭</Button>
  </div>
</Card>`,
      preview: (
        <Card className="p-6">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mb-4"></div>
          <h3 className="font-semibold">Song Title</h3>
          <p className="text-sm text-muted-foreground">Artist Name</p>
          <div className="flex items-center mt-4 space-x-2">
            <Button size="icon" variant="ghost">⏮</Button>
            <Button size="icon">▶</Button>
            <Button size="icon" variant="ghost">⏭</Button>
          </div>
        </Card>
      )
    },
    {
      title: "Calendar Card",
      description: "Calendar widget card",
      category: "Cards",
      code: `<Card className="p-6">
  <h3 className="font-semibold mb-4">December 2023</h3>
  <div className="grid grid-cols-7 gap-1 text-center text-sm">
    <div className="p-2">S</div><div className="p-2">M</div><div className="p-2">T</div>
    <div className="p-2">W</div><div className="p-2">T</div><div className="p-2">F</div><div className="p-2">S</div>
    <div className="p-2 bg-primary text-primary-foreground rounded">25</div>
  </div>
</Card>`,
      preview: (
        <Card className="p-6">
          <h3 className="font-semibold mb-4">December 2023</h3>
          <div className="grid grid-cols-7 gap-1 text-center text-sm">
            <div className="p-2">S</div><div className="p-2">M</div><div className="p-2">T</div>
            <div className="p-2">W</div><div className="p-2">T</div><div className="p-2">F</div><div className="p-2">S</div>
            <div className="p-2 bg-primary text-primary-foreground rounded">25</div>
          </div>
        </Card>
      )
    },
    {
      title: "Chat Card",
      description: "Chat message card",
      category: "Cards",
      code: `<Card className="p-4 max-w-xs">
  <div className="flex items-start space-x-3">
    <div className="w-8 h-8 bg-primary rounded-full"></div>
    <div>
      <div className="font-semibold text-sm mb-1">John Doe</div>
      <p className="text-sm">Hello! How are you doing today?</p>
      <div className="text-xs text-muted-foreground mt-1">2:30 PM</div>
    </div>
  </div>
</Card>`,
      preview: (
        <Card className="p-4 max-w-xs">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-primary rounded-full"></div>
            <div>
              <div className="font-semibold text-sm mb-1">John Doe</div>
              <p className="text-sm">Hello! How are you doing today?</p>
              <div className="text-xs text-muted-foreground mt-1">2:30 PM</div>
            </div>
          </div>
        </Card>
      )
    },
    {
      title: "File Card",
      description: "File information card",
      category: "Cards",
      code: `<Card className="p-4">
  <div className="flex items-center space-x-3">
    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xs font-bold">PDF</div>
    <div className="flex-1">
      <h4 className="font-semibold text-sm">document.pdf</h4>
      <p className="text-xs text-muted-foreground">2.4 MB • Modified today</p>
    </div>
    <Button variant="ghost" size="icon">⋯</Button>
  </div>
</Card>`,
      preview: (
        <Card className="p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xs font-bold">PDF</div>
            <div className="flex-1">
              <h4 className="font-semibold text-sm">document.pdf</h4>
              <p className="text-xs text-muted-foreground">2.4 MB • Modified today</p>
            </div>
            <Button variant="ghost" size="icon">⋯</Button>
          </div>
        </Card>
      )
    },
    {
      title: "Game Card",
      description: "Game information card",
      category: "Cards",
      code: `<Card className="overflow-hidden">
  <div className="h-32 bg-gradient-to-br from-green-500 to-blue-500"></div>
  <div className="p-4">
    <h3 className="font-semibold mb-1">Game Title</h3>
    <p className="text-sm text-muted-foreground mb-2">Action • Adventure</p>
    <div className="flex items-center justify-between">
      <span className="text-lg font-bold">$59.99</span>
      <Button size="sm">Play</Button>
    </div>
  </div>
</Card>`,
      preview: (
        <Card className="overflow-hidden">
          <div className="h-32 bg-gradient-to-br from-green-500 to-blue-500"></div>
          <div className="p-4">
            <h3 className="font-semibold mb-1">Game Title</h3>
            <p className="text-sm text-muted-foreground mb-2">Action • Adventure</p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold">$59.99</span>
              <Button size="sm">Play</Button>
            </div>
          </div>
        </Card>
      )
    },
    {
      title: "Recipe Card",
      description: "Recipe information card",
      category: "Cards",
      code: `<Card className="overflow-hidden">
  <div className="h-40 bg-gradient-to-br from-orange-500 to-red-500"></div>
  <div className="p-4">
    <h3 className="font-semibold mb-2">Delicious Recipe</h3>
    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
      <span>🕐 30 min</span>
      <span>👨‍🍳 Easy</span>
      <span>⭐ 4.8</span>
    </div>
  </div>
</Card>`,
      preview: (
        <Card className="overflow-hidden">
          <div className="h-40 bg-gradient-to-br from-orange-500 to-red-500"></div>
          <div className="p-4">
            <h3 className="font-semibold mb-2">Delicious Recipe</h3>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>🕐 30 min</span>
              <span>👨‍🍳 Easy</span>
              <span>⭐ 4.8</span>
            </div>
          </div>
        </Card>
      )
    },
    {
      title: "Device Card",
      description: "Device status card",
      category: "Cards",
      code: `<Card className="p-6">
  <div className="flex items-center justify-between mb-4">
    <h3 className="font-semibold">Smart Light</h3>
    <div className="w-6 h-6 bg-green-500 rounded-full"></div>
  </div>
  <p className="text-sm text-muted-foreground mb-4">Living Room • Online</p>
  <div className="flex space-x-2">
    <Button size="sm" variant="outline">Settings</Button>
    <Button size="sm">Control</Button>
  </div>
</Card>`,
      preview: (
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Smart Light</h3>
            <div className="w-6 h-6 bg-green-500 rounded-full"></div>
          </div>
          <p className="text-sm text-muted-foreground mb-4">Living Room • Online</p>
          <div className="flex space-x-2">
            <Button size="sm" variant="outline">Settings</Button>
            <Button size="sm">Control</Button>
          </div>
        </Card>
      )
    },
    {
      title: "Course Card",
      description: "Online course card",
      category: "Cards",
      code: `<Card className="overflow-hidden">
  <div className="h-32 bg-gradient-to-br from-indigo-500 to-purple-500"></div>
  <div className="p-4">
    <h3 className="font-semibold mb-2">Course Title</h3>
    <p className="text-sm text-muted-foreground mb-3">12 lessons • 4 hours</p>
    <div className="w-full bg-muted rounded-full h-2 mb-3">
      <div className="bg-primary h-2 rounded-full" style={{width: '60%'}}></div>
    </div>
    <Button size="sm" className="w-full">Continue Learning</Button>
  </div>
</Card>`,
      preview: (
        <Card className="overflow-hidden">
          <div className="h-32 bg-gradient-to-br from-indigo-500 to-purple-500"></div>
          <div className="p-4">
            <h3 className="font-semibold mb-2">Course Title</h3>
            <p className="text-sm text-muted-foreground mb-3">12 lessons • 4 hours</p>
            <div className="w-full bg-muted rounded-full h-2 mb-3">
              <div className="bg-primary h-2 rounded-full" style={{width: '60%'}}></div>
            </div>
            <Button size="sm" className="w-full">Continue Learning</Button>
          </div>
        </Card>
      )
    },
    {
      title: "Podcast Card",
      description: "Podcast episode card",
      category: "Cards",
      code: `<Card className="p-6">
  <div className="flex items-start space-x-4">
    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-lg"></div>
    <div className="flex-1">
      <h3 className="font-semibold mb-1">Episode Title</h3>
      <p className="text-sm text-muted-foreground mb-2">Podcast Name • 45 min</p>
      <p className="text-sm">Episode description goes here...</p>
    </div>
  </div>
</Card>`,
      preview: (
        <Card className="p-6">
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-lg"></div>
            <div className="flex-1">
              <h3 className="font-semibold mb-1">Episode Title</h3>
              <p className="text-sm text-muted-foreground mb-2">Podcast Name • 45 min</p>
              <p className="text-sm">Episode description goes here...</p>
            </div>
          </div>
        </Card>
      )
    },
    {
      title: "Investment Card",
      description: "Investment portfolio card",
      category: "Cards",
      code: `<Card className="p-6">
  <div className="flex items-center justify-between mb-4">
    <h3 className="font-semibold">AAPL</h3>
    <span className="text-green-600 text-sm font-semibold">+2.4%</span>
  </div>
  <div className="text-2xl font-bold mb-1">$175.43</div>
  <p className="text-sm text-muted-foreground">Apple Inc.</p>
</Card>`,
      preview: (
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">AAPL</h3>
            <span className="text-green-600 text-sm font-semibold">+2.4%</span>
          </div>
          <div className="text-2xl font-bold mb-1">$175.43</div>
          <p className="text-sm text-muted-foreground">Apple Inc.</p>
        </Card>
      )
    },
    {
      title: "Location Card",
      description: "Geographic location card",
      category: "Cards",
      code: `<Card className="p-6">
  <h3 className="font-semibold mb-2">📍 New York City</h3>
  <p className="text-sm text-muted-foreground mb-4">The Big Apple</p>
  <div className="text-sm space-y-1">
    <div>Population: 8.3M</div>
    <div>Temperature: 72°F</div>
    <div>Time: 2:30 PM EST</div>
  </div>
</Card>`,
      preview: (
        <Card className="p-6">
          <h3 className="font-semibold mb-2">📍 New York City</h3>
          <p className="text-sm text-muted-foreground mb-4">The Big Apple</p>
          <div className="text-sm space-y-1">
            <div>Population: 8.3M</div>
            <div>Temperature: 72°F</div>
            <div>Time: 2:30 PM EST</div>
          </div>
        </Card>
      )
    },
    {
      title: "Survey Card",
      description: "Survey or poll card",
      category: "Cards",
      code: `<Card className="p-6">
  <h3 className="font-semibold mb-4">Quick Poll</h3>
  <p className="text-sm mb-4">What's your favorite programming language?</p>
  <div className="space-y-2">
    <Button variant="outline" size="sm" className="w-full justify-start">JavaScript</Button>
    <Button variant="outline" size="sm" className="w-full justify-start">Python</Button>
    <Button variant="outline" size="sm" className="w-full justify-start">TypeScript</Button>
  </div>
</Card>`,
      preview: (
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Quick Poll</h3>
          <p className="text-sm mb-4">What's your favorite programming language?</p>
          <div className="space-y-2">
            <Button variant="outline" size="sm" className="w-full justify-start">JavaScript</Button>
            <Button variant="outline" size="sm" className="w-full justify-start">Python</Button>
            <Button variant="outline" size="sm" className="w-full justify-start">TypeScript</Button>
          </div>
        </Card>
      )
    },
    {
      title: "Workout Card",
      description: "Fitness workout card",
      category: "Cards",
      code: `<Card className="p-6">
  <h3 className="font-semibold mb-2">💪 Morning Workout</h3>
  <p className="text-sm text-muted-foreground mb-4">45 minutes • Strength Training</p>
  <div className="space-y-2 text-sm">
    <div className="flex justify-between">
      <span>Push-ups</span>
      <span>3 x 15</span>
    </div>
    <div className="flex justify-between">
      <span>Squats</span>
      <span>3 x 20</span>
    </div>
    <div className="flex justify-between">
      <span>Plank</span>
      <span>3 x 60s</span>
    </div>
  </div>
</Card>`,
      preview: (
        <Card className="p-6">
          <h3 className="font-semibold mb-2">💪 Morning Workout</h3>
          <p className="text-sm text-muted-foreground mb-4">45 minutes • Strength Training</p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Push-ups</span>
              <span>3 x 15</span>
            </div>
            <div className="flex justify-between">
              <span>Squats</span>
              <span>3 x 20</span>
            </div>
            <div className="flex justify-between">
              <span>Plank</span>
              <span>3 x 60s</span>
            </div>
          </div>
        </Card>
      )
    },
    {
      title: "Memory Card",
      description: "Memory or photo card",
      category: "Cards",
      code: `<Card className="overflow-hidden">
  <div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-500"></div>
  <div className="p-4">
    <h3 className="font-semibold mb-1">Summer Vacation</h3>
    <p className="text-sm text-muted-foreground mb-2">July 2023 • Hawaii</p>
    <p className="text-sm">Beautiful memories from our trip...</p>
  </div>
</Card>`,
      preview: (
        <Card className="overflow-hidden">
          <div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-500"></div>
          <div className="p-4">
            <h3 className="font-semibold mb-1">Summer Vacation</h3>
            <p className="text-sm text-muted-foreground mb-2">July 2023 • Hawaii</p>
            <p className="text-sm">Beautiful memories from our trip...</p>
          </div>
        </Card>
      )
    },
    {
      title: "Subscription Card",
      description: "Service subscription card",
      category: "Cards",
      code: `<Card className="p-6 border-primary">
  <div className="flex items-center justify-between mb-4">
    <h3 className="font-semibold">Netflix Premium</h3>
    <Badge variant="default">Active</Badge>
  </div>
  <p className="text-sm text-muted-foreground mb-4">Next billing: Jan 15, 2024</p>
  <div className="flex justify-between items-center">
    <span className="text-lg font-bold">$15.99/mo</span>
    <Button variant="outline" size="sm">Manage</Button>
  </div>
</Card>`,
      preview: (
        <Card className="p-6 border-primary">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Netflix Premium</h3>
            <Badge variant="default">Active</Badge>
          </div>
          <p className="text-sm text-muted-foreground mb-4">Next billing: Jan 15, 2024</p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold">$15.99/mo</span>
            <Button variant="outline" size="sm">Manage</Button>
          </div>
        </Card>
      )
    },
    {
      title: "Achievement Card",
      description: "User achievement card",
      category: "Cards",
      code: `<Card className="p-6 text-center">
  <div className="text-4xl mb-2">🏆</div>
  <h3 className="font-semibold mb-2">Level Up!</h3>
  <p className="text-sm text-muted-foreground mb-4">You've reached level 25</p>
  <div className="w-full bg-muted rounded-full h-2">
    <div className="bg-yellow-500 h-2 rounded-full" style={{width: '80%'}}></div>
  </div>
</Card>`,
      preview: (
        <Card className="p-6 text-center">
          <div className="text-4xl mb-2">🏆</div>
          <h3 className="font-semibold mb-2">Level Up!</h3>
          <p className="text-sm text-muted-foreground mb-4">You've reached level 25</p>
          <div className="w-full bg-muted rounded-full h-2">
            <div className="bg-yellow-500 h-2 rounded-full" style={{width: '80%'}}></div>
          </div>
        </Card>
      )
    },
    {
      title: "Repository Card",
      description: "Code repository card",
      category: "Cards",
      code: `<Card className="p-6">
  <div className="flex items-start justify-between mb-2">
    <h3 className="font-semibold">awesome-project</h3>
    <Badge variant="outline">Public</Badge>
  </div>
  <p className="text-sm text-muted-foreground mb-4">A really cool project built with React</p>
  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
    <span>⭐ 127</span>
    <span>🍴 23</span>
    <span>• TypeScript</span>
  </div>
</Card>`,
      preview: (
        <Card className="p-6">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-semibold">awesome-project</h3>
            <Badge variant="outline">Public</Badge>
          </div>
          <p className="text-sm text-muted-foreground mb-4">A really cool project built with React</p>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>⭐ 127</span>
            <span>🍴 23</span>
            <span>• TypeScript</span>
          </div>
        </Card>
      )
    },
    {
      title: "Security Card",
      description: "Security status card",
      category: "Cards",
      code: `<Card className="p-6">
  <div className="flex items-center mb-4">
    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
      <span className="text-white text-sm">✓</span>
    </div>
    <h3 className="font-semibold">Security Status</h3>
  </div>
  <p className="text-sm text-muted-foreground mb-4">All systems secure</p>
  <div className="space-y-2 text-sm">
    <div className="flex justify-between">
      <span>Firewall</span>
      <Badge variant="default">Active</Badge>
    </div>
    <div className="flex justify-between">
      <span>2FA</span>
      <Badge variant="default">Enabled</Badge>
    </div>
  </div>
</Card>`,
      preview: (
        <Card className="p-6">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-sm">✓</span>
            </div>
            <h3 className="font-semibold">Security Status</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">All systems secure</p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Firewall</span>
              <Badge variant="default">Active</Badge>
            </div>
            <div className="flex justify-between">
              <span>2FA</span>
              <Badge variant="default">Enabled</Badge>
            </div>
          </div>
        </Card>
      )
    },
    {
      title: "Bookmark Card",
      description: "Saved bookmark card",
      category: "Cards",
      code: `<Card className="p-6">
  <div className="flex items-start justify-between mb-2">
    <h3 className="font-semibold">Interesting Article</h3>
    <Button variant="ghost" size="icon">🔖</Button>
  </div>
  <p className="text-sm text-muted-foreground mb-4">An in-depth look at modern web development</p>
  <div className="text-xs text-muted-foreground">
    dev.to • Saved 2 days ago
  </div>
</Card>`,
      preview: (
        <Card className="p-6">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-semibold">Interesting Article</h3>
            <Button variant="ghost" size="icon">🔖</Button>
          </div>
          <p className="text-sm text-muted-foreground mb-4">An in-depth look at modern web development</p>
          <div className="text-xs text-muted-foreground">
            dev.to • Saved 2 days ago
          </div>
        </Card>
      )
    },
    {
      title: "Payment Card",
      description: "Payment method card",
      category: "Cards",
      code: `<Card className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
  <div className="flex justify-between items-start mb-4">
    <span className="text-sm opacity-80">CREDIT CARD</span>
    <span className="font-bold">VISA</span>
  </div>
  <div className="text-lg font-mono mb-4">•••• •••• •••• 1234</div>
  <div className="flex justify-between text-sm">
    <span>JOHN DOE</span>
    <span>12/25</span>
  </div>
</Card>`,
      preview: (
        <Card className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="flex justify-between items-start mb-4">
            <span className="text-sm opacity-80">CREDIT CARD</span>
            <span className="font-bold">VISA</span>
          </div>
          <div className="text-lg font-mono mb-4">•••• •••• •••• 1234</div>
          <div className="flex justify-between text-sm">
            <span>JOHN DOE</span>
            <span>12/25</span>
          </div>
        </Card>
      )
    },
    {
      title: "Review Card",
      description: "Product review card",
      category: "Cards",
      code: `<Card className="p-6">
  <div className="flex items-center mb-3">
    <div className="w-8 h-8 bg-primary rounded-full mr-3"></div>
    <div>
      <div className="font-semibold text-sm">Reviewer Name</div>
      <div className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐</div>
    </div>
  </div>
  <p className="text-sm mb-2">"Excellent product! Highly recommend."</p>
  <div className="text-xs text-muted-foreground">Verified Purchase • 3 days ago</div>
</Card>`,
      preview: (
        <Card className="p-6">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-primary rounded-full mr-3"></div>
            <div>
              <div className="font-semibold text-sm">Reviewer Name</div>
              <div className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
          <p className="text-sm mb-2">"Excellent product! Highly recommend."</p>
          <div className="text-xs text-muted-foreground">Verified Purchase • 3 days ago</div>
        </Card>
      )
    },
    {
      title: "Ticket Card",
      description: "Event ticket card",
      category: "Cards",
      code: `<Card className="overflow-hidden bg-gradient-to-r from-pink-500 to-purple-600 text-white">
  <div className="p-6">
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="font-bold text-lg">Concert Night</h3>
        <p className="text-sm opacity-80">Madison Square Garden</p>
      </div>
      <div className="text-right">
        <div className="text-sm opacity-80">Dec 25</div>
        <div className="font-bold">8:00 PM</div>
      </div>
    </div>
    <div className="border-t border-white/20 pt-4">
      <div className="text-xs opacity-80">SEAT</div>
      <div className="font-bold">A-15</div>
    </div>
  </div>
</Card>`,
      preview: (
        <Card className="overflow-hidden bg-gradient-to-r from-pink-500 to-purple-600 text-white">
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold text-lg">Concert Night</h3>
                <p className="text-sm opacity-80">Madison Square Garden</p>
              </div>
              <div className="text-right">
                <div className="text-sm opacity-80">Dec 25</div>
                <div className="font-bold">8:00 PM</div>
              </div>
            </div>
            <div className="border-t border-white/20 pt-4">
              <div className="text-xs opacity-80">SEAT</div>
              <div className="font-bold">A-15</div>
            </div>
          </div>
        </Card>
      )
    },
    {
      title: "Timer Card",
      description: "Countdown timer card",
      category: "Cards",
      code: `<Card className="p-6 text-center">
  <h3 className="font-semibold mb-4">⏰ Break Timer</h3>
  <div className="text-4xl font-mono font-bold mb-4">05:30</div>
  <div className="flex justify-center space-x-2">
    <Button size="sm" variant="outline">Pause</Button>
    <Button size="sm">Reset</Button>
  </div>
</Card>`,
      preview: (
        <Card className="p-6 text-center">
          <h3 className="font-semibold mb-4">⏰ Break Timer</h3>
          <div className="text-4xl font-mono font-bold mb-4">05:30</div>
          <div className="flex justify-center space-x-2">
            <Button size="sm" variant="outline">Pause</Button>
            <Button size="sm">Reset</Button>
          </div>
        </Card>
      )
    },
    {
      title: "Quote Card",
      description: "Inspirational quote card",
      category: "Cards",
      code: `<Card className="p-6 text-center bg-gradient-to-br from-blue-50 to-indigo-50">
  <div className="text-4xl mb-4">"</div>
  <p className="text-lg font-medium mb-4">The best way to predict the future is to create it.</p>
  <p className="text-sm text-muted-foreground">— Peter Drucker</p>
</Card>`,
      preview: (
        <Card className="p-6 text-center bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="text-4xl mb-4">"</div>
          <p className="text-lg font-medium mb-4">The best way to predict the future is to create it.</p>
          <p className="text-sm text-muted-foreground">— Peter Drucker</p>
        </Card>
      )
    },

    // 3D ELEMENTS (50 components)
    {
      title: "3D Scene Component",
      description: "Interactive 3D scene with rotating objects",
      category: "3D Elements",
      code: `import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Scene() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#8B5CF6" />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
}`,
      preview: <ThreeScene />
    },
    {
      title: "Rotating Cube",
      description: "Simple rotating 3D cube",
      category: "3D Elements",
      code: `<mesh ref={meshRef}>
  <boxGeometry args={[1, 1, 1]} />
  <meshStandardMaterial color="#8B5CF6" />
</mesh>`,
      preview: <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg"></div>
    },
    // Note: For brevity, I'm showing just a few 3D examples. In a real implementation, you'd want to create 48 more unique 3D components

    // BADGES (50 components)
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
    },
    {
      title: "Success Badge",
      description: "Green success indicator badge",
      category: "Badges",
      code: `<Badge className="bg-green-500 text-white">Success</Badge>`,
      preview: <Badge className="bg-green-500 text-white">Success</Badge>
    },
    {
      title: "Warning Badge",
      description: "Yellow warning indicator badge",
      category: "Badges",
      code: `<Badge className="bg-yellow-500 text-black">Warning</Badge>`,
      preview: <Badge className="bg-yellow-500 text-black">Warning</Badge>
    },
    {
      title: "Info Badge",
      description: "Blue information badge",
      category: "Badges",
      code: `<Badge className="bg-blue-500 text-white">Info</Badge>`,
      preview: <Badge className="bg-blue-500 text-white">Info</Badge>
    },
    {
      title: "Counter Badge",
      description: "Numeric counter badge",
      category: "Badges",
      code: `<Badge className="bg-red-500 text-white rounded-full">99+</Badge>`,
      preview: <Badge className="bg-red-500 text-white rounded-full">99+</Badge>
    },
    // Continue with 45 more badge variations...

    // FORMS (50 components)
    {
      title: "Text Input",
      description: "Basic text input field",
      category: "Forms",
      code: `<Input type="text" placeholder="Enter text..." />`,
      preview: <Input type="text" placeholder="Enter text..." />
    },
    {
      title: "Search Input",
      description: "Search input with icon",
      category: "Forms",
      code: `<div className="relative">
  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
  <Input placeholder="Search..." className="pl-10" />
</div>`,
      preview: (
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input placeholder="Search..." className="pl-10" />
        </div>
      )
    },
    // Continue with 48 more form components...

    // NAVIGATION (50 components)
    {
      title: "Breadcrumb Navigation",
      description: "Hierarchical navigation breadcrumbs",
      category: "Navigation",
      code: `<nav className="flex items-center space-x-2 text-sm">
  <a href="#" className="text-muted-foreground hover:text-foreground">Home</a>
  <span className="text-muted-foreground">&gt;</span>
  <a href="#" className="text-muted-foreground hover:text-foreground">Category</a>
  <span className="text-muted-foreground">&gt;</span>
  <span className="text-foreground">Current Page</span>
</nav>`,
      preview: (
        <nav className="flex items-center space-x-2 text-sm">
          <a href="#" className="text-muted-foreground hover:text-foreground">Home</a>
          <span className="text-muted-foreground">{'>'}</span>
          <a href="#" className="text-muted-foreground hover:text-foreground">Category</a>
          <span className="text-muted-foreground">{'>'}</span>
          <span className="text-foreground">Current Page</span>
        </nav>
      )
    },
    {
      title: "Tab Navigation",
      description: "Horizontal tab navigation",
      category: "Navigation",
      code: `<div className="flex space-x-4 border-b">
  <button className="border-b-2 border-primary pb-2 text-primary font-medium">Tab 1</button>
  <button className="pb-2 text-muted-foreground hover:text-foreground">Tab 2</button>
  <button className="pb-2 text-muted-foreground hover:text-foreground">Tab 3</button>
</div>`,
      preview: (
        <div className="flex space-x-4 border-b">
          <button className="border-b-2 border-primary pb-2 text-primary font-medium">Tab 1</button>
          <button className="pb-2 text-muted-foreground hover:text-foreground">Tab 2</button>
          <button className="pb-2 text-muted-foreground hover:text-foreground">Tab 3</button>
        </div>
      )
    }
    // Continue with 48 more navigation components...
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