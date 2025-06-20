import { useState } from 'react';
import { Upload, CheckCircle, FileText, Code, Archive, Zap, Shield, Users, Brain, Eye, Target, Github, MapPin, Mail } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [selectedStep, setSelectedStep] = useState(0);

  const steps = [
    {
      icon: Upload,
      title: "Upload Your Code",
      description: "Students submit their assignments through our secure platform",
      detail: "Simply drag and drop your files or browse to upload. Our system accepts multiple file formats and automatically validates submissions."
    },
    {
      icon: Code,
      title: "Automated Testing",
      description: "Your code runs through comprehensive test suites",
      detail: "Advanced testing infrastructure runs your code against predefined test cases, checking functionality, performance, and edge cases."
    },
    {
      icon: CheckCircle,
      title: "Instant Feedback",
      description: "Receive detailed results and feedback immediately",
      detail: "Get comprehensive reports including test results, performance metrics, code quality analysis, and actionable improvement suggestions."
    }
  ];

  const raiFeatures = [
    {
      icon: Brain,
      title: "Intelligent Code Analysis",
      description: "AI-powered analysis provides deeper insights into code quality, structure, and potential improvements beyond traditional testing.",
      benefits: [
        "Detects code patterns and anti-patterns",
        "Suggests optimization opportunities",
        "Identifies potential security vulnerabilities",
        "Analyzes code complexity and maintainability"
      ]
    },
    {
      icon: Eye,
      title: "Fair & Unbiased Assessment",
      description: "RAI ensures equitable evaluation by removing human bias and providing consistent, transparent grading criteria.",
      benefits: [
        "Standardized evaluation across all submissions",
        "Eliminates subjective grading variations",
        "Provides detailed justification for scores",
        "Ensures equal opportunity for all students"
      ]
    },
    {
      icon: Target,
      title: "Personalized Learning Insights",
      description: "Advanced analytics identify individual learning patterns and provide targeted recommendations for improvement.",
      benefits: [
        "Tracks learning progress over time",
        "Identifies knowledge gaps and strengths",
        "Suggests personalized study materials",
        "Adapts difficulty based on student performance"
      ]
    }
  ];

  const fileTypes = [
    {
      category: "Programming Languages",
      files: [
        { name: "Python", extension: ".py", color: "bg-blue-500" },
        { name: "Java", extension: ".java", color: "bg-orange-500" },
        { name: "C++", extension: ".cpp", color: "bg-green-500" },
        { name: "JavaScript", extension: ".js", color: "bg-yellow-500" },
        { name: "C", extension: ".c", color: "bg-gray-500" },
        { name: "Go", extension: ".go", color: "bg-cyan-500" }
      ]
    },
    {
      category: "Archives & Documents",
      files: [
        { name: "ZIP Archive", extension: ".zip", color: "bg-purple-500" },
        { name: "TAR Archive", extension: ".tar", color: "bg-indigo-500" },
        { name: "YAML Configuration", extension: ".yml", color: "bg-teal-500" }
      ]
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get results in seconds with our optimized testing infrastructure"
    },
    {
      icon: Shield,
      title: "Secure & Isolated",
      description: "All code runs in sandboxed environments for maximum security"
    },
    {
      icon: Users,
      title: "Multi-User Support",
      description: "Built for classrooms with comprehensive user management"
    }
  ];

  const handleFileTypeClick = (fileName: string, category: string) => {
    // Convert file name to route-friendly format
    const routeName = fileName.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Map specific file types to their routes
    const routeMap: { [key: string]: string } = {
      'python': '/file-types/python',
      'java': '/file-types/java',
      'c++': '/file-types/cpp',
      'javascript': '/file-types/javascript',
      'c': '/file-types/c',
      'go': '/file-types/go',
      'ziparchive': '/file-types/zip',
      'tararchive': '/file-types/tar',
      'yamlconfiguration': '/file-types/yml'
    };

    const route = routeMap[routeName];
    if (route) {
      window.location.href = route;
    }
  };

  const scrollToRAI = () => {
    const raiSection = document.querySelector('#rai-section');
    if (raiSection) {
      raiSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:50px_50px]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="p-3 bg-white rounded-2xl shadow-lg">
                <img 
                  src="/lovable-uploads/d73a6f39-361f-4c1f-8cf4-a7419e7ce0a8.png" 
                  alt="University at Buffalo Logo" 
                  className="h-12 w-12"
                />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AUTOLAB
            </h1>
            <p className="mt-2 text-xl text-primary font-semibold">
              by University at Buffalo
            </p>
            <p className="mt-4 text-lg font-medium text-secondary">
              RAI based Autolab
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
              The intelligent autograding system that revolutionizes how educators assess programming assignments. 
              Fast, secure, and comprehensive feedback for students and instructors.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* RAI Section */}
      <section id="rai-section" className="py-24 bg-gradient-to-br from-accent/10 to-primary/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-primary to-accent rounded-2xl">
                <Brain className="h-12 w-12 text-primary-foreground" />
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Responsible AI (RAI) Integration
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              AutoLab leverages cutting-edge Responsible AI technology to provide fair, intelligent, and comprehensive 
              code assessment that goes beyond traditional automated testing.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {raiFeatures.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm border-primary/20">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-4">
                      <FeatureIcon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl text-primary">{feature.title}</CardTitle>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="bg-card rounded-2xl p-8 border border-primary/20 shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
              How RAI Enhances AutoLab
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Traditional Autograding vs RAI-Enhanced</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                    <p className="text-sm font-medium text-secondary mb-2">Traditional Approach:</p>
                    <p className="text-sm text-muted-foreground">
                      Basic pass/fail testing with limited feedback on code structure and quality.
                    </p>
                  </div>
                  <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <p className="text-sm font-medium text-primary mb-2">RAI-Enhanced AutoLab:</p>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive analysis including code quality, style, efficiency, and personalized improvement suggestions.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Key RAI Benefits</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Reduces grading time by 80% while improving feedback quality</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Ensures consistent evaluation standards across all submissions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Provides actionable insights for student improvement</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Adapts to different programming styles and approaches</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-secondary/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How AutoLab Works
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Three simple steps to automated grading excellence
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Steps Navigation */}
            <div className="space-y-4">
              {steps.map((step, index) => {
                const StepIcon = step.icon;
                return (
                  <Card 
                    key={index}
                    className={`cursor-pointer transition-all duration-300 ${
                      selectedStep === index 
                        ? 'border-primary shadow-lg scale-105' 
                        : 'hover:border-primary/50 hover:shadow-md'
                    }`}
                    onClick={() => setSelectedStep(index)}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-lg ${
                          selectedStep === index ? 'bg-primary text-primary-foreground' : 'bg-secondary'
                        }`}>
                          <StepIcon className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{step.title}</CardTitle>
                          <CardDescription>{step.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>

            {/* Step Detail */}
            <div className="lg:pl-8">
              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary rounded-xl">
                      {steps[selectedStep] && (() => {
                        const SelectedStepIcon = steps[selectedStep].icon;
                        return <SelectedStepIcon className="h-8 w-8 text-primary-foreground" />;
                      })()}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{steps[selectedStep]?.title}</CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        Step {selectedStep + 1}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {steps[selectedStep]?.detail}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Supported File Types Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Supported File Types
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              AutoLab supports a wide range of programming languages and file formats
            </p>
          </div>

          <div className="space-y-12">
            {fileTypes.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                  {category.category}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {category.files.map((file, index) => (
                    <Card 
                      key={index}
                      className="group hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                      onClick={() => handleFileTypeClick(file.name, category.category)}
                    >
                      <CardContent className="p-6 text-center">
                        <div className={`w-12 h-12 rounded-lg ${file.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                          <FileText className="h-6 w-6 text-white" />
                        </div>
                        <h4 className="font-semibold text-foreground">{file.name}</h4>
                        <p className="text-sm text-muted-foreground font-mono">{file.extension}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-secondary/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Choose AutoLab?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Built for modern education with cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <FeatureIcon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* RAI Based AutoLab */}
            <div>
              <h3 className="text-lg font-semibold mb-4">RAI Based AutoLab</h3>
              <div className="space-y-2 text-sm text-primary-foreground/80">
                <p>University at Buffalo</p>
                <p>Computer Science &amp; Engineering</p>
                <p>Buffalo, NY 14260</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2 text-sm">
                <a href="/" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">Home</a>
                <button 
                  onClick={scrollToRAI}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                >
                  Features
                </button>
                <a href="/how-it-works" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">How It Works</a>
                <a href="/about" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">About</a>
                <a 
                  href="https://docs.autolabproject.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">Documentation</a>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <div className="space-y-2 text-sm">
                <a 
                  href="https://github.com/amirnd51/RAID" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  GitHub Repository
                </a>
                <a 
                  href="https://cse510.xlabub.com/slides/lecture2.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  API Documentation
                </a>
                <a
                  href="https://docs.autolabproject.com/instructors/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  User Guide
                </a>
                <a href="#support" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">Support</a>
              </div>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="space-y-2 text-sm">
                <a 
                  href="mailto:support@buffalo.edu" 
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact Us
                </a>
                <a href="#team" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">Research Team</a>
                <a href="#publications" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">Publications</a>
                <a href="#news" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">News &amp; Updates</a>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 mt-12 text-center">
            <p className="text-sm text-primary-foreground/60">
              © 2025 RAI Based AutoLab - University at Buffalo. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
