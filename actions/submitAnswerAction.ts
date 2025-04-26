'use server';

export async function submitAnswerAction(question: string, answer: string) {
  const response = await fetch(
    'https://router.huggingface.co/nebius/v1/chat/completions',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_HUGGINGFACE_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'deepseek-ai/DeepSeek-Coder-V2-Lite-Instruct-fast',
        stream: false,
        max_tokens: 512,
        messages: [
          {
            role: 'user',
            content: `
            Bạn là chuyên gia đánh giá bài lập trình.

            Với câu hỏi sau:
            "${question}"

            Và câu trả lời của ứng viên:
            "${answer}"

            Hãy đánh giá và trả lời CHỈ dưới dạng JSON, KHÔNG thêm giải thích:
            {
              "correctness_score": number,
              "clarity_score": number,
              "time_complexity": "string",
              "suggestions": "string"
            }

            Yêu cầu:
            - Viết tất cả nội dung, bao gồm phần suggestions, bằng tiếng Việt hoàn toàn.
            - Không sử dụng tiếng Anh hoặc ngôn ngữ khác.
          `,
          },
        ],
      }),
    }
  );

  const data = await response.json();
  const raw = data.choices?.[0]?.message?.content ?? '';

  // Clean nếu bị dính code block ```json ... ```
  const cleaned = raw
    .replace(/```json/gi, '')
    .replace(/```/gi, '')
    .trim();

  try {
    const parsed = JSON.parse(cleaned);
    return parsed;
  } catch (error) {
    console.error('Error parsing evaluation JSON:', error);
    throw new Error('Invalid AI response format');
  }
}
