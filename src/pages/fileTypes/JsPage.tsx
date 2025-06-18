
import { ArrowLeft, FileText, Code, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const JsPage = () => {
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
            <div className="w-16 h-16 rounded-lg bg-yellow-500 flex items-center justify-center">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">JavaScript Files</h1>
              <p className="text-muted-foreground">Dynamic web programming language</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                About JavaScript
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                JavaScript is a high-level, dynamic, interpreted programming language that is well-suited to 
                object-oriented and functional programming styles. It is the programming language of the web, 
                enabling interactive web pages and complex web applications.
              </p>
              
              <div className="space-y-3">
                <h4 className="font-semibold">Key Features:</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Dynamic typing and first-class functions</li>
                  <li>Prototype-based object orientation</li>
                  <li>Event-driven programming model</li>
                  <li>Asynchronous programming with promises and async/await</li>
                  <li>Rich ecosystem with NPM packages</li>
                  <li>Cross-platform development capabilities</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Common Use Cases:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <Badge variant="secondary" className="justify-start p-3">Frontend Web Development</Badge>
                  <Badge variant="secondary" className="justify-start p-3">Backend Development (Node.js)</Badge>
                  <Badge variant="secondary" className="justify-start p-3">Mobile Apps (React Native)</Badge>
                  <Badge variant="secondary" className="justify-start p-3">Desktop Applications (Electron)</Badge>
                  <Badge variant="secondary" className="justify-start p-3">Progressive Web Apps</Badge>
                  <Badge variant="secondary" className="justify-start p-3">Game Development</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                File Structure & Syntax
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold mb-2">Variable Declaration</h5>
                  <code className="text-sm bg-muted p-2 rounded block">const greeting = "Hello, World!";<br/>let counter = 0;<br/>var oldStyle = "deprecated";</code>
                </div>
                
                <div>
                  <h5 className="font-semibold mb-2">Function Declaration</h5>
                  <code className="text-sm bg-muted p-2 rounded block">function myFunction(param) &#123;<br/>    return param * 2;<br/>&#125;<br/><br/>const arrowFunction = (param) => param * 2;</code>
                </div>
                
                <div>
                  <h5 className="font-semibold mb-2">Module Import/Export</h5>
                  <code className="text-sm bg-muted p-2 rounded block">import &#123; module &#125; from './module.js';<br/>export default MyComponent;</code>
                </div>
              </div>
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

export default JsPage;
