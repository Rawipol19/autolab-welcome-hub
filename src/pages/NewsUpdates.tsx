
import { Zap, Calendar, CheckCircle, Star, Rocket, Shield, Users, Code, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const NewsUpdates = () => {
  const updates = [
    {
      version: "0.9.0.1",
      date: "August 11, 2025",
      type: "Website Features Release",
      features: [
        "Complete UI/UX redesign with modern design system",
        "New responsive navigation with fixing scroll position",
        "Enhanced footer with quick links and better organization",
        "Advanced scroll position management across all pages",
        "Improved mobile experience with touch-friendly controls"
      ],
      improvements: [
        "Maximize faster page load times through optimized assets and reduced payloads",
        "Implemented comprehensive SEO enhancements across all pages",
        "Introduced smooth page transitions for a more fluid user experience",
        "Refactored codebase for improved organization, readability, and long-term maintainability"
      ]
    },
    {
      version: "0.8.9.9",
      date: "July 25, 2025",
      type: "Major Release",
      features: [
        "Complete UI/UX redesign with modern design system",
        "New responsive navigation with improved accessibility",
        "Enhanced footer with quick links and better organization",
        "Advanced scroll position management across all pages",
        "Improved mobile experience with touch-friendly controls"
      ],
      improvements: [
        "60% faster page load times with optimized assets",
        "Better SEO optimization across all pages",
        "Enhanced user experience with smooth transitions",
        "Improved code organization and maintainability"
      ]
    },
    {
      version: "0.8.9.5",
      date: "July 15, 2025",
      type: "Feature Release",
      features: [
        "Added comprehensive documentation pages",
        "New interactive code examples for all supported languages",
        "Enhanced error reporting with detailed stack traces",
        "Improved file upload progress indicators",
        "Added support for custom compiler flags"
      ],
      improvements: [
        "Better error messages with suggested solutions",
        "Faster compilation for C++ templates",
        "Improved memory management in Java execution"
      ]
    },
    {
      version: "0.8.6.5",
      date: "June 30, 2025",
      type: "Bug Fix",
      features: [
        "Fixed critical security vulnerability in file upload validation",
        "Resolved race condition in concurrent job processing",
        "Fixed memory leak in Python subprocess execution",
        "Improved error handling for malformed archive files"
      ],
      improvements: [
        "Enhanced security scanning for uploaded files",
        "Better cleanup of temporary files",
        "Improved stability under high load"
      ]
    },
    {
      version: "0.8.5.1",
      date: "June 26, 2025",
      type: "Feature Release",
      features: [
        "Enhanced RAI job processing with improved queue management",
        "New Docker container isolation improvements for better security",
        "Updated MongoDB integration with optimized query performance", 
        "Improved Minio file storage with better error handling",
        "Enhanced Redis caching for faster job status tracking"
      ],
      improvements: [
        "40% faster code compilation times",
        "Reduced memory usage in container execution",
        "Better error messages for failed submissions"
      ]
    },
    {
      version: "0.8.4.2",
      date: "June 15, 2025", 
      type: "Bug Fix",
      features: [
        "Fixed critical memory leak in long-running Docker containers",
        "Resolved RabbitMQ connection timeout issues",
        "Improved error handling for large file uploads",
        "Enhanced support for nested ZIP archive extraction"
      ],
      improvements: [
        "More stable container lifecycle management",
        "Better handling of network interruptions",
        "Improved logging for debugging purposes"
      ]
    },
    {
      version: "0.8.3.0",
      date: "May 28, 2025",
      type: "Major Release", 
      features: [
        "Added support for Go programming language",
        "New YAML configuration file processing",
        "Enhanced C/C++ compilation with multiple compiler support",
        "Improved JavaScript/Node.js execution environment",
        "Added comprehensive Python package management"
      ],
      improvements: [
        "25% improvement in overall system throughput",
        "Better resource allocation for concurrent jobs",
        "Enhanced security sandbox for code execution"
      ]
    },
    {
      version: "0.8.2.1", 
      date: "May 10, 2025",
      type: "Performance Update",
      features: [
        "Optimized RAI workflow processing",
        "Improved database indexing for faster queries",
        "Enhanced file compression for archive handling",
        "Better load balancing across Docker containers"
      ],
      improvements: [
        "50% reduction in job queue wait times",
        "Improved scalability for high-volume submissions",
        "Better resource utilization monitoring"
      ]
    },
    {
      version: "0.8.1.0",
      date: "April 22, 2025",
      type: "Feature Release",
      features: [
        "Added support for Rust programming language",
        "New real-time job status updates via WebSocket",
        "Enhanced TAR archive processing capabilities",
        "Improved ZIP file extraction with better error handling",
        "Added support for nested archive files"
      ],
      improvements: [
        "35% faster archive extraction",
        "Better handling of corrupted files",
        "Improved user feedback during processing"
      ]
    },
    {
      version: "0.8.0.0",
      date: "April 1, 2025",
      type: "Major Release",
      features: [
        "Complete rewrite of the execution engine",
        "New microservices architecture for better scalability",
        "Enhanced security with sandboxed execution environments",
        "Added support for multiple programming languages",
        "New web-based interface with modern design"
      ],
      improvements: [
        "10x improvement in concurrent job handling",
        "Better resource isolation between jobs",
        "Enhanced monitoring and logging capabilities"
      ]
    },
    {
      version: "0.7.5.2",
      date: "March 15, 2025",
      type: "Bug Fix",
      features: [
        "Fixed critical vulnerability in code execution sandbox",
        "Resolved database connection pooling issues",
        "Fixed memory leaks in long-running processes",
        "Improved error handling for network timeouts"
      ],
      improvements: [
        "Better system stability under load",
        "Improved error reporting and diagnostics",
        "Enhanced security measures"
      ]
    },
    {
      version: "0.7.4.0",
      date: "February 28, 2025",
      type: "Feature Release",
      features: [
        "Added support for Java programming language",
        "New batch job processing capabilities",
        "Enhanced file upload with progress tracking",
        "Improved compilation error reporting"
      ],
      improvements: [
        "20% faster Java compilation",
        "Better memory management for large files",
        "Enhanced user experience with progress indicators"
      ]
    },
    {
      version: "0.7.3.1",
      date: "February 10, 2025",
      type: "Performance Update",
      features: [
        "Optimized C/C++ compilation pipeline",
        "Enhanced Python execution environment",
        "Improved database query performance",
        "Better caching mechanisms for frequent operations"
      ],
      improvements: [
        "45% faster C++ compilation times",
        "Reduced memory usage in Python execution",
        "Better response times for API calls"
      ]
    }
  ];

  const upcomingFeatures = [
    {
      title: "Real-time Collaboration",
      description: "Enable multiple students to work on assignments simultaneously with live code sharing",
      eta: "Q3 2025",
      icon: Users
    },
    {
      title: "Advanced Code Analysis", 
      description: "AI-powered code quality assessment with detailed feedback and suggestions",
      eta: "Q4 2025", 
      icon: Code
    },
    {
      title: "Mobile Application",
      description: "Native mobile apps for iOS and Android with full functionality",
      eta: "Q1 2026",
      icon: Rocket
    },
    {
      title: "Enhanced Security",
      description: "Advanced threat detection and prevention for submitted code",
      eta: "Q2 2026", 
      icon: Shield
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Major Release":
        return <Star className="h-5 w-5" />;
      case "Feature Release":
        return <Zap className="h-5 w-5" />;
      case "Bug Fix":
        return <CheckCircle className="h-5 w-5" />;
      case "Performance Update":
        return <Rocket className="h-5 w-5" />;
      default:
        return <Calendar className="h-5 w-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Major Release":
        return "bg-purple-500";
      case "Feature Release":
        return "bg-blue-500";
      case "Bug Fix":
        return "bg-green-500";
      case "Performance Update":
        return "bg-orange-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Back to Home Button */}
      <div className="p-6">
        <Button 
          variant="outline" 
          onClick={() => {
            const savedPosition = sessionStorage.getItem('homepage-scroll-position');
            if (savedPosition) {
              sessionStorage.setItem('restore-scroll', savedPosition);
              sessionStorage.removeItem('homepage-scroll-position');
            }
            window.location.href = '/';
          }}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Button>
      </div>

      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              News & Updates
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Stay up to date with the latest AutoLab features, improvements, and announcements from our development team.
            </p>
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Recent Updates
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Here's what we've been working on lately
            </p>
          </div>

          <div className="space-y-8">
            {updates.map((update, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg text-white ${getTypeColor(update.type)}`}>
                        {getTypeIcon(update.type)}
                      </div>
                      <div>
                        <CardTitle className="text-xl">Version {update.version}</CardTitle>
                        <p className="text-sm text-muted-foreground flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {update.date}
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-primary border-primary">
                      {update.type}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {update.features.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Zap className="h-4 w-4 text-primary" />
                        New Features
                      </h4>
                      <ul className="space-y-2">
                        {update.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {update.improvements.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Rocket className="h-4 w-4 text-primary" />
                        Improvements
                      </h4>
                      <ul className="space-y-2">
                        {update.improvements.map((improvement, improvementIndex) => (
                          <li key={improvementIndex} className="flex items-start gap-2">
                            <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{improvement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Features */}
      <section className="py-16 bg-secondary/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Coming Soon
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Exciting features we're working on for future releases
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingFeatures.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <FeatureIcon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <Badge variant="secondary" className="mt-2">
                      {feature.eta}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Development Stats */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-primary/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Development Progress</h3>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <p className="text-sm text-muted-foreground">Programming Languages Supported</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">99.8%</div>
                <p className="text-sm text-muted-foreground">System Uptime</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">10k+</div>
                <p className="text-sm text-muted-foreground">Code Submissions Processed</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">2.5s</div>
                <p className="text-sm text-muted-foreground">Average Response Time</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsUpdates;
