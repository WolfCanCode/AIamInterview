import React, { useRef } from 'react';
import EvaluationCard from '../EvaluationCard';
import { EvaluationResult } from '@/types/Evaluation';
import FuturisticButton from '../FuturisticButton';
import DownloadIcon from '../icons/DownloadIcon';
import { formatEvaluationForDownload } from '@/utils/functions/formatEvaluationForDownload';
import { downloadTextFile } from '@/utils/browserUtils';
import { generateMockInterviewFilename } from '@/utils/functions/filenameUtils';

interface MockInterviewEvaluationProps {
  evaluation: EvaluationResult;
  domain?: string | null;
  child?: string | null;
  difficulty?: string | null;
}

const MockInterviewEvaluation: React.FC<MockInterviewEvaluationProps> = ({
  evaluation,
  domain,
  child,
  difficulty,
}) => {
  const evaluationRef = useRef(null);
  const handleDownload = () => {
    const content = formatEvaluationForDownload(evaluation);
    const filename = generateMockInterviewFilename({
      domain,
      child,
      difficulty,
    });
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
        icon={<DownloadIcon width={32} height={32} />}
        onClick={handleDownload}
        type="button"
      >
        Download Result (.txt)
      </FuturisticButton>
    </div>
  );
};

export default MockInterviewEvaluation;
