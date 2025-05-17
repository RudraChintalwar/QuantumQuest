
import { useState, useCallback, useEffect } from "react";
import questionPool from "@/data/questionPool";
import { QuizState, Question, Difficulty, Topic } from "@/types/quiz";

const INITIAL_STATE: QuizState = {
  started: false,
  completed: false,
  currentQuestionIndex: 0,
  questions: [],
  answers: [],
  score: 0,
  maxQuestions: 5,
  currentDifficulty: "easy",
  selectedTopic: "programming",
  selectedDifficulty: "easy",
};

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const useQuiz = () => {
  const [quizState, setQuizState] = useState<QuizState>(INITIAL_STATE);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  // Timer management
  useEffect(() => {
    if (!quizState.started || quizState.completed || timeLeft === null) return;

    const timer = setTimeout(() => {
      if (timeLeft <= 0) {
        answerQuestion(""); // Auto-submit empty answer when time runs out
        return;
      }
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, quizState.started, quizState.completed]);

  const startQuiz = useCallback(
    (
      maxQuestions: number = 5,
      difficulty: Difficulty = "easy",
      topic: Topic = "programming"
    ) => {
      try {
        if (!questionPool[topic] || !questionPool[topic][difficulty]) {
          console.error("Invalid topic or difficulty selected");
          return;
        }
        
        const availableQuestions = questionPool[topic][difficulty];
        
        if (!Array.isArray(availableQuestions) || !availableQuestions.length) {
          console.error("No questions available for the selected topic/difficulty");
          return;
        }
        
        const selectedQuestions = shuffleArray(availableQuestions).slice(
          0,
          maxQuestions
        );

        setQuizState({
          ...INITIAL_STATE,
          started: true,
          questions: selectedQuestions,
          maxQuestions: selectedQuestions.length,
          answers: Array(selectedQuestions.length).fill(""),
          currentDifficulty: difficulty,
          selectedTopic: topic,
          selectedDifficulty: difficulty,
        });
        setTimeLeft(getTimeLimit(difficulty));
      } catch (error) {
        console.error("Error starting quiz:", error);
      }
    },
    []
  );

  const resetQuiz = useCallback(() => {
    setQuizState(INITIAL_STATE);
    setTimeLeft(null);
  }, []);

  const getTimeLimit = useCallback((difficulty: Difficulty): number => {
    return { easy: 20, medium: 15, hard: 10 }[difficulty];
  }, []);

  const answerQuestion = useCallback(
    (answer: string) => {
      setQuizState((prev) => {
        if (prev.completed) return prev;

        const newAnswers = [...prev.answers];
        newAnswers[prev.currentQuestionIndex] = answer;

        const isCorrect =
          answer === prev.questions[prev.currentQuestionIndex].correctAnswer;
        const newScore = isCorrect ? prev.score + 1 : prev.score;

        const isLastQuestion =
          prev.currentQuestionIndex >= prev.maxQuestions - 1;

        return {
          ...prev,
          answers: newAnswers,
          score: newScore,
          currentQuestionIndex: isLastQuestion
            ? prev.currentQuestionIndex
            : prev.currentQuestionIndex + 1,
          completed: isLastQuestion,
        };
      });

      // Reset timer for next question or clear if quiz completed
      const nextIndex = quizState.currentQuestionIndex + 1;
      if (nextIndex < quizState.maxQuestions) {
        setTimeLeft(getTimeLimit(quizState.selectedDifficulty));
      } else {
        setTimeLeft(null);
      }
    },
    [
      quizState.currentQuestionIndex,
      quizState.maxQuestions,
      quizState.selectedDifficulty,
    ]
  );

  return {
    quizState,
    timeLeft,
    startQuiz,
    resetQuiz,
    answerQuestion,
    getTimeLimit,
  };
};
