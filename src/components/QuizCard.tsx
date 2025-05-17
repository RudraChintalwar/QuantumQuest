import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Question, Difficulty } from "@/types/quiz";

interface QuizCardProps {
  question: Question;
  onAnswer: (answer: string) => void;
  timeLimit: number;
  selectedAnswer?: string;
}

const QuizCard = ({
  question,
  onAnswer,
  timeLimit,
  selectedAnswer,
}: QuizCardProps) => {
  const [answered, setAnswered] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number>(timeLimit);
  const [typedText, setTypedText] = useState("");
  const [isLockingIn, setIsLockingIn] = useState(false);
  const [lockedAnswer, setLockedAnswer] = useState<string | null>(null);
  const [skipsRemaining, setSkipsRemaining] = useState(3);
  const [removedOptions, setRemovedOptions] = useState<string[]>([]);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  // Audio effects
  const typeSound = useRef<HTMLAudioElement | null>(null);
  const lockSound = useRef<HTMLAudioElement | null>(null);
  const skipSound = useRef<HTMLAudioElement | null>(null);

  // Create audio elements
  useEffect(() => {
    typeSound.current = new Audio(
      "https://assets.mixkit.co/active_storage/sfx/212/212-preview.mp3"
    );
    typeSound.current.volume = 0.2;

    lockSound.current = new Audio(
      "https://assets.mixkit.co/active_storage/sfx/270/270-preview.mp3"
    );
    lockSound.current.volume = 0.3;

    skipSound.current = new Audio(
      "https://assets.mixkit.co/active_storage/sfx/181/181-preview.mp3"
    );
    skipSound.current.volume = 0.4;

    return () => {
      if (typeSound.current) typeSound.current = null;
      if (lockSound.current) lockSound.current = null;
      if (skipSound.current) skipSound.current = null;
    };
  }, []);

  // Reset on question change
  useEffect(() => {
    setAnswered(false);
    setTimeLeft(timeLimit);
    setTypedText("");
    setIsLockingIn(false);
    setLockedAnswer(null);
    setRemovedOptions([]);

    // Start typewriter effect
    let index = 0;
    const textLength = question.text.length;

    const typeInterval = setInterval(() => {
      if (index < textLength) {
        setTypedText((prev) => {
          const newText = question.text.substring(0, index + 1);

          // Play typing sound
          if (typeSound.current && index % 3 === 0) {
            typeSound.current.currentTime = 0;
            typeSound.current
              .play()
              .catch((e) => console.error("Audio play error:", e));
          }

          return newText;
        });
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 30);

    return () => clearInterval(typeInterval);
  }, [question.id, timeLimit]);

  // Timer countdown
  useEffect(() => {
    if (answered || timeLeft <= 0) return;

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, answered]);

  // Handle timeout - key logic from the second component
  useEffect(() => {
    if (timeLeft <= 0 && !answered && !isLockingIn) {
      setAnswered(true);
      onAnswer(""); // Auto-submit empty answer when time runs out
    }
  }, [timeLeft, answered, isLockingIn, onAnswer]);

  const handleAnswer = (option: string) => {
    if (answered || timeLeft <= 0 || isLockingIn) return;

    setIsLockingIn(true);
    setLockedAnswer(option);

    // Play lock sound
    if (lockSound.current) {
      lockSound.current
        .play()
        .catch((e) => console.error("Audio play error:", e));
    }

    // Who Wants to Be a Millionaire lock-in animation
    setTimeout(() => {
      setAnswered(true);
      setIsLockingIn(false);
      onAnswer(option);
    }, 2000); // Lock-in animation duration
  };

  const handleSkip = () => {
    if (skipsRemaining <= 0 || answered || isLockingIn) return;

    // Find wrong options
    const wrongOptions = question.options.filter(
      (opt) => opt !== question.correctAnswer
    );

    // If we already removed some, don't remove those again
    const availableWrongOptions = wrongOptions.filter(
      (opt) => !removedOptions.includes(opt)
    );

    if (availableWrongOptions.length === 0) return;

    // Choose a random wrong option to remove
    const randomIndex = Math.floor(
      Math.random() * availableWrongOptions.length
    );
    const optionToRemove = availableWrongOptions[randomIndex];

    // Play skip sound
    if (skipSound.current) {
      skipSound.current
        .play()
        .catch((e) => console.error("Audio play error:", e));
    }

    setSkipsRemaining((prev) => prev - 1);
    setRemovedOptions((prev) => [...prev, optionToRemove]);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setHoverPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const getOptionClass = (option: string) => {
    if (removedOptions.includes(option)) {
      return "opacity-0 pointer-events-none transform scale-0 rotate-12";
    }

    if (isLockingIn && option === lockedAnswer) {
      return "border-white text-white bg-white/20 animate-pulse shadow-lg shadow-white/20";
    }

    if (!answered && !isLockingIn) {
      return "hover:border-white/40 hover:bg-white/5";
    }

    if (option === question.correctAnswer) {
      return "border-green-500 text-green-500 bg-green-500/10";
    }

    if (option === selectedAnswer && option !== question.correctAnswer) {
      return "border-red-500 text-red-500 bg-red-500/10";
    }

    return "opacity-60";
  };

  const getMagneticStyle = (option: string) => {
    if (
      cardRef.current &&
      !answered &&
      !isLockingIn &&
      !removedOptions.includes(option)
    ) {
      const pullStrength = 8; // how strong the magnetic effect is
      const rect = cardRef.current.getBoundingClientRect();

      // Calculate distance from center
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const distX = (hoverPosition.x - centerX) / centerX;
      const distY = (hoverPosition.y - centerY) / centerY;

      return {
        transform: `translate(${distX * pullStrength}px, ${
          distY * pullStrength
        }px)`,
      };
    }
    return {};
  };

  const difficultyClass = {
    easy: "border-futuristic-easy",
    medium: "border-futuristic-violet",
    hard: "border-futuristic-pink",
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "card-glass rounded-xl p-6 w-full max-w-2xl mx-auto animate-fade-in-up",
        "relative overflow-hidden border-2",
        difficultyClass[question.difficulty]
      )}
      onMouseMove={handleMouseMove}
    >
      {/* Timer bar */}
      <div className="absolute top-0 left-0 h-1 bg-gray-700 w-full">
        <div
          className={cn("h-full transition-all duration-1000", {
            "bg-futuristic-easy": question.difficulty === "easy",
            "bg-futuristic-violet": question.difficulty === "medium",
            "bg-futuristic-pink": question.difficulty === "hard",
          })}
          style={{
            width: `${(timeLeft / timeLimit) * 100}%`,
          }}
        ></div>
      </div>

      {/* Question header */}
      <div className="flex justify-between items-center mb-4">
        <span
          className={cn(
            "px-3 py-1 rounded-full text-xs uppercase tracking-wider",
            {
              "bg-futuristic-easy/20 text-futuristic-easy":
                question.difficulty === "easy",
              "bg-futuristic-violet/20 text-futuristic-violet":
                question.difficulty === "medium",
              "bg-futuristic-pink/20 text-futuristic-pink":
                question.difficulty === "hard",
            }
          )}
        >
          {question.difficulty}
        </span>

        <div className="flex items-center gap-2">
          {/* Neural skips */}
          <div className="flex mr-2">
            {[...Array(skipsRemaining)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-futuristic-cyan rounded-full mx-0.5 animate-pulse-glow"
              ></div>
            ))}
          </div>

          <button
            onClick={handleSkip}
            disabled={skipsRemaining <= 0 || answered || isLockingIn}
            className={cn(
              "text-xs px-2 py-1 rounded border-2 transition-all",
              skipsRemaining > 0 && !answered && !isLockingIn
                ? "border-futuristic-cyan text-futuristic-cyan hover:bg-futuristic-cyan/20"
                : "border-gray-500 text-gray-500 opacity-50 cursor-not-allowed"
            )}
          >
            Skip
          </button>

          <span
            className={cn("font-bold", {
              "text-futuristic-easy": timeLeft > timeLimit * 0.6,
              "text-yellow-400":
                timeLeft <= timeLimit * 0.6 && timeLeft > timeLimit * 0.3,
              "text-futuristic-pink": timeLeft <= timeLimit * 0.3,
            })}
          >
            {timeLeft}s
          </span>
        </div>
      </div>

      {/* Question text */}
      <h3 className="mb-8 font-bold text-center text-xl min-h-[3rem]">
        {typedText}
        {typedText.length < question.text.length && (
          <span className="animate-pulse">|</span>
        )}
      </h3>

      {/* Answer options */}
      <div className="space-y-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            disabled={
              answered ||
              timeLeft <= 0 ||
              isLockingIn ||
              removedOptions.includes(option)
            }
            className={cn(
              "w-full p-4 card-glass border border-white/10 rounded-lg text-left",
              "transition-all duration-300",
              "focus:outline-none focus:ring-2 focus:ring-white/30",
              getOptionClass(option)
            )}
            style={getMagneticStyle(option)}
          >
            {/* Option content - hide when locking in */}
            <div
              className={cn(
                "flex items-center",
                isLockingIn && option === lockedAnswer
                  ? "opacity-0"
                  : "opacity-100"
              )}
            >
              <span className="flex items-center justify-center h-6 w-6 rounded-full border border-white/30 mr-3 text-sm">
                {String.fromCharCode(65 + index)}
              </span>
              <span>{option}</span>
            </div>

            {/* Lock-in animation */}
            {isLockingIn && option === lockedAnswer && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full absolute opacity-20 bg-gradient-to-r from-futuristic-cyan via-futuristic-violet to-futuristic-pink animate-pulse"></div>
                <div className="text-white font-bold animate-pulse">
                  Locking in...
                </div>
              </div>
            )}

            {/* Disintegration effect for skipped options */}
            {removedOptions.includes(option) && (
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animation: `disintegrate 1s ease-out forwards`,
                      animationDelay: `${Math.random() * 0.5}s`,
                    }}
                  ></div>
                ))}
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Fixed: Corrected the style tag implementation */}
      <style>
        {`
          @keyframes disintegrate {
            0% {
              opacity: 0.8;
              transform: scale(1);
            }
            100% {
              opacity: 0;
              transform: scale(0) translate(${Math.random() * 100 - 50}px, ${
          Math.random() * 100 - 50
        }px);
            }
          }
        `}
      </style>
    </div>
  );
};

export default QuizCard;
