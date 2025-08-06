import { Search, Code2, Settings, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const [searchValue, setSearchValue] = useState('');

  const navItems = [
    { label: 'UI Components', href: '/ui-components' },
    { label: 'Code Snippets', href: '/code-snippets' },
    { label: 'Animations', href: '/animations' },
    { label: 'Developer Utilities', href: '/developer-utilities' },
    { label: 'Design Tools', href: '/design-tools' },
    { label: '3D Elements', href: '/3d-elements' },
  ];

  return (
    <header className="border-b border-border glass-effect sticky top-0 z-50">
      <div className="container mx-auto px-responsive py-4 flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-primary rounded-lg floating-animation">
            <Code2 className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-responsive-base font-bold gradient-text">DevToolkit</h1>
            <p className="text-sm text-muted-foreground hidden lg:block">All-in-one developer tools</p>
          </div>
        </div>
        
        {/* Search Bar - Hidden on mobile */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Search tools, components, snippets..." 
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="pl-10 glass-effect focus:border-primary transition-all duration-300"
            />
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="focus-ring">
            <Settings className="w-4 h-4" />
          </Button>
          <Button variant="hero" size="sm" className="hover-lift">
            Pro Features
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="focus-ring">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="glass-effect">
              <div className="flex flex-col gap-4 mt-6">
                {/* Mobile Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input 
                    placeholder="Search..." 
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="pl-10 glass-effect"
                  />
                </div>
                
                {/* Navigation Links */}
                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <Button
                      key={item.href}
                      variant="ghost"
                      className="justify-start"
                      asChild
                    >
                      <a href={item.href}>{item.label}</a>
                    </Button>
                  ))}
                </nav>
                
                <div className="pt-4 border-t border-border">
                  <Button variant="hero" className="w-full">
                    Pro Features
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;