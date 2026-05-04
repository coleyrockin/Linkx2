# Linkx2

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)

A Linktree-style personal link page. One clean, responsive page that consolidates portfolio, GitHub, LinkedIn, Instagram, and contact links — built with React and plain CSS, deployed to GitHub Pages.

**Live demo:** https://coleyrockin.github.io/linkx/

---

## About

Linkx2 is a small, focused personal link-in-bio page. It started as a bootcamp project and was rebuilt to use Vite, hand-written CSS (no utility framework), and a typography-driven editorial layout. Links are configured as a single data array in one component, so updating the page is one edit.

## Features

- Editorial two-column layout (portrait + content) that collapses cleanly on mobile
- Configurable link list with per-link accent colors driven by a CSS custom property
- Accessible markup: semantic `section`/`ul`/`li`, `aria-labelledby`, `aria-label`, focus-visible styles
- Safe outbound links — every external link uses `target="_blank"` with `rel="noopener noreferrer"`
- Open Graph + Twitter Card meta for link previews
- PWA manifest with platform icons

## Tech Stack

| Category    | Technology                          |
|-------------|-------------------------------------|
| Framework   | React 18                            |
| Build tool  | Vite 7                              |
| Styling     | Hand-written CSS (no framework)     |
| Icons       | react-icons                         |
| Typography  | Google Fonts (Fraunces, Work Sans)  |
| Deployment  | GitHub Pages via `gh-pages`         |

## Getting Started

```bash
git clone https://github.com/coleyrockin/Linkx2.git
cd Linkx2
npm install
npm run dev
```

The dev server runs on `http://localhost:5173` by default.

### Scripts

| Command           | Purpose                                 |
|-------------------|-----------------------------------------|
| `npm run dev`     | Start the Vite dev server               |
| `npm run build`   | Produce a production build in `dist/`   |
| `npm run preview` | Serve the production build locally      |
| `npm run deploy`  | Publish `dist/` to GitHub Pages         |

## Project Structure

```
Linkx2/
├── public/                    # Static assets (favicons, manifest)
├── src/
│   ├── assets/imgs/           # Image assets
│   ├── components/Everything/ # Page component (link list + layout)
│   ├── App.jsx                # App shell
│   ├── index.jsx              # React entry point
│   └── index.css              # All page styles
├── index.html                 # Vite HTML entry
└── vite.config.js             # Vite config (base: /linkx/)
```

## Customizing Links

Edit the `LINKS` array in `src/components/Everything/Index.jsx`. Each entry takes a `label`, `subtitle`, `href`, `icon`, `accent` color, and `type` tag.

## Security Notes

This is a fully static frontend with no backend, no user input, no forms, no environment variables, and no secrets. External links use `rel="noopener noreferrer"`. Nothing is collected or stored.

## Known Limitations

- Links are hardcoded in source — no CMS or admin UI
- No analytics or click tracking
- Built for a single user (me), not as a multi-tenant Linktree clone

## Future Improvements

- Light/dark theme toggle
- Privacy-respecting per-link click analytics
- Single `theme.js` config for colors and fonts
- Lighthouse pass with a written-up score

## Author

**Boyd Roberts** — [GitHub](https://github.com/coleyrockin) · [LinkedIn](https://www.linkedin.com/in/boydcroberts/)
