
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PythonPage from "./pages/fileTypes/PythonPage";
import JavaPage from "./pages/fileTypes/JavaPage";
import CppPage from "./pages/fileTypes/CppPage";
import CPage from "./pages/fileTypes/CPage";
import JsPage from "./pages/fileTypes/JsPage";
import GoPage from "./pages/fileTypes/GoPage";
import ZipPage from "./pages/fileTypes/ZipPage";
import TarPage from "./pages/fileTypes/TarPage";

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
          <Route path="/file-types/cpp" element={<CppPage />} />
          <Route path="/file-types/c" element={<CPage />} />
          <Route path="/file-types/javascript" element={<JsPage />} />
          <Route path="/file-types/go" element={<GoPage />} />
          <Route path="/file-types/zip" element={<ZipPage />} />
          <Route path="/file-types/tar" element={<TarPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
