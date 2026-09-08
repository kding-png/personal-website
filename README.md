# Kylinn Ding portfolio

A static portfolio made entirely with HTML, CSS, and a small amount of vanilla JavaScript. It has no framework, build process, or package dependencies.

## Pages

- `index.html`: homepage and featured projects
- `works/index.html`: work categories
- `works/ux/index.html`: UX project titles
- `works/lumino/index.html`: Lumino case study
- `styles.css`: all shared visual styling and responsive layouts
- `script.js`: the small “coming soon” navigation interaction
- `projects/`: portfolio image assets

## Run locally

Opening `index.html` directly works for basic viewing, but a local server preserves the same clean paths used online. From this folder, run:

```sh
python3 -m http.server 3000
```

Then open `http://localhost:3000`.

## Deployment

The repository is connected to `https://github.com/kding-png/personal-website`. Vercel recognizes it as a static HTML site from `vercel.json`; no framework or build command is required.

Use `main` as the production branch. Every push to `main` triggers a new Vercel production deployment. Other branches can receive preview deployments.

Use these Vercel project settings:

- Framework Preset: **Other**
- Root Directory: `.`
- Build Command: leave blank
- Output Directory: leave blank
- Install Command: leave blank

The custom domains stay configured in Vercel, not in the HTML source.

## Editing

Update visible text directly in its `.html` page. Add images under `projects/`, then reference them with paths such as `/projects/project-name/image.webp`. Shared colors, typography, spacing, breakpoints, and animation live in `styles.css`.

No environment variables are currently needed. Future secrets must not be added to a static HTML site because browser-delivered files are public. Add a server-side service or function before using secret API keys.
