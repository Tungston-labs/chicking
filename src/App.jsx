import { BrowserRouter as Router } from "react-router-dom";
import ScrollAnimations from "./components/Animation/ScrollAnimations.jsx";
import AppRoutes from "./routes/index.jsx";
import ScrollToTop from "./routes/ScrollToTop.jsx";
import AuthBootstrap from "./store/AuthBootstrap.jsx";

export default function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AuthBootstrap />
      <ScrollToTop />
      <ScrollAnimations />
      <AppRoutes />
    </Router>
  );
}

