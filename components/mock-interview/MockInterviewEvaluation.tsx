import React, { useRef } from 'react';
import EvaluationCard from '../EvaluationCard';
import { EvaluationResult } from '@/types/Evaluation';
import FuturisticButton from '../FuturisticButton';
import { FaDownload } from 'react-icons/fa';

interface MockInterviewEvaluationProps {
  evaluation: EvaluationResult;
}

function formatEvaluationForDownload(evaluation: EvaluationResult) {
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

const MockInterviewEvaluation: React.FC<MockInterviewEvaluationProps> = ({
  evaluation,
}) => {
  const evaluationRef = useRef(null);
  const handleDownload = () => {
    const content = formatEvaluationForDownload(evaluation);
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `mock-interview-result-${
      new Date().toISOString().split('T')[0]
    }.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="mt-8 w-full">
      <EvaluationCard
        evaluation={{
          overall_score: evaluation.overall_score,
          creative_score: null,
          result_text: evaluation.overall_result_text,
          suggestions: null,
          key_points_of_main_argument: null,
          perfect_answer: null,
          title_ranking_text: evaluation.title_ranking_text,
        }}
        evaluationRef={evaluationRef}
      />
      <FuturisticButton
        color="cyan"
        className="mt-6"
        icon={<FaDownload />}
        onClick={handleDownload}
        type="button"
      >
        Download Result (.txt)
      </FuturisticButton>
    </div>
  );
};

export default MockInterviewEvaluation;
