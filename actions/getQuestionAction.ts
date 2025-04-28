'use server';
import { retry } from '@/utils/functions/retry';

export async function getQuestionAction(topic: string, difficulty: string) {
  return retry(
    async () => {
      console.log('topic', topic);
      const response = await fetch(
        'https://router.huggingface.co/novita/v3/openai/chat/completions ',
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
                content: `
            Bạn là một chuyên gia phỏng vấn cấp cao trong lĩnh vực "${topic}".

            Nhiệm vụ:
            - Tạo một câu hỏi luyện tập phỏng vấn hoàn toàn mới, thuộc lĩnh vực "${topic}", với độ khó "${difficulty}".
            - Nội dung cần rõ ràng, ngắn gọn, dễ hiểu, phù hợp với ứng viên ở cấp độ tương ứng.
            - Nội dung câu hỏi là những câu hỏi dành cho phần phỏng vấn miệng trực tiếp, không có bất cứ thực hành nào ở nội dung.

            Yêu cầu ngôn ngữ:
            - Viết toàn bộ bằng tiếng Việt chuẩn mực, không sử dụng tiếng Anh hay bất kỳ ngôn ngữ khác.
            - Tránh lỗi chính tả, ngữ pháp.

            Định dạng đầu ra:
            - Output **Only** JSON below, không thêm câu trả lời thừa:
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
      console.log(JSON.stringify(data));
      const raw = data.choices?.[0]?.message?.content ?? '';

      // Clean nếu bị dính code block ```json ... ```
      const cleaned = raw
        .replace(/```json/gi, '')
        .replace(/```/gi, '')
        .replace(/\\\\\*/g, '*')
        .trim();

      try {
        const parsed = JSON.parse(cleaned);
        return parsed;
      } catch (error) {
        console.error('Error parsing question JSON:', error);
        throw error; // Let retry handle the retry logic
      }
    },
    3,
    500
  );
}
