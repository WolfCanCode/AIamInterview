import React from 'react';
import { QuestionCardSkeleton } from '../QuestionCard';

interface MockInterviewLoadingProps {
  t: (key: string) => string;
}

const MockInterviewLoading: React.FC<MockInterviewLoadingProps> = ({ t }) => (
  <div className="flex flex-col items-center justify-center min-h-[400px] mt-20">
    <QuestionCardSkeleton />
    <div className="text-center text-cyan-400 mt-6 animate-pulse font-semibold">
      {t('getting_question')}
    </div>
  </div>
);

export default MockInterviewLoading;
