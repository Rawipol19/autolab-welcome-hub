
import { ArrowLeft, Upload, Play, CheckCircle, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const PythonPage = () => {
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
              <img src="/logos/python.svg" alt="Python" className="w-10 h-10" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Python Files</h1>
              <p className="text-muted-foreground">Learn how to submit Python assignments</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                How to Submit Python Files
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Python files (.py) are one of the most commonly supported file types in AutoLab. 
                Here's everything you need to know about submitting Python assignments:
              </p>
              
              <div className="space-y-3">
                <h4 className="font-semibold">Supported File Types:</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">.py</Badge>
                  <Badge variant="secondary">.ipynb (Jupyter Notebooks)</Badge>
                  <Badge variant="secondary">.pyw</Badge>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Submission Methods:</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Single .py file upload</li>
                  <li>Multiple Python files as a ZIP archive</li>
                  <li>Jupyter Notebook files (.ipynb)</li>
                  <li>Python packages with requirements.txt</li>
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
              <div className="space-y-4">
                
                <div className="flex items-start gap-3">
                  <div className="w-7 aspect-square rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h5 className="font-semibold">Syntax Validation</h5>
                    <p className="text-sm text-muted-foreground">
                      Check for Python syntax errors and basic code structure
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
                      Install required packages from requirements.txt (if provided)
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
                      Run your code against predefined test cases
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
      <span className="text-sm sm:text-base font-semibold">Example Code: Interactive_checker.py (Part of the Tar File for Teachers)</span>
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
    <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
      <FileText className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
      <span className="text-sm sm:text-base font-semibold">Example Code: solvesCryptarithm.py (Students Assignment Code)</span>
    </CardTitle>
  </CardHeader>
  <CardContent>
    <div className="bg-muted/50 rounded-lg p-4 overflow-x-auto overflow-y-auto max-h-[300px]">
      <pre className="text-sm">
        <code>{`def wordToInt(word, solution):
    result = 0
    for c in word:
        digit = solution.find(c)
        if (digit < 0):
            return None
        result = 10*result + digit
    return result

def solvesCryptarithm(puzzle, solution):
    plusIndex = puzzle.find(' + ')
    equalsIndex = puzzle.find(' = ')
    x1 = wordToInt(puzzle[0:plusIndex], solution)
    x2 = wordToInt(puzzle[3+plusIndex:equalsIndex], solution)
    x3 = wordToInt(puzzle[3+equalsIndex:], solution)
    return (x1 != None) and (x2 != None) and (x3 != None) and (x1 + x2 == x3)`
    
    }</code>
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
                <li>• Include a requirements.txt file for external dependencies</li>
                <li>• Follow PEP 8 style guidelines for better code readability</li>
                <li>• Add proper docstrings and comments to your functions</li>
                <li>• Test your code locally before submission</li>
                <li>• Use meaningful variable and function names</li>
                <li>• Handle edge cases and error conditions</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PythonPage;