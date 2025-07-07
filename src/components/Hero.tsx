import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail, Facebook, Instagram } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float opacity-30">
        <div className="w-2 h-2 bg-blue-400 rounded-full shadow-glow" />
      </div>
      <div className="absolute top-40 right-20 animate-float opacity-40" style={{ animationDelay: '1s' }}>
        <div className="w-3 h-3 bg-blue-400 rounded-full shadow-glow" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float opacity-35" style={{ animationDelay: '2s' }}>
        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full shadow-glow" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-white animate-fade-in">
        <div className="text-center">
          <div className="inline-block px-4 py-1 mb-6 text-sm font-medium text-white bg-gray-800 border border-gray-600 rounded-full">
            <code className="text-blue-300">💻 Data Scientist</code>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-6">
            Doha Abdelrahman
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Turning data into insights with machine learning, analytics, and visualizations, I deliver impactful solutions that simplify complexity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
              onClick={() => window.open("#portfolio", "_self")}
            >
              View My Work
            </Button>

            <Button
              size="lg"
              className="bg-black border border-white hover:bg-white hover:text-black transition"
              onClick={() =>
                window.open("https://drive.google.com/file/d/1pP6CoZjq1oCSpuOwrjoZcuok6A3voY0D/view?usp=sharing", "_blank")
              }
            >
              Download CV
            </Button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/DohaAbdelrahman"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/doha-abdelrahman-3540292a5"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:your@email.com"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/doha.abdelrahman.228910"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/doha__rahil/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce mt-10">
            <ArrowDown className="h-6 w-6 mx-auto text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
