import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/index.js";


const pageRoutes = [
  {
    path: "/",
    Component: Home,
  },
  
];

const AppRoutes = () => (
  <Routes>
    {pageRoutes.map(({ Component, path }) => (
      <Route key={path} path={path} element={<Component />} />
    ))}
  </Routes>
);

export default AppRoutes;
