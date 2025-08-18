import { ArrowLeft, Upload, Play, CheckCircle, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const RustPage = () => {
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
              <img src="/logos/rust.svg" alt="Rust" className="w-10 h-10" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Rust Files</h1>
              <p className="text-muted-foreground">Learn how to submit Rust assignments</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                How to Submit Rust Files
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Rust files (.rs) are supported for systems programming assignments. 
                Here's everything you need to know about submitting Rust projects:
              </p>
              
              <div className="space-y-3">
                <h4 className="font-semibold">Supported File Types:</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">.rs</Badge>
                  <Badge variant="secondary">Cargo.toml</Badge>
                  <Badge variant="secondary">Cargo.lock</Badge>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Submission Methods:</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Single .rs file upload</li>
                  <li>Complete Cargo project as ZIP archive</li>
                  <li>Multiple Rust files with Cargo.toml</li>
                  <li>Rust workspace projects</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="h-5 w-5" />
                Testing Process
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                When you submit Rust files, AutoLab will:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h5 className="font-semibold">Syntax Validation</h5>
                    <p className="text-sm text-muted-foreground">Check for Rust syntax errors and borrow checker compliance</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h5 className="font-semibold">Dependency Resolution</h5>
                    <p className="text-sm text-muted-foreground">Install dependencies specified in Cargo.toml</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h5 className="font-semibold">Compilation</h5>
                    <p className="text-sm text-muted-foreground">Compile using cargo build with optimization flags</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <h5 className="font-semibold">Test Execution</h5>
                    <p className="text-sm text-muted-foreground">Run cargo test and custom test cases</p>
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
                        <h5 className="font-semibold">Execution Logs</h5>
                        <p className="text-sm text-muted-foreground">Detailed compilation and execution logs</p>
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
              <div className="bg-muted/50 rounded-lg p-4 overflow-x-auto overflow-y-auto max-h-[500px]">
                <pre className="text-sm">
                  <code>{`fn mergetwo(array1: Vec<i32>, array2: Vec<i32>) -> Vec<i32> {
    let (mut i, mut j) = (0, 0);
    let mut sorted:Vec<i32> = Vec::new();

    while i < array1.len() && j < array2.len() {
        if array1[i] < array2[j] {
            sorted.push(array1[i]);
            i += 1;
        } else {
            sorted.push(array2[j]);
            j += 1;
        }
    }

    while i < array1.len() {
        sorted.push(array1[i]);
        i += 1;
    }

    while j < array2.len() {
        sorted.push(array2[j]);
        j += 1;
    }
    return sorted;
}

fn reference_mergesort(input: &Vec<i32>, start: usize, end: usize) -> Vec<i32> {

    if start == end {
        let mut arr: Vec<i32> = Vec::new();
        arr.push(input[start]);
        return arr;
    }
    let mid: usize = start + (end-start) / 2;

    let arr1: Vec<i32> = reference_mergesort(&input, start, mid);
    let arr2: Vec<i32> = reference_mergesort(&input, mid+1, end);

    let output: Vec<i32> = mergetwo(arr1, arr2);

    return output;

}

pub fn mergesort(input: &Vec<i32>) -> Vec<i32> {
    let end: usize = input.len() -1;
    return reference_mergesort(&input, 0, end);
}
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
                <li>• Use proper Rust naming conventions (snake_case for variables and functions)</li>
                <li>• Include comprehensive unit tests with #[test]</li>
                <li>• Document your code with /// comments for public APIs</li>
                <li>• Handle errors explicitly using Result and Option types</li>
                <li>• Use clippy for additional code quality checks</li>
                <li>• Keep your Cargo.toml dependencies minimal and well-documented</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RustPage;