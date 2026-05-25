import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute.jsx";
import PublicOnlyRoute from "../components/PublicOnlyRoute.jsx";
import AboutUs from "../pages/AboutUs/index.jsx";
import BlogSections from "../pages/Blog/BlogSection";
import NewsArticle from "../pages/Blog/NewsArticle/NewsArticle.jsx";
import BMI from "../pages/BMI/index.jsx";
import FranchiseForm from "../pages/Franchise/index.jsx";
import GlobalPresence from "../pages/GlobalPresence/index.jsx";
import { Home } from "../pages/Home/index.js";
import BlogDashboard from "../pages/AdminBlog/BlogDashboard.jsx";
import CreateBlogPost from "../pages/AdminBlog/CreateBlogPost.jsx";
import EditBlogPost from "../pages/AdminBlog/EditBlogPost.jsx";
import ViewBlogPost from "../pages/AdminBlog/ViewBlogPost.jsx";
import FaqSection from "../pages/FAQ/index.jsx";
import ForgotPassword from "../pages/Login/ForgotPassword.jsx";
import Login from "../pages/Login/index.jsx";
import SetPassword from "../pages/Login/SetPassword.jsx";
import VerifyCode from "../pages/Login/VerifyCode.jsx";
import LeadershipSection from "../pages/Management/index.jsx";
import Propositions from "../pages/Proposition/index.jsx";
import Ukpackage from "../pages/Proposition/UkPackage/Ukpackage.jsx";
import Uspackage from "../pages/Proposition/UsPackage/Uspackage.jsx";

const withProtectedRoute = (Component) => (
  <ProtectedRoute>
    <Component />
  </ProtectedRoute>
);

const withPublicOnlyRoute = (Component) => (
  <PublicOnlyRoute>
    <Component />
  </PublicOnlyRoute>
);

const pageRoutes = [
  {
    element: <Home />,
    path: "/",
  },
  {
    element: <FranchiseForm />,
    path: "/franchiseform",
  },
  {
    element: <Propositions />,
    path: "/Unique-Propositions",
  },
  {
    element: <AboutUs />,
    path: "/about-us",
  },
  {
    element: <BMI />,
    path: "/bmi",
  },
  {
    element: <GlobalPresence />,
    path: "/global-presence",
  },
  {
    element: <LeadershipSection />,
    path: "/management",
  },
  {
    element: <FaqSection />,
    path: "/faq",
  },
  {
    element: <BlogSections />,
    path: "/blog",
  },
  {
    element: withPublicOnlyRoute(Login),
    path: "/admin-login",
  },
  {
    element: withPublicOnlyRoute(ForgotPassword),
    path: "/admin-login/forgot-password",
  },
  {
    element: withPublicOnlyRoute(VerifyCode),
    path: "/admin-login/verify-code",
  },
  {
    element: withPublicOnlyRoute(SetPassword),
    path: "/admin-login/set-password",
  },
  {
    element: withProtectedRoute(BlogDashboard),
    path: "/dashboard/blogs",
  },
  {
    element: withProtectedRoute(CreateBlogPost),
    path: "/dashboard/blogs/new",
  },
  {
    element: withProtectedRoute(EditBlogPost),
    path: "/dashboard/blogs/:blogId/edit",
  },
  {
    element: withProtectedRoute(ViewBlogPost),
    path: "/dashboard/blogs/:blogId",
  },
  {
    element: <Ukpackage />,
    path: "/uk-package",
  },
  {
    element: <Uspackage />,
    path: "/us-package",
  },
  {
    element: <NewsArticle />,
    path: "/new-articles/:blogId",
  },
  {
    element: <NewsArticle />,
    path: "/new-article/:blogId",
  },
];

const AppRoutes = () => (
  <Routes>
    {pageRoutes.map(({ element, path }) => (
      <Route key={path} element={element} path={path} />
    ))}
  </Routes>
);

export default AppRoutes;
