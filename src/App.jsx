import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/index.jsx";
import ScrollToTop from "./routes/ScrollToTop.jsx";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppRoutes />
    </Router>
  );
}
