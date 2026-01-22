import { useState, useEffect } from "react";

const WelcomeMessage = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [showMessage, setShowMessage] = useState(true);
  const fullText = "Hey! Thanks for visiting my portfolio 😊❤️";

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (displayedText.length < fullText.length) {
      timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 80);
    } else {
      // Hide the message after showing for 1 second
      timer = setTimeout(() => {
        setShowMessage(false);
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [displayedText, fullText]);

  if (!showMessage) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center animate-fade-in">
      {/* Full screen glassmorphism background */}
      <div className="absolute inset-0 backdrop-blur-md bg-black/30"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5"></div>

      {/* Content container */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-4">
        <div className="text-center">
          <p
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-relaxed"
            style={{ fontFamily: 'Kalam, cursive', fontWeight: 700 }}
          >
            {displayedText}
            <span className="animate-pulse ml-1 text-primary">|</span>
          </p>
        </div>
      </div>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 blur-3xl opacity-50 -z-10"></div>
    </div>
  );
};

export default WelcomeMessage;