import {Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-primary-glow rounded-full animate-float opacity-80" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-float opacity-70" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-primary-glow rounded-full animate-float opacity-50" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium border border-primary/30">
                Data Scientist
              </span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold bg-hero-gradient bg-clip-text text-transparent leading-tight">
                Doha Abdelrahman
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Turning data into insights with machine learning, analytics, and visualizations, 
                I deliver impactful solutions that simplify complexity.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="default" size="lg">
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg">
                <span className="mr-2">📄</span>
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a href="https://github.com/DohaAbdelrahman" target="_blank" rel="noopener noreferrer" 
                 className="p-3 rounded-lg bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow-primary group">
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.linkedin.com/in/doha-abdelrahman-3540292a5" target="_blank" rel="noopener noreferrer"
                 className="p-3 rounded-lg bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow-primary group">
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="mailto:dohaabd757@gmail.com"
                 className="p-3 rounded-lg bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow-primary group">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="tel:+201029474155"
                 className="p-3 rounded-lg bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow-primary group">
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-hero-gradient p-1 animate-glow">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary/30">DA</div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-lg animate-float opacity-80"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-primary-glow rounded-lg animate-float opacity-60" style={{animationDelay: '1.5s'}}></div>
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
    </section>
  )
}
