import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/index.js";
import BMI from "../pages/BMI/index.jsx";
import FranchiseForm from "../pages/Franchise/index.jsx";
import GlobalPresence from "../pages/GlobalPresence/index.jsx";
import Propositions from "../pages/Proposition/index.jsx";
import AboutUs from "../pages/AboutUs/index.jsx";
import LeadershipSection from "../pages/Management/index.jsx";
import FaqSection from "../pages/FAQ/index.jsx";
import BlogSections from '../pages/Blog/BlogSection'
import Login from "../pages/Login/index.jsx";
import ForgotPassword from "../pages/Login/ForgotPassword.jsx";
import VerifyCode from "../pages/Login/VerifyCode.jsx";
import SetPassword from "../pages/Login/SetPassword.jsx";
import ProtectedRoute from "../components/ProtectedRoute.jsx";

const pageRoutes = [
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/franchiseform",
    Component: FranchiseForm,
  },
  {
    path: "/Unique-Propositions",
    Component: Propositions,
  },

  {
    path: "/about-us",
    Component: AboutUs,
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
    path: "/admin-login",
    Component: Login,
  },
  {
    path: "/admin-login/forgot-password",
    Component: ForgotPassword,
  },
  {
    path: "/admin-login/verify-code",
    Component: VerifyCode,
  },
  {
    path: "/admin-login/set-password",
    Component: SetPassword,
  },
  // Example protected route usage (replace ExampleAdminPage with real component when ready)
  // {
  //   path: "/admin",
  //   Component: () => (
  //     <ProtectedRoute>
  //       <ExampleAdminPage />
  //     </ProtectedRoute>
  //   ),
  // },
];

const AppRoutes = () => (
  <Routes>
    {pageRoutes.map(({ Component, path }) => (
      <Route key={path} path={path} element={<Component />} />
    ))}
  </Routes>
);

export default AppRoutes;
