'use server';

export async function getQuestionAction(topic: string, difficulty: string) {
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
        max_tokens: 1024,
        messages: [
          {
            role: 'user',
            content: `
            Bạn là một chuyên gia phỏng vấn về lĩnh vực "${topic}".

            Hãy tạo một câu hỏi luyện tập phỏng vấn mới nhất thuộc lĩnh vực "${topic}" với độ khó "${difficulty}".

            Yêu cầu trả lời CHỈ dưới dạng JSON, không thêm lời giải thích:
            {
              "title": "string",
              "description": "string",
              "constraints": ["string"],
            }

            Yêu cầu:
            - Viết tất cả nội dung, bằng tiếng Việt hoàn toàn.
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
    console.error('Error parsing question JSON:', error);
    throw new Error('Invalid AI response format');
  }
}
