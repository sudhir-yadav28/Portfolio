// =============================================================================
// EXPERIENCE CONFIG
// Two real roles + one forward-looking entry that addresses the reader directly.
// The third entry (`isFuture: true`) is intentional — it should remain at the
// bottom of the list and renders with a dashed gold border + NEXT CHAPTER label.
// =============================================================================

export type Experience = {
  id: string;
  company: string;
  role: string;
  dates: string;
  location: string;
  bullets: string[];
  isFuture?: boolean;
};

export const experience: Experience[] = [
  {
    id: "crefio",
    company: "Crefio Private Limited",
    role: "Software Engineer Intern — Machine Learning",
    dates: "Apr 2026 — Present",
    location: "Gurugram, India",
    bullets: [
      "Engineered XGBoost and logistic-regression pipelines that score loan eligibility on real applicant data, handing the credit team faster, more transparent risk reads.",
      "Shipped LangChain document-extraction workflows that parse financial statements end-to-end, replacing manual review across the loan-review queue.",
      "Wired models into Django REST microservices for real-time inference behind internal analytics and decisioning dashboards.",
      "Pair with the CTO on architecture choices — feature engineering, evaluation, and the infra that holds models accountable in production.",
    ],
  },
  {
    id: "branding-pioneers",
    company: "Branding Pioneers",
    role: "AI Engineer Intern",
    dates: "Feb — Apr 2026",
    location: "Gurugram, India",
    bullets: [
      "Co-engineered an AI-powered CRM platform — LLMs and NLP pipelines doing lead scoring, intent classification, and personalized response generation in production.",
      "Built speech-to-text ASR pipelines and multi-turn LLM dialogue management driving live voice interactions with real business customers.",
      "Designed end-to-end ML pipelines for intent and entity extraction, integrated into scalable, full-stack production applications used daily.",
    ],
  },
  {
    id: "future",
    company: "Your Organization",
    role: "Incoming AI/ML Intern",
    dates: "NEXT →",
    location: "Wherever you build",
    isFuture: true,
    bullets: [
      "I want to walk into rooms where the bar is set higher than I can currently reach — and walk out a different engineer.",
      "Give me the problem nobody wants to own. I'd rather lose sleep over something that matters than coast on something that doesn't.",
      "I'm not here to log hours. I'm here to ship work I'd be proud to put my name on, alongside people who care just as much.",
    ],
  },
];

export const education = [
  {
    school: "Masters' Union",
    program: "Undergraduate Program, Data Science & AI",
    dates: "2025 — 2029",
    location: "Gurugram, Haryana",
  },
  {
    school: "Indian Institute of Technology, Guwahati",
    program: "B.Sc (Hons.) Data Science & AI — Online",
    dates: "2025 — 2029",
    location: "Guwahati, Assam",
  },
];

export const certifications = [
  "Electronic Arts Product Management Simulation — Forage · KPI framework design and data-driven strategy.",
  "Investing & Trading using Technical Analysis — Uplearn by Upstox / Masters' Union, Nov 2025.",
];
