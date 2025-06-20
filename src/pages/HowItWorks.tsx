
import { ArrowLeft, Upload, Code, CheckCircle, Brain, Zap, Shield, Target, Users, Eye } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.location.href = '/'}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
            <div className="h-6 w-px bg-border" />
            <h1 className="text-xl font-semibold text-foreground">How AutoLab Works</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Understanding AutoLab's Process
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover how our RAI-enhanced autograding system revolutionizes code assessment 
              through intelligent automation and comprehensive feedback.
            </p>
          </div>
        </div>
      </section>

      {/* Three-Step Process */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">The AutoLab Process</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Three simple steps that deliver comprehensive results
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="relative">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Upload className="h-8 w-8 text-primary-foreground" />
                </div>
                <Badge className="absolute top-4 right-4 bg-primary">Step 1</Badge>
                <CardTitle className="text-xl">Upload Your Code</CardTitle>
                <CardDescription>
                  Students submit their assignments through our secure platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Drag and drop file upload</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Multiple file format support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Automatic validation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Secure file handling</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-secondary-foreground" />
                </div>
                <Badge className="absolute top-4 right-4 bg-secondary">Step 2</Badge>
                <CardTitle className="text-xl">RAI Analysis</CardTitle>
                <CardDescription>
                  Advanced AI performs comprehensive code analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Brain className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Intelligent code structure analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Security vulnerability detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Performance optimization suggestions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Eye className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Fair and unbiased assessment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-accent-foreground" />
                </div>
                <Badge className="absolute top-4 right-4 bg-accent">Step 3</Badge>
                <CardTitle className="text-xl">Instant Feedback</CardTitle>
                <CardDescription>
                  Comprehensive results and improvement suggestions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Zap className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Real-time test results</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Detailed performance metrics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Brain className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Personalized improvement suggestions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Learning progress tracking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why AutoLab Works Well */}
      <section className="py-16 bg-secondary/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Why AutoLab Works So Well</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The science and technology behind our superior autograding system
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Advanced RAI Technology
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Brain className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Machine Learning Models</h4>
                    <p className="text-muted-foreground text-sm">
                      Our proprietary ML models are trained on millions of code samples, 
                      enabling deep understanding of programming patterns and best practices.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Sandboxed Execution</h4>
                    <p className="text-muted-foreground text-sm">
                      All code runs in isolated, secure environments that prevent malicious 
                      code execution while ensuring consistent testing conditions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Parallel Processing</h4>
                    <p className="text-muted-foreground text-sm">
                      Distributed computing infrastructure enables simultaneous processing 
                      of multiple submissions with sub-second response times.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Proven Results</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Grading Time Reduction</span>
                    <span className="text-2xl font-bold text-primary">80%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Feedback Quality Improvement</span>
                    <span className="text-2xl font-bold text-secondary">95%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Student Satisfaction</span>
                    <span className="text-2xl font-bold text-accent">92%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Error Detection Accuracy</span>
                    <span className="text-2xl font-bold text-primary">98%</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Advantages */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Technical Advantages</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              What sets AutoLab apart from traditional autograding systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Eye className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Context-Aware Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Unlike simple pattern matching, our RAI understands code context, 
                  intent, and can evaluate multiple correct solutions to the same problem.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Target className="h-8 w-8 text-secondary mb-2" />
                <CardTitle className="text-lg">Adaptive Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  The system learns from each submission, continuously improving 
                  its assessment accuracy and feedback quality over time.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Users className="h-8 w-8 text-accent mb-2" />
                <CardTitle className="text-lg">Scalable Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Built to handle thousands of simultaneous submissions without 
                  performance degradation, perfect for large-scale educational institutions.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Experience AutoLab?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of educators and students who are already benefiting 
            from our advanced autograding technology.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.location.href = '/'}>
              Back to Home
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
