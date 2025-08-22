
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
        { name: "Python", extension: ".py", color: "bg-white-500", logo: "/logos/python.svg" },
        { name: "Java", extension: ".java", color: "bg-white-500", logo: "/logos/java.svg" },
        { name: "C++", extension: ".cpp", color: "bg-white-500", logo: "/logos/cpp.svg" },
        { name: "JavaScript", extension: ".js", color: "bg-white-500", logo: "/logos/javascript.svg" },
        { name: "C", extension: ".c", color: "bg-white-500", logo: "/logos/c.svg" },
        { name: "Go", extension: ".go", color: "bg-white-500", logo: "/logos/go.svg" },
        { name: "Rust", extension: ".rs", color: "bg-white-500", logo: "/logos/rust.svg" },
        { name: "SML", extension: ".sml", color: "bg-white-500", logo: "/logos/sml.svg" }
      ]
    },
    {
      category: "Archives & Documents",
      files: [
        { name: "ZIP Archive", extension: ".zip", color: "bg-white-500", logo: "https://cdn-icons-png.freepik.com/512/28/28814.png" },
        { name: "TAR Archive", extension: ".tar", color: "bg-white-500", logo: "https://cdn-icons-png.flaticon.com/512/29/29575.png" },
        { name: "YAML Configuration", extension: ".yml", color: "bg-white-500", logo: "/logos/yaml.svg" }
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
      'rust': '/file-types/rust',
      'sml': '/file-types/sml',
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
              Version 0.9.0.1 • Updated 8/15/2025
            </Badge>
          </div>
        </div>
      </div>

      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:50px_50px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 lg:py-32 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6 sm:mb-8">
              <div className="p-2 sm:p-3 bg-white rounded-xl sm:rounded-2xl shadow-lg">
                <img 
                  src="/lovable-uploads/d73a6f39-361f-4c1f-8cf4-a7419e7ce0a8.png" 
                  alt="University at Buffalo Logo" 
                  className="h-8 w-8 sm:h-12 sm:w-12"
                />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-foreground bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AUTOLAB
            </h1>
            <p className="mt-2 text-lg sm:text-xl text-primary font-semibold">
              by University at Buffalo
            </p>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg font-medium text-secondary">
              RAI based Autolab
            </p>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto px-4">
              The intelligent autograding system that revolutionizes how educators assess programming assignments. 
              Fast, secure, and comprehensive feedback for students and instructors.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6 px-4">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => window.open('https://docs.autolabproject.com/', '_blank')}
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.location.href = '/how-it-works'}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-16 sm:py-24 bg-secondary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
              How AutoLab Works
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground">
              Three simple steps to automated grading excellence
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
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

            <div className="lg:pl-8 mt-8 lg:mt-0">
              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardHeader>
                  <div className="flex items-center gap-3 sm:gap-4 mb-4">
                    <div className="p-2 sm:p-3 bg-primary rounded-xl">
                      {steps[selectedStep] && (() => {
                        const SelectedStepIcon = steps[selectedStep].icon;
                        return <SelectedStepIcon className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground" />;
                      })()}
                    </div>
                    <div>
                      <CardTitle className="text-lg sm:text-xl">{steps[selectedStep]?.title}</CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        Step {selectedStep + 1}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {steps[selectedStep]?.detail}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-gradient-to-br from-secondary/5 to-accent/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
              Evolution from Carnegie Mellon to RAI-Based AutoLab
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-4xl mx-auto px-4">
              Our RAI-based AutoLab represents a revolutionary advancement over the traditional Carnegie Mellon Tango system. 
              While Tango relies on a basic Python job manager, our intelligent RAI architecture delivers superior performance, 
              scalability, and reliability through advanced AI-driven orchestration.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-primary flex items-center justify-center gap-2">
                  <Workflow className="h-6 w-6" />
                  Traditional Carnegie Mellon Architecture
                </CardTitle>
                <CardDescription className="text-base">
                  The original system architecture with Python-based Tango job manager and producer-consumer model
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <img 
                  src="/lovable-uploads/50334043-1316-4add-918a-b8111f9fb3ed.png" 
                  alt="Traditional Autolab + Tango Architecture showing producer-consumer model"
                  className="w-full h-auto rounded-lg border border-primary/20 shadow-md"
                />
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-primary flex items-center justify-center gap-2">
                  <Brain className="h-6 w-6" />
                  Current RAI-Based Architecture
                </CardTitle>
                <CardDescription className="text-base">
                  The enhanced architecture with RAI CLI, worker nodes, and intelligent job orchestration
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <img 
                  src="/lovable-uploads/59bb43d2-ad0b-4f8e-bd18-2612bd877e03.png" 
                  alt="RAI-Based Architecture with intelligent job orchestration and multi-protocol communication"
                  className="w-full h-auto rounded-lg border border-primary/20 shadow-md"
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

          <div className="space-y-6 sm:space-y-8">
            {comparisonData.map((comparison, index) => (
              <Card key={index} className="overflow-hidden bg-card/50 backdrop-blur-sm">
                <CardHeader className="text-center border-b border-primary/10 p-4 sm:p-6">
                  <CardTitle className="text-lg sm:text-xl font-bold text-primary">{comparison.category}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2">
                    <div className="p-4 sm:p-6 border-r border-primary/10 md:border-r border-b md:border-b-0 border-primary/10">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Server className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                          <h4 className="font-semibold text-base sm:text-lg">{comparison.oldAutolab.title}</h4>
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground mb-4">{comparison.oldAutolab.description}</p>
                        <ul className="space-y-2">
                          {comparison.oldAutolab.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                              <div className="w-2 h-2 rounded-full bg-muted-foreground/50 mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="p-4 sm:p-6 bg-primary/5">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Brain className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                          <h4 className="font-semibold text-base sm:text-lg text-primary">{comparison.newAutolab.title}</h4>
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground mb-4">{comparison.newAutolab.description}</p>
                        <ul className="space-y-2">
                          {comparison.newAutolab.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                              <span className="text-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
              Supported File Types
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground">
              AutoLab supports a wide range of programming languages and file formats
            </p>
          </div>

          <div className="space-y-8 sm:space-y-12">
            {fileTypes.map((fileTypeGroup, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4 sm:mb-6 text-center">
                  {fileTypeGroup.category}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                  {fileTypeGroup.files.map((fileType, fileIndex) => (
                    <Card 
                      key={fileIndex}
                      className="cursor-pointer hover:shadow-md transition-all duration-200 hover:scale-105 border-primary/20"
                      onClick={() => handleFileTypeClick(fileType.name, fileTypeGroup.category)}
                    >
                      <CardContent className="p-4 sm:p-6 text-center">
                        <div className="flex justify-center mb-3 sm:mb-4">
                          <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-lg ${fileType.color} flex items-center justify-center`}>
                            <img src={fileType.logo} alt={fileType.name} className="w-8 h-8 sm:w-10 sm:h-10" />
                          </div>
                        </div>
                        <h3 className="font-semibold text-sm sm:text-lg mb-1 sm:mb-2">{fileType.name}</h3>
                        <p className="text-muted-foreground text-xs sm:text-sm">{fileType.extension}</p>
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