export type DepartmentKey = "内科" | "外科" | "産婦人科・小児科" | "マイナー科" | "その他";

export interface Choice {
  text: string;
  correct: boolean;
}

export interface Question {
  id: string; // generated from department+year+question_number
  question_number: number;
  content: string;
  choices: Choice[];
  hospital: string;
  year: number;
  original_category?: string;
  source_file?: string;
  department: DepartmentKey;
}

export interface DepartmentData {
  department: DepartmentKey;
  total_questions: number;
  hospitals: string[];
  years: number[];
  questions: Question[];
}

export function makeQuestionId(
  department: DepartmentKey,
  year: number,
  question_number: number,
  content: string
) {
  // Simple stable hash
  const base = `${department}-${year}-${question_number}-${content}`;
  let hash = 0;
  for (let i = 0; i < base.length; i++) {
    hash = (hash << 5) - hash + base.charCodeAt(i);
    hash |= 0;
  }
  return `${department}-${year}-${question_number}-${Math.abs(hash)}`;
}
