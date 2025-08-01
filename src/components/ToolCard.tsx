import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ToolCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  count?: number;
  gradient?: 'primary' | 'accent' | 'card';
  onClick?: () => void;
}

const ToolCard = ({ title, description, icon: Icon, count, gradient = 'card', onClick }: ToolCardProps) => {
  const gradientClasses = {
    primary: 'bg-gradient-primary',
    accent: 'bg-gradient-accent', 
    card: 'bg-gradient-card'
  };

  return (
    <Card 
      className="group cursor-pointer transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm"
      onClick={onClick}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className={`p-3 rounded-xl ${gradientClasses[gradient]} group-hover:shadow-primary`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          {count && (
            <span className="text-sm text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
              {count} items
            </span>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground mb-4">
          {description}
        </CardDescription>
        <Button variant="ghost" className="w-full justify-start text-left p-0 h-auto font-normal text-sm text-accent hover:text-accent-foreground">
          Explore tools →
        </Button>
      </CardContent>
    </Card>
  );
};

export default ToolCard;