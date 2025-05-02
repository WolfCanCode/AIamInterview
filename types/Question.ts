export interface Question {
  title: string;
  description: string;
  constraints: string[] | null;
  input_format: string;
  output_format: string;
}
