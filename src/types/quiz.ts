
// In @/types/quiz.ts
export type Difficulty = 'easy' | 'medium' | 'hard';
export type Topic = 'physics' | 'chemistry' | 'biology' | 'programming' | 'gk';

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: string;
  difficulty: Difficulty;
  topic: Topic;
}

export interface QuizState {
  started: boolean;
  completed: boolean;
  currentQuestionIndex: number;
  questions: Question[];
  answers: string[];
  score: number;
  maxQuestions: number;
  currentDifficulty: Difficulty;
  selectedTopic: Topic;
  selectedDifficulty: Difficulty;
}

export interface TopicQuestions {
  easy: Question[];
  medium: Question[];
  hard: Question[];
}

export interface QuestionPool {
  physics: TopicQuestions;
  chemistry: TopicQuestions;
  biology: TopicQuestions;
  programming: TopicQuestions;
  gk: TopicQuestions;
}
