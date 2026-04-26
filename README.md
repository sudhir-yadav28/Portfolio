# Sudhir Yadav — Portfolio

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyour-username%2Fsudhir-portfolio)

Premium, editorial-grade portfolio site built with **Next.js 14 (App Router) + TypeScript + Tailwind + Framer Motion**. Black + warm-gold theme, Fraunces serif italics paired with JetBrains Mono labels, restrained animations, fully responsive.

---

## Quick start

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

```bash
npm run build   # production build
npm run start   # serve the production build locally
npm run lint    # eslint
```

---

## What you need to fill in

Everything you'll edit is centralized under `/config`. Each file is short and commented; search for `[INSERT_..._HERE]` markers.

| File | What it holds |
| --- | --- |
| [`config/contact.ts`](./config/contact.ts) | Email, phone, LinkedIn, GitHub, X (Twitter), resume URL |
| [`config/projects.ts`](./config/projects.ts) | Project copy is pre-written — drop in `images: []` and `githubUrl: ""` for each |
| [`config/experience.ts`](./config/experience.ts) | Roles, education, certifications. The third "future" entry is intentional — leave it as-is |
| [`config/tech.ts`](./config/tech.ts) | Tools grouped by category. Add new tools by extending the list and the icon switch in `components/TechStack.tsx` |

### Replace these images

- `/public/images/profile.jpg` — your headshot, ~3:4 ratio (hero About section). Until added, the site shows a tasteful "Photo coming soon" fallback.
- `/public/images/projects/<project-id>/...` — screenshots for each project's modal gallery. Then list them in `config/projects.ts → images: []`.
- `/public/resume.pdf` — optional local copy. The Resume buttons currently point at `contact.resumeUrl`, so either host the PDF on Drive and paste the link, or replace `resumeUrl` with `/resume.pdf` after dropping the file in `/public/`.

---

## Deploy to Vercel (one-click)

1. Push this folder to a GitHub repository.
2. Go to <https://vercel.com/new>, import the repo, and click **Deploy**. No env vars needed.
3. Vercel detects Next.js automatically — no `vercel.json` required.

That's it. The site is fully static and ships with `next/font`, AVIF/WebP image optimization, and zero runtime config.

---

## Design system (locked)

```css
--bg-primary:      #0A0A0A
--bg-elevated:     #141414
--border-hairline: #1F1F1F
--gold-primary:    #C9A961   /* champagne gold — never bright yellow */
--gold-bright:     #E0C088
--gold-muted:      #8A7544
--text-primary:    #EDEDED
--text-secondary:  #888888
--text-tertiary:   #555555
```

- **Headings:** Fraunces (serif, italic accents)
- **Body / UI:** Inter
- **Mono labels:** JetBrains Mono, uppercase, `letter-spacing: 0.2em`
- **Easing everywhere:** `cubic-bezier(0.16, 1, 0.3, 1)`
- **Atmosphere:** ~3% diagonal gold whisper in hero only, ~2.5% noise sitewide. Premium and barely perceptible.

All icons (`react-icons/si`) are forced monochrome gold via the `.icon-gold` CSS class — never colored brand logos.

---

## Project structure

```
app/
  layout.tsx       # fonts, metadata
  page.tsx         # composes all sections
  globals.css      # design tokens + utility classes
components/
  Loader.tsx
  Nav.tsx
  Hero.tsx
  About.tsx
  Projects.tsx
  ProjectModal.tsx
  Experience.tsx
  TechStack.tsx
  Contact.tsx
  Footer.tsx
config/
  contact.ts
  projects.ts
  experience.ts
  tech.ts
public/
  images/profile.jpg
  images/projects/
  resume.pdf
```

---

## Notes on the "Your Organization" experience entry

The third experience entry is forward-looking by design — it's how the portfolio addresses every reader without naming any specific company. It renders with a dashed gold border and a `↗ NEXT CHAPTER` mono label. Keep it as the last entry; the component reads `isFuture: true` to apply the styling.

---

## License

Personal portfolio — all rights reserved. Feel free to use the structure as inspiration for your own.
