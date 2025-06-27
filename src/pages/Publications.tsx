
import { BookOpen, Calendar, ExternalLink, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Publications = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Publications
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Research papers, conference presentations, and academic contributions from the AutoLab team
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div className="mb-12">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="h-12 w-12 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Publications Coming Soon
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our research team is currently working on several groundbreaking papers about RAI-based autograding systems. 
              We'll be sharing our findings with the academic community soon.
            </p>
          </div>

          {/* Upcoming Publications Preview */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="text-left">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <Badge variant="outline" className="text-primary border-primary">
                    In Review
                  </Badge>
                </div>
                <CardTitle className="text-lg">
                  "RAI-Based Automated Code Assessment: A Comprehensive Approach to Educational Technology"
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  This paper presents our novel approach to integrating Responsible AI principles into automated code grading systems.
                </p>
                <div className="text-xs text-muted-foreground">
                  <p><strong>Authors:</strong> S. Johnson, M. Chen, E. Rodriguez</p>
                  <p><strong>Target Venue:</strong> ACM Conference on Educational Technology</p>
                  <p><strong>Expected:</strong> Fall 2025</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-left">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <Badge variant="outline" className="text-primary border-primary">
                    In Preparation
                  </Badge>
                </div>
                <CardTitle className="text-lg">
                  "Scalable Container Orchestration for Educational Code Execution"
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  An analysis of Docker-based isolation techniques for secure and scalable code evaluation in educational environments.
                </p>
                <div className="text-xs text-muted-foreground">
                  <p><strong>Authors:</strong> M. Chen, J. Wilson, L. Zhang</p>
                  <p><strong>Target Venue:</strong> IEEE Transactions on Education</p>
                  <p><strong>Expected:</strong> Winter 2025</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Research Areas */}
          <div className="bg-secondary/10 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6">Current Research Focus</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="h-6 w-6 text-primary-foreground" />
                </div>
                <h4 className="font-semibold mb-2">AI in Education</h4>
                <p className="text-sm text-muted-foreground">
                  Exploring responsible AI applications in educational assessment and feedback systems.
                </p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="h-6 w-6 text-primary-foreground" />
                </div>
                <h4 className="font-semibold mb-2">System Architecture</h4>
                <p className="text-sm text-muted-foreground">
                  Designing scalable, secure, and efficient distributed systems for code evaluation.
                </p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="h-6 w-6 text-primary-foreground" />
                </div>
                <h4 className="font-semibold mb-2">Learning Analytics</h4>
                <p className="text-sm text-muted-foreground">
                  Analyzing student code submission patterns to improve learning outcomes.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Want to be notified when our publications are available? Follow our research progress and get updates on new papers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline"
                onClick={() => window.location.href = '/contact'}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Contact Research Team
              </Button>
              <Button 
                onClick={() => window.open('https://cse.buffalo.edu/', '_blank')}
                className="bg-primary hover:bg-primary/90"
              >
                Visit UB CSE Department
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Publications;
