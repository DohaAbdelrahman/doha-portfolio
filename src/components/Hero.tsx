import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { SiKaggle } from "react-icons/si";
import { TypewriterText } from "./TypewriterText";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating geometric elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-16 w-4 h-4 bg-primary rounded-full animate-float opacity-60" />
        <div
          className="absolute top-64 right-32 w-6 h-6 bg-primary rounded-lg animate-float opacity-40"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-40 left-1/4 w-3 h-3 bg-primary-glow rounded-full animate-float opacity-70"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-32 right-16 w-5 h-5 bg-primary rounded-lg rotate-45 animate-float opacity-50"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* CONTENT */}
          <div className="space-y-6 animate-slide-up order-2 lg:order-1">
            {/* Badges */}
            <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
              <span className="px-4 py-2 bg-primary/20 text-primary rounded-full border border-primary/30 font-bold">
                Data Scientist
              </span>
              <span className="px-4 py-2 bg-primary/20 text-primary rounded-full border border-primary/30 font-bold">
                ML Engineer
              </span>
            </div>

            {/* Name */}
            <div className="h-[60px] sm:h-[70px] lg:h-[90px] flex items-center justify-center sm:justify-start">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-center sm:text-left animate-name-glow">
                <TypewriterText
                  text="Doha Abdelrahman"
                  typingSpeed={100}
                  deletingSpeed={60}
                  pauseAfterTyping={2000}
                  pauseAfterDeleting={800}
                  className="bg-gradient-text bg-clip-text text-transparent"
                />
              </h1>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground text-center sm:text-left sm:text-base lg:text-xl max-w-3xl mx-auto sm:mx-0">
              Hi, my name is Doha Abdelrahman,
            </p>

            {/* Buttons */}
            <div className="flex gap-4 justify-center sm:justify-start">
              <Button className="bg-gradient-primary text-base font-semibold">
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>

              <Button
                variant="outline"
                className="border-primary/30 text-base font-semibold"
                onClick={() => {
                  const cvUrl =
                    "https://drive.google.com/file/d/1DY-qZXrARUREa2j51NQTWUM9DxSbmrzV/view";
                  const link = document.createElement("a");
                  link.href = cvUrl;
                  link.download = "Doha_Abdelrahman_CV.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Download CV
              </Button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-4 justify-center sm:justify-start">
              <a className="social-btn" href="https://github.com/DohaAbdelrahman" target="_blank">
                <Github className="w-5 h-5" />
              </a>
              <a className="social-btn" href="https://linkedin.com" target="_blank">
                <Linkedin className="w-5 h-5" />
              </a>
              <a className="social-btn" href="mailto:dohaabd757@gmail.com">
                <Mail className="w-5 h-5" />
              </a>
              <a className="social-btn" href="tel:+201029474155">
                <Phone className="w-5 h-5" />
              </a>
              <a className="social-btn" href="https://kaggle.com/YOUR_USERNAME" target="_blank">
                <SiKaggle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center order-1 lg:order-2 pt-16 sm:pt-8 lg:pt-0">
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
              <div className="w-full h-full rounded-full bg-gradient-primary p-1 animate-glow">
                <img
                  src="/lovable-uploads/121f87dd-0ca8-40da-96e8-2f5fb7ca5fe7.png"
                  alt="Doha Abdelrahman"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator (Desktop only) */}
        <div className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};
