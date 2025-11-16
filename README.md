# HiEN Personal Website

Astro-powered personal hub that showcases projects, research, and writings. The site renders content-first pages with React islands for richer interactions and deploys straight to GitHub Pages.

## Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Getting Started](#getting-started)
4. [Project Layout](#project-layout)
5. [Writing Content](#writing-content)
6. [Configuration](#configuration)
7. [Tooling & Quality](#tooling--quality)
8. [Deployment](#deployment)
9. [Roadmap](#roadmap)
10. [Contributing](#contributing)
11. [License](#license)

## Features

- Content-first Astro site with MDX collections for projects, blog posts, and papers.
- React islands (header, footer, integration badges, project grid) hydrate only where interactivity is needed.
- Pluggable FastAPI backends configured at runtime through `public/config.json`.
- Built-in linting for Astro, React/JSX, and MDX to keep the UI accessible and consistent.
- Automated build & deploy to GitHub Pages via CI workflows.

## Tech Stack

- [Astro 5](https://astro.build/) for static-first rendering.
- [React 18](https://react.dev/) islands for interactive components.
- [MDX](https://mdxjs.com/) for content and documentation pages.
- [TypeScript](https://www.typescriptlang.org/) for typed content collections and utilities.
- GitHub Pages + GitHub Actions for delivery.

## Getting Started

### Prerequisites

- Node.js 18+ (Astro recommends Active LTS).
- npm 9+ (bundled with Node 18).

### Installation

```bash
npm install
```

### Local development

```bash
npm run dev
```

- Starts Astro at `http://localhost:4321` with hot reload.
- Content files under `src/content/**` reload automatically.

### Useful scripts

| Command | Description |
| ------- | ----------- |
| `npm run dev` | Start the development server. |
| `npm run lint` | Run ESLint (Astro, React, MDX rules). |
| `npm run build` | Generate the production-ready static site in `dist/`. |
| `npm run preview` | Serve the `dist/` output locally for smoke testing. |

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
├─ config.json        # Mapping of project keys to API base URLs
└─ og/                # Reserved for social share assets
```

## Writing Content

- **Projects**: add `src/content/projects/your-project.mdx`. Frontmatter enforces `title`, `summary`, `category`, `tags`, `status`, and optional `apiKey`.
- **Blogs**: drop MDX files in `src/content/blogs`. Use `category` for grouping and `publishedAt` for sorting. Set `draft: true` to keep a post hidden.
- **Papers**: add MDX entries in `src/content/papers`. Provide `title`, `summary`, `category`, `venue`, `publishedAt`, and optional `link`. Use drafts for WIP.
- **Assets**: static files placed in `public/` are copied as-is and available under the same path at runtime.

## Configuration

- `public/config.json` maps project keys to FastAPI base URLs or mock endpoints. Because the file ships verbatim, you can change API targets without rebuilding the site.
- `.github/workflows/deploy.yml` builds and deploys `dist/` to GitHub Pages and now lints before building to fail fast.
- `.github/workflows/ci.yml` (optional) can run additional checks; keep it updated if you introduce new scripts or test suites.

## Tooling & Quality

- ESLint configuration lives in `eslint.config.mjs` and covers Astro, JSX/TSX, and accessibility rules.
- Type safety is enforced through the [Astro content collections](https://docs.astro.build/en/guides/content-collections/) defined in `src/content/config.ts`.
- Consider running `npm run lint` before every commit/push for immediate feedback.

## Deployment

1. `npm run lint`
2. `npm run build`
3. Push to `main`
4. GitHub Actions (`.github/workflows/deploy.yml`) builds and publishes the `dist/` folder to GitHub Pages.

To validate locally before merging, run:

```bash
npm run build
npm run preview
```

## Roadmap

- Wire project cards to live FastAPI endpoints using the keys declared in `public/config.json`.
- Add dedicated sub-sites per project (`project-x-web`) as they mature.
- Extend the content model with changelog entries and release notes.
- Incorporate automated visual regression tests once the design stabilizes.

## Contributing

1. Create a feature branch from `main`.
2. Make your changes and run `npm run lint`.
3. Commit with descriptive messages.
4. Open a pull request and ensure CI checks pass.

## License

Distributed under the [Creative Commons Attribution 3.0 Unported](LICENSE.txt) license. Feel free to adapt the site as long as you credit the original work.
