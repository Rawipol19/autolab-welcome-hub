import { ArrowLeft, Upload, Play, CheckCircle, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const JavaPage = () => {
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
            <div className="w-16 h-16 rounded-lg bg-orange-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">.java</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Java Files</h1>
              <p className="text-muted-foreground">Learn how to submit Java assignments</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                How to Submit Java Files
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Java files (.java) are fully supported in AutoLab with comprehensive compilation and testing capabilities.
              </p>
              
              <div className="space-y-3">
                <h4 className="font-semibold">Supported File Types:</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">.java</Badge>
                  <Badge variant="secondary">.jar</Badge>
                  <Badge variant="secondary">.class</Badge>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Submission Methods:</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Single .java source file</li>
                  <li>Multiple Java files in a package structure</li>
                  <li>JAR archives with compiled classes</li>
                  <li>Maven/Gradle projects with build files</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="h-5 w-5" />
                Compilation & Testing Process
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h5 className="font-semibold">Compilation Check</h5>
                    <p className="text-sm text-muted-foreground">Compile Java source files using javac compiler</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h5 className="font-semibold">Classpath Setup</h5>
                    <p className="text-sm text-muted-foreground">Configure classpath for external libraries and dependencies</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h5 className="font-semibold">Unit Testing</h5>
                    <p className="text-sm text-muted-foreground">Execute JUnit tests and custom test cases</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <h5 className="font-semibold">Code Quality Analysis</h5>
                    <p className="text-sm text-muted-foreground">Check coding standards and detect potential issues</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Output Files Generated
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                After compilation and testing, AutoLab generates various output files:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link to="/file-types/output/pdf">
                  <div className="space-y-2 p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded bg-red-500 flex items-center justify-center">
                        <span className="text-white font-bold text-xs">PDF</span>
                      </div>
                      <div>
                        <h5 className="font-semibold">Test Report</h5>
                        <p className="text-sm text-muted-foreground">Comprehensive compilation and test results</p>
                      </div>
                    </div>
                  </div>
                </Link>
                
                <Link to="/file-types/output/txt">
                  <div className="space-y-2 p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded bg-gray-400 flex items-center justify-center">
                        <span className="text-white font-bold text-xs">TXT</span>
                      </div>
                      <div>
                        <h5 className="font-semibold">Program Output</h5>
                        <p className="text-sm text-muted-foreground">Console output and execution results</p>
                      </div>
                    </div>
                  </div>
                </Link>
                
                <Link to="/file-types/output/log">
                  <div className="space-y-2 p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded bg-amber-500 flex items-center justify-center">
                        <span className="text-white font-bold text-xs">LOG</span>
                      </div>
                      <div>
                        <h5 className="font-semibold">Compilation Logs</h5>
                        <p className="text-sm text-muted-foreground">Detailed compilation and error logs</p>
                      </div>
                    </div>
                  </div>
                </Link>
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
                <li>• Follow Java naming conventions (camelCase for methods, PascalCase for classes)</li>
                <li>• Include proper package declarations</li>
                <li>• Use meaningful class and method names</li>
                <li>• Add comprehensive Javadoc comments</li>
                <li>• Handle exceptions appropriately</li>
                <li>• Include a main method if required for execution</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default JavaPage;
