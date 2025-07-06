import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/DohaAbdelrahman",
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      name: "LinkedIn", 
      url: "https://linkedin.com/in/doha-abdelrahman-3540292a5",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <footer className="bg-background border-t border-border/50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left side - Copyright */}
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>© {currentYear} Portfolio. Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
            <span>by a passionate developer</span>
          </div>

          {/* Right side - Social Links */}
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground mr-2">Connect with me:</span>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg bg-secondary/30 hover:bg-primary/20 transition-all duration-300 ${social.color}`}
                aria-label={social.name}
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground">
            Built with React, TypeScript, and Tailwind CSS. Deployed with modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;