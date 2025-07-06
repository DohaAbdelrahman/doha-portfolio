import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-glow">
              Doha Abdelrahman
            </h1>

            <p className="text-2xl md:text-4غ8غxl font-semibold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-glow">
              <TypeAnimation
                sequence={[
                  'Data Scientist',
                  1500,
                  'Data Analyst',
                  1500,
                ]}
                speed={80}
                repeat={Infinity}
                cursor={true}
              />
            </p>
            
            <div className="flex flex-col items-center lg:items-start gap-6 mb-12">
              {/* الأزرار الأساسية */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg transition-all duration-300"
                  onClick={() => window.location.href = "mailto:your@email.com"}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Button>
            
                <Button
                  variant="outline"
                  size="lg"
                  className="border-purple-400 hover:border-purple-600 hover:bg-purple-100 transition-all"
                  onClick={() => window.open("https://drive.google.com/file/d/1pP6CoZjq1oCSpuOwrjoZcuok6A3voY0D/view?usp=sharing", "_blank")}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </div>
            
              {/* أزرار GitHub و LinkedIn على شكل دائري وتحت */}
              <div className="flex gap-4 justify-center">
                <button
                  className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center hover:bg-purple-700 transition-all"
                  onClick={() => window.open("https://linkedin.com/in/doha-abdelrahman-3540292a5", "_blank")}
                >
                  {/* LinkedIn أيقونة */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0H13v2.25h.09c.77-1.47 2.65-3 5.41-3 5.79 0 6.86 3.82 6.86 8.79V24h-5V15.5c0-2.02-.04-4.62-3.05-4.62-3.05 0-3.52 2.24-3.52 4.47V24H7.5V8z"/>
                  </svg>
                </button>
            
                <button
                  className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-900 transition-all"
                  onClick={() => window.open("https://github.com/DohaAbdelrahman", "_blank")}
                >
                  {/* GitHub أيقونة */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .5C5.73.5.5 5.73.5 12.02c0 5.11 3.29 9.44 7.86 10.98.58.1.79-.25.79-.56v-2.1c-3.2.7-3.87-1.54-3.87-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.7.08-.7 1.17.08 1.78 1.21 1.78 1.21 1.04 1.78 2.72 1.26 3.38.96.1-.75.41-1.26.75-1.55-2.55-.3-5.23-1.28-5.23-5.7 0-1.26.45-2.28 1.19-3.08-.12-.3-.52-1.53.11-3.19 0 0 .97-.31 3.18 1.18a11 11 0 012.9-.39c.98 0 1.98.13 2.9.39 2.21-1.49 3.17-1.18 3.17-1.18.64 1.66.24 2.89.12 3.19.74.8 1.18 1.82 1.18 3.08 0 4.43-2.68 5.4-5.24 5.69.42.37.8 1.1.8 2.22v3.29c0 .31.21.66.8.55A10.53 10.53 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Image Section with Real Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-4 bg-gradient-card rounded-full border-2 border-primary/30 flex items-center justify-center">
                <img
                  src="https://i.postimg.cc/bvtBr1TD/Whats-App-Image-2025-06-22-at-16-25-05-6d9fe2ba.jpg" // 🔁 غيري للرابط أو import لو محلية
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
