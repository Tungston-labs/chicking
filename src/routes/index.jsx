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
import BlogDashboard from "../pages/AdminBlog/BlogDashboard.jsx";
import CreateBlogPost from "../pages/AdminBlog/CreateBlogPost.jsx";
import EditBlogPost from "../pages/AdminBlog/EditBlogPost.jsx";
import ViewBlogPost from "../pages/AdminBlog/ViewBlogPost.jsx";
// import ProtectedRoute from "../components/ProtectedRoute.jsx";
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
  {
    path: "/admin/blogs",
    Component: BlogDashboard,
  },
  {
    path: "/admin/blogs/new",
    Component: CreateBlogPost,
  },
  {
    path: "/admin/blogs/:blogId/edit",
    Component: EditBlogPost,
  },
  {
    path: "/admin/blogs/:blogId",
    Component: ViewBlogPost,
  },
  // {
  //   path: "/admin",
  //   Component: () => (
  //     <ProtectedRoute>
  //       <ExampleAdminPage />
  //     </ProtectedRoute>
  //   ),
  // },
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
