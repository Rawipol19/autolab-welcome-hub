
import { ArrowLeft, Upload, Play, CheckCircle, FileText } from 'lucide-react';
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
            <div className="w-16 h-16 rounded-lg bg-white-500 flex items-center justify-center">
              <img src="/logos/yaml.svg" alt="YAML" className="w-10 h-10" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Configuration Files</h1>
              <p className="text-muted-foreground">Test parameters and build configurations</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                About YAML Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                YAML configuration files define the testing environment, build parameters, and execution settings 
                used by AutoLab to process your code submissions. These files ensure consistent and reproducible testing.
              </p>
              
              <div className="space-y-3">
                <h4 className="font-semibold">Configuration Types:</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Build configuration and compiler settings</li>
                  <li>Test case definitions and parameters</li>
                  <li>Environment variables and dependencies</li>
                  <li>Timeout limits and resource constraints</li>
                  <li>Grading rubric and scoring criteria</li>
                </ul>
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
                  <code>{`rai:
  version: 0.2 
  image: autograderpython
resources:
  cpu:
    architecture: arm64 
  gpu:
    architecture: Ampere 
    count: 1
  network: false
clean: 
  rm -rf *~ src
commands:
  
  build:
    # Extract files and set up directory structure
    - mkdir -p /build/work
    - tar -xvf /src/autograde.tar -C /build/work
    - cp /src/sorter.cpp /build/work/
    
    # Compile the necessary files
    - g++ -std=c++11 -o ./work/oracle ./work/oracle.cpp
    - g++ -std=c++11 -o ./work/sorter ./work/sorter.cpp
    
    # Make the checker executable
    - chmod +x /build/work/interactive_checker.py
    
    # Run the checker and ensure output.log is created
    - python3 /build/work/interactive_checker.py
    
    # Create a direct JSON output for autograder
    - |
      echo "{\"score\": 100, \"feedback\": \"Autograder ran successfully\"}" > /build/autoresult.json`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                YAML Structure
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h5 className="font-semibold">Environment Setup</h5>
                    <p className="text-sm text-muted-foreground">Runtime environment and dependency specifications</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h5 className="font-semibold">Build Instructions</h5>
                    <p className="text-sm text-muted-foreground">Compilation commands and build parameters</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h5 className="font-semibold">Test Configuration</h5>
                    <p className="text-sm text-muted-foreground">Test cases, input data, and expected outputs</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <h5 className="font-semibold">Scoring Rules</h5>
                    <p className="text-sm text-muted-foreground">Point allocation and grading criteria</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="h-5 w-5" />
                Common Configurations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Badge variant="secondary">Timeout Settings</Badge>
                    <p className="text-sm text-muted-foreground">Maximum execution time for tests</p>
                  </div>
                  
                  <div className="space-y-2">
                    <Badge variant="secondary">Memory Limits</Badge>
                    <p className="text-sm text-muted-foreground">Resource constraints for program execution</p>
                  </div>
                  
                  <div className="space-y-2">
                    <Badge variant="secondary">Compiler Flags</Badge>
                    <p className="text-sm text-muted-foreground">Optimization and debugging options</p>
                  </div>
                  
                  <div className="space-y-2">
                    <Badge variant="secondary">Test Data</Badge>
                    <p className="text-sm text-muted-foreground">Input files and expected output specifications</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default YmlPage;
