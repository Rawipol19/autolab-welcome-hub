import { User, GraduationCap, Award, Mail, ExternalLink, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ResearchTeam = () => {
  const navigate = useNavigate();

  // Scroll to top immediately when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const saveScrollAndGoHome = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 0) {
      sessionStorage.setItem('homepage-scroll-position', currentScrollY.toString());
    }
    navigate('/');
  };

  const teamMembers = [
    {
      name: "Prof. [Name]",
      role: "Project Director & Principal Investigator",
      degree: "Ph.D. in [Blank]",
      institution: "[University], 2015",
      specialization: "Artificial Intelligence, Educational Technology",
      bio: "[Bio info]",
      email: "email@buffalo.edu",
      image: "/e9f9078c-92fc-4420-bd5c-b119d7d953e5.png"
    },
    {
      name: "Prof. [Name]",
      role: "Technical Lead & Co-Investigator",
      degree: "Ph.D. in [Blank]",
      institution: "[University], 2012",
      specialization: "Distributed Systems, Container Orchestration",
      bio: "[Bio info]",
      email: "email@buffalo.edu",
      image: "/3905c3d0-5069-469f-a267-29c26630e4c4.png"
    },
    {
      name: "Prof. [Name]",
      role: "RAI Systems Architect",
      degree: "Ph.D. in [Blank]",
      institution: "[University], 2017",
      specialization: "Responsible AI, System Architecture",
      bio: "[Bio info]",
      email: "email@buffalo.edu",
      image: "/d73a6f39-361f-4c1f-8cf4-a7419e7ce0a8.png"
    },
    {
      name: "[Name]",
      role: "Graduate Research Assistant",
      degree: "M.S. in [Blank]",
      institution: "[University], Expected 2025",
      specialization: "Machine Learning, Code Analysis",
      bio: "[Bio info]",
      email: "email@buffalo.edu",
      image: "/e9f9078c-92fc-4420-bd5c-b119d7d953e5.png"
    },
    {
      name: "[Name]",
      role: "Software Developer & UI/UX Designer",
      degree: "B.S. in [Blank]",
      institution: "[University], 2020",
      specialization: "Full-Stack Development, User Experience",
      bio: "[Bio info]",
      email: "email@buffalo.edu",
      image: "/3905c3d0-5069-469f-a267-29c26630e4c4.png"
    },
    {
      name: "[Name]",
      role: "Research Scientist",
      degree: "Ph.D. in [Blank]",
      institution: "[University], 2014",
      specialization: "Learning Analytics, Assessment Theory",
      bio: "[Bio info]",
      email: "email@buffalo.edu",
      image: "/d73a6f39-361f-4c1f-8cf4-a7419e7ce0a8.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Back to Home Button */}
      <div className="p-6">
        <Button 
          variant="outline" 
          onClick={saveScrollAndGoHome}
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
              Research Team
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Meet the brilliant minds behind AutoLab's RAI-based autograding system. Our interdisciplinary team combines expertise in computer science, artificial intelligence, and educational technology.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwIDIxVjE5QzIwIDE3LjkzOTEgMTkuNTc4NiAxNi45MjE3IDE4LjgyODQgMTYuMTcxNkMxOC4wNzgzIDE1LjQyMTQgMTcuMDYwOSAxNSAxNiAxNUg4QzYuOTM5MTMgMTUgNS45MjE3MiAxNS40MjE0IDUuMTcxNTcgMTYuMTcxNkM0LjQyMTQzIDE2LjkyMTcgNCAxNy45MzkxIDQgMTlWMjEiIHN0cm9rZT0iIzk0YTNiOCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEyIDExQzE0LjIwOTEgMTEgMTYgOS4yMDkxNCAxNiA3QzE2IDQuNzkwODYgMTQuMjA5MSAzIDEyIDNDOS43OTA4NiAzIDggNC43OTA4NiA4IDdDOCA5LjIwOTE0IDkuNzkwODYgMTEgMTIgMTEiIHN0cm9rZT0iIzk0YTNiOCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+";
                      }}
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <Badge variant="outline" className="text-primary border-primary">
                    {member.role}
                  </Badge>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{member.degree}</span>
                    </div>
                    <p className="text-sm text-muted-foreground ml-6">{member.institution}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">Specialization</span>
                    </div>
                    <p className="text-sm text-muted-foreground ml-6">{member.specialization}</p>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                  
                  <div className="pt-2 border-t">
                    <a 
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      <Mail className="h-4 w-4" />
                      {member.email}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 bg-secondary/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Our Research Areas
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The interdisciplinary expertise that drives AutoLab innovation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Artificial Intelligence",
              "Educational Technology", 
              "Distributed Systems",
              "Responsible AI",
              "Learning Analytics",
              "Code Analysis",
              "User Experience",
              "Assessment Theory"
            ].map((area, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground">{area}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResearchTeam;
