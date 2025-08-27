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
- **src/portfolio.js**: Central configuration file containing all portfolio content, certifications, work experience, and settings
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
- Portfolio content is primarily managed through `src/portfolio.js`
- Sections can be enabled/disabled via `display: true/false` flags
- GitHub profile data and repositories are fetched dynamically if configured
- Static content includes work experience, skills, education, and certifications

### Styling
- SCSS-based styling with component-specific stylesheets
- Global colors defined in `src/_globalColor.scss`
- Theme switching handled via CSS classes and React Context
- Responsive design with mobile-first approach

## Important Files to Understand
- `src/portfolio.js` - All portfolio content and configuration
- `fetch.js` - External data fetching logic
- `src/containers/Main.js` - Main application layout and routing
- `package.json` - Dependencies and build scripts