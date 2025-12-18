import { Link } from "react-router-dom";
import { Instagram, Youtube, Mail } from "lucide-react";
import eggLogo from "@/assets/egg-logo.png";

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Rides", path: "/rides" },
  { name: "Gallery", path: "/gallery" },
  { name: "Blog", path: "/blog" },
  { name: "How-To", path: "/how-to" },
  { name: "Shop", path: "/shop" },
];

const socialLinks = [
  { name: "Instagram", icon: Instagram, url: "https://instagram.com/eggstyle" },
  { name: "YouTube", icon: Youtube, url: "https://youtube.com/@eggstyle" },
  { name: "Email", icon: Mail, url: "mailto:hello@eggstyle.com" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src={eggLogo} 
                alt="EggStyle Logo" 
                className="h-16 w-16 object-contain transition-transform group-hover:rotate-12 invert"
              />
              <span className="font-heading text-4xl tracking-wider">EggStyle</span>
            </Link>
            <p className="text-background/70 font-body">
              Celebrating 90's Toyota van culture, rare JDM parts, and the community that keeps these egg-shaped legends alive.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading text-2xl tracking-wider mb-4">Navigate</h3>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-background/70 hover:text-primary transition-colors font-body py-1"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Follow */}
          <div>
            <h3 className="font-heading text-2xl tracking-wider mb-4">Follow The Journey</h3>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            <p className="text-background/50 text-sm font-body">
              @EggStyle on all platforms
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm font-body">
            © {new Date().getFullYear()} EggStyle. All rights reserved.
          </p>
          <p className="text-background/50 text-sm font-body">
            Built with passion for JDM culture 🥚
          </p>
        </div>
      </div>
    </footer>
  );
}
