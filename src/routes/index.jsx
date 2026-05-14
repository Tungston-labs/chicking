import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/index.js";
import BMI from "../pages/BMI/index.jsx";
import FranchiseForm from "../pages/Franchise/index.jsx";
import Propositions from "../pages/Proposition/index.jsx";

const pageRoutes = [
  {
    path: "/",
    Component: Home,
  },
   {
    path: "/franchiseform",
    Component:FranchiseForm ,
  },
   {
    path: "/Unique-Propositions",
    Component:Propositions ,
  },
  {
    path: "/bmi",
    Component: BMI,
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
