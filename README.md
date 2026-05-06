# Chicking - React App

A modern React application for Chicking, the world's fastest-growing Halal quick-service restaurant chain.

## Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Start the development server:
```bash
npm start
# or
yarn start
```

The app will open at [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `build/` directory.

## Project Structure

```
src/
├── app/
│   ├── App.jsx          # Main React component with routing
│   ├── index.jsx        # React entry point
│   └── globals.css      # Global styles
├── pages/               # Page components (main routes)
│   ├── Home.jsx         # Home page with Hero section
│   └── index.js         # Page exports
├── components/          # Reusable components
│   ├── Hero/            # Hero section component
│   │   ├── Hero.jsx
│   │   ├── HeroFirst/   # Hero first variant with floating items
│   │   │   ├── HeroFirst.jsx
│   │   │   ├── HeroFirst.styles.js
│   │   │   └── index.jsx
│   │   └── index.jsx
│   └── Navbar/          # Navigation component
│       ├── Navbar.jsx
│       ├── Navbar.style.js
│       └── index.jsx
├── index.jsx            # React DOM render entry
└── ...
public/
├── index.html           # HTML entry point
├── images/              # Image assets
│   ├── logo.svg
│   ├── frame*.svg
│   ├── dotted-line.svg
│   └── ...
```

## Features

- **Responsive Design**: Mobile-first responsive design with Tailwind CSS
- **Styled Components**: Component-scoped styling with styled-components
- **Icon Library**: React Icons for SVG icons
- **Floating Items Animation**: Animated floating items in the hero section
- **Dotted Line Decoration**: Visual connection between hero elements
- **React Router**: Client-side routing with React Router v6

## Routing

The app uses React Router v6 for client-side routing. Current routes:

- `/` - Home page with Hero section

To add more pages:

1. Create a new component in `src/pages/YourPage.jsx`
2. Export it from `src/pages/index.js`
3. Add a new route in `src/app/App.jsx`:

```jsx
import { YourPage } from '../pages/index.js';

// In Routes:
<Route path="/your-path" element={<YourPage />} />
```

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm test` - Run tests

## Technologies Used

- **React** 19.2.4
- **React Router DOM** 6.24.0
- **Styled Components** 6.4.1
- **React Icons** 5.6.0
- **Tailwind CSS** 4
- **React Scripts** 5.0.1

## Deployment

The app can be deployed to various platforms:
- Vercel
- AWS S3 + CloudFront
- Netlify
- Any static hosting service

## License

This project is private and for use within the Chicking organization.
