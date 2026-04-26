// =============================================================================
// CONTACT CONFIG
// 👇 Replace each [INSERT_..._HERE] with your real value before deploying.
//    Email and phone are wrapped in mailto:/tel: automatically by the UI.
// =============================================================================

export const contact = {
  email: "y.sudhir2804@gmail.com",
  phone: "9755702220",
  linkedin: "https://www.linkedin.com/in/sudhir-yadav-a53a7b376/",
  github: "https://github.com/sudhir-yadav28",
  twitter: "https://x.com/Sudhir_y28",
  resumeUrl: "https://drive.google.com/file/d/1MjAz9JAj18AMvRmeij-10GTpgvBMhrU7/view?usp=drive_link",
  resumeDownloadUrl: "https://drive.google.com/uc?export=download&id=1MjAz9JAj18AMvRmeij-10GTpgvBMhrU7",
  location: "Gurugram, India",
} as const;

export type Contact = typeof contact;
