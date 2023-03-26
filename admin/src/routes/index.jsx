import { LoginPage } from '../pages/LoginPage';
import { ReferralsPage } from "../pages/ReferralsPage";
import { StatisticsPage } from "../pages/StatisticsPage/index.js";

export const privateRoutes = [
  { path: '/dev', component: <ReferralsPage />, id: 1 },
  { path: '/dev/statistics', component: <StatisticsPage />, id: 1 },
];

export const publicRoutes = [
  { path: '/login', component: <LoginPage />, id: 1 }
];
