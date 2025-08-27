
import { ArrowLeft, FileText, Bug, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const LogPage = () => {
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
            <div className="w-16 h-16 rounded-lg bg-amber-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">.log</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Execution Logs</h1>
              <p className="text-muted-foreground">Detailed compilation and execution logs</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bug className="h-5 w-5" />
                About Log Files
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Log files provide detailed information about the compilation and execution process of your code. 
                They include timestamps, system messages, error details, and debugging information.
              </p>
              
              <div className="space-y-3">
                <h4 className="font-semibold">Log Categories:</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Compilation logs with compiler messages</li>
                  <li>Runtime execution logs and system calls</li>
                  <li>Error logs with detailed stack traces</li>
                  <li>Performance monitoring and resource usage</li>
                  <li>Test execution and validation logs</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Log Structure
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                
                <div className="flex items-start gap-3">
                  <div className="w-7 aspect-square rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h5 className="font-semibold">System Information</h5>
                    <p className="text-sm text-muted-foreground">
                      Environment details and configuration
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 aspect-square rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h5 className="font-semibold">Compilation Phase</h5>
                    <p className="text-sm text-muted-foreground">
                      Compiler output, warnings, and errors
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 aspect-square rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h5 className="font-semibold">Execution Phase</h5>
                    <p className="text-sm text-muted-foreground">
                      Runtime logs and system interactions
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 aspect-square rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h5 className="font-semibold">Cleanup & Summary</h5>
                    <p className="text-sm text-muted-foreground">
                      Resource cleanup and final status
                    </p>
                  </div>
                </div>

              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Reading Log Files
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Badge variant="secondary">Timestamps</Badge>
                    <p className="text-sm text-muted-foreground">Track when events occurred during execution</p>
                  </div>
                  
                  <div className="space-y-2">
                    <Badge variant="secondary">Error Codes</Badge>
                    <p className="text-sm text-muted-foreground">Understand failure modes and error types</p>
                  </div>
                  
                  <div className="space-y-2">
                    <Badge variant="secondary">Stack Traces</Badge>
                    <p className="text-sm text-muted-foreground">Locate exact source of runtime errors</p>
                  </div>
                  
                  <div className="space-y-2">
                    <Badge variant="secondary">Performance Data</Badge>
                    <p className="text-sm text-muted-foreground">Analyze execution time and memory usage</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LogPage;
