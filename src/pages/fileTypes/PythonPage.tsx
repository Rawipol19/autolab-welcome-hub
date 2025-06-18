
import { ArrowLeft, FileText, Code, Snake } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const PythonPage = () => {
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
            <div className="w-16 h-16 rounded-lg bg-blue-500 flex items-center justify-center">
              <Snake className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Python Files</h1>
              <p className="text-muted-foreground">Versatile and readable programming language</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                About Python
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Python is a high-level, interpreted programming language with dynamic semantics. Its high-level 
                built-in data structures, combined with dynamic typing and dynamic binding, make it very attractive 
                for Rapid Application Development, as well as for use as a scripting or glue language.
              </p>
              
              <div className="space-y-3">
                <h4 className="font-semibold">Key Features:</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Simple and readable syntax</li>
                  <li>Dynamic typing and interpreted execution</li>
                  <li>Extensive standard library and third-party packages</li>
                  <li>Object-oriented programming support</li>
                  <li>Cross-platform compatibility</li>
                  <li>Strong community and ecosystem</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Common Use Cases:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <Badge variant="secondary" className="justify-start p-3">Web Development</Badge>
                  <Badge variant="secondary" className="justify-start p-3">Data Science & Analytics</Badge>
                  <Badge variant="secondary" className="justify-start p-3">Machine Learning & AI</Badge>
                  <Badge variant="secondary" className="justify-start p-3">Automation & Scripting</Badge>
                  <Badge variant="secondary" className="justify-start p-3">Scientific Computing</Badge>
                  <Badge variant="secondary" className="justify-start p-3">Desktop Applications</Badge>
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
                  <h5 className="font-semibold mb-2">Import Statements</h5>
                  <code className="text-sm bg-muted p-2 rounded block">import os<br/>from datetime import datetime</code>
                </div>
                
                <div>
                  <h5 className="font-semibold mb-2">Function Definition</h5>
                  <code className="text-sm bg-muted p-2 rounded block">def my_function(param):<br/>    """Function docstring"""<br/>    return param * 2</code>
                </div>
                
                <div>
                  <h5 className="font-semibold mb-2">Class Definition</h5>
                  <code className="text-sm bg-muted p-2 rounded block">class MyClass:<br/>    def __init__(self):<br/>        self.attribute = "value"</code>
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

export default PythonPage;
