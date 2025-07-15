
import { Brain, Github, MapPin, Mail } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const scrollToRAI = () => {
    const raiSection = document.querySelector('#rai-section');
    if (raiSection) {
      raiSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const saveScrollAndNavigate = (path: string) => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 0) {
      sessionStorage.setItem('homepage-scroll-position', currentScrollY.toString());
    }
    navigate(path);
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
                onClick={() => saveScrollAndNavigate('/')}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={scrollToRAI}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
              >
                Features
              </button>
              <button 
                onClick={() => saveScrollAndNavigate('/how-it-works')}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
              >
                How It Works
              </button>
              <button 
                onClick={() => saveScrollAndNavigate('/about')}
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
                onClick={() => saveScrollAndNavigate('/publications')}
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
                onClick={() => saveScrollAndNavigate('/contact')}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
              >
                Contact Us
              </button>
              <button 
                onClick={() => saveScrollAndNavigate('/research-team')}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
              >
                Research Team
              </button>
              <button 
                onClick={() => saveScrollAndNavigate('/news-updates')}
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
