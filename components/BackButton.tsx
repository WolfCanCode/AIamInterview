import React from 'react';
import ArrowLeftIcon from './icons/ArrowLeftIcon';

interface BackButtonProps {
  onClick?: () => void;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

const BackButton: React.FC<BackButtonProps> = ({
  onClick,
  ariaLabel = 'Back',
  className = '',
  style = {},
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`w-10 h-10 flex items-center justify-center rounded-full bg-cyan-700/70 shadow-xl border-2 border-cyan-400/30 text-cyan-100 hover:bg-cyan-500/90 hover:text-white active:scale-95 transition-all duration-200 z-30 ${className}`}
    style={{ boxShadow: '0 4px 24px 0 rgba(34,211,238,0.15)', ...style }}
    aria-label={ariaLabel}
  >
    <ArrowLeftIcon width={24} height={24} />
  </button>
);

export default BackButton;
