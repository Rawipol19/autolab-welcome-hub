
import { ArrowLeft, FileText, Download, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link, useNavigate } from 'react-router-dom';

const PdfPage = () => {
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
            <div className="w-16 h-16 rounded-lg bg-red-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">.pdf</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">PDF Test Reports</h1>
              <p className="text-muted-foreground">Comprehensive test results and analysis</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                About PDF Reports
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                PDF reports provide comprehensive documentation of your code's compilation, testing, and performance analysis. 
                These reports are automatically generated after AutoLab processes your submission.
              </p>
              
              <div className="space-y-3">
                <h4 className="font-semibold">Report Contents:</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Compilation status and error messages</li>
                  <li>Test case results and pass/fail status</li>
                  <li>Performance metrics and benchmarks</li>
                  <li>Code quality analysis and suggestions</li>
                  <li>Memory usage and execution time statistics</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                How to Read Your Report
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold leading-none">1</div>
                  <div>
                    <h5 className="font-semibold">Summary Section</h5>
                    <p className="text-sm text-muted-foreground">Overview of overall performance and final score</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold leading-none">2</div>
                  <div>
                    <h5 className="font-semibold">Compilation Results</h5>
                    <p className="text-sm text-muted-foreground">Detailed compilation status and any errors encountered</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold leading-none">3</div>
                  <div>
                    <h5 className="font-semibold">Test Cases</h5>
                    <p className="text-sm text-muted-foreground">Individual test case results with expected vs actual output</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold leading-none">4</div>
                  <div>
                    <h5 className="font-semibold">Performance Analysis</h5>
                    <p className="text-sm text-muted-foreground">Execution time, memory usage, and optimization suggestions</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="h-5 w-5" />
                Report Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Badge variant="secondary">Searchable Content</Badge>
                  <p className="text-sm text-muted-foreground">Find specific test cases or errors quickly</p>
                </div>
                
                <div className="space-y-2">
                  <Badge variant="secondary">Syntax Highlighting</Badge>
                  <p className="text-sm text-muted-foreground">Code snippets with proper formatting</p>
                </div>
                
                <div className="space-y-2">
                  <Badge variant="secondary">Downloadable</Badge>
                  <p className="text-sm text-muted-foreground">Save reports for future reference</p>
                </div>
                
                <div className="space-y-2">
                  <Badge variant="secondary">Printable Format</Badge>
                  <p className="text-sm text-muted-foreground">Professional layout for printing</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PdfPage;
