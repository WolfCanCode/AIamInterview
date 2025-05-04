import React, { useRef } from 'react';
import EvaluationCard from '../EvaluationCard';
import { EvaluationResult } from '@/types/Evaluation';
import FuturisticButton from '../FuturisticButton';
import { FaDownload } from 'react-icons/fa';
import { formatEvaluationForDownload } from '@/utils/functions/formatEvaluationForDownload';
import { downloadTextFile } from '@/utils/functions/downloadTextFile';

interface MockInterviewEvaluationProps {
  evaluation: EvaluationResult;
}

const MockInterviewEvaluation: React.FC<MockInterviewEvaluationProps> = ({
  evaluation,
}) => {
  const evaluationRef = useRef(null);
  const handleDownload = () => {
    const content = formatEvaluationForDownload(evaluation);
    const filename = `mock-interview-result-${
      new Date().toISOString().split('T')[0]
    }.txt`;
    downloadTextFile(content, filename);
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
