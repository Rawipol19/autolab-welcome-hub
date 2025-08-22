
import { Mail, Phone, MapPin, User, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactMembers = [
    {
      name: "Dr. [Faculty Name]",
      role: "Project Director",
      department: "Computer Science & Engineering",
      email: "sarah.johnson@buffalo.edu",
      phone: "+1 (716) 645-3180",
      office: "Davis Hall 338"
    },
    {
      name: "Prof. [Faculty Name]",
      role: "Technical Lead",
      department: "Computer Science & Engineering", 
      email: "mchen@buffalo.edu",
      phone: "+1 (716) 645-3181",
      office: "Davis Hall 340"
    },
    {
      name: "Dr. [Faculty Name]",
      role: "RAI Systems Architect",
      department: "Computer Science & Engineering",
      email: "erodriguez@buffalo.edu", 
      phone: "+1 (716) 645-3182",
      office: "Davis Hall 342"
    },
    {
      name: "[Faculty Name]",
      role: "Graduate Research Assistant",
      department: "Computer Science & Engineering",
      email: "jwilson@buffalo.edu",
      phone: "+1 (716) 645-3183",
      office: "Davis Hall 235"
    },
    {
      name: "[Developer Name]",
      role: "Software Developer",
      department: "Computer Science & Engineering",
      email: "lzhang@buffalo.edu",
      phone: "+1 (716) 645-3184", 
      office: "Davis Hall 237"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Back to Home Button */}
      <div className="p-4 sm:p-6">
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
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Contact Us
            </h1>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
              Get in touch with the AutoLab team at University at Buffalo. We're here to help with any questions about our RAI-based autograding system.
            </p>
          </div>
        </div>
      </section>

      {/* General Contact Info */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardHeader>
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>General Inquiries</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">For general questions about AutoLab</p>
                <a href="mailto:autolab@buffalo.edu" className="text-primary hover:underline font-medium">
                  autolab@buffalo.edu
                </a>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Support Line</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Technical support and assistance</p>
                <a href="tel:+17166453000" className="text-primary hover:underline font-medium">
                  +1 (716) 645-3000
                </a>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Visit Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">University at Buffalo</p>
                <address className="text-sm text-muted-foreground not-italic">
                  Davis Hall, North Campus<br/>
                  Buffalo, NY 14260
                </address>
              </CardContent>
            </Card>
          </div>

          {/* Team Contact Information */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Team Contact Information</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contactMembers.map((member, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{member.name}</CardTitle>
                        <Badge variant="secondary" className="text-xs">{member.role}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">{member.department}</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-primary" />
                        <a 
                          href={`mailto:${member.email}`}
                          className="text-sm text-primary hover:underline"
                        >
                          {member.email}
                        </a>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-primary" />
                        <a 
                          href={`tel:${member.phone}`}
                          className="text-sm text-muted-foreground hover:text-primary"
                        >
                          {member.phone}
                        </a>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span className="text-sm text-muted-foreground">{member.office}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Office Hours & Additional Info */}
          <div className="bg-secondary/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Office Hours & Additional Information</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">Office Hours</h4>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM</p>
                  <p><strong>Saturday:</strong> 10:00 AM - 2:00 PM</p>
                  <p><strong>Sunday:</strong> Closed</p>
                  <p className="text-sm mt-4 text-primary">
                    * Office hours may vary during university breaks and holidays
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Getting Here</h4>
                <div className="space-y-2 text-muted-foreground">
                  <p>AutoLab team is located in Davis Hall on the North Campus of University at Buffalo.</p>
                  <p className="text-sm">
                    <strong>Parking:</strong> Visitor parking available in lots near Davis Hall
                  </p>
                  <p className="text-sm">
                    <strong>Public Transit:</strong> UB Stampede bus service connects campuses
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
