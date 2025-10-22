export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';
export type QuestType = 'theoretical' | 'technical';

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Quest {
  id: string;
  title: string;
  description: string;
  difficulty: DifficultyLevel;
  points: number;
  questions: Question[];
  category: string;
  type: QuestType;
  externalLink?: {
    platform: string;
    url: string;
    instructions: string;
  };
  walletRequirement?: {
    minBalance?: number;
    minTransactions?: number;
  };
}

export interface UserProgress {
  completedQuests: string[];
  totalPoints: number;
  badges: string[];
  currentStreak: number;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  requirement: number;
}

export interface Wallet {
  address: string;
  balance: number;
  transactions: Transaction[];
}

export interface Transaction {
  id: string;
  type: 'receive' | 'send';
  amount: number;
  timestamp: number;
  description: string;
}

export interface User {
  id: string;
  email: string;
  username: string;
  wallet: Wallet;
  progress: UserProgress;
  createdAt: number;
}
