
import { ArrowLeft, Upload, Play, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const ZipPage = () => {
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
            <div className="w-16 h-16 rounded-lg bg-white-500 flex items-center justify-center">
              <img src="https://cdn-icons-png.freepik.com/512/28/28814.png" alt="Zip" className="w-10 h-10" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">ZIP Archives</h1>
              <p className="text-muted-foreground">Learn how to submit ZIP archive files</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                How to Submit ZIP Archives
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                ZIP archives are perfect for submitting projects with multiple files, complex directory structures, or when you need to include additional resources.
              </p>
              
              <div className="space-y-3">
                <h4 className="font-semibold">What to Include:</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Source code files in proper directory structure</li>
                  <li>Configuration files (requirements.txt, package.json, etc.)</li>
                  <li>Documentation and README files</li>
                  <li>Test files and sample data</li>
                  <li>Build scripts and project files</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Archive Formats Supported:</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">.zip</Badge>
                  <Badge variant="secondary">.tar</Badge>
                  <Badge variant="secondary">.tar.gz</Badge>
                  <Badge variant="secondary">.rar</Badge>
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
                  <div className="w-7 aspect-square rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h5 className="font-semibold">Archive Extraction</h5>
                    <p className="text-sm text-muted-foreground">
                      Safely extract archive contents in isolated environment
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 aspect-square rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h5 className="font-semibold">Structure Analysis</h5>
                    <p className="text-sm text-muted-foreground">
                      Analyze directory structure and identify main files
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 aspect-square rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h5 className="font-semibold">Build Process</h5>
                    <p className="text-sm text-muted-foreground">
                      Execute build scripts and install dependencies
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 aspect-square rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h5 className="font-semibold">Comprehensive Testing</h5>
                    <p className="text-sm text-muted-foreground">
                      Run all tests and generate detailed reports
                    </p>
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
                <li>• Keep archive size under 50MB for faster processing</li>
                <li>• Include a clear README with setup instructions</li>
                <li>• Use proper directory structure and naming conventions</li>
                <li>• Exclude unnecessary files (.DS_Store, node_modules, etc.)</li>
                <li>• Include all required dependencies and configuration files</li>
                <li>• Test your archive locally before submission</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ZipPage;
