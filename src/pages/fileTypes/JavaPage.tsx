
import { ArrowLeft, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const JavaPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-8">
          <Button variant="ghost" className="mb-4" onClick={() => navigate('/')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-lg bg-orange-500 flex items-center justify-center">
              <span className="text-white font-bold text-2xl">Java</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Java Source Code</h1>
              <p className="text-muted-foreground">Source code files for Java applications</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>About Java Files</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere (WORA).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Common Output Files Generated</CardTitle>
            </CardHeader>
            <CardContent>
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
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default JavaPage;
