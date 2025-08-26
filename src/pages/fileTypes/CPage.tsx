
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
                  <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold leading-none">1</div>
                  <div>
                    <h5 className="font-semibold">Compilation Check</h5>
                    <p className="text-sm text-muted-foreground">Compile C source files using gcc with appropriate flags</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold leading-none">2</div>
                  <div>
                    <h5 className="font-semibold">Memory Testing</h5>
                    <p className="text-sm text-muted-foreground">Check for memory leaks and buffer overflows using valgrind</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold leading-none">3</div>
                  <div>
                    <h5 className="font-semibold">Unit Testing</h5>
                    <p className="text-sm text-muted-foreground">Execute test cases with input validation and output checking</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold leading-none">4</div>
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
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <FileText className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <span className="text-sm sm:text-base font-semibold">Example Code: oracle.cpp (Part of the Tar File for Teachers)</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 rounded-lg p-4 overflow-x-auto overflow-y-auto max-h-[500px]">
                <pre className="text-sm">
                  <code>{`#include <math.h>

#include <algorithm>
#include <iostream>
#include <random>
#include <sstream>
#include <vector>

#define N 10

using namespace std;

int main() {
  auto rng = default_random_engine{};
  vector<int> data, answer(N);
  vector<int> user_answer;
  int query_i, query_j;
  int next_idx;
  int n;
  int n_queries = 0;
  string answer_string;
  string array_string;
  string correctness;
  string queries;
  ostringstream stream;

  // turn off IO buffering
  setvbuf(stdin, NULL, _IONBF, 0);
  setvbuf(stdout, NULL, _IONBF, 0);

  for (int i = 0; i < N; i++) {
    data.push_back(i);
  }

  shuffle(begin(data), end(data), rng);

  for (int i = 0; i < N; i++) {
    stream << data.at(i) << " ";
  }
  array_string = stream.str();
  stream.str("");
  stream.clear();

  for (int i = 0; i < N; i++) {
    answer[data.at(i)] = i;
  }

  for (int i = 0; i < N; i++) {
    stream << answer.at(i) << " ";
  }

  answer_string = stream.str();

  // Represents number of elements
  cout << N << endl;
  n = N;

  // wait for user queries of comparison between element at index i and index j
  // exits loop when user sends non-integer, i.e DONE
  while (cin >> query_i) {
    if (query_i == -1) {
      break;
    }
    cin >> query_j;
    if (query_i < 0 || query_j < 0 || query_i >= N || query_j >= N) {
      cout << "INVALID" << endl;
      continue;
    }

    if (data[query_i] == data[query_j])
      cout << 0 << endl;
    else if (data[query_i] < data[query_j])
      cout << -1 << endl;
    else
      cout << 1 << endl;

    n_queries++;
  }

  cout << "AWAITING_ANSWER" << endl;

  // user outputs sorted array of N indices as answer
  while (n-- && cin >> next_idx) {
    user_answer.push_back(next_idx);
  }

  /* Check if user answer is correct */
  int c = 0;
  bool success = true;
  for (auto idx : user_answer) {
    if (data[idx] != c) {
      success = false;
      break;
    }
    c++;
  }
  if (c != N) success = false;

  // Magic constant to indicate to driver that what comes next should be
  // regarded as autograding result and not piped back to student binary
  cout << "AUTOGRADER_COMPLETE" << endl;

  // query score scales inversely with number of queries made,
  // ideally expecting N log(N) solution up to a scaling constant C
  float C = 3.;
  float query_score = min(C * (N * log(N) * 100. / n_queries), 100.);
  if (success) {
    correctness =
        "{\"correctness\": 100, \"query_score\": " + to_string(query_score) +
        string("}");
  } else {
    correctness = "{\"correctness\": 0, \"query_score\": 0 }";
    queries = "{\"query_score\": 0}";
  }

  cout << "{\"scores\": " + correctness +
              ", \"queries\": " + to_string(n_queries) +
              ", \"correct_answer\": \"" + answer_string +
              "\", \"array\": \"" + array_string + "\"}"
       << endl;
}
}`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <FileText className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <span className="text-sm sm:text-base font-semibold">Example Code: sorter.cpp (Student Assignment Test Cases Code)</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 rounded-lg p-4 overflow-x-auto overflow-y-auto max-h-[500px]">
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