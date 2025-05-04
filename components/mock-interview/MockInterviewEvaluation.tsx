import React, { createRef } from 'react';
import EvaluationCard from '../EvaluationCard';
import { EvaluationResult } from '@/types/Evaluation';

interface MockInterviewEvaluationProps {
  evaluation: EvaluationResult;
}

const MockInterviewEvaluation: React.FC<MockInterviewEvaluationProps> = ({
  evaluation,
}) => (
  <div className="mt-8">
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
      evaluationRef={createRef()}
    />
  </div>
);

export default MockInterviewEvaluation;
