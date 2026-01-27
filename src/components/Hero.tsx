import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, FileText } from "lucide-react";
import { TypewriterText } from "./TypewriterText";

// Kaggle icon component
const KaggleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.28.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.076.312z"/>
  </svg>
);

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

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8 animate-slide-up order-2 lg:order-1">
            {/* 1. Green rectangle - Role badges centered on mobile */}
            <div className="flex justify-center lg:justify-start gap-2 sm:gap-3">
              <span className="px-4 py-2 bg-primary/20 text-primary rounded-full border border-primary/30 text-lg font-sans font-bold">
                Data Scientist
              </span>
              <span className="px-4 py-2 bg-primary/20 text-primary rounded-full border border-primary/30 text-lg font-sans font-bold">
                ML Engineer
              </span>
            </div>
            
            <div className="space-y-6">
              {/* 2. Yellow rectangle - Typewriter name centered on mobile */}
              <div className="h-[60px] sm:h-[70px] lg:h-[90px] flex items-center justify-center lg:justify-start">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-center lg:text-left">
                  <TypewriterText text="Doha Abdelrahman" typingSpeed={100} deletingSpeed={60} pauseAfterTyping={2000} pauseAfterDeleting={800} className="bg-gradient-text bg-clip-text text-transparent" />
                </h1>
              </div>

              {/* 3. Purple rectangle - Text centered on mobile, one line for intro */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0 text-center lg:text-left">
                <span className="block font-bold text-base sm:text-xl lg:text-2xl whitespace-nowrap">Hi, my name is Doha Abdelrahman,</span>
                <span className="block text-sm sm:text-base font-semibold">
                   A Data Scientist and ML Engineer with a strong passion for solving real-world problems through data and AI.
                </span>
              </p>
            </div>

            {/* 4. Red rectangle - Buttons side by side and centered on mobile, no emoji on Download CV */}
            <div className="flex flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <a href="#projects" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto shadow-glow transition-all duration-300 hover:scale-105 text-sm sm:text-base px-6 sm:px-8 hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white">
                  View My Work
                </Button>
              </a>
              <Button variant="outline" className="border-primary/30 hover:bg-primary/10 text-base font-semibold" onClick={() => {
              const cvUrl =  "https://drive.google.com/file/d/1wRqMd4AVzrC1xSKBJpHl-6r1KJe836d_/preview";
             // const link = document.createElement('a');
              //link.href = cvUrl;
              //link.download = 'Doha_Abdelrahman_CV.pdf';
              //document.body.appendChild(link);
              //link.click();
              //document.body.removeChild(link);
              window.open(cvUrl, "_blank"); // ده هيفتح اللينك في تبويب جديد
            }}>
                <FileText className="w-5 h-5 mr-2" />
                Download CV
              </Button>
            </div>

            {/* 6. Orange rectangle - Social Links centered on mobile with Kaggle */}
            <div className="gap-4 pt-4 flex items-center justify-center lg:justify-start">
              <a href="https://github.com/DohaAbdelrahman" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow-primary group">
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.linkedin.com/in/doha-abdelrahman-3540292a5" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow-primary group">
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="mailto:dohaabdo757@gmail.com" className="p-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow-primary group">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.kaggle.com/dohaabdelrahman" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow-primary group">
                <KaggleIcon />
              </a>
              <a href="tel:+201029474155" className="p-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow-primary group">
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Profile Image - Fixed position container with top padding on mobile to avoid nav overlap */}
          <div className="flex justify-center lg:justify-center order-1 lg:order-2 animate-slide-up flex-shrink-0 pt-16 sm:pt-8 lg:pt-0" style={{
          animationDelay: '0.2s'
        }}>
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
              <div className="w-full h-full rounded-full bg-gradient-primary p-1 animate-glow">
                <img src="/lovable-uploads/121f87dd-0ca8-40da-96e8-2f5fb7ca5fe7.png" alt="Doha Abdelrahman - Data Scientist" className="w-full h-full rounded-full object-cover" />
              </div>
              {/* Floating elements around image */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-lg animate-float opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-4 h-4 sm:w-6 sm:h-6 bg-primary-glow rounded-lg animate-float opacity-60" style={{
              animationDelay: '1.5s'
            }}></div>
              <div className="absolute top-6 -left-6 sm:top-8 sm:-left-8 w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full animate-float opacity-70" style={{
              animationDelay: '2.5s'
            }}></div>
            </div>
          </div>
        </div>

        {/* 5. Dark blue arrow - Scroll indicator (mouse shape) REMOVED */}
      </div>
    </section>;
};
