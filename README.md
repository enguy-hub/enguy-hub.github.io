# HiEN Personal Website

Personal hub for projects, and blogs. Build on Astro and powered by React.

## Stack

- Astro for static-first rendering with content collections.
- React components (Project Grid, Header/Footer, integrations badge) rendered as islands when needed.
- MDX for blog posts and project docs.
- GitHub Pages deployment via GitHub Actions.
- Future FastAPI backends discoverable through `public/config.json`.

## Project Layout

```
src/
├─ components/        # React islands (Header, ProjectGrid, IntegrationsBadge…)
├─ content/
│  ├─ config.ts       # Typed content collections (projects, blogs, papers)
│  ├─ projects/*.mdx  # One MDX file per project
│  ├─ blogs/*.mdx     # Blog posts and notes
│  └─ papers/*.mdx    # Research publications
├─ layouts/           # Base layout wiring header/footer + global styles
├─ pages/             # Astro routes for Home, Projects, Blogs, Research, Events
└─ styles/            # Global styles
public/
├─ config.json        # Mapping of project keys to API base URLs (later)
└─ og/                # (Reserved) social share assets
```

## Content Editing

- **Projects**: add a file under `src/content/projects/your-project.mdx`. Frontmatter enforces `title`, `summary`, `category`, `tags`, `status`, and optional `apiKey`.
- **Blogs**: drop MDX files in `src/content/blogs`. Provide `category` to control grouping and `publishedAt` for automatic sorting. Set `draft: true` to hide a post until it is ready.
- **Papers**: add MDX entries in `src/content/papers`. Capture `title`, `summary`, `category`, `venue`, `publishedAt`, and optional `link`. Use `draft: true` for placeholders or work-in-progress pieces.
- **API references**: update `public/config.json` to point the UI at new FastAPI deployments. Astro ships the file verbatim, so the frontend can `fetch` it at runtime without rebuilds.

## Local Development

```bash
npm install
npm run dev
npm run lint
```

Astro serves the site at `http://localhost:4321` with hot reload.

`npm run lint` runs the shared ESLint ruleset for Astro, React, and MDX.

## Build & Deploy

```bash
npm run build    # outputs static files to dist/
npm run preview  # test the production build locally
```

GitHub Actions (`.github/workflows/deploy.yml`) builds the Astro site on pushes to `main` and publishes the `dist/` folder to GitHub Pages.
The workflow now runs linting before building, so pushes fail fast when code style or accessibility checks break.

## Roadmap

- Wire project cards to live FastAPI endpoints using the keys declared in `public/config.json`.
- Add dedicated sub-sites per project (`project-x-web`) as they mature.
- Extend the content model with changelog entries and release notes.

## Publishing Checklist

- Run `npm run lint` and `npm run build` locally; fix any warnings before pushing.
- Replace template MDX entries (flagged with `draft: true`) or keep them as drafts so they do not publish.
- Update `public/config.json` with real API endpoints or localhost stubs for the current environment.
- Verify external project links such as the demos in `public/demos/` still behave as expected.
- Push to `main` and confirm the GitHub Pages workflow completes the lint and build steps successfully.
