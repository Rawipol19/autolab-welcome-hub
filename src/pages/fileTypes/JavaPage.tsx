
import { ArrowLeft, FileText, Code, Coffee } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
              <Coffee className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Java Source Code</h1>
              <p className="text-muted-foreground">Enterprise-grade object-oriented programming</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                About Java
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Java is a high-level, class-based, object-oriented programming language that is designed to have 
                as few implementation dependencies as possible. It follows the principle of "write once, run anywhere" 
                (WORA), making it highly portable across different platforms.
              </p>
              
              <div className="space-y-3">
                <h4 className="font-semibold">Key Features:</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Platform independence through Java Virtual Machine (JVM)</li>
                  <li>Strong memory management and garbage collection</li>
                  <li>Robust security features and sandboxing</li>
                  <li>Multi-threading support for concurrent programming</li>
                  <li>Rich API and extensive standard library</li>
                  <li>Strong typing system and compile-time error checking</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Common Use Cases:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <Badge variant="secondary" className="justify-start p-3">Enterprise Applications</Badge>
                  <Badge variant="secondary" className="justify-start p-3">Android Development</Badge>
                  <Badge variant="secondary" className="justify-start p-3">Web Services & APIs</Badge>
                  <Badge variant="secondary" className="justify-start p-3">Desktop Applications</Badge>
                  <Badge variant="secondary" className="justify-start p-3">Scientific Applications</Badge>
                  <Badge variant="secondary" className="justify-start p-3">Big Data Processing</Badge>
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
                  <code className="text-sm bg-muted p-2 rounded block">package com.example.myapp;</code>
                </div>
                
                <div>
                  <h5 className="font-semibold mb-2">Import Statements</h5>
                  <code className="text-sm bg-muted p-2 rounded block">import java.util.List;<br/>import java.io.*;</code>
                </div>
                
                <div>
                  <h5 className="font-semibold mb-2">Class Declaration</h5>
                  <code className="text-sm bg-muted p-2 rounded block">public class MyClass &#123;<br/>    // class body<br/>&#125;</code>
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

export default JavaPage;
