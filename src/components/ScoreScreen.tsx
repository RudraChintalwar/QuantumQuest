import { useEffect, useState, useRef } from "react";
import NeonButton from "./NeonButton";
import { Question } from "@/types/quiz";
import { cn } from "@/lib/utils";
import {
  Trophy,
  Timer,
  Star,
  Home,
  Sparkles,
  LifeBuoy,
  Award,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ScoreScreenProps {
  score: number;
  totalQuestions: number;
  questions: Question[];
  answers: string[];
  onRetry: () => void;
}

const ScoreScreen = ({
  score,
  totalQuestions,
  questions,
  answers,
  onRetry,
}: ScoreScreenProps) => {
  const [displayScore, setDisplayScore] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const [animateBackground, setAnimateBackground] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const navigate = useNavigate();

  // Calculate percentage score
  const percentage = Math.round((score / totalQuestions) * 100);

  // Background animation effect (like in WelcomeScreen)
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateBackground((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Determine badge based on score percentage
  const getBadge = () => {
    if (percentage >= 90)
      return {
        title: "Cerebral Master",
        icon: <Trophy className="h-10 w-10 text-yellow-400" />,
        color: "text-yellow-400",
      };
    if (percentage >= 75)
      return {
        title: "Blazing Intellect",
        icon: <Star className="h-10 w-10 text-futuristic-violet" />,
        color: "text-futuristic-violet",
      };
    return {
      title: "Neural Sprinter",
      icon: <Timer className="h-10 w-10 text-futuristic-cyan" />,
      color: "text-futuristic-cyan",
    };
  };

  const badge = getBadge();

  // Animate score counting
  useEffect(() => {
    setDisplayScore(0);
    if (score > 0) {
      const timeout = setTimeout(() => {
        setDisplayScore((prev) => (prev > score ? prev + 1 : score));
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [score]);

  // Animate percentage counting
  useEffect(() => {
    setAnimatedPercentage(0);
    if (percentage > 0) {
      const duration = 1500; // 1.5 seconds
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        setAnimatedPercentage(Math.floor(progress * percentage));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [percentage]);

  // Draw semicircle speedometer
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2; // Center in the middle of the canvas
    const radius = Math.min(width, height) * 0.4; // Slightly smaller radius

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw semicircle background
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, Math.PI, 2 * Math.PI, false);
    ctx.fillStyle = "rgba(20, 20, 30, 0.7)";
    ctx.fill();

    // Draw outer rim
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, Math.PI, 2 * Math.PI, false);
    ctx.lineWidth = 8;
    ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
    ctx.stroke();

    // Draw colored segments (180 degrees total, from PI to 2*PI)
    const startAngle = Math.PI; // 180 degrees
    const endAngle = 2 * Math.PI; // 360 degrees
    const totalAngle = endAngle - startAngle;

    // Gradient for smooth color transition - match the futuristic theme colors
    const gradient = ctx.createLinearGradient(
      centerX - radius,
      centerY,
      centerX + radius,
      centerY
    );
    gradient.addColorStop(0, "#ec4899"); // futuristic-pink
    gradient.addColorStop(0.5, "#7c3aed"); // futuristic-violet
    gradient.addColorStop(1, "#4adede"); // futuristic-cyan

    // Draw colored arc
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius - 8, startAngle, endAngle, false);
    ctx.lineWidth = 16;
    ctx.strokeStyle = gradient;
    ctx.stroke();

    // Draw major ticks and labels
    ctx.font = "bold 12px Inter, sans-serif";
    ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    for (let i = 0; i <= 10; i++) {
      const value = i * 10;
      const angle = startAngle + totalAngle * (i / 10);
      const tickLength = i % 2 === 0 ? 18 : 12;

      // Tick
      ctx.beginPath();
      ctx.moveTo(
        centerX + Math.cos(angle) * (radius - tickLength),
        centerY + Math.sin(angle) * (radius - tickLength)
      );
      ctx.lineTo(
        centerX + Math.cos(angle) * radius,
        centerY + Math.sin(angle) * radius
      );
      ctx.lineWidth = i % 2 === 0 ? 3 : 2;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.7)";
      ctx.stroke();

      // Label for major ticks - adjusted position for bottom semicircle
      if (i % 2 === 0) {
        // For the labels
        const labelRadius = radius + 20; // Position labels further outside the arc
        const labelX = centerX + Math.cos(angle) * labelRadius;
        const labelY = centerY + Math.sin(angle) * labelRadius;

        // Rotate label text to match the meter's curvature
        ctx.save();
        ctx.translate(labelX, labelY);

        ctx.fillText(value.toString(), 0, 0);
        ctx.restore();
      }
    }

    // Draw needle at current percentage
    const needleAngle = startAngle + totalAngle * (animatedPercentage / 100);

    // Needle shadow - enhanced glow effect
    ctx.save();
    ctx.shadowColor = "rgba(74, 222, 222, 0.7)"; // futuristic-cyan shadow
    ctx.shadowBlur = 15;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;

    // Needle
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(
      centerX + Math.cos(needleAngle) * (radius - 20),
      centerY + Math.sin(needleAngle) * (radius - 20)
    );
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#ffffff";
    ctx.stroke();
    ctx.restore();

    // Needle tip with glowing effect
    ctx.beginPath();
    ctx.arc(
      centerX + Math.cos(needleAngle) * (radius - 20),
      centerY + Math.sin(needleAngle) * (radius - 20),
      5,
      0,
      Math.PI * 2
    );
    ctx.fillStyle = "#4adede"; // futuristic-cyan for the needle tip
    ctx.fill();
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 1;
    ctx.stroke();

    // Draw base circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, 12, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(20, 20, 30, 0.9)";
    ctx.fill();
    ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw percentage text above the base
    ctx.font = "bold 48px Inter, sans-serif";
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Draw percentage text centered below the speedometer
    ctx.fillText(`${animatedPercentage}%`, centerX, centerY + radius - 13);

    // Add "Score" label
    ctx.font = "24px Inter, sans-serif";
    ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
    ctx.fillText("Score", centerX, centerY + radius - 48);
  }, [animatedPercentage]);

  return (
    <div className="flex flex-col items-center justify-center max-w-4xl mx-auto w-full animate-fade-in relative min-h-screen py-12">
      {/* Enhanced dynamic background - matching WelcomeScreen */}
      <div
        className={`absolute z-0 w-[600px] h-[600px] rounded-full bg-futuristic-violet/15 blur-[120px] opacity-70 transition-all duration-5000 ${
          animateBackground ? "scale-110" : "scale-100"
        }`}
      ></div>
      <div
        className={`absolute z-0 w-[500px] h-[500px] rounded-full bg-futuristic-cyan/15 blur-[120px] opacity-70 -translate-x-40 translate-y-20 transition-all duration-5000 ${
          animateBackground ? "scale-100" : "scale-110"
        }`}
      ></div>
      <div
        className={`absolute z-0 w-[400px] h-[400px] rounded-full bg-futuristic-pink/15 blur-[120px] opacity-60 translate-x-40 -translate-y-20 transition-all duration-5000 ${
          animateBackground ? "scale-110 rotate-45" : "scale-100 rotate-0"
        }`}
      ></div>

      {/* Stars background effect */}
      <div className="stars-container fixed inset-0 overflow-hidden pointer-events-none"></div>

      {/* Title section with enhanced animation */}
      <div className="z-10 mb-10 text-center relative">
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 opacity-80">
          <Trophy size={60} className="text-futuristic-cyan animate-pulse" />
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold tracking-tighter mb-4 relative">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-futuristic-cyan via-futuristic-violet to-futuristic-pink animate-gradient-x">
            RESULTS
          </span>
          <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-futuristic-cyan via-futuristic-violet to-futuristic-pink rounded-full animate-pulse"></div>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-300 mb-8 font-light">
          <span className="typing-animation">
            Your Quantum Quest Performance
          </span>
        </p>
      </div>

      <div className="card-glass border border-white/20 rounded-2xl p-8 w-full mb-10 z-10 backdrop-blur-xl relative overflow-hidden shadow-glow">
        <div className="absolute inset-0 bg-gradient-to-br from-futuristic-cyan/5 to-futuristic-pink/5"></div>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
            Quest Complete!
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Your journey through the quantum realms has concluded. Here's how
            you performed:
          </p>
        </div>

        {/* Speedometer Container */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-64 h-64 mb-4">
            <canvas
              ref={canvasRef}
              width={300}
              height={300}
              className="w-full h-full"
            />
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border-4 border-opacity-20 border-white shadow-lg">
              <span className="text-2xl font-bold">
                {displayScore}/{totalQuestions}
              </span>
            </div>
            <div className="h-14 w-px bg-white/10"></div>
            <div className="inline-flex items-center gap-2 card-glass py-3 px-6 rounded-full border border-white/10 animate-pulse-slow shadow-glow">
              {badge.icon}
              <span className={`font-bold text-xl ${badge.color}`}>
                {badge.title}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="card-glass border border-white/10 rounded-lg p-4 text-center hover:bg-white/5 transition-colors hover:transform hover:scale-105 duration-300">
            <div className="text-gray-400 text-sm mb-1">Score Percentage</div>
            <div className="text-2xl font-bold bg-gradient-to-r from-futuristic-cyan to-futuristic-violet bg-clip-text text-transparent">
              {percentage}%
            </div>
          </div>

          <div className="card-glass border border-white/10 rounded-lg p-4 text-center hover:bg-white/5 transition-colors hover:transform hover:scale-105 duration-300">
            <div className="text-gray-400 text-sm mb-1">Correct Answers</div>
            <div className="text-2xl font-bold">
              {score} of {totalQuestions}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <NeonButton
            onClick={() => {
              navigate("/");
              window.location.reload();
            }}
            variant="outline"
            size="lg"
            className="sm:order-1 flex items-center justify-center gap-1"
          >
            <Home className="w-5 h-5" />
            Home
          </NeonButton>

          <NeonButton
            onClick={onRetry}
            variant="cyan"
            size="lg"
            className="sm:order-2 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-futuristic-cyan/0 via-white/20 to-futuristic-cyan/0 -translate-x-full group-hover:animate-shimmer"></div>
            <Sparkles className="inline-block mr-2" size={20} />
            Retry Quest
          </NeonButton>

          <NeonButton
            onClick={() => setShowDetails(!showDetails)}
            variant="outline"
            size="lg"
            className="sm:order-3"
          >
            {showDetails ? "Hide Details" : "View Details"}
          </NeonButton>
        </div>
      </div>

      {showDetails && (
        <div className="card-glass border border-white/20 rounded-xl p-8 z-10 w-full backdrop-blur-xl relative overflow-hidden shadow-glow animate-fade-in">
          <div className="absolute inset-0 bg-gradient-to-br from-futuristic-pink/5 to-futuristic-cyan/5"></div>

          <h3 className="font-bold mb-6 text-center text-2xl flex items-center justify-center">
            <LifeBuoy className="mr-2 text-futuristic-violet" size={24} />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              Answer Breakdown
            </span>
          </h3>

          <div className="space-y-4">
            {questions.map((question, index) => {
              const isCorrect = answers[index] === question.correctAnswer;
              return (
                <div
                  key={question.id}
                  className={cn(
                    "card-glass border-l-4 rounded-lg p-4 transition-all hover:bg-white/5 hover:transform hover:scale-101 duration-300",
                    isCorrect ? "border-l-green-500" : "border-l-red-500"
                  )}
                >
                  <div className="flex justify-between mb-2">
                    <span
                      className={cn("text-xs px-2 py-0.5 rounded-full", {
                        "bg-green-500/20 text-green-500": isCorrect,
                        "bg-red-500/20 text-red-500": !isCorrect,
                      })}
                    >
                      {isCorrect ? "Correct" : "Incorrect"}
                    </span>
                    <span
                      className={cn("text-xs px-2 py-0.5 rounded-full", {
                        "bg-green-500/20 text-green-500":
                          question.difficulty === "easy",
                        "bg-futuristic-violet/20 text-futuristic-violet":
                          question.difficulty === "medium",
                        "bg-futuristic-pink/20 text-futuristic-pink":
                          question.difficulty === "hard",
                      })}
                    >
                      {question.difficulty}
                    </span>
                  </div>

                  <h4 className="text-sm font-medium mb-2">{question.text}</h4>

                  <div className="text-xs">
                    <div className="flex flex-wrap gap-2">
                      <span className="text-gray-400">Your answer:</span>
                      <span
                        className={
                          isCorrect ? "text-green-500" : "text-red-500"
                        }
                      >
                        {answers[index] || "No answer"}
                      </span>
                    </div>

                    {!isCorrect && (
                      <div className="flex flex-wrap gap-2 mt-1">
                        <span className="text-gray-400">Correct answer:</span>
                        <span className="text-green-500">
                          {question.correctAnswer}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Added achievement teaser - matching WelcomeScreen */}
      <div className="mt-8 card-glass border border-white/20 rounded-xl p-6 z-10 backdrop-blur-xl w-full text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-futuristic-cyan/5 via-futuristic-violet/5 to-futuristic-pink/5"></div>
        <div className="font-bold text-xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-futuristic-cyan via-futuristic-violet to-futuristic-pink">
          Achievement Unlocked: {badge.title}!
        </div>
        <p className="text-gray-300 text-sm">
          Continue your journey to earn more badges and increase your mastery
          across all knowledge domains.
        </p>
      </div>

      {/* Added CSS for animations - matching WelcomeScreen */}
      <style>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes float-slow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        
        @keyframes scale-101 {
          to { transform: scale(1.01); }
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        .typing-animation {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          border-right: 3px solid transparent;
          animation: typing 3.5s steps(40, end);
        }
        
        .hover\\:scale-101:hover {
          transform: scale(1.01);
        }
        
        .shadow-glow {
          box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
        }
        
        .shadow-glow-cyan {
          box-shadow: 0 0 25px rgba(74, 222, 222, 0.2);
        }
        
        .shadow-glow-violet {
          box-shadow: 0 0 25px rgba(124, 58, 237, 0.2);
        }
        
        .shadow-glow-pink {
          box-shadow: 0 0 25px rgba(236, 72, 153, 0.2);
        }
        
        /* Stars background effect */
        .stars-container {
          background-image: 
            radial-gradient(2px 2px at 20px 30px, #ffffff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 40px 70px, #ffffff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 90px 40px, #ffffff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 160px 120px, #ffffff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 230px 180px, #ffffff, rgba(0,0,0,0));
          background-repeat: repeat;
          background-size: 250px 250px;
          opacity: 0.15;
        }
      `}</style>
    </div>
  );
};

export default ScoreScreen;
