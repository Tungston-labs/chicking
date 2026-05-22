import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/index.jsx";
import ScrollToTop from "./routes/ScrollToTop.jsx";
import AuthBootstrap from "./store/AuthBootstrap.jsx";

export default function App() {
  return (
    <Router>
      <AuthBootstrap />
      <ScrollToTop />
      <AppRoutes />
    </Router>
  );
}
