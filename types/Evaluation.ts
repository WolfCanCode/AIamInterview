export interface Evaluation {
  overall_score: number;
  creative_score: number | null;
  result_text: string | null;
  suggestions: string | null;
  perfect_answer: string | null;
  key_points_of_main_argument: string[] | null;
  title_ranking_text: string | null;
}

export type EvaluationResult = {
  overall_score: number;
  title: string;
  overall_suggestions: string;
  overall_result_text: string;
  title_ranking_text: string;
  results: {
    question: string;
    answer: string;
    overall_score: number;
    creative_score: number;
    result_text: string;
    suggestions: string;
    perfect_answer: string;
    key_points_of_main_argument: string[];
  }[];
};
