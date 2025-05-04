import { FaClock, FaPaperPlane } from 'react-icons/fa';
import FuturisticButton from '../FuturisticButton';
import React from 'react';

interface MockInterviewFooterProps {
  timeLeft: number;
  submitted: boolean;
  onSubmit: (e: React.FormEvent) => void;
  t: (key: string) => string;
  TOTAL_TIME: number;
}

const MockInterviewFooter: React.FC<MockInterviewFooterProps> = ({
  timeLeft,
  submitted,
  onSubmit,
  t,
  TOTAL_TIME,
}) => (
  <form onSubmit={onSubmit} className="sm:hidden" style={{ margin: 0 }}>
    <div className="fixed bottom-0 left-0 w-full z-50 bg-gradient-to-r from-blue-900/90 via-cyan-900/90 to-blue-800/90 border-t border-cyan-400/20 flex items-center justify-between px-4 pb-6 pt-4 gap-4 backdrop-blur-xl shadow-2xl">
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '4px',
          zIndex: 100,
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            width: `${(timeLeft / TOTAL_TIME) * 100}%`,
            height: '100%',
            background:
              timeLeft <= 60
                ? '#f87171'
                : 'linear-gradient(to right, #22d3ee, #2563eb)',
            borderRadius: '2px',
            transition: 'width 0.5s linear, background 0.3s',
            position: 'relative',
            overflow: 'visible',
          }}
        >
          {/* Single fire dot at the tail of the progress bar, color matches the bar */}
          {timeLeft > 0 && (
            <span
              className="fire-dot"
              style={{
                left: 'calc(100% - 5px)',
                background:
                  timeLeft <= 60
                    ? '#f87171'
                    : 'linear-gradient(135deg, #22d3ee 60%, #2563eb 100%)',
                boxShadow:
                  timeLeft <= 60
                    ? '0 0 8px 2px #f87171, 0 0 16px 4px #f87171'
                    : '0 0 8px 2px #22d3ee, 0 0 16px 4px #2563eb',
              }}
            />
          )}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <FaClock className="w-5 h-5 text-cyan-400" />
        <span
          className={`font-mono text-lg ${
            timeLeft <= 60 ? 'text-red-400' : 'text-cyan-200'
          }`}
        >
          {`${String(Math.floor(timeLeft / 60)).padStart(2, '0')}:${String(
            timeLeft % 60
          ).padStart(2, '0')}`}
        </span>
      </div>
      <FuturisticButton
        type="submit"
        color="cyan"
        icon={<FaPaperPlane />}
        disabled={submitted}
        className="!mt-0 min-w-[120px]"
      >
        {t('submit_answer')}
      </FuturisticButton>
    </div>
  </form>
);

export default MockInterviewFooter;
