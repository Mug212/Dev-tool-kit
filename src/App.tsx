import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { BackToTop } from "@/components/BackToTop";
import ErrorBoundary from "@/components/ErrorBoundary";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const UIComponents = lazy(() => import("./pages/UIComponents"));
const NotFound = lazy(() => import("./pages/NotFound"));
const CodeSnippets = lazy(() => import('./pages/CodeSnippets'));
const Animations = lazy(() => import('./pages/Animations'));
const DeveloperUtilities = lazy(() => import('./pages/DeveloperUtilities'));
const DesignTools = lazy(() => import('./pages/DesignTools'));
const ThreeDElementsPage = lazy(() => import('./pages/ThreeDElementsPage'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
      retry: 1,
    },
  },
});

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="text-center space-y-4">
      <LoadingSpinner size="lg" />
      <p className="text-muted-foreground">Loading...</p>
    </div>
  </div>
);

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner position="bottom-right" />
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
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
          </Suspense>
          <BackToTop />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
