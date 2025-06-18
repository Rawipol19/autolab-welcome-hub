import { FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const JavaPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-8">
          <button onClick={() => navigate(-1)} className="inline-flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M15.79 6.707a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 011.06-1.06L10 11.44l3.97-3.97a.75.75 0 011.06 0z" clipRule="evenodd" />
            </svg>
            <span>Back to File Types</span>
          </button>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-lg bg-orange-500 flex items-center justify-center">
              <span className="text-white font-bold text-3xl">.java</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Java Source Code</h1>
              <p className="text-muted-foreground">Source code files for Java applications</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card 
            className="group hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
            onClick={() => navigate('/file-types/output/pdf')}
          >
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-lg bg-red-500 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-foreground">PDF Report</h4>
              <p className="text-sm text-muted-foreground font-mono">.pdf</p>
            </CardContent>
          </Card>
          
          <Card 
            className="group hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
            onClick={() => navigate('/file-types/output/txt')}
          >
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-lg bg-gray-500 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-foreground">Text Output</h4>
              <p className="text-sm text-muted-foreground font-mono">.txt</p>
            </CardContent>
          </Card>
          
          <Card 
            className="group hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
            onClick={() => navigate('/file-types/output/log')}
          >
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-lg bg-yellow-600 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-foreground">Log Files</h4>
              <p className="text-sm text-muted-foreground font-mono">.log</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default JavaPage;
