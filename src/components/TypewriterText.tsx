import React, { useState, useEffect } from "react";

interface TypewriterTextProps {
  texts: string[];
  typingSpeed?: number;
  deleteSpeed?: number;
  delayBetween?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  texts,
  typingSpeed = 100,
  deleteSpeed = 50,
  delayBetween = 2000,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (displayText !== texts[currentIndex]) {
        timeout = setTimeout(() => {
          setDisplayText(texts[currentIndex].slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setIsTyping(false), delayBetween);
      }
    } else {
      if (displayText === "") {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      } else {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deleteSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    displayText,
    isTyping,
    currentIndex,
    texts,
    typingSpeed,
    deleteSpeed,
    delayBetween,
  ]);

  return (
    <span className="text-blue-600 dark:text-blue-400">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypewriterText;
