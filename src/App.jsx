import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/index.js";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
