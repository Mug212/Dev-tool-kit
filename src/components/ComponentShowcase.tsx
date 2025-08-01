import { useState } from 'react';
import { Copy, Check, Eye, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

interface ComponentShowcaseProps {
  title: string;
  description: string;
  category: string;
  code: string;
  preview?: React.ReactNode;
}

const ComponentShowcase = ({ title, description, category, code, preview }: ComponentShowcaseProps) => {
  const [copied, setCopied] = useState(false);
  const [showCode, setShowCode] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      toast.success('Code copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast.error('Failed to copy code');
    }
  };

  return (
    <Card className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-elevated transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <CardTitle className="text-lg">{title}</CardTitle>
              <Badge variant="secondary" className="text-xs">
                {category}
              </Badge>
            </div>
            <CardDescription>{description}</CardDescription>
          </div>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowCode(!showCode)}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
              {showCode ? <Eye className="w-4 h-4" /> : <Code className="w-4 h-4" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleCopy}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
              {copied ? <Check className="w-4 h-4 text-accent" /> : <Copy className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        {/* Preview */}
        {preview && !showCode && (
          <div className="p-4 bg-gradient-card rounded-lg border border-border/50 mb-4">
            {preview}
          </div>
        )}
        
        {/* Code */}
        {showCode && (
          <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            <pre className="text-foreground whitespace-pre-wrap">{code}</pre>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ComponentShowcase;