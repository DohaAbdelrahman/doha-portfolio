import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail, Github, Linkedin, Facebook, Instagram } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.postimg.cc/gjK4CDKR/aiease-1751820057925.jpg"
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
      <div className="relative z-10 max-w-6xl mx-auto px-6 animate-fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-pink-300 bg-[#1a1a1a] border border-pink-400 rounded-full">
              Data Scientist
            </span>

            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#cc66ff] via-[#e1bee7] to-[#f48fb1] bg-clip-text text-transparent animate-glow">
              Doha Abdelrahman
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-xl">
              Turning data into insights with machine learning, analytics, and visualizations, I deliver impactful solutions that simplify complexity.
            </p>

            {/* Main Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start items-center mb-12">
              <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg transition-all duration-300"
                  onClick={() => window.location.href = "mailto:your@email.com"}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Button>

              <Button
                size="lg"
                 className="border-purple-400 hover:border-purple-600 hover:bg-purple-100 transition-all"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1pP6CoZjq1oCSpuOwrjoZcuok6A3voY0D/view?usp=sharing",
                    "_blank"
                  )
                }
              >
                Download CV
              </Button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <button
                className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-purple-700 transition-all"
                onClick={() => window.open("https://github.com/DohaAbdelrahman", "_blank")}
              >
                <Github className="w-5 h-5" />
              </button>

              <button
                className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-purple-700 transition-all"
                onClick={() =>
                  window.open("https://linkedin.com/in/doha-abdelrahman-3540292a5", "_blank")
                }
              >
                <Linkedin className="w-5 h-5" />
              </button>

              <button
                className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-purple-700 transition-all"
                onClick={() => window.location.href = "mailto:your@email.com"}
              >
                <Mail className="w-5 h-5" />
              </button>

              <button
                className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-purple-700 transition-all"
                onClick={() => window.open("https://www.facebook.com/doha.abdelrahman.228910", "_blank")}
              >
                <Facebook className="w-5 h-5" />
              </button>

              <button
                className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-purple-700 transition-all"
                onClick={() => window.open("https://www.instagram.com/doha__rahil/", "_blank")}
              >
                <Instagram className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Profile Image Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-4 bg-gradient-card rounded-full border-2 border-primary/30 flex items-center justify-center">
                <img
                  src="https://i.postimg.cc/bvtBr1TD/Whats-App-Image-2025-06-22-at-16-25-05-6d9fe2ba.jpg"
                  alt="Doha's profile"
                  className="w-85 h-85 rounded-full object-cover mx-auto shadow-lg border-4 border-white"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce mt-8">
          <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
