
import { Brain, Github, MapPin, Mail } from 'lucide-react';

const Footer = () => {
  const saveScrollPosition = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 0) {
      sessionStorage.setItem('homepage-scroll-position', currentScrollY.toString());
    }
  };

  const handleHomeClick = () => {
    sessionStorage.removeItem('homepage-scroll-position');
    window.location.href = '/';
  };

  const handleFooterNavigation = (path: string) => {
    saveScrollPosition();
    window.location.href = path;
  };

  const scrollToEvolution = () => {
    const evolutionSection = document.querySelector('h2:has-text("Evolution from Carnegie Mellon to RAI-Based AutoLab")') || 
                            document.querySelector('[data-testid="evolution-section"]') ||
                            Array.from(document.querySelectorAll('h2')).find(h2 => 
                              h2.textContent?.includes('Evolution from Carnegie Mellon'));
    if (evolutionSection) {
      evolutionSection.scrollIntoView({ behavior: 'smooth' });
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
              <button 
                onClick={handleHomeClick}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={scrollToEvolution}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
              >
                Features
              </button>
              <button 
                onClick={() => handleFooterNavigation('/how-it-works')}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
              >
                How It Works
              </button>
              <button 
                onClick={() => handleFooterNavigation('/about')}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
              >
                About
              </button>
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
              <button 
                onClick={() => handleFooterNavigation('/publications')}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
              >
                Publications
              </button>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="space-y-2 text-sm">
              <button 
                onClick={() => handleFooterNavigation('/contact')}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
              >
                Contact Us
              </button>
              <button 
                onClick={() => handleFooterNavigation('/research-team')}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
              >
                Research Team
              </button>
              <button 
                onClick={() => handleFooterNavigation('/news-updates')}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
              >
                News &amp; Updates
              </button>
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
