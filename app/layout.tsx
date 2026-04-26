import type { Metadata } from "next";
import {
  Playfair_Display,
  Fraunces,
  Inter,
  JetBrains_Mono,
  Caveat,
} from "next/font/google";
import "./globals.css";

const serif = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const signature = Caveat({
  subsets: ["latin"],
  variable: "--font-signature",
  display: "swap",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Sudhir Yadav — AI/ML Engineer",
  description:
    "Sudhir Yadav — AI/ML engineer building production systems where research meets reality. Open to internships and the kind of side-projects that hide a real challenge underneath.",
  keywords: [
    "Sudhir Yadav",
    "AI Engineer",
    "ML Engineer",
    "LangChain",
    "RAG",
    "LLM",
    "Internship",
    "Data Science",
  ],
  authors: [{ name: "Sudhir Yadav" }],
  creator: "Sudhir Yadav",
  openGraph: {
    title: "Sudhir Yadav — AI/ML Engineer",
    description:
      "Building production AI systems where research meets reality. Open to internships and serious side-projects.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sudhir Yadav — AI/ML Engineer",
    description:
      "Building production AI systems where research meets reality.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${display.variable} ${sans.variable} ${mono.variable} ${signature.variable}`}
    >
      <body className="bg-bg-primary text-ink-primary antialiased">
        {children}
      </body>
    </html>
  );
}
