
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ResearchTeam from "./pages/ResearchTeam";
import Publications from "./pages/Publications";
import NewsUpdates from "./pages/NewsUpdates";
import PythonPage from "./pages/fileTypes/PythonPage";
import JavaPage from "./pages/fileTypes/JavaPage";
import CppPage from "./pages/fileTypes/CppPage";
import CPage from "./pages/fileTypes/CPage";
import JsPage from "./pages/fileTypes/JsPage";
import GoPage from "./pages/fileTypes/GoPage";
import RustPage from "./pages/fileTypes/RustPage";
import SmlPage from "./pages/fileTypes/SmlPage";
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
          <Route path="/contact" element={<Contact />} />
          <Route path="/research-team" element={<ResearchTeam />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/news-updates" element={<NewsUpdates />} />
          <Route path="/file-types/python" element={<PythonPage />} />
          <Route path="/file-types/java" element={<JavaPage />} />
          <Route path="/file-types/cpp" element={<CppPage />} />
          <Route path="/file-types/c" element={<CPage />} />
          <Route path="/file-types/javascript" element={<JsPage />} />
          <Route path="/file-types/go" element={<GoPage />} />
          <Route path="/file-types/rust" element={<RustPage />} />
          <Route path="/file-types/sml" element={<SmlPage />} />
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
