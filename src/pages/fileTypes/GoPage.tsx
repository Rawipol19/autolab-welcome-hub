
import { ArrowLeft, FileText, Code, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const GoPage = () => {
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
            <div className="w-16 h-16 rounded-lg bg-cyan-500 flex items-center justify-center">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Go Programming Files</h1>
              <p className="text-muted-foreground">Fast, reliable, and efficient software development</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                About Go Language
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Go is a statically typed, compiled programming language designed at Google. It is syntactically 
                similar to C, but with memory safety, garbage collection, structural typing, and CSP-style 
                concurrency. Go was designed to be simple, fast, and productive.
              </p>
              
              <div className="space-y-3">
                <h4 className="font-semibold">Key Features:</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Built-in concurrency with goroutines and channels</li>
                  <li>Fast compilation and execution speed</li>
                  <li>Simple and clean syntax</li>
                  <li>Strong standard library</li>
                  <li>Automatic memory management</li>
                  <li>Cross-platform compilation support</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Common Use Cases:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <Badge variant="secondary" className="justify-start p-3">Web Services & APIs</Badge>
                  <Badge variant="secondary" className="justify-start p-3">Cloud Infrastructure</Badge>
                  <Badge variant="secondary" className="justify-start p-3">Microservices</Badge>
                  <Badge variant="secondary" className="justify-start p-3">DevOps Tools</Badge>
                  <Badge variant="secondary" className="justify-start p-3">Network Programming</Badge>
                  <Badge variant="secondary" className="justify-start p-3">Container Technologies</Badge>
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
                  <h5 className="font-semibold mb-2">Package Declaration</h5>
                  <code className="text-sm bg-muted p-2 rounded block">package main</code>
                </div>
                
                <div>
                  <h5 className="font-semibold mb-2">Import Statement</h5>
                  <code className="text-sm bg-muted p-2 rounded block">import (<br/>    "fmt"<br/>    "net/http"<br/>)</code>
                </div>
                
                <div>
                  <h5 className="font-semibold mb-2">Function Declaration</h5>
                  <code className="text-sm bg-muted p-2 rounded block">func main() &#123;<br/>    fmt.Println("Hello, World!")<br/>&#125;</code>
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

export default GoPage;
