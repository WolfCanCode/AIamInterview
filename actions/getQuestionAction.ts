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
            Bạn là một chuyên gia phỏng vấn cấp cao trong lĩnh vực "${topic}".

            Nhiệm vụ:
            - Tạo một câu hỏi luyện tập phỏng vấn hoàn toàn mới, thuộc lĩnh vực "${topic}", với độ khó "${difficulty}".
            - Nội dung cần rõ ràng, ngắn gọn, dễ hiểu, phù hợp với ứng viên ở cấp độ tương ứng.

            Yêu cầu ngôn ngữ:
            - Viết toàn bộ bằng tiếng Việt chuẩn mực, không sử dụng tiếng Anh hay bất kỳ ngôn ngữ khác.
            - Tránh lỗi chính tả, ngữ pháp.

            Định dạng đầu ra:
            - Bắt buộc xuất ra **duy nhất** một JSON như sau, không thêm lời giải thích hay ký tự thừa:
            {
              "title": "string",
              "description": "string",
              "constraints": ["string"]
            }`,
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
