import React, { useState, useEffect, useRef } from 'react';
import { Question } from '@/types/Question';
import { useTranslations } from 'next-intl';
import { FaRobot } from 'react-icons/fa';

export function QuestionCardSkeleton() {
  const t = useTranslations('');
  // Fun loading messages (localized)
  const messages = [
    t('skeleton_loading_1'),
    t('skeleton_loading_2'),
    t('skeleton_loading_3'),
    t('skeleton_loading_4'),
    t('skeleton_loading_5'),
  ];
  const [msgIdx, setMsgIdx] = useState(0);
  const [fade, setFade] = useState(true);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  // Cycle messages
  useEffect(() => {
    const timeout = setTimeout(() => setFade(false), 1800);
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setMsgIdx((i) => (i + 1) % messages.length);
        setFade(false);
      }, 200);
    }, 2200);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  // Card tilt effect (desktop only)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
      setTilt({ x, y });
    };
    const handleMouseLeave = () => setTilt({ x: 0, y: 0 });
    const card = cardRef.current;
    if (card && window.innerWidth >= 640) {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    }
    return () => {
      if (card) {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      style={{
        transform: `perspective(800px) rotateX(${-tilt.y}deg) rotateY(${
          tilt.x
        }deg)`,
        transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
      }}
      className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] mx-auto rounded-3xl overflow-hidden flex flex-col items-center justify-center
      bg-gradient-to-br from-blue-900/60 via-cyan-900/60 to-blue-800/60
      animate-float
      border-2 border-cyan-400/30 shadow-[0_0_40px_0_rgba(34,211,238,0.15)]
      before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-r before:from-cyan-400/10 before:via-blue-400/10 before:to-purple-400/10 before:animate-shimmer
      after:absolute after:inset-0 after:rounded-3xl after:ring-2 after:ring-cyan-400/30 after:animate-pulse
    "
    >
      <div className="relative z-10 flex flex-col gap-4 w-4/5">
        <div className="h-5 w-2/3 bg-cyan-900/40 rounded-full mb-2 animate-pulse" />
        <div className="h-4 w-full bg-cyan-900/30 rounded-full mb-2 animate-pulse" />
        <div className="h-4 w-5/6 bg-cyan-900/30 rounded-full mb-2 animate-pulse" />
        <div className="h-4 w-3/4 bg-cyan-900/20 rounded-full mb-2 animate-pulse" />
        <div className="h-4 w-1/2 bg-cyan-900/20 rounded-full mb-2 animate-pulse" />
      </div>
      {/* Fun robot icon */}
      <span
        className="absolute top-4 right-4 text-cyan-300 text-3xl drop-shadow-lg animate-robot-wave"
        aria-label="Loading robot"
      >
        <FaRobot className="inline-block" />
      </span>
      {/* Fun loading text */}
      <div
        className={`absolute bottom-6 left-1/2 -translate-x-1/2 text-cyan-300 text-base font-medium transition-opacity duration-300 ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
        aria-live="polite"
      >
        {messages[msgIdx]}
      </div>
    </div>
  );
}

export default function QuestionCard({
  question,
  selectedDomain,
}: {
  question: Question;
  selectedDomain: string | null;
}) {
  const t = useTranslations('');

  return (
    <div className="group relative backdrop-blur-xl bg-white/10 dark:bg-gray-900/30 border border-white/20 dark:border-gray-700/30 p-6 sm:p-8 rounded-3xl shadow-2xl space-y-6 animate-fade-in w-full max-w-3xl mx-auto overflow-hidden transition-all duration-500 hover:shadow-blue-500/10 hover:scale-[1.02]">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-900/20 dark:to-purple-900/20 z-0 transition-opacity duration-500 group-hover:opacity-75 mb-0" />

      <div className="relative z-10 flex flex-col justify-start">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-4 py-1.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-blue-500/30 dark:to-purple-500/30 backdrop-blur-md border border-white/10 dark:border-gray-700/30 text-blue-100 rounded-full text-sm font-medium tracking-wider shadow-lg">
            {t(selectedDomain || '')}
          </span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-transparent" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent flex-1 transition-colors duration-300 group-hover:from-blue-300 group-hover:to-purple-300">
          {question.title}
        </h2>
      </div>

      <p className="relative z-10 text-base sm:text-lg leading-relaxed text-gray-300/90">
        {question.description}
      </p>

      <div className="relative z-10 space-y-3">
        <h3 className="font-semibold text-lg text-blue-300/90">
          {t('interview_requirements')}
        </h3>
        <ul className="space-y-2">
          {question.constraints.map((c: string, idx: number) => (
            <li key={idx} className="flex items-start gap-2 text-gray-300/90">
              <span className="text-blue-400/90 mt-1">•</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
