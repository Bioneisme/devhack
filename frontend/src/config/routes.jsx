import GreetingPage from "../pages/GreetingPage.jsx";
import AuthPage from "../pages/AuthPage.jsx";
import HomePage from "../pages/HomePage.jsx";
import MyApplicationsPage from "../pages/MyApplicationsPage.jsx";
import GetServicesPage from "../pages/GetServicesPage.jsx";
import ReportsPage from "../pages/ReportsPage.jsx";

export const privateRoutes = [
  { path: "/", component: <HomePage />, id: 1 },
  { path: "/myApplications", component: <MyApplicationsPage />, id: 2 },
  { path: "/getServices", component: <GetServicesPage />, id: 3 },
  { path: "/reports", component: <ReportsPage />, id: 4 },
];

export const publicRoutes = [
  { path: "/", component: <GreetingPage />, id: 1 },
  { path: "/userLogin", component: <AuthPage type="userLogin" />, id: 2 },
  { path: "/userRegister", component: <AuthPage type="userRegister" />, id: 3 },
  { path: "/adminLogin", component: <AuthPage type="adminLogin" />, id: 4 },
];
