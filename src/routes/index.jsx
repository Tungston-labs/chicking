import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute.jsx";
import PublicOnlyRoute from "../components/PublicOnlyRoute.jsx";

const AboutUs = lazy(() => import("../pages/AboutUs/index.jsx"));
const BlogSections = lazy(() => import("../pages/Blog/BlogSection.jsx"));
const NewsArticle = lazy(() => import("../pages/Blog/NewsArticle/NewsArticle.jsx"));
const BMI = lazy(() => import("../pages/BMI/index.jsx"));
const FranchiseForm = lazy(() => import("../pages/Franchise/index.jsx"));
const GlobalPresence = lazy(() => import("../pages/GlobalPresence/index.jsx"));
const Home = lazy(() => import("../pages/Home/index.js").then((module) => ({ default: module.Home })));
const BlogDashboard = lazy(() => import("../pages/AdminBlog/BlogDashboard.jsx"));
const CreateBlogPost = lazy(() => import("../pages/AdminBlog/CreateBlogPost.jsx"));
const EditBlogPost = lazy(() => import("../pages/AdminBlog/EditBlogPost.jsx"));
const ViewBlogPost = lazy(() => import("../pages/AdminBlog/ViewBlogPost.jsx"));
const FaqSection = lazy(() => import("../pages/FAQ/index.jsx"));
const ForgotPassword = lazy(() => import("../pages/Login/ForgotPassword.jsx"));
const Login = lazy(() => import("../pages/Login/index.jsx"));
const SetPassword = lazy(() => import("../pages/Login/SetPassword.jsx"));
const VerifyCode = lazy(() => import("../pages/Login/VerifyCode.jsx"));
const LeadershipSection = lazy(() => import("../pages/Management/index.jsx"));
const Propositions = lazy(() => import("../pages/Proposition/index.jsx"));
const Ukpackage = lazy(() => import("../pages/Proposition/UkPackage/Ukpackage.jsx"));
const Uspackage = lazy(() => import("../pages/Proposition/UsPackage/Uspackage.jsx"));

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

const RouteFallback = () => (
  <div
    style={{
      alignItems: "center",
      color: "#891b1c",
      display: "flex",
      fontSize: "0.95rem",
      fontWeight: 600,
      justifyContent: "center",
      minHeight: "40vh",
      padding: "2rem 1rem",
    }}
  >
    Loading page...
  </div>
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
    path: "/admin/blogs",
  },
  {
    element: withProtectedRoute(CreateBlogPost),
    path: "/admin/blogs/new",
  },
  {
    element: withProtectedRoute(EditBlogPost),
    path: "/admin/blogs/:blogId/edit",
  },
  {
    element: withProtectedRoute(ViewBlogPost),
    path: "/admin/blogs/:blogId",
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
];

const AppRoutes = () => (
  <Suspense fallback={<RouteFallback />}>
    <Routes>
      {pageRoutes.map(({ element, path }) => (
        <Route key={path} element={element} path={path} />
      ))}
    </Routes>
  </Suspense>
);

export default AppRoutes;
