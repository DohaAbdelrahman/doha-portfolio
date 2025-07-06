import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Programming workspace"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float opacity-30">
        <div className="w-2 h-2 bg-primary rounded-full shadow-glow" />
      </div>
      <div className="absolute top-40 right-20 animate-float opacity-40" style={{ animationDelay: '1s' }}>
        <div className="w-3 h-3 bg-primary-glow rounded-full shadow-glow" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float opacity-35" style={{ animationDelay: '2s' }}>
        <div className="w-1.5 h-1.5 bg-primary rounded-full shadow-glow" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-sky-800 mb-6">
          Hi, I'm{' '}
          <span className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-glow">
            <TypeAnimation
              sequence={[
                'Doha Abdelrahman',
                1000,
                '',
                500,
              ]}
              speed={80}
              repeat={Infinity}
              cursor={true}
            />
          </span>
        </h1>

        <p className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-glow">
          <TypeAnimation
            sequence={[
              'Data Scientist',
              1500,
              'Data Analyst',
              1500,
              'Machine Learning Expert',
              1500,
            ]}
            speed={80}
            repeat={Infinity}
            cursor={true}
          />
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
            <Mail className="mr-2 h-4 w-4" />
            Get In Touch
          </Button>
          <Button variant="outline" size="lg" className="border-primary/30 hover:border-primary hover:bg-primary/10">
            <Download className="mr-2 h-4 w-4" />
            Download-CV
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;