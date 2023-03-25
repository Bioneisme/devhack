import GreetingPage from "../pages/GreetingPage.jsx";
import AuthPage from "../pages/AuthPage.jsx";
import HomePage from "../pages/HomePage.jsx";
import AllApplicationsPage from "../pages/AllApplicationsPage.jsx";

export const privateRoutes = [
  { path: "/", component: <HomePage />, id: 1 },
  { path: "/services", component: <AllApplicationsPage />, id: 2 }
];

export const publicRoutes = [
  { path: "/", component: <GreetingPage />, id: 1 },
  { path: "/userLogin", component: <AuthPage type="userLogin" />, id: 2 },
  { path: "/userRegister", component: <AuthPage type="userRegister" />, id: 3 },
  { path: "/adminLogin", component: <AuthPage type="adminLogin" />, id: 4 },
];
