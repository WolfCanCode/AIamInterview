'use server';

import { retry } from '@/utils/functions/retry';
import { prompts } from '@/utils/constants/prompts';

export async function submitAnswerAction(
  question: string,
  answer: string,
  locale: string = 'en'
) {
  return retry(
    async () => {
      const response = await fetch(
        'https://router.huggingface.co/novita/v3/openai/chat/completions',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_HUGGINGFACE_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: 'meta-llama/llama-4-maverick-17b-128e-instruct-fp8',
            stream: false,
            max_tokens: 1024,
            messages: [
              {
                role: 'user',
                content: prompts[locale].evaluationPrompt(question, answer),
              },
            ],
          }),
        }
      );

      const data = await response.json();
      const raw = data.choices?.[0]?.message?.content ?? '';

      // Clean if there are code blocks ```json ... ```
      const cleaned = raw
        .replace(/```json/gi, '')
        .replace(/```/gi, '')
        .replace(/\\\*/g, '*')
        .trim();

      try {
        const parsed = JSON.parse(cleaned);
        return parsed;
      } catch (error) {
        console.error('Error parsing evaluation JSON:', error);
        throw error; // Let retry handle the retry logic
      }
    },
    3,
    500
  );
}
