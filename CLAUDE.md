# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based personal portfolio website that showcases professional experience, skills, education, and achievements. The site is deployed to GitHub Pages and features a responsive design with dark/light theme support.

## Development Commands

- `npm start` - Start development server (includes data fetch from GitHub/Medium APIs)
- `npm run build` - Build production version (includes data fetch)
- `npm test` - Run tests
- `npm run format` - Format code with Prettier
- `npm run check-format` - Check code formatting
- `npm run deploy` - Deploy to GitHub Pages (builds and pushes to gh-pages branch)

## Key Architecture

### Data Fetching Strategy
- **fetch.js**: Pre-build script that fetches external data from GitHub GraphQL API and Medium RSS feed
- Runs automatically before `start` and `build` commands
- Saves data to `public/profile.json` and `public/blogs.json`
- Controlled by environment variables in `.env`

### Component Structure
- **src/data/career.json**: Single source for CV export and for work experience + education copy on the site
- **src/portfolio.js**: Central configuration (imports `career.json` for jobs/education; maps company logos; other sections stay here)
- **src/containers/**: Page-level components (Greeting, Skills, WorkExperience, etc.)
- **src/components/**: Reusable UI components (Header, Footer, Cards, etc.)
- **src/contexts/StyleContext.js**: Theme management (dark/light mode)
- **src/hooks/useLocalStorage.js**: Custom hook for persistent theme preference

### Routing and Layout
- Single-page application with React Router
- Main route renders all portfolio sections sequentially
- `/empty` route for EmptyPage component
- Conditional splash screen animation on load

### Environment Configuration
Required environment variables (copy from `env.example` to `.env`):
- `REACT_APP_GITHUB_TOKEN`: GitHub personal access token for API calls
- `GITHUB_USERNAME`: GitHub username for profile data
- `USE_GITHUB_DATA`: "true"/"false" to enable/disable GitHub data fetching
- `MEDIUM_USERNAME`: Medium username for blog posts (optional)

### Content Management
- Work experience, education, certifications, skills, and CV summary live in `src/data/career.json` (run `npm run generate-cv` after edits). Each job may include optional `companyTagline`, `regionalScope`, and `group` (same string ID merges roles into one site card and one CV company block).
- Other portfolio content and section flags stay in `src/portfolio.js`
- Sections can be enabled/disabled via `display: true/false` flags
- GitHub profile data and repositories are fetched dynamically if configured

### Styling
- SCSS-based styling with component-specific stylesheets
- Global colors defined in `src/_globalColor.scss`
- Theme switching handled via CSS classes and React Context
- Responsive design with mobile-first approach

## Important Files to Understand
- `src/data/career.json` - CV and shared career copy (work, education, skills, etc.)
- `src/portfolio.js` - Portfolio configuration (imports `career.json` for jobs/education)
- `fetch.js` - External data fetching logic
- `src/containers/Main.js` - Main application layout and routing
- `package.json` - Dependencies and build scripts

## Safari Mobile Compatibility (DO NOT REVERT)

The following fixes are critical for Safari mobile. Without them, sections render blank.

### ExperienceCard.js (`src/components/experienceCard/ExperienceCard.js`)
- **Use `useRef`, not `createRef`** — `createRef` recreates the ref every render in function components
- **Do NOT add `crossOrigin="anonymous"`** to img tags for local webpack-bundled images — Safari taints the canvas and ColorThief throws a SecurityError
- **`colorThief.getColor()` must be wrapped in try-catch** with a fallback color and a null/dimension guard before calling
- **Do NOT use `react-reveal`** for the experience section — it's unmaintained (v1.2.2, last updated 2019), starts content at `opacity: 0`, and can fail to reveal on Safari mobile. Use CSS `@keyframes` animation instead.

### Why this matters
ColorThief extracts colors by drawing images onto a `<canvas>` and calling `getImageData()`. Safari mobile is strict about canvas CORS — setting `crossOrigin="anonymous"` on same-origin images causes Safari to taint the canvas. Without error handling, the crash blanks the entire Experiences section.

## Deployment

- Git remote uses SSH host alias `github-personal` for the personal GitHub account (`malikalrizky`)
- The `gh-pages` npm package cannot parse SSH URLs with host aliases (e.g. `git@github-personal:user/repo.git`)
- **To deploy**, use the `--repo` flag with `ssh://` format:
  ```
  npx gh-pages -b gh-pages -d build --repo ssh://git@github-personal/malikalrizky/website.git
  ```
- Do NOT change the git remote URL — use `--repo` instead
- Custom domain: `malikal.dpdns.org` (set in `public/CNAME`)