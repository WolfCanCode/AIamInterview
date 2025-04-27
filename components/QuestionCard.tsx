import React from 'react';
import { Question } from '@/types/Question';

export default function QuestionCard({
  question,
  selectedDomain,
}: {
  question: Question;
  selectedDomain: string | null;
}) {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 p-2 sm:p-6 rounded-xl sm:rounded-3xl shadow-2xl space-y-4 sm:space-y-6 animate-fade-in w-full max-w-2xl mx-auto">
      <div className="flex flex-col justify-start">
        <span className="w-fit mb-2 px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-xs font-semibold uppercase tracking-wider">
          {selectedDomain}
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 flex-1">
          {question.title}
        </h2>
      </div>
      <p className="text-base leading-relaxed">{question.description}</p>
      <div className="space-y-2">
        <h3 className="font-semibold">Yêu cầu:</h3>
        <ul className="list-disc list-inside ml-4">
          {question.constraints.map((c: string, idx: number) => (
            <li key={idx}>{c}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
