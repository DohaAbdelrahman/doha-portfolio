import { Github, Linkedin } from "lucide-react";

const Footer = () => {
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
    <footer className="bg-background border-t border-border/50 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-4">
        <span className="text-sm text-muted-foreground">Connect with me:</span>
        <div className="flex space-x-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg bg-secondary/30 hover:bg-primary/20 transition-all duration-300 ${social.color}`}
              aria-label={social.name}
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
