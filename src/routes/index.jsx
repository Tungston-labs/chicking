import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/index.js";
import BMI from "../pages/BMI/index.jsx";
import FranchiseForm from "../pages/Franchise/index.jsx";
import GlobalPresence from "../pages/GlobalPresence/index.jsx";
import Propositions from "../pages/Proposition/index.jsx";
import LeadershipSection from "../pages/Management/index.jsx";
import FaqSection from "../pages/FAQ/index.jsx";
import BlogSections from '../pages/Blog/BlogSection'
import Ukpackage from "../pages/Proposition/UkPackage/Ukpackage.jsx";
import Uspackage from "../pages/Proposition/UsPackage/Uspackage.jsx";
import NewsArticle from "../pages/Blog/NewsArticle/NewsArticle.jsx";

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
  {
    path: "/global-presence",
    Component: GlobalPresence,
  },
   {
    path: "/management",
    Component: LeadershipSection,
  },
   {
    path: "/faq",
    Component: FaqSection,
  },
  {
    path: "/blog",
    Component: BlogSections,
  },
  {
    path: "/uk-package",
    Component: Ukpackage,
  },
  {
    path: "/us-package",
    Component: Uspackage,
  },
  {
    path: "/news-article",
    Component: NewsArticle,
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
