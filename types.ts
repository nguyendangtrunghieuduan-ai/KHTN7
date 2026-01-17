
export interface LessonObjective {
  id: string;
  content: string;
}

export interface TheorySection {
  title: string;
  content: string; // Supports simple markdown-like or plain text
  type: 'text' | 'concept' | 'diagram' | 'bullet' | 'warning';
}

export interface QuestionMCQ {
  id: string;
  question: string;
  options: { key: string; text: string }[];
  correctAnswer: string;
  explanation?: string; // Optional explanation
  imageUrl?: string; // Support for images in questions
  difficulty?: 'NB' | 'TH' | 'VD' | 'VDC'; // Difficulty level
}

export interface QuestionEssay {
  id: string;
  question: string;
  sampleAnswer?: string;
  imageUrl?: string; // Support for images in essay questions
  difficulty?: 'NB' | 'TH' | 'VD' | 'VDC';
}

export interface Lesson {
  id: string;
  title: string;
  topic: string;
  objectives: string[];
  theory: TheorySection[];
  practice: {
    mcq: QuestionMCQ[];
    essay: QuestionEssay[];
  };
  colorTheme?: string; // For UI customization
}

export enum AppView {
  HOME = 'HOME',
  THEORY_LIST = 'THEORY_LIST',
  THEORY_DETAIL = 'THEORY_DETAIL',
  PRACTICE_LIST = 'PRACTICE_LIST',
  PRACTICE_DETAIL = 'PRACTICE_DETAIL',
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
