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

            Thang điểm:
            - "overall_score": Tổng thể, thang 0-10.
            - "creative_score": Khả năng sáng tạo, sáng kiến, thang 0-10.

            Yêu cầu ngôn ngữ:
            - Viết tất cả nội dung bằng tiếng Việt chuẩn mực.
            - Không sử dụng tiếng Anh hay bất kỳ ngôn ngữ khác.

            Định dạng đầu ra:
            - Bắt buộc xuất ra duy nhất một JSON chuẩn, không thêm giải thích, không thêm ký tự thừa:
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
    .trim();

  try {
    const parsed = JSON.parse(cleaned);
    return parsed;
  } catch (error) {
    console.error('Error parsing evaluation JSON:', error);
    throw new Error('Invalid AI response format');
  }
}
