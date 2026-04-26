// =============================================================================
// PROJECTS CONFIG
// 👇 For each project, drop image paths into `images` and your repo URL into
//    `githubUrl`. Images live in /public/images/projects/<slug>/.
// =============================================================================

export type Project = {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  tech: string[];
  images: string[]; // 👈 INSERT IMAGE PATHS, e.g. "/images/projects/creditsage/dashboard.png"
  githubUrl: string; // 👈 INSERT GITHUB LINK
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    id: "creditsage",
    number: "01",
    title: "CreditSage",
    tagline: "An LLM that reads your finances before lending against them.",
    description:
      "Loan-advisory chatbot wrapping a Groq-served LLaMA 3.3 70B in a router pattern — five typed tool functions handle eligibility, EMI math, risk profiling, product matching, and applicant snapshots. Streamlit dashboard renders dynamic risk visuals and what-if EMI scenarios while session memory keeps full conversation context.",
    longDescription:
      "CreditSage explores what a credit officer's first hour with an applicant could look like if a model did the reading. The router pattern classifies intent across four lanes — eligibility, product matching, EMI calculation, and risk assessment — and dispatches to typed tool calls with structured schemas. Session memory means an applicant can refine numbers mid-conversation without restating context. The Streamlit dashboard ships with applicant snapshot, risk visualizations, and conversational what-if EMI flows that update inline.",
    tech: [
      "Python",
      "Streamlit",
      "LangChain",
      "Groq LLaMA 3.3 70B",
      "Pandas",
    ],
    images: [
      "/images/projects/creditsage/dashboard.png",
      "/images/projects/creditsage/analysis.png",
      "/images/projects/creditsage/chat.png",
    ],
    githubUrl: "https://github.com/sudhir-yadav28/Creditsage-sudhir-yadav",
    liveUrl: "https://creditsage-loan.streamlit.app/",
  },
  {
    id: "geointel",
    number: "02",
    title: "GeoIntel Suite",
    tagline: "Two agents, one geospatial workflow — from RFP to clean shapefile.",
    description:
      "Dual-agent RAG: a Contracts Bot parses 200-page government RFPs to extract GIS deliverables and compliance clauses; a Clean Bot validates spatial data, catching topological errors and CRS mismatches across 10+ formats. Locally deployed on Ollama (3B params) for sub-3-second queries.",
    longDescription:
      "GeoIntel Suite is a dual-agent RAG system aimed at the messy seam between procurement paperwork and GIS production. The Contracts Bot ingests 200-page government RFPs and surfaces the deliverables, compliance requirements, and timelines a project manager actually needs. The Clean Bot reads spatial data — shapefiles, GeoJSON, KML, and seven other formats — checking topological integrity, CRS consistency, and attribute completeness before it touches a pipeline. Both run locally on Ollama with a 3B-parameter model, holding query latency under three seconds.",
    tech: ["Python", "LangChain", "ChromaDB", "Qdrant", "Ollama", "FastAPI"],
    images: [], // 👈 INSERT IMAGE PATHS
    githubUrl: "", // 👈 INSERT GITHUB LINK
  },
  {
    id: "task-automation",
    number: "03",
    title: "AI Task Automation Platform",
    tagline: "Voice in. Calendar, Gmail, and Slack out.",
    description:
      "Prompt-optimized n8n + GPT-4 system that parses actions, people, and dates from voice or text via Telegram with 94% accuracy. FastAPI orchestrates Google Calendar, Gmail, and Slack writes; a React dashboard makes tasks visible — 60% drop in manual handling.",
    longDescription:
      "Workflow orchestration aimed at the kind of busywork that quietly eats a team's week. A Telegram bot accepts voice or text; a prompt-optimized GPT-4 chain extracts actions, people, and dates with 94% accuracy and routes structured intents through an n8n graph. FastAPI handles the writes — Google Calendar invites, Gmail drafts, Slack posts — and a React dashboard surfaces the resulting task graph in real time. Manual task-management overhead dropped 60% in measured use.",
    tech: ["n8n", "OpenAI GPT-4", "React", "FastAPI", "Telegram API", "Google APIs"],
    images: [
      "/images/projects/task-automation/workflow-1.png",
      "/images/projects/task-automation/workflow-3.png",
      "/images/projects/task-automation/workflow-2.png",
    ],
    githubUrl: "",
  },
  {
    id: "medical-diagnostic",
    number: "04",
    title: "Medical Diagnostic System",
    tagline: "From scan to second opinion in one screen.",
    description:
      "Custom CNN trained on 700+ intraoral images and 5,000+ histopathology patches, hitting 92% classification accuracy via transfer learning. Grad-CAM explainability layered with a Llama 3 triage chatbot turns predictions into a workflow a clinician can actually use.",
    longDescription:
      "An end-to-end diagnostic workflow built around a custom convolutional model trained with transfer learning on 700+ intraoral photographs and 5,000+ histopathology patches, reaching 92% classification accuracy. Grad-CAM overlays make every prediction interrogable — the clinician sees what the model is actually attending to. A Llama 3 triage chatbot, running locally via Ollama, turns the patient's symptom history into a structured intake that flows into the same screen as the imaging output. Built in Streamlit so it ships, not lives in a notebook.",
    tech: ["PyTorch", "TorchVision", "OpenCV", "Grad-CAM", "Streamlit", "Ollama"],
    images: [
      "/images/projects/medical-diagnostic/overview.png",
      "/images/projects/medical-diagnostic/biopsy-report.png",
      "/images/projects/medical-diagnostic/patient-chat.png",
      "/images/projects/medical-diagnostic/screening-result.png",
    ],
    githubUrl: "https://github.com/sudhir-yadav28/Oralcancer",
  },
];
