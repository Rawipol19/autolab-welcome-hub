
import { ArrowLeft, Upload, Play, CheckCircle, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const CPage = () => {
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
            <div className="w-16 h-16 rounded-lg bg-white-600 flex items-center justify-center">
              <img src="/logos/c.svg" alt="C" className="w-10 h-10" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">C Files</h1>
              <p className="text-muted-foreground">Learn how to submit C programming assignments</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                How to Submit C Files
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                C files are compiled and tested with gcc compiler, supporting both single files and complex multi-file projects.
              </p>
              
              <div className="space-y-3">
                <h4 className="font-semibold">Supported File Types:</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">.c</Badge>
                  <Badge variant="secondary">.h</Badge>
                  <Badge variant="secondary">Makefile</Badge>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Submission Methods:</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Single .c source file</li>
                  <li>Multiple C files with header files</li>
                  <li>Makefile-based projects</li>
                  <li>Static and dynamic library projects</li>
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
                    <p className="text-sm text-muted-foreground">Compile C source files using gcc with appropriate flags</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h5 className="font-semibold">Memory Testing</h5>
                    <p className="text-sm text-muted-foreground">Check for memory leaks and buffer overflows using valgrind</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h5 className="font-semibold">Unit Testing</h5>
                    <p className="text-sm text-muted-foreground">Execute test cases with input validation and output checking</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <h5 className="font-semibold">Performance Analysis</h5>
                    <p className="text-sm text-muted-foreground">Measure execution time and memory usage</p>
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
                        <h5 className="font-semibold">Compilation Report</h5>
                        <p className="text-sm text-muted-foreground">Detailed compilation and test results</p>
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
                        <p className="text-sm text-muted-foreground">Detailed compilation warnings and errors</p>
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
                <FileText className="h-5 w-5" />
                Example Code
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm">
                  <code>{`#include <assert.h>

#include <iostream>
#include <vector>

using namespace std;

bool in_vec(vector<int>& arr, int n) {
  for (auto i : arr) {
    if (i == n) return true;
  }
  return false;
}

int main() {
  // turn off IO buffering
  setvbuf(stdin, NULL, _IONBF, 0);
  setvbuf(stdout, NULL, _IONBF, 0);

  int N;
  int res;
  int num_found = 0;
  bool is_min;

  cin >> N;

  vector<int> arr(N, -1);

  while (num_found < N) {
    // find the num_found smallest element
    for (int i = 0; i < N; i++) {
      if (in_vec(arr, i)) continue;
      is_min = true;

      // let i be the new smallest element candidate
      for (int j = 0; j < N; j++) {
        if (i == j) continue;
        if (in_vec(arr, j)) continue;
        cout << i << " " << j << endl;
        cin >> res;
        if (res != -1) {
          is_min = false;
          break;
        }
      }

      if (is_min) {
        arr.at(num_found) = i;
        num_found++;
        break;
      }
    }
  }

  /* Answer is ready */
  cout << -1 << endl;

  /* Output answer */
  for (int i = 0; i < N; i++) {
    cout << arr.at(i) << " ";
  }
  cout << endl;

  return 0;
}`}</code>
                </pre>
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
                <li>• Follow consistent indentation and formatting</li>
                <li>• Include proper header guards in .h files</li>
                <li>• Use meaningful variable and function names</li>
                <li>• Add clear comments explaining logic</li>
                <li>• Handle memory allocation and deallocation properly</li>
                <li>• Check return values and handle errors appropriately</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CPage;
