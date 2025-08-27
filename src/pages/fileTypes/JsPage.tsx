
import { ArrowLeft, Upload, Play, CheckCircle, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const JsPage = () => {
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
              <img src="/logos/javascript.svg" alt="JavaScript" className="w-10 h-10" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">JavaScript Files</h1>
              <p className="text-muted-foreground">Learn how to submit JavaScript assignments</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                How to Submit JavaScript Files
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                JavaScript files are executed and tested with Node.js runtime environment and comprehensive testing frameworks.
              </p>
              
              <div className="space-y-3">
                <h4 className="font-semibold">Supported File Types:</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">.js</Badge>
                  <Badge variant="secondary">.mjs</Badge>
                  <Badge variant="secondary">.json</Badge>
                  <Badge variant="secondary">package.json</Badge>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Submission Methods:</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Single .js source file</li>
                  <li>Multiple JavaScript files with modules</li>
                  <li>Node.js projects with package.json</li>
                  <li>Frontend JavaScript with HTML/CSS</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="h-5 w-5" />
                Execution & Testing Process
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                
                <div className="flex items-start gap-3">
                  <div className="w-7 aspect-square rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h5 className="font-semibold">Syntax Validation</h5>
                    <p className="text-sm text-muted-foreground">
                      Parse JavaScript syntax and check for errors
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 aspect-square rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h5 className="font-semibold">Dependency Installation</h5>
                    <p className="text-sm text-muted-foreground">
                      Install npm packages from package.json if provided
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 aspect-square rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h5 className="font-semibold">Test Execution</h5>
                    <p className="text-sm text-muted-foreground">
                      Run Jest/Mocha tests and custom test cases
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 aspect-square rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h5 className="font-semibold">Performance Analysis</h5>
                    <p className="text-sm text-muted-foreground">
                      Measure execution time and memory usage
                    </p>
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
                After execution and testing, AutoLab generates various output files:
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
                        <p className="text-sm text-muted-foreground">Comprehensive test results and analysis</p>
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
                        <h5 className="font-semibold">Console Output</h5>
                        <p className="text-sm text-muted-foreground">Program output and console logs</p>
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
                        <h5 className="font-semibold">Execution Logs</h5>
                        <p className="text-sm text-muted-foreground">Detailed execution and error logs</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <FileText className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <span className="text-sm sm:text-base font-semibold">Example Code</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 rounded-lg p-4 overflow-x-auto overflow-y-auto max-h-[500px]">
                <pre className="text-sm">
                  <code>{`function sum(a, b) {
    return a + b;
}

// in place bubble sort
function bubble_sort(array,comparator){
  let swapped = false;
  do{
    swapped = false;
    for (let i=0; i < array.length - 1; i++){
      if(comparator(array[i],array[i+1]) == 1){
        const a=array[i], b=array[i+1];
        array[i+1] = a;
        array[i] = b;
        swapped = true;
      }
    }
  } while(swapped);

  return array;
}

function merge(left,right,comparator){
  let arr = []
  while (left.length && right.length) {
      if (comparator(left[0],right[0]) == -1) {
          arr.push(left.shift())  
      } else {
          arr.push(right.shift()) 
      }
  }
  return [ ...arr, ...left, ...right ]
}

function merge_sort(array,comparator){

  const half = array.length / 2;
  
  if(array.length < 2){
    return array;
  }
  const left = array.splice(0, half);

  return merge(merge_sort(left, comparator),
               merge_sort(array,comparator),
               comparator);
}

module.exports = {sum, bubble_sort, merge_sort};
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
                <li>• Use const/let instead of var for variable declarations</li>
                <li>• Follow consistent naming conventions (camelCase)</li>
                <li>• Add proper error handling with try-catch blocks</li>
                <li>• Include JSDoc comments for functions</li>
                <li>• Use modern ES6+ features appropriately</li>
                <li>• Include package.json for npm dependencies</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default JsPage;