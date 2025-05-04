import { useState, useCallback } from 'react';
import { getMockInterviewQuestionsAction } from '@/actions/getMockInterviewQuestionsAction';

export function useMockInterviewQuestions({
  domain,
  child,
  difficulty,
  locale,
}: {
  domain: string | null;
  child: string | null;
  difficulty: string | null;
  locale: string;
}) {
  const [questions, setQuestions] = useState<
    { title: string; description: string; constraints: string[] }[]
  >([]);
  const [loading, setLoading] = useState(false);

  const fetchQuestions = useCallback(async () => {
    setLoading(true);
    try {
      const qs = await getMockInterviewQuestionsAction(
        domain,
        child,
        difficulty,
        5,
        locale
      );
      setQuestions(qs);
    } finally {
      setLoading(false);
    }
  }, [domain, child, difficulty, locale]);

  const retakeQuestions = useCallback(
    async (prevQuestions: { description: string }[]) => {
      setLoading(true);
      let newQuestions = [];
      let attempts = 0;
      while (attempts < 5) {
        const qs = await getMockInterviewQuestionsAction(
          domain,
          child,
          difficulty,
          5,
          locale
        );
        const prevDescriptions = prevQuestions
          .map((q: { description: string }) => q.description)
          .join('||');
        const newDescriptions = qs
          .map((q: { description: string }) => q.description)
          .join('||');
        if (prevDescriptions !== newDescriptions) {
          newQuestions = qs;
          break;
        }
        attempts++;
      }
      setQuestions(newQuestions);
      setLoading(false);
      return newQuestions;
    },
    [domain, child, difficulty, locale]
  );

  return {
    questions,
    loading,
    setQuestions,
    setLoading,
    fetchQuestions,
    retakeQuestions,
  };
}
