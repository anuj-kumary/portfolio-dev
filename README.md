# Anuj Kumar — Portfolio

A premium personal portfolio built with Next.js 16, React 19, Framer Motion, and Tailwind CSS v4.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Data**: GitHub REST API
- **Deployment**: Netlify / Vercel

## Features

- Hero with mouse-parallax background effect
- Animated page loader
- Fixed navbar with scroll progress bar
- About section with highlight cards
- Animated achievement counters
- Vertical timeline experience section
- Featured project showcase (Workflow Builder)
- GitHub-powered project grid with fallback data
- Categorized tech stack cards
- GitHub profile stats
- Contact section with social links
- Command menu (⌘K) for keyboard navigation
- Scroll-to-top button
- Full SEO: metadata, Open Graph, Twitter Card, robots.txt, sitemap.xml, manifest
- Responsive on all screen sizes

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

```bash
cp .env.local.example .env.local
```

Optionally add a GitHub token to increase API rate limits:

```
GITHUB_TOKEN=your_github_personal_access_token
```

## Deployment

### Netlify

1. Connect your GitHub repo to Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`
4. The `netlify.toml` handles configuration automatically

### Vercel

```bash
npx vercel
```

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with SEO metadata
│   ├── page.tsx         # Home page (server component)
│   ├── globals.css      # Design tokens + global styles
│   ├── robots.ts
│   ├── sitemap.ts
│   └── manifest.ts
├── components/
│   ├── layout/          # Navbar, Footer, ScrollToTop, PageLoader, CommandMenu
│   ├── sections/        # Hero, About, Experience, Projects, GitHub, Contact...
│   └── ui/              # FadeUp, Badge, SectionHeader, Icons
├── hooks/               # useScrollProgress, useMousePosition, useInView
├── lib/                 # utils.ts, github.ts
└── types/               # TypeScript interfaces
```

## License

MIT
