import React, { useState } from 'react';
import MockInterviewHeader from './MockInterviewHeader';
import FuturisticButton from '../FuturisticButton';
import PlayIcon from '../icons/PlayIcon';
import { motion, AnimatePresence } from 'framer-motion';
import ClockIcon from '../icons/ClockIcon';

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
  loading?: boolean;
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
  loading = false,
}) => {
  // Expansion state for morph effect
  const [expanding, setExpanding] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(false);
  const [showSkeletonContent, setShowSkeletonContent] = useState(false);

  // Handler for Start button
  const handleStartInterview = () => {
    setExpanding(true);
    setTimeout(() => {
      setShowSkeleton(true);
      setTimeout(() => {
        setShowSkeletonContent(true);
        onStart(); // Call parent handler after morph
      }, 900); // Increased delay for smoother transition
    }, 600); // Wait for morph
  };

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

  // Helper to format time left as mm:ss
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  // Shared card styles for morphing container and skeleton
  const cardClass =
    'w-full max-w-5xl mx-auto rounded-3xl p-2 sm:p-8 border border-gray-500/20 bg-[#101624] z-0 transition-opacity duration-500 shadow-md';

  // New, highly futuristic selector skeleton
  const FuturisticSelectorSkeleton = () => (
    <div className="relative w-full flex flex-col items-center gap-4 overflow-hidden">
      {/* Animated neon border */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none z-10 animate-futuristic-border" />
      {/* Glass reflection overlay */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none z-20 animate-glass-reflection" />
      {/* Floating orbs */}
      <div className="absolute -top-4 left-1/4 w-4 h-4 bg-cyan-300/60 rounded-full blur-sm animate-orb-float" />
      <div className="absolute -bottom-4 right-1/4 w-3 h-3 bg-purple-400/60 rounded-full blur-sm animate-orb-float2" />
      {/* Label shimmer */}
      <div className="w-2/3 h-5 rounded bg-gradient-to-r from-cyan-400/30 via-cyan-200/20 to-purple-400/30 animate-shimmer mt-6 mb-2 z-30" />
      {/* Pill button shimmers */}
      <div className="flex w-full gap-3 justify-center mb-2 z-30">
        <div className="w-1/2 h-10 rounded-full bg-gradient-to-r from-cyan-400/20 via-cyan-200/10 to-purple-400/20 animate-shimmer-float" />
        <div className="w-1/2 h-10 rounded-full bg-gradient-to-r from-cyan-400/20 via-cyan-200/10 to-purple-400/20 animate-shimmer-float delay-150" />
      </div>
      {/* Start button shimmer with animated play icon */}
      <div className="w-full h-12 rounded-full bg-gradient-to-r from-cyan-400/30 via-cyan-200/20 to-purple-400/30 animate-shimmer flex items-center justify-center mt-2 relative overflow-hidden z-30">
        <svg
          className="w-7 h-7 text-cyan-300 animate-pulse-glow animate-spin-slow"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            cx="12"
            cy="12"
            r="11"
            stroke="#22d3ee"
            strokeWidth="2"
            opacity="0.3"
          />
          <polygon points="10,8 16,12 10,16" fill="#22d3ee" />
        </svg>
      </div>
    </div>
  );

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
      <div className="w-full max-w-5xl mt-6 flex justify-center">
        <motion.div
          layoutId="morph-card"
          layout
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className={cardClass}
          style={expanding || showSkeleton ? { minHeight: 88 } : {}}
        >
          <AnimatePresence mode="wait">
            {!showSkeletonContent && !loading && (
              <>
                <motion.span
                  className="text-sm text-gray-300 font-semibold mb-2 w-full text-center "
                  initial={{ opacity: 1 }}
                  animate={{ opacity: expanding ? 0 : 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {t('number_of_questions')}:
                </motion.span>
                {/* Time left for mobile only */}
                <motion.div
                  className="flex flex-row justify-center sm:hidden text-cyan-300 font-bold text-xs mb-2 text-center"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: expanding ? 0 : 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="my-auto pt-1 pr-1">
                    <ClockIcon width={24} height={24} />
                  </div>
                  <div className="my-auto font-mono text-2xl sm:text-3xl mt-1 ">
                    {formatTime(timeLeft)}
                  </div>
                </motion.div>
                <motion.div
                  className="w-full mt-2 flex justify-center sm:justify-start"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: expanding ? 0 : 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <SegmentedControl
                    value={numQuestions}
                    onChange={setNumQuestions}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={{ opacity: expanding ? 0 : 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  <FuturisticButton
                    onClick={handleStartInterview}
                    color="cyan"
                    className="text-lg px-8 py-4 mt-3 w-full shadow-[0_0_16px_2px_rgba(34,211,238,0.3)] drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]"
                    icon={
                      <PlayIcon className="drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]" />
                    }
                  >
                    {t('start_interview')}
                  </FuturisticButton>
                </motion.div>
              </>
            )}
            {(showSkeletonContent || loading) && (
              <motion.div
                className="w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <FuturisticSelectorSkeleton />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default MockInterviewConfirm;
