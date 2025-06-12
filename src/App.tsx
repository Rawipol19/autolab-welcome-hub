
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PythonPage from "./pages/fileTypes/PythonPage";
import JavaPage from "./pages/fileTypes/JavaPage";
import ZipPage from "./pages/fileTypes/ZipPage";
import TarPage from "./pages/fileTypes/TarPage";
import PdfPage from "./pages/fileTypes/PdfPage";
import TxtPage from "./pages/fileTypes/TxtPage";
import YmlPage from "./pages/fileTypes/YmlPage";
import LogPage from "./pages/fileTypes/LogPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/file-types/python" element={<PythonPage />} />
          <Route path="/file-types/java" element={<JavaPage />} />
          <Route path="/file-types/zip" element={<ZipPage />} />
          <Route path="/file-types/tar" element={<TarPage />} />
          <Route path="/file-types/pdf" element={<PdfPage />} />
          <Route path="/file-types/txt" element={<TxtPage />} />
          <Route path="/file-types/yml" element={<YmlPage />} />
          <Route path="/file-types/log" element={<LogPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
