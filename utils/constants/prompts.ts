interface Prompts {
  questionPrompt: (topic: string, difficulty: string) => string;
  evaluationPrompt: (question: string, answer: string) => string;
}

const enPrompts: Prompts = {
  questionPrompt: (topic: string, difficulty: string) => `
You are a senior interviewer specializing in "${topic}".

Task:
- Create a new practice interview question in the field of "${topic}", with difficulty level "${difficulty}".
- Content should be clear, concise, understandable, and appropriate for candidates at the corresponding level.
- The question content should be for oral interviews only, without any practical exercises.
- Do not send the previous question or the dupplicate question. Always create a new question.

Language requirements:
- Write everything in standard English.
- Avoid grammatical errors.

Output format:
- Output **Only** JSON below, no additional responses:
{
  "title": "string",
  "description": "string",
  "constraints": ["string"]
}`,

  evaluationPrompt: (question: string, answer: string) => `
You are a senior technical recruiter specializing in evaluating programming interviews.

Information:
- Interview question:
"${question}"
- Candidate's answer:
"${answer}"

Task:
- Evaluate the overall understanding, creativity, and accuracy of the answer.
- Grade strictly: Give 0 points for off-topic answers, missing main points, or showing lack of understanding. Don't be lenient with vague, incorrect, or evasive answers.
- Explain why you gave such scores.
- If the answer is "don't know", "give up", "no idea" or meaningless input, the score must be 0 and marked as not meeting requirements.

Scoring scale:
- "overall_score": Overall performance, scale 0-10.
- "creative_score": Creativity and initiative, scale 0-10.

Language requirements:
- Write all content in standard English.

Output format:
- Output **Only** JSON below, no additional responses:
{
  "overall_score": number,
  "creative_score": number,
  "result_text": "string",
  "suggestions": "string",
  "perfect_answer": "string",
  "key_points_of_main_argument":"string"
}`,
};

const viPrompts: Prompts = {
  questionPrompt: (topic: string, difficulty: string) => `
Bạn là một chuyên gia phỏng vấn cấp cao trong lĩnh vực "${topic}".

Nhiệm vụ:
- Tạo một câu hỏi luyện tập phỏng vấn hoàn toàn mới, thuộc lĩnh vực "${topic}", với độ khó "${difficulty}".
- Nội dung cần rõ ràng, ngắn gọn, dễ hiểu, phù hợp với ứng viên ở cấp độ tương ứng.
- Nội dung câu hỏi là những câu hỏi dành cho phần phỏng vấn miệng trực tiếp, không có bất cứ thực hành nào ở nội dung.
- Không được gửi câu hỏi đã tạo từ trước, không gửi câu hỏi trùng lặp. Câu hỏi luôn được tạo mới.

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

  evaluationPrompt: (question: string, answer: string) => `
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
  "suggestions": "string",
  "perfect_answer": "string",
  "key_points_of_main_argument":"string"
}`,
};

export const prompts: Record<string, Prompts> = {
  en: enPrompts,
  vi: viPrompts,
};
