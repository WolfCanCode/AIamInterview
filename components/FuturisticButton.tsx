import React from 'react';

interface FuturisticButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  color?: 'cyan' | 'yellow' | 'red' | 'pink' | 'green' | 'purple';
  className?: string;
}

const colorMap = {
  cyan: {
    bg: 'bg-gradient-to-r from-cyan-500/70 to-blue-700/70',
    border: 'border-cyan-400/40',
    ring: 'focus:ring-cyan-400/60',
    shadow:
      'drop-shadow-[0_0_16px_rgba(34,211,238,0.4)] hover:shadow-cyan-400/30',
    icon: 'drop-shadow-[0_0_6px_rgba(34,211,238,0.7)]',
    text: 'text-white',
  },
  yellow: {
    bg: 'bg-gradient-to-r from-yellow-400/80 to-yellow-500/80',
    border: 'border-yellow-400/40',
    ring: 'focus:ring-yellow-400/60',
    shadow:
      'drop-shadow-[0_0_8px_rgba(250,204,21,0.4)] hover:shadow-yellow-400/30',
    icon: 'drop-shadow-[0_0_6px_rgba(250,204,21,0.7)]',
    text: 'text-gray-900',
  },
  red: {
    bg: 'bg-gradient-to-r from-red-500/80 to-red-600/80',
    border: 'border-red-400/40',
    ring: 'focus:ring-red-400/60',
    shadow: 'drop-shadow-[0_0_8px_rgba(239,68,68,0.4)] hover:shadow-red-400/30',
    icon: 'drop-shadow-[0_0_6px_rgba(239,68,68,0.7)]',
    text: 'text-white',
  },
  pink: {
    bg: 'bg-gradient-to-r from-pink-500/70 to-fuchsia-700/70',
    border: 'border-pink-400/40',
    ring: 'focus:ring-pink-400/60',
    shadow:
      'drop-shadow-[0_0_8px_rgba(236,72,153,0.4)] hover:shadow-pink-400/30',
    icon: 'drop-shadow-[0_0_6px_rgba(236,72,153,0.7)]',
    text: 'text-white',
  },
  green: {
    bg: 'bg-gradient-to-r from-green-400/70 to-green-600/70',
    border: 'border-green-400/40',
    ring: 'focus:ring-green-400/60',
    shadow:
      'drop-shadow-[0_0_8px_rgba(34,197,94,0.4)] hover:shadow-green-400/30',
    icon: 'drop-shadow-[0_0_6px_rgba(34,197,94,0.7)]',
    text: 'text-white',
  },
  purple: {
    bg: 'bg-gradient-to-r from-purple-500/70 to-fuchsia-700/70',
    border: 'border-fuchsia-400/40',
    ring: 'focus:ring-fuchsia-400/60',
    shadow:
      'drop-shadow-[0_0_8px_rgba(168,85,247,0.4)] hover:shadow-fuchsia-400/30',
    icon: 'drop-shadow-[0_0_6px_rgba(168,85,247,0.7)]',
    text: 'text-white',
  },
};

export default function FuturisticButton({
  children,
  icon,
  color = 'cyan',
  className = '',
  ...props
}: FuturisticButtonProps) {
  const c = colorMap[color];
  return (
    <button
      className={`group relative w-full px-8 py-4 rounded-xl font-bold text-lg shadow-lg mt-4 overflow-hidden transition-all duration-300 transform bg-futuristic-bg ${c.bg} border ${c.border} ${c.text} ${c.shadow} focus:outline-none ${c.ring} hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      <div className="absolute inset-0 transition-transform duration-300 group-hover:scale-[1.1]" />
      <div className="relative flex items-center justify-center gap-3">
        {icon && (
          <span className={`text-md sm:text-2xl ${c.icon}`}>{icon}</span>
        )}
        <span className="text-sm sm:text-base">{children}</span>
      </div>
    </button>
  );
}
