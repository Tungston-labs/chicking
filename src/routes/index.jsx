import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/index.js";
import FranchiseForm from "../pages/Franchise/index.jsx";

const pageRoutes = [
  {
    path: "/",
    Component: Home,
  },
   {
    path: "/franchiseform",
    Component:FranchiseForm ,
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
