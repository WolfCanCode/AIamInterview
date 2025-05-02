interface Prompts {
  questionPrompt: (topic: string, difficulty: string) => string;
  evaluationPrompt: (question: string, answer: string) => string;
  batchEvaluationPrompt: (
    qas: { question: string; answer: string }[],
    domain: string | null,
    child: string | null,
    difficulty: string | null
  ) => string;
  batchQuestionPrompt: (
    domain: string | null,
    child: string | null,
    difficulty: string | null,
    numQuestions: number
  ) => string;
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
- Key points: Candidate can use these key points as a foundation for their ideas.

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
  "key_points_of_main_argument":["string"]
}`,

  batchEvaluationPrompt: (qas, domain, child, difficulty) => `
You are a senior recruiter specializing in evaluating mock interviews in the domain of ${
    domain || 'General'
  }.

Domain: ${domain || 'General'}
${child ? `Subdomain: ${child}\n` : ''}Difficulty: ${difficulty || 'Medium'}

Information:
- Interview questions and candidate's answers:
${qas
  .map(
    (qa, i) => `${i + 1}. Q: "${qa.question}"
   A: "${qa.answer}"`
  )
  .join('\n')}

Task:
- For each answer, evaluate and score as in the single evaluation prompt.
- At the end, provide an overall score (0-10), a title for the candidate, and suggestions for improvement.

Output format:
- Output **Only** JSON below, no additional responses:
{
  "results": [
    {
      "question": "string",
      "answer": "string",
      "overall_score": number,
      "creative_score": number,
      "result_text": "string",
      "suggestions": "string",
      "perfect_answer": "string",
      "key_points_of_main_argument": ["string"]
    },
    ...
  ],
  "overall_score": number,
  "title": "string",
  "overall_suggestions": "string",
  "overall_result_text": "string",
  "title_ranking_text": "string"
}`,

  batchQuestionPrompt: (domain, child, difficulty, numQuestions) => `
You are a senior interviewer specializing in the domain of ${
    domain || 'General'
  }${child ? `, subdomain: ${child}` : ''}.

Task:
- Generate ${numQuestions} unique, challenging, and realistic mock interview questions for the domain "${
    domain || 'General'
  }"${child ? ` (subdomain: ${child})` : ''}, with difficulty level "${
    difficulty || 'Medium'
  }".
- Each question should be clear, concise, and appropriate for oral interviews (no practical exercises).
- Avoid duplicates or previously generated questions.

Language requirements:
- Write everything in standard English.
- Avoid grammatical errors.

Output format:
- Output **Only** the JSON array below, no additional responses:
[
  {
    "title": "string",
    "description": "string",
    "constraints": ["string"]
  },
  ...
]
`,
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
- Key points: những điểm chính mà thí sinh có thể sử dụng làm cơ sở cho ý tưởng của mình.

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
  "key_points_of_main_argument":["string"]
}`,

  batchEvaluationPrompt: (qas, domain, child, difficulty) => `
Bạn là một chuyên gia tuyển dụng cấp cao, chuyên đánh giá các buổi phỏng vấn thử trong lĩnh vực ${
    domain || 'Chung'
  }.

Lĩnh vực: ${domain || 'Chung'}
${child ? `Chủ đề con: ${child}\n` : ''}Độ khó: ${difficulty || 'Trung bình'}

Thông tin:
- Danh sách câu hỏi phỏng vấn và câu trả lời của ứng viên:
${qas
  .map(
    (qa, i) => `${i + 1}. Q: "${qa.question}"
   A: "${qa.answer}"`
  )
  .join('\n')}

Nhiệm vụ:
- Với mỗi câu trả lời, hãy đánh giá và chấm điểm như trong prompt đánh giá từng câu.
- Cuối cùng, hãy đưa ra tổng điểm (0-10), một danh hiệu cho ứng viên, và gợi ý cải thiện tổng thể.

Định dạng đầu ra:
- Output **Only** JSON below, không thêm câu trả lời thừa:
{
  "results": [
    {
      "question": "string",
      "answer": "string",
      "overall_score": number,
      "creative_score": number,
      "result_text": "string",
      "suggestions": "string",
      "perfect_answer": "string",
      "key_points_of_main_argument": ["string"]
    },
    ...
  ],
  "overall_score": number,
  "title": "string",
  "overall_suggestions": "string",
  "overall_result_text": "string",
  "title_ranking_text": "string"
}`,

  batchQuestionPrompt: (domain, child, difficulty, numQuestions) => `
Bạn là một chuyên gia phỏng vấn cấp cao trong lĩnh vực ${domain || 'Chung'}${
    child ? `, chủ đề con: ${child}` : ''
  }.

Nhiệm vụ:
- Tạo ra ${numQuestions} câu hỏi phỏng vấn thử độc đáo, thách thức và thực tế cho lĩnh vực "${
    domain || 'Chung'
  }"${child ? ` (chủ đề con: ${child})` : ''}, với độ khó "${
    difficulty || 'Trung bình'
  }".
- Mỗi câu hỏi cần rõ ràng, ngắn gọn, phù hợp cho phỏng vấn miệng (không có bài tập thực hành).
- Không được trùng lặp hoặc lặp lại các câu hỏi đã tạo trước đó.

Yêu cầu ngôn ngữ:
- Viết toàn bộ bằng tiếng Việt chuẩn mực, không sử dụng tiếng Anh hay bất kỳ ngôn ngữ khác.
- Tránh lỗi chính tả, ngữ pháp.

Định dạng đầu ra:
- Output **Only** mảng JSON dưới đây, không thêm câu trả lời thừa:
[
  {
    "title": "string",
    "description": "string",
    "constraints": ["string"]
  },
  ...
]
`,
};

export const prompts: Record<string, Prompts> = {
  en: enPrompts,
  vi: viPrompts,
};
