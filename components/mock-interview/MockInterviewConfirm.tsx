import React from 'react';
import MockInterviewHeader from './MockInterviewHeader';
import FuturisticButton from '../FuturisticButton';
import PlayIcon from '../icons/PlayIcon';

interface MockInterviewConfirmProps {
  t: (key: string) => string;
  onStart: () => void;
  domain: string | null;
  child: string | null;
  difficulty: string | null;
  timeLeft: number;
  numQuestions: number;
  setNumQuestions: (n: number) => void;
  onBack?: () => void;
}

const MockInterviewConfirm: React.FC<MockInterviewConfirmProps> = ({
  t,
  onStart,
  domain,
  child,
  difficulty,
  timeLeft,
  numQuestions,
  setNumQuestions,
  onBack,
}) => {
  const handleStartInterview = () => onStart();

  // SegmentedControl for question count with animated highlight and button bounce
  const SegmentedControl = ({
    value,
    onChange,
  }: {
    value: number;
    onChange: (n: number) => void;
  }) => {
    const options = [5, 10];
    const selectedIdx = options.indexOf(value);
    return (
      <div
        role="radiogroup"
        aria-label={t('number_of_questions')}
        className="relative flex w-full max-w-xs rounded-full bg-gradient-to-r from-cyan-900/40 to-purple-900/40 p-1 shadow-lg border border-cyan-400/20"
        style={{ minHeight: 44 }}
      >
        {/* Animated highlight with pulse */}
        <div
          className={`absolute top-1 left-1 h-[calc(100%-0.5rem)] bg-cyan-600 z-0 transition-all duration-300 ease-in-out animate-pulse-glow`}
          style={{
            width: `calc(50% - 4px)`,
            left: `calc(${selectedIdx * 50}% + 2px)`,
            borderRadius: '9999px',
            boxShadow: '0 0 16px 2px #22d3ee55',
            transition: 'left 0.3s cubic-bezier(0.4,0,0.2,1), background 0.3s',
          }}
        />
        {options.map((n) => {
          const selected = value === n;
          return (
            <button
              key={n}
              role="radio"
              aria-checked={selected}
              tabIndex={selected ? 0 : -1}
              onClick={() => onChange(n)}
              onKeyDown={(e) => {
                if ((e.key === 'Enter' || e.key === ' ') && !selected)
                  onChange(n);
              }}
              className={`flex-1 text-base font-semibold px-0 py-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 relative z-10
                ${
                  selected
                    ? 'text-white scale-110 animate-bounce-short'
                    : 'text-cyan-200 hover:bg-cyan-800/30'
                }
              `}
              style={{ margin: '0 2px' }}
            >
              {t(`${n}_questions`)}
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <MockInterviewHeader
        t={t}
        domain={domain}
        child={child}
        difficulty={difficulty}
        timeLeft={timeLeft}
        showBackButton={true}
        onBack={onBack}
      />
      <div className="flex flex-col items-center gap-4 mt-6 mb-4 w-full max-w-xs">
        <span className="text-cyan-200 font-semibold text-base mb-1 w-full text-center">
          {t('number_of_questions')}
        </span>
        <SegmentedControl value={numQuestions} onChange={setNumQuestions} />
      </div>
      <FuturisticButton
        onClick={handleStartInterview}
        color="cyan"
        className="text-lg px-8 py-4"
        icon={<PlayIcon />}
      >
        {t('start_interview')}
      </FuturisticButton>
    </div>
  );
};

export default MockInterviewConfirm;
