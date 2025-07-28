
import { useState, useEffect } from 'react';
import { Upload, CheckCircle, FileText, Code, Archive, Zap, Shield, Users, Brain, Eye, Target, Github, MapPin, Mail, Database, Container, ArrowRight, Workflow, Server, Network } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';

const Index = () => {
  const [selectedStep, setSelectedStep] = useState(0);
  const [isContentReady, setIsContentReady] = useState(false);

  // Handle scroll position restoration
  useEffect(() => {
    const restoreScrollPosition = () => {
      // Check for restore-scroll first (from footer navigation)
      const restorePosition = sessionStorage.getItem('restore-scroll');
      if (restorePosition && restorePosition !== '0') {
        setTimeout(() => {
          window.scrollTo({
            top: parseInt(restorePosition, 10),
            behavior: 'instant'
          });
          sessionStorage.removeItem('restore-scroll');
        }, 0);
        setIsContentReady(true);
        return;
      }

      // Then check for homepage-scroll-position (from file types)
      const savedScrollPosition = sessionStorage.getItem('homepage-scroll-position');
      if (savedScrollPosition && savedScrollPosition !== '0') {
        setTimeout(() => {
          window.scrollTo({
            top: parseInt(savedScrollPosition, 10),
            behavior: 'instant'
          });
          sessionStorage.removeItem('homepage-scroll-position');
        }, 0);
      }
      setIsContentReady(true);
    };

    restoreScrollPosition();
  }, []);

  // Save scroll position before navigating away
  const saveScrollPosition = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 0) {
      sessionStorage.setItem('homepage-scroll-position', currentScrollY.toString());
    }
  };

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
      title: "Job Processing & Management",
      description: "RAI handles the core job processing workflow, managing submission queues and coordinating with the execution environment.",
      benefits: [
        "Processes and assigns unique job IDs to submissions",
        "Manages job submission queue through RabbitMQ messaging",
        "Coordinates with Redis for job status tracking",
        "Monitors job completion status and results"
      ]
    },
    {
      icon: Container,
      title: "Docker Integration",
      description: "RAI seamlessly integrates with Docker containers to provide isolated and secure code execution environments.",
      benefits: [
        "Transports job IDs to Docker for containerized execution",
        "Ensures secure isolation for each code submission",
        "Manages container lifecycle and resource allocation",
        "Retrieves execution results and output files"
      ]
    },
    {
      icon: Database,
      title: "Data Management & Storage",
      description: "RAI coordinates with MongoDB and Minio for comprehensive data storage and file management throughout the grading process.",
      benefits: [
        "Stores job metadata and results in MongoDB",
        "Manages file uploads and project directories through Minio",
        "Handles output file storage and retrieval",
        "Maintains data consistency across the entire system"
      ]
    }
  ];

  const comparisonData = [
    {
      category: "Job Management Architecture",
      oldAutolab: {
        title: "Python-Based Tango Job Manager",
        description: "Traditional single-threaded Python job manager with limited scalability",
        features: [
          "Single Python process handling all job operations",
          "Sequential job processing with basic queue management",
          "Limited concurrent job execution capabilities",
          "Manual resource allocation and monitoring"
        ]
      },
      newAutolab: {
        title: "RAI-Orchestrated Intelligent System",
        description: "AI-driven job processing with advanced resource management and optimization",
        features: [
          "Multi-threaded RAI system with intelligent job scheduling",
          "Parallel job processing with dynamic load balancing",
          "Automated resource optimization based on job requirements",
          "Real-time monitoring and adaptive scaling"
        ]
      }
    },
    {
      category: "System Integration & Communication",
      oldAutolab: {
        title: "Basic Tango Integration",
        description: "Simple producer-consumer model with limited inter-service communication",
        features: [
          "Basic Redis-only communication between components",
          "Limited message passing capabilities",
          "Tight coupling between job manager and execution environment",
          "Manual error handling and recovery processes"
        ]
      },
      newAutolab: {
        title: "Advanced RAI Communication Hub",
        description: "Sophisticated multi-protocol communication with intelligent message routing",
        features: [
          "RabbitMQ for reliable message queuing and delivery",
          "Redis for high-performance caching and real-time updates",
          "Microservices architecture with loose coupling",
          "Automated error detection and recovery mechanisms"
        ]
      }
    },
    {
      category: "Data Storage & File Management",
      oldAutolab: {
        title: "Limited Storage Capabilities",
        description: "Basic file storage with minimal metadata and limited scalability",
        features: [
          "Simple file system storage with limited organization",
          "Basic metadata tracking for jobs and submissions",
          "Manual file cleanup and maintenance processes",
          "Limited backup and recovery capabilities"
        ]
      },
      newAutolab: {
        title: "Enterprise-Grade Storage Solution",
        description: "Comprehensive multi-tier storage with advanced file management",
        features: [
          "Minio object storage for scalable file management",
          "MongoDB for rich metadata and analytics capabilities",
          "Automated file lifecycle management and cleanup",
          "Built-in backup, versioning, and disaster recovery"
        ]
      }
    }
  ];

  const fileTypes = [
    {
      category: "Programming Languages",
      files: [
        { name: "Python", extension: ".py", color: "bg-blue-500", logo: "/logos/python.svg" },
        { name: "Java", extension: ".java", color: "bg-orange-500", logo: "/logos/java.svg" },
        { name: "C++", extension: ".cpp", color: "bg-green-500", logo: "/logos/cpp.svg" },
        { name: "JavaScript", extension: ".js", color: "bg-yellow-500", logo: "/logos/javascript.svg" },
        { name: "C", extension: ".c", color: "bg-gray-500", logo: "/logos/c.svg" },
        { name: "Go", extension: ".go", color: "bg-cyan-500", logo: "/logos/go.svg" },
        { name: "Rust", extension: ".rs", color: "bg-red-500", logo: "/logos/rust.svg" },
        { name: "SML", extension: ".sml", color: "bg-pink-500", logo: "/logos/sml.svg" }
      ]
    },
    {
      category: "Archives & Documents",
      files: [
        { name: "ZIP Archive", extension: ".zip", color: "bg-purple-500", logo: "/logos/zip.svg" },
        { name: "TAR Archive", extension: ".tar", color: "bg-indigo-500", logo: "/logos/tar.svg" },
        { name: "YAML Configuration", extension: ".yml", color: "bg-teal-500", logo: "/logos/yaml.svg" }
      ]
    }
  ];

  const handleFileTypeClick = (fileName: string, category: string) => {
    // Save scroll position before navigating
    saveScrollPosition();
    
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

  // Show loading state while content is being prepared
  if (!isContentReady) {
    return <div className="min-h-screen bg-background" />;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary/10 border-b">
        <div className="mx-auto max-w-7xl px-6 py-2">
          <div className="text-center">
            <Badge variant="outline" className="bg-white/80 text-primary font-medium">
              Version 0.8.9.8 • Updated 7/28/2025
            </Badge>
          </div>
        </div>
      </div>

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
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => window.open('https://docs.autolabproject.com/', '_blank')}
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.location.href = '/how-it-works'}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

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
                          selectedStep === index ? 'bg-primary text-primary-foreground' : 'bg-muted/30'
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

      <section className="py-24 bg-gradient-to-br from-secondary/5 to-accent/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Evolution from Carnegie Mellon to RAI-Based AutoLab
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-4xl mx-auto">
              Our RAI-based AutoLab represents a revolutionary advancement over the traditional Carnegie Mellon Tango system. 
              While Tango relies on a basic Python job manager, our intelligent RAI architecture delivers superior performance, 
              scalability, and reliability through advanced AI-driven orchestration.
            </p>
          </div>

          <div className="mb-16">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-primary flex items-center justify-center gap-2">
                  <Workflow className="h-6 w-6" />
                  Traditional Carnegie Mellon Autolab + Tango Architecture
                </CardTitle>
                <CardDescription className="text-base">
                  The original system architecture with Python-based Tango job manager and producer-consumer model
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <img 
                  src="/lovable-uploads/4883bd08-223e-45e3-a0b8-aec4e7b44ee1.png" 
                  alt="Traditional Autolab + Tango Architecture showing Python job manager limitations"
                  className="max-w-full h-auto rounded-lg border border-primary/20 shadow-md"
                />
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
              <div className="flex items-center gap-2 text-gray-600">
                <Server className="h-5 w-5" />
                <span className="font-medium">Python Tango Job Manager</span>
              </div>
              <ArrowRight className="h-5 w-5 text-primary" />
              <div className="flex items-center gap-2 text-primary">
                <Brain className="h-5 w-5" />
                <span className="font-medium">RAI Intelligent Orchestration</span>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {comparisonData.map((comparison, index) => (
              <div key={index} className="relative">
                <div className="text-center mb-8">
                  <Badge variant="outline" className="text-lg px-4 py-2 bg-white/80 text-primary font-semibold">
                    {comparison.category}
                  </Badge>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <Card className="h-full hover:shadow-lg transition-all duration-300 bg-gray-50/50 border-gray-300/50">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-gray-500 rounded-lg">
                          <Server className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg text-gray-700">
                            {comparison.oldAutolab.title}
                          </CardTitle>
                          <Badge variant="secondary" className="mt-1">
                            Carnegie Mellon
                          </Badge>
                        </div>
                      </div>
                      <CardDescription className="text-base">
                        {comparison.oldAutolab.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {comparison.oldAutolab.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-3 p-3 bg-white/50 rounded-lg border border-gray-200">
                            <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="p-3 bg-primary rounded-full shadow-lg">
                      <ArrowRight className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>

                  <Card className="h-full hover:shadow-lg transition-all duration-300 bg-primary/5 border-primary/30">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-primary rounded-lg">
                          <Brain className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <CardTitle className="text-lg text-primary">
                            {comparison.newAutolab.title}
                          </CardTitle>
                          <Badge variant="outline" className="mt-1 border-primary text-primary">
                            University at Buffalo
                          </Badge>
                        </div>
                      </div>
                      <CardDescription className="text-base">
                        {comparison.newAutolab.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {comparison.newAutolab.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-3 p-3 bg-white/50 rounded-lg border border-primary/20">
                            <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground leading-relaxed font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              AutoLab's RAI system orchestrates the entire job processing workflow, from submission handling to 
              Docker execution and result management, ensuring efficient and reliable code evaluation.
            </p>
          </div>

          <div className="grid lg:grid-cols-1 xl:grid-cols-3 gap-12 mb-16">
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
                    <div className="space-y-4">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start gap-3 p-4 bg-white/50 rounded-lg border border-primary/10">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-base text-muted-foreground leading-relaxed font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="bg-card rounded-2xl p-8 border border-primary/20 shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
              RAI Architecture Integration
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Core RAI Workflow</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <p className="text-sm font-medium text-primary mb-2">Job Processing:</p>
                    <p className="text-sm text-muted-foreground">
                      RAI receives submissions, assigns job IDs, and manages the queue through RabbitMQ messaging system.
                    </p>
                  </div>
                  <div className="p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                    <p className="text-sm font-medium text-secondary mb-2">Docker Integration:</p>
                    <p className="text-sm text-muted-foreground">
                      Transports job IDs to Docker containers for secure, isolated code execution and result collection.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">System Components</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">MongoDB for persistent job data storage</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Redis for real-time job status tracking</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">RabbitMQ for reliable message queuing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Minio for scalable file storage management</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                        <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                          <img 
                            src={file.logo} 
                            alt={`${file.name} logo`}
                            className="w-12 h-12 object-contain"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const fallback = document.createElement('div');
                              fallback.className = `w-12 h-12 rounded-lg ${file.color} flex items-center justify-center`;
                              fallback.innerHTML = `<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>`;
                              target.parentNode?.appendChild(fallback);
                            }}
                          />
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

      <Footer />
    </div>
  );
};

export default Index;
