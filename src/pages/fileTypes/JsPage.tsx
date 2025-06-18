import { ArrowLeft, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const JsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-8">
          <Button variant="ghost" className="mb-4" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Previous Page
          </Button>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-lg bg-yellow-500 flex items-center justify-center">
              <span className="text-white font-bold text-2xl">.js</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">JavaScript Files</h1>
              <p className="text-muted-foreground">Source code and scripts</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <Card>
            <CardContent>
              <h2 className="text-2xl font-bold mb-4">JavaScript File Details</h2>
              <p className="mb-4">
                JavaScript (.js) files are essential for web development, adding interactivity and dynamic content to websites.
                They contain code that is executed by web browsers to create engaging user experiences.
              </p>
              
              <h3 className="text-xl font-semibold mb-3">Common Uses:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Implementing interactive elements on websites</li>
                <li>Handling user input and form validation</li>
                <li>Making asynchronous requests to servers (AJAX)</li>
                <li>Creating animations and visual effects</li>
                <li>Building single-page applications (SPAs)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h2 className="text-2xl font-bold mb-4">Generated Output Files</h2>
              <p className="mb-4">
                When JavaScript code is executed, it can generate various output files that provide insights into the execution process,
                testing results, and overall performance.
              </p>

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

export default JsPage;
