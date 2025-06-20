
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";
import PythonPage from "./pages/fileTypes/PythonPage";
import JavaPage from "./pages/fileTypes/JavaPage";
import CppPage from "./pages/fileTypes/CppPage";
import CPage from "./pages/fileTypes/CPage";
import JsPage from "./pages/fileTypes/JsPage";
import GoPage from "./pages/fileTypes/GoPage";
import ZipPage from "./pages/fileTypes/ZipPage";
import TarPage from "./pages/fileTypes/TarPage";
import PdfPage from "./pages/fileTypes/outputFiles/PdfPage";
import TxtPage from "./pages/fileTypes/outputFiles/TxtPage";
import LogPage from "./pages/fileTypes/outputFiles/LogPage";
import YmlPage from "./pages/fileTypes/YmlPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about" element={<About />} />
          <Route path="/file-types/python" element={<PythonPage />} />
          <Route path="/file-types/java" element={<JavaPage />} />
          <Route path="/file-types/cpp" element={<CppPage />} />
          <Route path="/file-types/c" element={<CPage />} />
          <Route path="/file-types/javascript" element={<JsPage />} />
          <Route path="/file-types/go" element={<GoPage />} />
          <Route path="/file-types/zip" element={<ZipPage />} />
          <Route path="/file-types/tar" element={<TarPage />} />
          <Route path="/file-types/yml" element={<YmlPage />} />
          <Route path="/file-types/output/pdf" element={<PdfPage />} />
          <Route path="/file-types/output/txt" element={<TxtPage />} />
          <Route path="/file-types/output/log" element={<LogPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
