
import { useEffect, useRef } from "react";
import { useQuiz } from "@/hooks/useQuiz";
import WelcomeScreen from "@/components/WelcomeScreen";
import QuizCard from "@/components/QuizCard";
import ScoreScreen from "@/components/ScoreScreen";
import { cn } from "@/lib/utils";
import { Difficulty, Topic } from "@/types/quiz";

const Index = () => {
  const {
    quizState,
    startQuiz,
    resetQuiz,
    answerQuestion,
    getTimeLimit,
    timeLeft, 
  } = useQuiz();
  const contentRef = useRef<HTMLDivElement>(null);

  // Scroll to top when changing questions
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [quizState.currentQuestionIndex]);

  // Function to get background based on current difficulty
  const getBackgroundStyles = () => {
    const baseClasses =
      "min-h-screen gradient-background grid-background transition-all duration-1000";

    if (
      !quizState.started ||
      quizState.completed ||
      !quizState.questions.length
    ) {
      return baseClasses;
    }

    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
    if (!currentQuestion) return baseClasses;

    const difficulty = currentQuestion.difficulty;

    if (difficulty === "medium") {
      return cn(baseClasses, "bg-futuristic-violet/5");
    }

    if (difficulty === "hard") {
      return cn(baseClasses, "bg-futuristic-pink/5");
    }

    return cn(baseClasses, "bg-futuristic-cyan/5");
  };

  const handleQuizStart = (
    maxQuestions: number,
    difficulty: Difficulty,
    topic: Topic
  ) => {
    console.log("Starting quiz with:", { maxQuestions, difficulty, topic });
    startQuiz(maxQuestions, difficulty, topic);
  };

  return (
    <div className={getBackgroundStyles()}>
      {/* Animated background elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] rounded-full bg-futuristic-violet/10 blur-[150px] opacity-60 animate-float"></div>
        <div className="absolute bottom-[20%] left-[15%] w-[200px] h-[200px] rounded-full bg-futuristic-cyan/10 blur-[120px] opacity-40 animate-pulse-ring"></div>
        <div className="absolute top-[40%] left-[5%] w-[250px] h-[250px] rounded-full bg-futuristic-pink/10 blur-[180px] opacity-40 animate-pulse-ring"></div>
      </div>

      <div
        ref={contentRef}
        className="container mx-auto py-8 px-4 relative z-10 max-h-screen overflow-y-auto"
      >
        {!quizState.started && <WelcomeScreen onStart={handleQuizStart} />}

        {quizState.started &&
          !quizState.completed &&
          quizState.questions.length > 0 && (
            <div className="flex flex-col items-center">
              <div className="w-full max-w-4xl flex justify-between items-center mb-6">
                <div className="text-sm text-gray-300">
                  Question{" "}
                  <span className="font-bold">
                    {quizState.currentQuestionIndex + 1}
                  </span>{" "}
                  of <span>{quizState.maxQuestions}</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="px-3 py-1 rounded-full text-xs uppercase tracking-wider bg-white/10 text-gray-300">
                    {quizState.selectedTopic === "gk"
                      ? "General Knowledge"
                      : quizState.selectedTopic}
                  </div>

                  <div
                    className={cn(
                      "px-3 py-1 rounded-full text-xs uppercase tracking-wider",
                      {
                        "bg-futuristic-easy/20 text-futuristic-easy":
                          quizState.currentDifficulty === "easy",
                        "bg-futuristic-violet/20 text-futuristic-violet":
                          quizState.currentDifficulty === "medium",
                        "bg-futuristic-pink/20 text-futuristic-pink":
                          quizState.currentDifficulty === "hard",
                      }
                    )}
                  >
                    {quizState.currentDifficulty}
                  </div>
                </div>
              </div>

              <QuizCard
                question={quizState.questions[quizState.currentQuestionIndex]}
                onAnswer={answerQuestion}
                timeLimit={getTimeLimit(quizState.questions[quizState.currentQuestionIndex].difficulty)}
                selectedAnswer={
                  quizState.answers[quizState.currentQuestionIndex]
                }
              />
            </div>
          )}

        {quizState.completed && (
          <ScoreScreen
            score={quizState.score}
            totalQuestions={quizState.maxQuestions}
            questions={quizState.questions}
            answers={quizState.answers} 
            onRetry={() => {
              resetQuiz();
              startQuiz(
                quizState.maxQuestions,
                quizState.selectedDifficulty,
                quizState.selectedTopic
              );
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Index;
