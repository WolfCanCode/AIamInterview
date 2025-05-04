import React from 'react';
import MockInterviewHeader from './MockInterviewHeader';
import FuturisticButton from '../FuturisticButton';
import { FaPlay } from 'react-icons/fa';

interface MockInterviewConfirmProps {
  t: (key: string) => string;
  onStart: () => void;
  domain: string | null;
  child: string | null;
  difficulty: string | null;
  timeLeft: number;
}

const MockInterviewConfirm: React.FC<MockInterviewConfirmProps> = ({
  t,
  onStart,
  domain,
  child,
  difficulty,
  timeLeft,
}) => (
  <div className="flex flex-col items-center justify-center">
    <MockInterviewHeader
      t={t}
      domain={domain}
      child={child}
      difficulty={difficulty}
      timeLeft={timeLeft}
      showBackButton={true}
    />
    <FuturisticButton
      onClick={onStart}
      color="cyan"
      className="text-lg px-8 py-4"
      icon={<FaPlay />}
    >
      {t('start_interview')}
    </FuturisticButton>
  </div>
);

export default MockInterviewConfirm;
