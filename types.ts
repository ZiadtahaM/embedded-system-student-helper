export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index of the correct option
}

export interface QuestionStatus {
  selectedOption: number | null; // Index of selected option, null if unanswered
  isCorrect: boolean;
  isBookmarked?: boolean;
}

export type Category = 'Architecture' | 'Memory' | 'Protocols' | 'Real-Time' | 'Hardware' | 'General';
