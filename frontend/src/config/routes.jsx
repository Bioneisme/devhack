import GreetingPage from "../pages/GreetingPage.jsx";
import AuthPage from "../pages/AuthPage.jsx";
import HomePage from "../pages/HomePage.jsx";
import ApplicationsPage from "../pages/ApplicationsPage.jsx";

export const privateRoutes = [
  { path: "/", component: <HomePage />, id: 1 },
  { path: "/services", component: <ApplicationsPage />, id: 2 }
];

export const publicRoutes = [
  { path: "/", component: <GreetingPage />, id: 1 },
  { path: "/userLogin", component: <AuthPage type="userLogin" />, id: 2 },
  { path: "/userRegister", component: <AuthPage type="userRegister" />, id: 3 },
  { path: "/adminLogin", component: <AuthPage type="adminLogin" />, id: 4 },
];
