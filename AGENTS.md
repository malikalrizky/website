# AGENTS.md

Guidance for AI coding agents working in this repository. See also [CLAUDE.md](./CLAUDE.md) for Claude Code–specific notes.

## Project overview

React-based personal portfolio: experience, skills, education, achievements. Deployed to GitHub Pages with responsive layout and dark/light theme.

## Development commands

- `npm start` — dev server (runs pre-build fetch for GitHub/Medium data)
- `npm run build` — production build (includes data fetch)
- `npm test` — tests
- `npm run format` / `npm run check-format` — Prettier
- `npm run deploy` — build and publish to `gh-pages` branch

## Architecture

### Data fetching

- **fetch.js** — GitHub GraphQL and Medium RSS; runs before `start` / `build`
- Writes `public/profile.json` and `public/blogs.json`; configured via `.env`

### Layout

- **src/data/career.json** — single source for CV text, work experience, education, certifications, skills (`npm run generate-cv`; `portfolio.js` maps company logos). Jobs and education entries use `startMonth` / `endMonth` (`YYYY-MM`); `type` (Full-time/Freelance), `engagement` (Permanent/Contract/Project), optional `companyTagline`, optional `regionalScope`, optional `group` (string ID — jobs with the same ID render as one company card on the site and one CV block via `src/utils/groupExperience.js`), optional CV fields `cvInclude` (false omits from PDF only), `cvOnly` (true includes on PDF only, excluded from website), `cvClients` (selected clients line on PDF), `cvMaxBullets`, `cvOmitDesc`, and `promotionFrom`; display ranges via `src/utils/formatJobDates.js` (e.g. `Jun 2020 – Present`).
- **src/portfolio.js** — content and section flags; imports `career.json` for experience/education
- **src/containers/** — page sections (Greeting, Skills, WorkExperience, …)
- **src/components/** — shared UI
- **src/contexts/StyleContext.js** — theme
- **src/hooks/useLocalStorage.js** — persisted theme preference
- React Router SPA; main route stacks sections; `/empty` for EmptyPage; optional splash

### Environment (copy `env.example` → `.env`)

- `REACT_APP_GITHUB_TOKEN`, `GITHUB_USERNAME`, `USE_GITHUB_DATA`, `MEDIUM_USERNAME` (optional)

### Styling

- SCSS per component; `src/_globalColor.scss`; theme via context and CSS classes
- **Mobile Styling**: Ensure font sizes for `descBullet` and other descriptions are kept small/appropriate for mobile screens (user frequently corrects this).

## Important paths

- `src/data/career.json`, `src/portfolio.js`, `scripts/generate-cv.js`, `fetch.js`, `src/containers/Main.js`, `package.json`

## Safari mobile (do not revert)

**ExperienceCard** (`src/components/experienceCard/ExperienceCard.js`): use `useRef` not `createRef`; do not set `crossOrigin="anonymous"` on bundled local images; wrap ColorThief in try/catch with fallback; avoid `react-reveal` for this section — use CSS `@keyframes` instead.

## Deployment

- Remote may use SSH host alias `github-personal`; deploy with `gh-pages` using `--repo ssh://git@github-personal/malikalrizky/website.git` if needed
- Custom domain: `malikal.dpdns.org` (`public/CNAME`)
