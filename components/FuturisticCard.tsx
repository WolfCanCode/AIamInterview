import React from 'react';

interface FuturisticCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'yellow' | 'red' | 'pink' | 'green' | 'purple' | 'blue';
  hover?: boolean;
  noBorder?: boolean;
  noGlow?: boolean;
  variant?: 'default' | 'dark';
}

const glowMap = {
  blue: {
    glow: 'shadow-[0_0_40px_0_rgba(6,182,212,0.25)]',
    border: 'border-cyan-500/40',
    gradient: 'from-cyan-500/20 via-transparent to-blue-500/20',
    hoverGlow: 'hover:shadow-[0_0_50px_0_rgba(6,182,212,0.35)]',
    hoverBorder: 'hover:border-cyan-400/50',
  },
  cyan: {
    glow: 'shadow-[0_0_40px_0_rgba(34,211,238,0.25)]',
    border: 'border-cyan-400/40',
    gradient: 'from-cyan-400/20 via-transparent to-blue-400/20',
    hoverGlow: 'hover:shadow-[0_0_50px_0_rgba(34,211,238,0.35)]',
    hoverBorder: 'hover:border-cyan-400/50',
  },
  yellow: {
    glow: 'shadow-[0_0_40px_0_rgba(250,204,21,0.2)]',
    border: 'border-yellow-400/40',
    gradient: 'from-yellow-400/20 via-transparent to-amber-400/20',
    hoverGlow: 'hover:shadow-[0_0_50px_0_rgba(250,204,21,0.3)]',
    hoverBorder: 'hover:border-yellow-400/50',
  },
  red: {
    glow: 'shadow-[0_0_40px_0_rgba(239,68,68,0.2)]',
    border: 'border-red-400/40',
    gradient: 'from-red-400/20 via-transparent to-rose-400/20',
    hoverGlow: 'hover:shadow-[0_0_50px_0_rgba(239,68,68,0.3)]',
    hoverBorder: 'hover:border-red-400/50',
  },
  pink: {
    glow: 'shadow-[0_0_40px_0_rgba(236,72,153,0.2)]',
    border: 'border-pink-400/40',
    gradient: 'from-pink-400/20 via-transparent to-fuchsia-400/20',
    hoverGlow: 'hover:shadow-[0_0_50px_0_rgba(236,72,153,0.3)]',
    hoverBorder: 'hover:border-pink-400/50',
  },
  green: {
    glow: 'shadow-[0_0_40px_0_rgba(34,197,94,0.2)]',
    border: 'border-green-400/40',
    gradient: 'from-green-400/20 via-transparent to-emerald-400/20',
    hoverGlow: 'hover:shadow-[0_0_50px_0_rgba(34,197,94,0.3)]',
    hoverBorder: 'hover:border-green-400/50',
  },
  purple: {
    glow: 'shadow-[0_0_40px_0_rgba(168,85,247,0.2)]',
    border: 'border-fuchsia-400/40',
    gradient: 'from-purple-400/20 via-transparent to-fuchsia-400/20',
    hoverGlow: 'hover:shadow-[0_0_50px_0_rgba(168,85,247,0.3)]',
    hoverBorder: 'hover:border-fuchsia-400/50',
  },
};

const variants = {
  default: 'bg-white/5 dark:bg-gray-900/20',
  dark: 'bg-[#0B1221]/90',
};

export default function FuturisticCard({
  children,
  className = '',
  glowColor = 'blue',
  hover = false,
  noBorder = false,
  noGlow = false,
  variant = 'dark',
  ...props
}: FuturisticCardProps) {
  const theme = glowMap[glowColor];

  return (
    <div
      className={`
        relative rounded-3xl p-6 
        ${variants[variant]}
        ${!noBorder ? `border ${theme.border}` : ''} 
        ${!noGlow ? theme.glow : ''} 
        ${
          hover
            ? `transition-all duration-300 ${theme.hoverGlow} ${theme.hoverBorder} hover:scale-[1.02]`
            : ''
        }
        overflow-hidden 
        ${className}
      `}
      {...props}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[#101624] pointer-events-none animate-pulse opacity-40" />

      {/* Content with proper z-index */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
