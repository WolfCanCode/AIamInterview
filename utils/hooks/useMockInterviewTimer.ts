import { useState, useRef, useEffect, useCallback } from 'react';

export function useMockInterviewTimer({
  initialTime,
  submitted,
  loading,
  questionsLength,
  onAutoSubmit,
}: {
  initialTime: number;
  submitted: boolean;
  loading: boolean;
  questionsLength: number;
  onAutoSubmit: () => void;
}) {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    setTimeLeft(initialTime);
    if (!submitted && !loading && questionsLength > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            if (timerRef.current) clearInterval(timerRef.current);
            onAutoSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  }, [initialTime, submitted, loading, questionsLength, onAutoSubmit]);

  useEffect(() => {
    if (submitted || loading || !questionsLength) return;
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          onAutoSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [submitted, loading, questionsLength, onAutoSubmit]);

  return {
    timeLeft,
    setTimeLeft,
    startTimer,
  };
}
