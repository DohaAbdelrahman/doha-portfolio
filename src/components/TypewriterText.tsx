import { useState, useEffect } from "react";

interface TypewriterTextProps {
  text: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseAfterTyping?: number;
  pauseAfterDeleting?: number;
  className?: string;
}

export const TypewriterText = ({
  text,
  typingSpeed = 100,
  deletingSpeed = 60,
  pauseAfterTyping = 2000,
  pauseAfterDeleting = 800,
  className = "",
}: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false);
        if (isDeleting) {
          setIsDeleting(false);
        }
      }, isDeleting ? pauseAfterDeleting : pauseAfterTyping);
      return () => clearTimeout(timeout);
    }

    if (!isDeleting) {
      // Typing
      if (displayText.length < text.length) {
        timeout = setTimeout(() => {
          setDisplayText(text.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        // Finished typing, pause before deleting
        setIsPaused(true);
        setIsDeleting(true);
      }
    } else {
      // Deleting
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(text.slice(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        // Finished deleting, pause before typing again
        setIsPaused(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, isPaused, text, typingSpeed, deletingSpeed, pauseAfterTyping, pauseAfterDeleting]);

  return (
    <span className={`${className} whitespace-nowrap`}>
      {displayText}
      <span className="animate-cursor-blink text-primary">|</span>
    </span>
  );
};
