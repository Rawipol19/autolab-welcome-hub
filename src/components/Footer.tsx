
import { Brain, Github, MapPin, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToRAI = () => {
    const raiSection = document.querySelector('#rai-section');
    if (raiSection) {
      raiSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
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
              <a href="/publications" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">Publications</a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="space-y-2 text-sm">
              <a 
                href="/contact" 
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Contact Us
              </a>
              <a href="/research-team" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">Research Team</a>
              <a href="/news-updates" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">News &amp; Updates</a>
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
  );
};

export default Footer;
