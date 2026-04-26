// =============================================================================
// TECH STACK CONFIG
// Each item resolves to a Simple Icons component in TechStack.tsx — see the
// `iconMap` there. Add new tools by extending both this list and the map (or
// set `icon: null` to render the name with a small accent dot).
// =============================================================================

export type TechItem = { name: string; icon: string | null };
export type TechCategory = { label: string; items: TechItem[] };

export const techStack: TechCategory[] = [
  {
    label: "CORE",
    items: [
      { name: "Python", icon: "python" },
      { name: "SQL", icon: "postgresql" },
      { name: "Pandas", icon: "pandas" },
      { name: "NumPy", icon: "numpy" },
    ],
  },
  {
    label: "AI / ML",
    items: [
      { name: "PyTorch", icon: "pytorch" },
      { name: "TensorFlow", icon: "tensorflow" },
      { name: "Scikit-learn", icon: "scikitlearn" },
      { name: "Hugging Face", icon: "huggingface" },
      { name: "OpenCV", icon: "opencv" },
    ],
  },
  {
    label: "LLMS & RAG",
    items: [
      { name: "LangChain", icon: "langchain" },
      { name: "OpenAI", icon: "openai" },
      { name: "Ollama", icon: "ollama" },
      { name: "FAISS", icon: null },
      { name: "ChromaDB", icon: null },
    ],
  },
  {
    label: "BUILD & SHIP",
    items: [
      { name: "FastAPI", icon: "fastapi" },
      { name: "Streamlit", icon: "streamlit" },
      { name: "Docker", icon: "docker" },
      { name: "Git", icon: "git" },
    ],
  },
];

export const skills: string[] = [
  "Building chatbots & conversational AI",
  "RAG & agentic LLM systems",
  "Deep learning for computer vision",
  "NLP & speech-to-text pipelines",
  "Credit-risk & tabular ML",
  "Production API design (FastAPI)",
  "Data pipelines & feature engineering",
  "Prompt design & eval harnesses",
];
