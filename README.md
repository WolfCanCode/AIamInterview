# ITerview (Interview Trainer AI)

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Vercel](https://vercelbadge.vercel.app/api/wolfcancode/interview-trainer)](https://vercel.com/wolfcancode/interview-trainer)

An AI-powered web application to practice coding interviews across a wide range of domains, with instant feedback and adaptive difficulty.

---

## 🌟 Features

- **Custom Coding Questions**: Generate interview questions tailored to your chosen field (Tech, Business, Legal, Healthcare, and more).
- **Automated Evaluation**: Get instant feedback on correctness, clarity, and time complexity.
- **Adaptive Difficulty**: Select from Easy, Medium, Hard, or Madness levels.
- **Multidomain Support**: Practice in software, business, finance, law, education, and more.
- **Edge-first, Fast UX**: Powered by Next.js 15 Server Actions and Vercel Edge Functions.
- **Multilingual (Planned)**: Future support for multiple languages.
- **Leaderboard & Offline Mode (Planned)**

---

## 🗂️ Supported Domains

- **Technology**: Backend, Frontend, DevOps, Security, Data Science, Mobile, AI/ML, Game Dev, Cloud
- **Business**: Strategy, Marketing, Sales, Finance/Accounting, HR
- **Legal**: Corporate, IP, Contract, Employment, Compliance
- **Education**: Teaching, Curriculum
- **Healthcare**: Medicine, Nursing, Pharmacy, Public Health
- **Environmental, Agriculture, Media, Psychology, Banking, Investment, and more!**

<details>
<summary>See full domain list</summary>

(See `utils/constants/domain.ts` for all supported domains and subdomains.)

</details>

---

## 🔥 Tech Stack

- **Next.js 15** (App Router, Server Actions)
- **React 19**
- **TailwindCSS 4**
- **Hugging Face Router API** (model: `deepseek-ai/DeepSeek-Coder-V2-Lite-Instruct-fast`)
- **Vercel Edge Functions**
- **TypeScript**
- **i18n** (next-intl, planned multilingual)

---

## 📁 Project Structure

```
/actions        # Server Actions (generate question, submit answer)
/components     # React Components (Practice Page UI)
/utils          # Domain list and helper functions
/app            # App Router (Next.js 15)
/messages       # i18n translations
/public         # Static assets, icons, manifest
```

---

## ⚡ Quick Start

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
# or`
npm run dev
```

5. **Deploy:**
- Click "Deploy to Vercel" or follow [Vercel deployment guide](https://vercel.com/)

---

## ⚙️ Environment Variables

- `NEXT_PUBLIC_HUGGINGFACE_TOKEN` – Your Hugging Face Inference API token
- (Optional) `NEXT_PUBLIC_BUILD_SHA` – Git commit SHA for build versioning

---

## 🏗️ Architecture

- **Frontend**: React + Next.js 15 (App Router)
- **API**: Server Actions (Edge)
- **AI Backend**: Hugging Face Router (DeepSeek Model)
- **Deployment**: Vercel Edge Functions

```
User → Vercel Edge → Server Action → Hugging Face Router → DeepSeek Model → User
```

---

## 🖼️ Screenshot

![ITerview Screenshot](https://github.com/user-attachments/assets/70e975d1-b16f-40c1-8ce4-fded8f2b0994)

---

## 🤝 Contributing

Contributions are welcome! To get started:

1. Fork this repo
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Commit and push (`git commit -am 'Add new feature' && git push`)
5. Open a Pull Request

---

## 📜 License

[MIT](LICENSE)

---

## 👤 Author & Contact

Made with ❤️ by [Tommy (wolfcancode)](https://www.linkedin.com/in/wolfcancode/)

- **Model**: meta-llama/llama-4-maverick (see Footer for live version)
- **Build**: v1.3 (`NEXT_PUBLIC_BUILD_SHA`)

---

## 🚀 Roadmap / Future Plans

- [x] Add more domains (Legal, Finance, Healthcare)
- [x] Adaptive difficulty levels
- [ ] Ranking and scoring leaderboard
- [ ] Offline practice mode
- [ ] Multilingual support
- [ ] More question types (system design, behavioral, etc.)
- [ ] Community question sharing

---

> © 2024 ITerview. All rights reserved.

