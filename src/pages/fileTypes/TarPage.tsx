
import { ArrowLeft, Upload, Play, CheckCircle, FileText } from 'lucide-react';
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
            <div className="w-16 h-16 rounded-lg bg-white-500 flex items-center justify-center">
              <img src="https://cdn-icons-png.flaticon.com/512/29/29575.png" alt="Tar" className="w-10 h-10" />
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
                  <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold leading-none">1</div>
                  <div>
                    <h5 className="font-semibold">Archive Extraction</h5>
                    <p className="text-sm text-muted-foreground">Extract TAR archive contents while preserving file permissions</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold leading-none">2</div>
                  <div>
                    <h5 className="font-semibold">File Structure Analysis</h5>
                    <p className="text-sm text-muted-foreground">Analyze directory structure and identify project files</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold leading-none">3</div>
                  <div>
                    <h5 className="font-semibold">Build & Compilation</h5>
                    <p className="text-sm text-muted-foreground">Execute build scripts and compile source code as needed</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold leading-none">4</div>
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

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Example of Tar File Structure and Components
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Tar file should include any file that is part of the grading system</li>
                <li>• This include multiple teacher file that run the student assignment</li>
                <li>• Grading sorter.cpp which is a student file need a file for checking the correctness of the work and another file creating an output.log for display </li>
                <li>• These two files are interactive_checker.py and oracle.cpp</li>
                <li>• Interactive_checker.py need for generating output.log and oracle.cpp check the correctnes and give the score to the interactive_checker.py</li>
                <li>• Compress these two file into a tar file and upload them into autolab section suggested</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <FileText className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
      Tar File Component: Interactive_checker.py
    </CardTitle>
  </CardHeader>
  <CardContent>
    <div className="bg-muted/50 rounded-lg p-4 overflow-x-auto overflow-y-auto max-h-[500px]">
      <pre className="text-sm">
        <code>{`#!/usr/bin/python3
import subprocess
import os
import fcntl
from subprocess import PIPE
from datetime import datetime, timedelta

#Buffalo time
us_eastern_time = datetime.utcnow() - timedelta(hours=4)

ORACLE_BINARY = "./work/oracle"
STUDENT_BINARY = "./work/sorter"

VERBOSE = True # change to False to disable interaction logs

# Create output.log file at the beginning with valid initial JSON
os.makedirs("/build", exist_ok=True)
with open("/build/output.log", "w") as f:
    f.write('{"status": "running", "scores": {"correctness": 0, "query_score": 0}}')

class bcolors:
    HEADER = '033[95m'
    OKBLUE = '033[94m'
    OKCYAN = '033[96m'
    OKGREEN = '033[92m'
    WARNING = '033[93m'
    FAIL = '033[91m'
    ENDC = '033[0m'
    BOLD = '033[1m'
    UNDERLINE = '033[4m'

# Reads a line from student program
def read(proc):
    return proc.stdout.readline().decode("utf-8").strip()

# Outputs a line to student program
def write(proc, message):
    proc.stdin.write(f"{message.strip()}\n".encode("utf-8"))
    proc.stdin.flush()

def interactive_checker():
    try:
        oracle_proc = subprocess.Popen(ORACLE_BINARY, stdin=PIPE,
                                stdout=PIPE, stderr=PIPE)
        student_proc = subprocess.Popen(STUDENT_BINARY, stdin=PIPE,
                                stdout=PIPE, stderr=PIPE)
    except Exception as e:
        # Update output.log with error information
        with open("/build/output.log", "w") as f:
            f.write(f'{{"status": "error", "message": "Failed to start processes: {str(e)}"}}')
        return

    while True:
        data = read(oracle_proc)

        if "AUTOGRADER_COMPLETE" in data:
            print(f"Oracle has judged student answer")
            # Get the actual result JSON from oracle
            autograder_result = read(oracle_proc)
            print(autograder_result)
            
            # Write the final result to output.log
            with open("/build/output.log", "w") as f:
                # Append grading metadata
                f.write("\\n\\nOracle has judged student answer\\n")
                f.write(f"Graded at: {us_eastern_time.strftime('%Y-%m-%d %H:%M:%S')} US/Eastern (approx)\\n")
                f.write("Grading Method:\\n")
                f.write("1. The oracle program sent a series of prompts to the student program.\\n")
                f.write("2. The student program responded to each prompt.\\n")
                f.write("3. Each response was compared to the oracle's expected output.\\n")
                f.write("4. Correctness score was calculated based on matching outputs.\\n")
                f.write("5. Query score (if applicable) was calculated based on the quality or structure of responses.\\n")
                f.write("6. Once all checks were complete, the oracle printed 'AUTOGRADER_COMPLETE' followed by the final result JSON.\\n")
                f.write("\\n")
                f.write(autograder_result)
            break

        write(student_proc, data)
        if VERBOSE:
            print(f"Relayed from {bcolors.OKGREEN}oracle{bcolors.ENDC} to {bcolors.OKBLUE}student{bcolors.ENDC}:\t\t{data}")
        query = read(student_proc)
        write(oracle_proc, query)
        if VERBOSE:
            print(f"Relayed from {bcolors.OKBLUE}student{bcolors.ENDC} to {bcolors.OKGREEN}oracle{bcolors.ENDC}:\t\t{query}")

if __name__ == "__main__":
    try:
        interactive_checker()
    except Exception as e:
        # Update output.log with any uncaught exceptions
        with open("/build/output.log", "w") as f:
            f.write(f'{{"status": "error", "message": "Unhandled exception: {str(e)}"}}')
`}</code>
      </pre>
    </div>
  </CardContent>
</Card>

<Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                Tar File Component: oracle.cpp 
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
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                Student Code: sorter.cpp
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

        </div>
      </div>
    </div>
  );
};

export default TarPage;