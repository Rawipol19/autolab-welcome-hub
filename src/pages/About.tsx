
import { ArrowLeft, Users, Award, MapPin, Mail, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const teamMembers = [
    {
      name: "Dr. [Faculty Name]",
      role: "Principal Investigator",
      affiliation: "University at Buffalo",
      department: "Computer Science & Engineering",
      email: "faculty@buffalo.edu"
    },
    {
      name: "Dr. [Faculty Name]",
      role: "Co-Investigator", 
      affiliation: "Carnegie Mellon University",
      department: "School of Computer Science",
      email: "faculty@cmu.edu"
    },
    {
      name: "[Graduate Student Name]",
      role: "PhD Researcher",
      affiliation: "University at Buffalo",
      department: "Computer Science & Engineering",
      email: "student@buffalo.edu"
    },
    {
      name: "[Graduate Student Name]",
      role: "Masters Researcher",
      affiliation: "Carnegie Mellon University", 
      department: "School of Computer Science",
      email: "student@cmu.edu"
    }
  ];

  const collaborators = [
    {
      name: "[Collaborator Name]",
      role: "Research Scientist",
      affiliation: "Industry Partner",
      focus: "Machine Learning & AI"
    },
    {
      name: "[Collaborator Name]", 
      role: "Education Specialist",
      affiliation: "Educational Technology Partner",
      focus: "Pedagogical Design"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center gap-3 sm:gap-4">
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
            <h1 className="text-lg sm:text-xl font-semibold text-foreground">About AutoLab</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              About RAI-Enhanced AutoLab
            </h1>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
              A collaborative research project between leading universities to revolutionize 
              automated code assessment through Responsible AI technology.
            </p>
          </div>

          {/* University Logos */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 mb-12 sm:mb-16">
            <div className="text-center">
              <div className="w-64 h-48 sm:w-80 sm:h-64 bg-white rounded-xl sm:rounded-2xl shadow-lg flex items-center justify-center mb-3 sm:mb-4 mx-auto p-3 sm:p-4">
                <img 
                  src="https://autolabproject.com/images/universities/ubuffalo.png" 
                  alt="University at Buffalo Logo" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h3 className="font-semibold text-foreground text-sm sm:text-base">University at Buffalo</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">SUNY</p>
            </div>

            <div className="text-center">
              <div className="w-64 h-48 sm:w-80 sm:h-64 bg-white rounded-xl sm:rounded-2xl shadow-lg flex items-center justify-center mb-3 sm:mb-4 mx-auto p-4 sm:p-6">
                <img 
                  src="https://autolabproject.com/images/universities/cmu.png" 
                  alt="Carnegie Mellon University Logo" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h3 className="font-semibold text-foreground text-sm sm:text-base">Carnegie Mellon University</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Pittsburgh, PA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Project Overview</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The RAI-Enhanced AutoLab project represents a groundbreaking collaboration 
                  between the University at Buffalo and Carnegie Mellon University to develop 
                  the next generation of automated code assessment tools.
                </p>
                <p>
                  Our mission is to create an intelligent, fair, and comprehensive autograding 
                  system that not only evaluates code correctness but also provides meaningful 
                  feedback to help students improve their programming skills.
                </p>
                <p>
                  By integrating Responsible AI principles, we ensure that our system provides 
                  equitable assessment opportunities for all students while maintaining the 
                  highest standards of accuracy and reliability.
                </p>
              </div>
            </div>

            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Research Goals</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Enhanced Learning</h4>
                    <p className="text-sm text-muted-foreground">
                      Provide personalized feedback that adapts to individual learning styles
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Fairness & Equity</h4>
                    <p className="text-sm text-muted-foreground">
                      Eliminate bias in automated assessment through responsible AI practices
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ExternalLink className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Scalability</h4>
                    <p className="text-sm text-muted-foreground">
                      Support large-scale educational institutions with thousands of students
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Team */}
      <section className="py-16 bg-secondary/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Research Team</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Meet the dedicated researchers and educators behind AutoLab
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <CardDescription className="text-primary font-medium">
                        {member.role}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {member.affiliation === "University at Buffalo" ? "UB" : "CMU"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{member.affiliation}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{member.department}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <a 
                        href={`mailto:${member.email}`} 
                        className="text-primary hover:underline"
                      >
                        {member.email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Collaborators */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">
              Project Collaborators
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {collaborators.map((collaborator, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{collaborator.name}</CardTitle>
                    <CardDescription className="text-secondary font-medium">
                      {collaborator.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{collaborator.affiliation}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{collaborator.focus}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Get In Touch</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Interested in learning more about our research or collaborating with us?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">University at Buffalo</CardTitle>
                <CardDescription>Primary Research Site</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Computer Science & Engineering</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Buffalo, NY 14260</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <a 
                    href="mailto:autolab@buffalo.edu" 
                    className="text-sm text-primary hover:underline"
                  >
                    autolab@buffalo.edu
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-secondary">Carnegie Mellon University</CardTitle>
                <CardDescription>Collaborative Research Partner</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">School of Computer Science</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Pittsburgh, PA 15213</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <a 
                    href="mailto:autolab@cmu.edu" 
                    className="text-sm text-secondary hover:underline"
                  >
                    autolab@cmu.edu
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Join Our Research Community
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be part of the future of automated code assessment and educational technology.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Contact Us
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

export default About;