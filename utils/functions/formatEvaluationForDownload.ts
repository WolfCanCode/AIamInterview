import { EvaluationResult } from '@/types/Evaluation';

export function formatEvaluationForDownload(evaluation: EvaluationResult) {
  let content = `Mock Interview Result\n\n`;
  evaluation.results.forEach((result, idx) => {
    content += `Question ${idx + 1}:\n`;
    content += `${result.question}\n\n`;
    content += `Key Points:\n`;
    if (
      result.key_points_of_main_argument &&
      result.key_points_of_main_argument.length > 0
    ) {
      result.key_points_of_main_argument.forEach((kp) => {
        content += `  - ${kp}\n`;
      });
    } else {
      content += `  (None)\n`;
    }
    content += `\nPerfect Answer:\n`;
    content += result.perfect_answer
      ? `${result.perfect_answer}\n`
      : '(None)\n';
    content += `\n-----------------------------\n\n`;
  });
  return content;
}
