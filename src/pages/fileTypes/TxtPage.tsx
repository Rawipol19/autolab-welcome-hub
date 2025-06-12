
import { ArrowLeft, Upload, Play, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const TxtPage = () => {
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
            <div className="w-16 h-16 rounded-lg bg-gray-400 flex items-center justify-center">
              <span className="text-white font-bold text-xl">.txt</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Text Files</h1>
              <p className="text-muted-foreground">Learn how to submit plain text files</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                How to Submit Text Files
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Plain text files are simple, universal format files that can be used for documentation, configuration, data files, and simple assignments.
              </p>
              
              <div className="space-y-3">
                <h4 className="font-semibold">Common Use Cases:</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>README files and documentation</li>
                  <li>Configuration files and settings</li>
                  <li>Data files and datasets</li>
                  <li>Simple text-based assignments</li>
                  <li>Log files and output captures</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Supported Encodings:</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">UTF-8</Badge>
                  <Badge variant="secondary">ASCII</Badge>
                  <Badge variant="secondary">UTF-16</Badge>
                  <Badge variant="secondary">ISO-8859-1</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="h-5 w-5" />
                Processing Workflow
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h5 className="font-semibold">Encoding Detection</h5>
                    <p className="text-sm text-muted-foreground">Automatically detect and validate text file encoding</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h5 className="font-semibold">Content Analysis</h5>
                    <p className="text-sm text-muted-foreground">Parse and analyze text content for specific patterns or requirements</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h5 className="font-semibold">Format Validation</h5>
                    <p className="text-sm text-muted-foreground">Verify content meets assignment requirements and specifications</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <h5 className="font-semibold">Automated Checking</h5>
                    <p className="text-sm text-muted-foreground">Run automated tests and validations on text content</p>
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
                <li>• Use UTF-8 encoding for maximum compatibility</li>
                <li>• Keep line endings consistent (LF for Unix/Linux, CRLF for Windows)</li>
                <li>• Include clear section headers and formatting</li>
                <li>• Avoid special characters that might not render properly</li>
                <li>• Keep file size reasonable (under 10MB for text files)</li>
                <li>• Use meaningful filenames that describe the content</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TxtPage;
