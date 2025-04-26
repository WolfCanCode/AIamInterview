# Interview Trainer AI

An AI-powered web application to practice coding interviews across multiple domains.

---

## 🌟 Features

- 🔹 Generate customized coding questions based on selected fields (e.g., Software Development, Business, Marketing).
- 🔹 Submit your solutions and receive automated evaluation:
  - Correctness
  - Clarity
  - Time complexity feedback
- 🔹 Next.js 15 Server Actions for fast, seamless interactions.
- 🔹 Edge-first architecture: serverless, optimized for Vercel.

---

## 🔥 Built with

- **Next.js 15**
- **TailwindCSS**
- **Hugging Face Router API** (model: `deepseek-ai/DeepSeek-Coder-V2-Lite-Instruct-fast`)
- **Edge Functions** (Vercel)

---

## 📁 Project Structure

```
/actions        # Server Actions (generate question, submit answer)
/components     # React Components (Practice Page UI)
/utils          # Domain list and helper functions
/pages          # Next.js Routing (optional if not using App Router)
```

---

## 💪 Quick Setup

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/interview-trainer.git
cd interview-trainer
```

2. **Install dependencies:**

```bash
yarn install
# or
npm install
```

3. **Setup environment variables:**

Create a `.env.local` file:

```env
NEXT_PUBLIC_HUGGINGFACE_TOKEN=your_huggingface_api_token_here
```

4. **Run locally:**

```bash
yarn dev
# or
npm run dev
```

5. **Deploy:**
- Click "Deploy to Vercel" button (if available) or manually setup via [vercel.com](https://vercel.com/)

---

## 📈 Architecture

- Frontend: **React + Next.js 15**
- API Calls: **Server Actions**
- AI Backend: **Hugging Face Router**
- Deployment: **Vercel Edge Functions**

```
User -> Vercel Edge -> Server Action -> Hugging Face Router -> DeepSeek Model -> Back to User
```

---

## 🔍 Example Screenshot

(Insert screenshot here)

---

## 🔊 License

[MIT](LICENSE)

---

## 🚀 Future Plans

- [ ] Add more domains (Legal, Finance, Healthcare)
- [ ] Adaptive difficulty levels
- [ ] Ranking and scoring leaderboard
- [ ] Offline practice mode
- [ ] Multilingual support.


---

Made with ❤️ by Tommy for developers by developers.

