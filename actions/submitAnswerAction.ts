'use server';

import { retry } from '@/utils/functions/retry';

export async function submitAnswerAction(question: string, answer: string) {
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
                content: `
            Bạn là một chuyên gia tuyển dụng kỹ thuật cấp cao, chuyên đánh giá bài phỏng vấn lập trình.

            Thông tin:
            - Câu hỏi phỏng vấn:
            "${question}"
            - Câu trả lời của ứng viên:
            "${answer}"

            Nhiệm vụ:
            - Đánh giá tổng thể mức độ hiểu biết, khả năng sáng tạo và sự chính xác của câu trả lời.
            - Chấm điểm khó tính: Nếu trả lời lạc đề, thiếu ý chính hoặc thể hiện không hiểu vấn đề, cho 0 điểm. Không "nương tay" cho những câu trả lời mơ hồ, sai hoặc né tránh.
            - Cần lý giải tại sao cho điểm như vậy.
            - Nếu trả lời dạng "không biết" "Chịu thua" "Chịu" "Không hiểu" hoặc nhập nhưng từ không có nghĩa thì điểm chắc chắn là 0 và không đạt yêu cầu.

            Thang điểm:
            - "overall_score": Tổng thể, thang 0-10.
            - "creative_score": Khả năng sáng tạo, sáng kiến, thang 0-10.

            Yêu cầu ngôn ngữ:
            - Viết tất cả nội dung bằng tiếng Việt chuẩn mực.
            - Không sử dụng tiếng Anh hay bất kỳ ngôn ngữ khác.

            Định dạng đầu ra:
            - Output **Only** JSON below, không thêm câu trả lời thừa:
            {
              "overall_score": number,
              "creative_score": number,
              "result_text": "string",
              "suggestions": "string"
            }
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
