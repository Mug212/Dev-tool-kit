import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import UIComponents from "./pages/UIComponents";
import NotFound from "./pages/NotFound";
import CodeSnippets from './pages/CodeSnippets';
import Animations from './pages/Animations';
import DeveloperUtilities from './pages/DeveloperUtilities';
import DesignTools from './pages/DesignTools';
import ThreeDElementsPage from './pages/ThreeDElementsPage';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ui-components" element={<UIComponents />} />
          <Route path="/code-snippets" element={<CodeSnippets />} />
                    <Route path="/animations" element={<Animations />} />
          <Route path="/developer-utilities" element={<DeveloperUtilities />} />
          <Route path="/design-tools" element={<DesignTools />} />
          <Route path="/3d-elements" element={<ThreeDElementsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
