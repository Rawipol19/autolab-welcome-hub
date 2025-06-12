
import { ArrowLeft, Upload, Play, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const LogPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-lg bg-amber-500 flex items-center justify-center">
              <span className="text-white font-bold text-xl">.log</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Log Files</h1>
              <p className="text-muted-foreground">Learn how to submit application log files</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                How to Submit Log Files
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Log files contain records of events, errors, and system activities. They are essential for debugging, performance analysis, and understanding application behavior.
              </p>
              
              <div className="space-y-3">
                <h4 className="font-semibold">Common Log Types:</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Application execution logs</li>
                  <li>Error and exception logs</li>
                  <li>Performance and timing logs</li>
                  <li>Debug and trace logs</li>
                  <li>System and server logs</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Supported Formats:</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">.log</Badge>
                  <Badge variant="secondary">.txt</Badge>
                  <Badge variant="secondary">.out</Badge>
                  <Badge variant="secondary">.err</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="h-5 w-5" />
                Analysis Process
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h5 className="font-semibold">Log Parsing</h5>
                    <p className="text-sm text-muted-foreground">Parse log entries and extract relevant information</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h5 className="font-semibold">Error Detection</h5>
                    <p className="text-sm text-muted-foreground">Identify errors, warnings, and critical issues</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h5 className="font-semibold">Pattern Analysis</h5>
                    <p className="text-sm text-muted-foreground">Analyze patterns and trends in log data</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <h5 className="font-semibold">Report Generation</h5>
                    <p className="text-sm text-muted-foreground">Generate comprehensive analysis report</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Best Practices
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Include timestamps in log entries for better analysis</li>
                <li>• Use consistent log levels (ERROR, WARN, INFO, DEBUG)</li>
                <li>• Provide clear, descriptive log messages</li>
                <li>• Include relevant context and variable values</li>
                <li>• Keep log files to reasonable size (compress if necessary)</li>
                <li>• Remove sensitive information before submission</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LogPage;
