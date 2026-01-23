import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { TypewriterText } from "./TypewriterText";

export const Hero = () => {
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating geometric elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-16 w-4 h-4 bg-primary rounded-full animate-float opacity-60"></div>
        <div className="absolute top-64 right-32 w-6 h-6 bg-primary rounded-lg animate-float opacity-40" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-primary-glow rounded-full animate-float opacity-70" style={{
        animationDelay: '2s'
      }}></div>
        <div className="absolute bottom-32 right-16 w-5 h-5 bg-primary rounded-lg rotate-45 animate-float opacity-50" style={{
        animationDelay: '3s'
      }}></div>
        <div className="absolute top-1/2 right-20 w-2 h-2 bg-primary-glow rounded-full animate-float opacity-80" style={{
        animationDelay: '4s'
      }}></div>
        <div className="absolute top-20 right-1/4 w-8 h-8 bg-primary/20 rounded-lg rotate-12 animate-float opacity-30" style={{
        animationDelay: '2.5s'
      }}></div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/20 text-primary rounded-full border border-primary/30 text-lg font-sans font-bold">
                Data Scientist
              </span>
              <span className="px-4 py-2 bg-primary/20 text-primary rounded-full border border-primary/30 text-lg font-sans font-bold">
                ML Engineer
              </span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight whitespace-nowrap">
                <TypewriterText
                  text="Doha Abdelrahman"
                  typingSpeed={100}
                  deletingSpeed={60}
                  pauseAfterTyping={2000}
                  pauseAfterDeleting={800}
                  className="bg-gradient-text bg-clip-text text-transparent"
                />
              </h1>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0">
                <span className="block font-bold text-xl sm:text-2xl">Hi, my name is Doha Abdelrahman,</span>
                <span className="block text-sm sm:text-base font-semibold">
                   A Data Scientist and ML Engineer with a strong passion for solving real-world problems through data and AI.
                </span>
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 text-base font-semibold">
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <Button variant="outline" className="border-primary/30 hover:bg-primary/10 text-base font-semibold" onClick={() => {
              // You can replace this URL with your actual CV file
              const cvUrl = "https://drive.google.com/file/d/1DY-qZXrARUREa2j51NQTWUM9DxSbmrzV/view?usp=drive_link"; // Update this with your CV file path
              const link = document.createElement('a');
              link.href = cvUrl;
              link.download = 'Doha_Abdelrahman_CV.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}>
                <span className="mr-2">📄</span>
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="gap-4 pt-4 flex items-start justify-start">
              <a href="https://github.com/DohaAbdelrahman" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow-primary group">
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.linkedin.com/in/doha-abdelrahman-3540292a5" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow-primary group">
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="mailto:dohaabd757@gmail.com" className="p-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow-primary group">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="tel:+201029474155" className="p-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow-primary group">
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="justify-center animate-slide-up flex-row flex items-center lg:justify-center" style={{
          animationDelay: '0.2s'
        }}>
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-primary p-1 animate-glow">
                <img src="/lovable-uploads/121f87dd-0ca8-40da-96e8-2f5fb7ca5fe7.png" alt="Doha Abdelrahman - Data Scientist" className="w-full h-full rounded-full object-cover" />
              </div>
              {/* Floating elements around image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-lg animate-float opacity-80"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-primary-glow rounded-lg animate-float opacity-60" style={{
              animationDelay: '1.5s'
            }}></div>
              <div className="absolute top-8 -left-8 w-4 h-4 bg-primary rounded-full animate-float opacity-70" style={{
              animationDelay: '2.5s'
            }}></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>;
};