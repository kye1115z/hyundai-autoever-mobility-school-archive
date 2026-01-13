// 난이도
export type Difficulty = "easy" | "medium" | "hard";

// 플랫폼
export type Platform = "백준" | "프로그래머스" | "LeetCode";

// 문제 인터페이스
export interface Problem {
  id: number;
  title: string;
  platform: Platform;
  difficulty: Difficulty;
  solvedAt: string;
  timeSpent?: number;
  tags: string[];
  memo: string;
  url?: string;
}

export interface FilterOptions {
  difficulty?: Difficulty;
  platform?: Platform;
  searchQuery?: string;
}

export interface Stats {
  total: number;
  easy: number;
  medium: number;
  hard: number;
  totalTimeSpent: number;
}
