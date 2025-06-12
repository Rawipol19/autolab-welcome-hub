
import { ArrowLeft, Upload, Play, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const TarPage = () => {
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
            <div className="w-16 h-16 rounded-lg bg-indigo-500 flex items-center justify-center">
              <span className="text-white font-bold text-xl">.tar</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">TAR Archives</h1>
              <p className="text-muted-foreground">Learn how to submit TAR archive files</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                How to Submit TAR Archives
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                TAR archives are commonly used in Unix/Linux environments for packaging multiple files and directories. AutoLab fully supports TAR files for project submissions.
              </p>
              
              <div className="space-y-3">
                <h4 className="font-semibold">Supported TAR Formats:</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">.tar</Badge>
                  <Badge variant="secondary">.tar.gz</Badge>
                  <Badge variant="secondary">.tar.bz2</Badge>
                  <Badge variant="secondary">.tar.xz</Badge>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Creating TAR Archives:</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Use `tar -cvf archive.tar directory/` to create a basic TAR file</li>
                  <li>Use `tar -czvf archive.tar.gz directory/` for gzip compression</li>
                  <li>Include all necessary source files and dependencies</li>
                  <li>Maintain proper directory structure for your project</li>
                </ul>
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
                    <h5 className="font-semibold">Archive Extraction</h5>
                    <p className="text-sm text-muted-foreground">Extract TAR archive contents while preserving file permissions</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h5 className="font-semibold">File Structure Analysis</h5>
                    <p className="text-sm text-muted-foreground">Analyze directory structure and identify project files</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h5 className="font-semibold">Build & Compilation</h5>
                    <p className="text-sm text-muted-foreground">Execute build scripts and compile source code as needed</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <h5 className="font-semibold">Testing & Validation</h5>
                    <p className="text-sm text-muted-foreground">Run comprehensive tests and validate project requirements</p>
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
                <li>• Use compression (.tar.gz) to reduce file size for faster uploads</li>
                <li>• Include a README file with setup and build instructions</li>
                <li>• Exclude temporary files and build artifacts</li>
                <li>• Maintain consistent directory structure</li>
                <li>• Test archive extraction locally before submission</li>
                <li>• Include all necessary dependencies and configuration files</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TarPage;
