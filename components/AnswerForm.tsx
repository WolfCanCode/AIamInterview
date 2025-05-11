import React from 'react';
import { useTranslations } from 'next-intl';
import { Evaluation } from '@/types/Evaluation';
import TextareaAutosize from 'react-textarea-autosize';
import SendIcon from './icons/SendIcon';
import SkipNextIcon from './icons/SkipNextIcon';
import StopIcon from './icons/StopIcon';
import { motion } from 'framer-motion';

export default function AnswerForm({
  answer,
  setAnswer,
  onSubmit,
  isPending,
  skipPending,
  evaluation,
  onStop,
  onSkip,
  className,
}: {
  answer: string;
  setAnswer: (v: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isPending: boolean;
  skipPending?: boolean;
  evaluation: Evaluation | null;
  onStop: () => void;
  onSkip: () => void;
  className?: string;
}) {
  const t = useTranslations('');
  return (
    <form
      onSubmit={onSubmit}
      className={`relative space-y-4 sm:space-y-6 animate-fade-in w-full max-w-5xl mx-auto ${
        className || ''
      }`}
    >
      <div className="w-full">
        <label
          className="block text-gray-300 text-sm font-medium mb-2 ml-1"
          htmlFor="answer-textarea"
        >
          {t('enter_answer')}
        </label>
        <div className="relative group">
          <div className="absolute inset-1 bg-gradient-futuristic rounded-2xl opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200" />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <TextareaAutosize
              id="answer-textarea"
              minRows={3}
              maxRows={30}
              disabled={!!evaluation}
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className={`relative w-full bg-white/5 dark:bg-gray-900/30 border border-white/20 dark:border-gray-700/30 text-gray-100 p-4 pb-16 rounded-xl focus:ring-2 focus:ring-gray-300/50 resize-none transition-all duration-300 text-base sm:text-lg shadow-lg focus:shadow-gray-300/20 ${
                answer.length > 1000
                  ? 'border-red-500/50 focus:ring-red-500/50'
                  : 'focus:border-gray-300/50'
              }`}
              aria-label={t('enter_answer')}
              placeholder={t('type_your_answer')}
            />
          </motion.div>
        </div>
        <div className="flex justify-between items-center mt-2 px-1">
          {answer.length > 1000 ? (
            <span className="text-xs text-red-400/90">
              {t('over_char_limit', { count: answer.length - 1000 })}
            </span>
          ) : (
            <span className="text-xs text-gray-400/70">
              {t('characters_remaining', { count: 1000 - answer.length })}
            </span>
          )}
          <span
            className={`text-xs ${
              answer.length > 1000 ? 'text-red-400/90' : 'text-gray-400/70'
            }`}
          >
            {answer.length}/1000
          </span>
        </div>
      </div>

      {!evaluation && (
        <div className="px-2 w-full mt-6 mb-4 space-y-4">
          <button
            type="submit"
            className="group relative w-full px-8 py-4 rounded-xl font-bold text-lg shadow-lg overflow-hidden transition-all duration-300 transform bg-futuristic-bg bg-gradient-futuristic border border-cyan-400/40 text-white drop-shadow-[0_0_16px_rgba(34,211,238,0.4)] focus:outline-none focus:ring-2 focus:ring-cyan-400/60 hover:scale-105 hover:shadow-cyan-400/30 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isPending || skipPending || answer.length > 1000}
          >
            <div className="absolute inset-0 bg-gradient-futuristic transition-transform duration-300 group-hover:scale-[1.1]" />
            <div className="relative flex items-center justify-center gap-3 text-white">
              <span className="text-xl drop-shadow-[0_0_6px_rgba(34,211,238,0.7)]">
                <SendIcon />
              </span>
              <span className="text-base sm:text-lg font-semibold text-cyan-300">
                {isPending || skipPending
                  ? skipPending
                    ? t('getting_new_question')
                    : t('grading')
                  : t('submit_answer')}
              </span>
            </div>
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700/30" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 text-sm text-gray-400">{t('or')}</span>
            </div>
          </div>

          <div className="flex gap-3 mt-3">
            <button
              type="button"
              onClick={onSkip}
              className="group relative flex-1 px-6 py-3 rounded-xl font-semibold text-base shadow-lg overflow-hidden transition-all duration-300 transform bg-futuristic-bg bg-gradient-to-r from-yellow-400/80 to-yellow-500/80 border border-yellow-400/40 text-gray-900 drop-shadow-[0_0_8px_rgba(250,204,21,0.4)] focus:outline-none focus:ring-2 focus:ring-yellow-400/60 hover:scale-105 hover:shadow-yellow-400/30 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isPending || skipPending}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 transition-transform duration-300 group-hover:scale-[1.1]" />
              <div className="relative flex items-center justify-center gap-2 text-gray-900">
                <span className="drop-shadow-[0_0_6px_rgba(250,204,21,0.7)]">
                  <SkipNextIcon />
                </span>
                <span>{t('skip')}</span>
              </div>
            </button>

            <button
              type="button"
              onClick={onStop}
              className="group relative flex-1 px-6 py-3 rounded-xl font-semibold text-base shadow-lg overflow-hidden transition-all duration-300 transform bg-futuristic-bg bg-gradient-to-r from-red-500/80 to-red-600/80 border border-red-400/40 text-white drop-shadow-[0_0_8px_rgba(239,68,68,0.4)] focus:outline-none focus:ring-2 focus:ring-red-400/60 hover:scale-105 hover:shadow-red-400/30 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isPending || skipPending}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 transition-transform duration-300 group-hover:scale-[1.1]" />
              <div className="relative flex items-center justify-center gap-2 text-white">
                <span className="drop-shadow-[0_0_6px_rgba(239,68,68,0.7)]">
                  <StopIcon />
                </span>
                <span>{t('give_up')}</span>
              </div>
            </button>
          </div>
        </div>
      )}
    </form>
  );
}
