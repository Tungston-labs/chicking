# Chicking - Vite React App

A React/Vite application for Chicking, the world's fastest-growing Halal quick-service restaurant chain.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The app runs on the URL printed by Vite, usually `http://localhost:5173/`.

## Scripts

- `npm run dev` - Start the Vite dev server
- `npm run build` - Create a production build in `dist/`
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint

## Project Structure

```text
src/
  App.jsx                 Main React component with routing
  main.jsx                React DOM entry point
  styles/global.css       Global styles
  pages/                  Page components
  components/             Reusable UI components
public/
  images/                 Static image assets served from /images
index.html                Vite HTML entry point
vite.config.js            Vite configuration
eslint.config.js          ESLint flat config
```

## Routing

The app uses React Router v6. Current routes:

- `/` - Home page with the hero section

To add a page, create a component in `src/pages`, export it from `src/pages/index.js`, and add a route in `src/App.jsx`.
