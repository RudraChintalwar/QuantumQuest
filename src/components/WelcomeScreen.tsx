import { useState, useEffect } from "react";
import NeonButton from "./NeonButton";
import { cn } from "@/lib/utils";
import { Difficulty, Topic } from "@/types/quiz";
import { Sparkles, Brain, Clock, LifeBuoy, Award, Zap } from "lucide-react";

interface WelcomeScreenProps {
  onStart: (maxQuestions: number, difficulty: Difficulty, topic: Topic) => void;
}

const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  const [maxQuestions, setMaxQuestions] = useState(5);
  const [difficulty, setDifficulty] = useState<Difficulty>("easy");
  const [topic, setTopic] = useState<Topic>("programming");
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [animateBackground, setAnimateBackground] = useState(false);

  // Particle animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateBackground((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const topics: Topic[] = [
    "physics",
    "chemistry",
    "biology",
    "programming",
    "gk",
  ];

  const difficulties: Difficulty[] = ["easy", "medium", "hard"];

  // Topic icons mapping
  const topicIcons = {
    physics: "🔭",
    chemistry: "⚗️",
    biology: "🧬",
    programming: "💻",
    gk: "🌎",
  };

  // Get difficulty color
  const getDifficultyColor = (diff: Difficulty) => {
    switch (diff) {
      case "easy":
        return "from-green-400 to-emerald-500";
      case "medium":
        return "from-futuristic-violet to-purple-500";
      case "hard":
        return "from-futuristic-pink to-red-500";
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-4xl mx-auto w-full animate-fade-in relative min-h-screen py-12">
      {/* Enhanced dynamic background */}
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
          <Sparkles size={60} className="text-futuristic-cyan animate-pulse" />
        </div>

        <h1 className="text-6xl sm:text-8xl font-bold tracking-tighter mb-4 relative">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-futuristic-cyan via-futuristic-violet to-futuristic-pink animate-gradient-x">
            QUANTUM QUEST
          </span>
          <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-futuristic-cyan via-futuristic-violet to-futuristic-pink rounded-full animate-pulse"></div>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-300 mb-8 font-light">
          <span className="typing-animation">
            Challenge Your Knowledge Across Dimensions
          </span>
        </p>
      </div>

      {/* Main card with glassmorphism effect */}
      <div className="card-glass border border-white/20 rounded-2xl p-8 w-full mb-10 z-10 backdrop-blur-xl relative overflow-hidden shadow-glow">
        <div className="absolute inset-0 bg-gradient-to-br from-futuristic-cyan/5 to-futuristic-pink/5"></div>

        <div className="text-center mb-10 relative">
          <Brain className="h-12 w-12 mx-auto mb-4 text-futuristic-violet animate-float" />
          <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
            Embark on Your Knowledge Journey
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Prepare to have your intellect challenged across multiple dimensions
            of knowledge. Select your battleground, set your difficulty, and
            prove your mastery!
          </p>
        </div>

        {/* Enhanced TOPIC SELECTION with icons and animations */}
        <div className="mb-10">
          <label className="text-lg text-gray-200 mb-3 font-medium flex items-center justify-center">
            <Zap className="mr-2 text-futuristic-cyan" size={20} />
            Choose Your Battleground:
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {topics.map((t) => (
              <button
                key={t}
                className={cn(
                  "group p-5 card-glass rounded-xl transition-all duration-300 border-2 text-center relative overflow-hidden h-24 flex flex-col items-center justify-center hover:transform hover:scale-105",
                  topic === t
                    ? "border-futuristic-cyan text-white shadow-glow-cyan"
                    : "border-white/10 text-gray-300 hover:border-white/30",
                  hoveredButton === `topic-${t}` && "animate-pulse-glow"
                )}
                onClick={() => setTopic(t)}
                onMouseEnter={() => setHoveredButton(`topic-${t}`)}
                onMouseLeave={() => setHoveredButton(null)}
              >
                <div
                  className={cn(
                    "absolute inset-0 opacity-0 transition-opacity duration-500 bg-gradient-to-br from-futuristic-cyan/20 to-transparent",
                    topic === t ? "opacity-20" : "group-hover:opacity-10"
                  )}
                ></div>

                <div className="text-3xl mb-1">{topicIcons[t]}</div>
                <div className="font-medium">
                  {t === "gk"
                    ? "General Knowledge"
                    : t.charAt(0).toUpperCase() + t.slice(1)}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced DIFFICULTY SELECTION with gradient effects */}
        <div className="mb-10">
          <label className="text-lg text-gray-200 mb-3 font-medium flex items-center justify-center">
            <Award className="mr-2 text-futuristic-violet" size={20} />
            Select Your Challenge Level:
          </label>

          <div className="flex justify-center gap-6 flex-wrap">
            {difficulties.map((diff) => {
              const gradientClass = getDifficultyColor(diff);

              return (
                <button
                  key={diff}
                  className={cn(
                    "relative py-4 px-6 w-32 card-glass rounded-xl transition-all duration-300 border-2 hover:transform hover:scale-105",
                    difficulty === diff
                      ? diff === "easy"
                        ? "border-green-400 text-white shadow-glow-green"
                        : diff === "medium"
                        ? "border-futuristic-violet text-white shadow-glow-violet"
                        : "border-futuristic-pink text-white shadow-glow-pink"
                      : "border-white/10 text-gray-300 hover:border-white/30",
                    hoveredButton === `diff-${diff}` && "animate-pulse-glow"
                  )}
                  onClick={() => setDifficulty(diff)}
                  onMouseEnter={() => setHoveredButton(`diff-${diff}`)}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  <div
                    className={cn(
                      "absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 rounded-lg bg-gradient-to-br",
                      gradientClass,
                      difficulty === diff ? "opacity-15" : ""
                    )}
                  ></div>

                  <div className="flex flex-col items-center">
                    {diff === "easy" && (
                      <span className="text-xl mb-1">🌱</span>
                    )}
                    {diff === "medium" && (
                      <span className="text-xl mb-1">🔥</span>
                    )}
                    {diff === "hard" && (
                      <span className="text-xl mb-1">💫</span>
                    )}
                    <span className="font-medium">
                      {diff.charAt(0).toUpperCase() + diff.slice(1)}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Enhanced QUESTION COUNT with visual indicators */}
        <div className="mb-10">
          <label className="text-lg text-gray-200 mb-3 font-medium flex items-center justify-center">
            <Clock className="mr-2 text-futuristic-pink" size={20} />
            Number of Questions:
          </label>

          <div className="flex justify-center gap-6 flex-wrap">
            {[5, 10, 15].map((num) => (
              <button
                key={num}
                className={cn(
                  "relative py-4 px-6 card-glass rounded-xl transition-all duration-300 border-2 hover:transform hover:scale-105 flex flex-col items-center",
                  maxQuestions === num
                    ? "border-futuristic-cyan text-white shadow-glow-cyan"
                    : "border-white/10 text-gray-300 hover:border-white/30",
                  hoveredButton === `num-${num}` && "animate-pulse-glow"
                )}
                onClick={() => setMaxQuestions(num)}
                onMouseEnter={() => setHoveredButton(`num-${num}`)}
                onMouseLeave={() => setHoveredButton(null)}
              >
                <div
                  className={cn(
                    "absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 rounded-xl bg-gradient-to-br from-futuristic-cyan/20 to-transparent",
                    maxQuestions === num && "opacity-20"
                  )}
                ></div>

                <div className="text-2xl font-bold mb-1">{num}</div>
                <div className="text-xs opacity-70">
                  {num === 5 ? "Quick" : num === 10 ? "Standard" : "Extended"}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Start button with enhanced effects */}
        <div className="flex justify-center">
          <NeonButton
            onClick={() => onStart(maxQuestions, difficulty, topic)}
            variant="cyan"
            size="lg"
            className="animate-float-slow text-xl py-6 px-12 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-futuristic-cyan/0 via-white/20 to-futuristic-cyan/0 -translate-x-full group-hover:animate-shimmer"></div>
            <Sparkles className="inline-block mr-2" size={20} />
            Begin Your Quest
          </NeonButton>
        </div>
      </div>

      {/* Enhanced How It Works section with better visuals */}
      <div className="card-glass border border-white/20 rounded-xl p-8 z-10 w-full backdrop-blur-xl relative overflow-hidden shadow-glow">
        <div className="absolute inset-0 bg-gradient-to-br from-futuristic-pink/5 to-futuristic-cyan/5"></div>

        <h3 className="font-bold mb-6 text-center text-2xl flex items-center justify-center">
          <LifeBuoy className="mr-2 text-futuristic-violet" size={24} />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
            Your Quest Guide
          </span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 card-glass rounded-xl border border-white/10 transition-transform hover:transform hover:scale-105 hover:shadow-glow-cyan group">
            <div className="text-futuristic-cyan font-bold mb-3 text-lg flex items-center">
              <span className="h-8 w-8 rounded-full bg-futuristic-cyan/20 flex items-center justify-center mr-2 group-hover:animate-bounce">
                <Zap size={18} />
              </span>
              Strategic Skips
            </div>
            <p className="text-gray-300">
              You have{" "}
              <span className="font-bold text-futuristic-cyan">
                3 lifelines
              </span>{" "}
              to use throughout your quest. Activate them wisely to eliminate
              incorrect options when facing particularly challenging questions.
            </p>
          </div>

          <div className="p-6 card-glass rounded-xl border border-white/10 transition-transform hover:transform hover:scale-105 hover:shadow-glow-violet group">
            <div className="text-futuristic-violet font-bold mb-3 text-lg flex items-center">
              <span className="h-8 w-8 rounded-full bg-futuristic-violet/20 flex items-center justify-center mr-2 group-hover:animate-spin-slow">
                <Clock size={18} />
              </span>
              Beat the Clock
            </div>
            <p className="text-gray-300">
              Each question has a{" "}
              <span className="font-bold text-futuristic-violet">
                countdown timer
              </span>
              . The faster you answer correctly, the more points you'll earn.
              When time runs out, opportunity is lost!
            </p>
          </div>

          <div className="p-6 card-glass rounded-xl border border-white/10 transition-transform hover:transform hover:scale-105 hover:shadow-glow-pink group">
            <div className="text-futuristic-pink font-bold mb-3 text-lg flex items-center">
              <span className="h-8 w-8 rounded-full bg-futuristic-pink/20 flex items-center justify-center mr-2 group-hover:animate-pulse">
                <Award size={18} />
              </span>
              Detailed Analysis
            </div>
            <p className="text-gray-300">
              After completing your journey, receive a{" "}
              <span className="font-bold text-futuristic-pink">
                comprehensive report
              </span>
              of your performance with detailed explanations for each question.
            </p>
          </div>
        </div>

        {/* Added testimonial */}
        <div className="mt-8 text-center">
          <blockquote className="text-gray-300 italic border-l-4 border-futuristic-violet pl-4 py-1 max-w-2xl mx-auto">
            "Quantum Quest challenged my knowledge in ways I never expected. The
            interface is mesmerizing and the questions kept me engaged
            throughout!"
            <footer className="text-sm text-gray-400 mt-2">
              — Top Performer, 98th Percentile
            </footer>
          </blockquote>
        </div>
      </div>

      {/* Added achievement teaser */}
      <div className="mt-8 card-glass border border-white/20 rounded-xl p-6 z-10 backdrop-blur-xl w-full text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-futuristic-cyan/5 via-futuristic-violet/5 to-futuristic-pink/5"></div>
        <div className="font-bold text-xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-futuristic-cyan via-futuristic-violet to-futuristic-pink">
          Unlock Secret Achievement Badges!
        </div>
        <p className="text-gray-300 text-sm">
          Hidden achievements await those who demonstrate exceptional knowledge
          and quick thinking. Can you discover them all?
        </p>
      </div>

      {/* Added CSS for animations */}
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
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
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
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .typing-animation {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          border-right: 3px solid transparent;
          animation: typing 3.5s steps(40, end);
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
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
        
        .shadow-glow-green {
          box-shadow: 0 0 25px rgba(52, 211, 153, 0.2);
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

export default WelcomeScreen;
