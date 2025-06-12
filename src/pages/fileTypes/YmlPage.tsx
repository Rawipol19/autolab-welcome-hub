
import { ArrowLeft, Upload, Play, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const YmlPage = () => {
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
            <div className="w-16 h-16 rounded-lg bg-teal-500 flex items-center justify-center">
              <span className="text-white font-bold text-xl">.yml</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">YAML Files</h1>
              <p className="text-muted-foreground">Learn how to submit YAML configuration files</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                How to Submit YAML Files
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                YAML (YAML Ain't Markup Language) files are human-readable data serialization files commonly used for configuration, CI/CD pipelines, and data exchange.
              </p>
              
              <div className="space-y-3">
                <h4 className="font-semibold">Common Use Cases:</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Docker Compose configurations</li>
                  <li>Kubernetes deployment manifests</li>
                  <li>CI/CD pipeline configurations (GitHub Actions, GitLab CI)</li>
                  <li>Application configuration files</li>
                  <li>Data serialization and API specifications</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Supported Extensions:</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">.yml</Badge>
                  <Badge variant="secondary">.yaml</Badge>
                  <Badge variant="secondary">.yaml.template</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="h-5 w-5" />
                Validation Process
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h5 className="font-semibold">Syntax Validation</h5>
                    <p className="text-sm text-muted-foreground">Parse YAML syntax and check for structural errors</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h5 className="font-semibold">Schema Validation</h5>
                    <p className="text-sm text-muted-foreground">Validate against expected schema and data types</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h5 className="font-semibold">Configuration Testing</h5>
                    <p className="text-sm text-muted-foreground">Test configuration validity in target environment</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <h5 className="font-semibold">Security Scan</h5>
                    <p className="text-sm text-muted-foreground">Check for security issues and sensitive data exposure</p>
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
                <li>• Use consistent indentation (2 or 4 spaces, no tabs)</li>
                <li>• Quote strings that contain special characters</li>
                <li>• Use meaningful key names and add comments for clarity</li>
                <li>• Validate YAML syntax before submission</li>
                <li>• Avoid deeply nested structures when possible</li>
                <li>• Use version control for configuration changes</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default YmlPage;
