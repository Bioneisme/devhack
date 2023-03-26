import { MainPage } from '../pages/MainPage';
import { LoginPage } from '../pages/LoginPage';
import { BotPage } from "../pages/BotPage";
import { UsersPage } from "../pages/UsersPage";
import { ReferralsPage } from "../pages/ReferralsPage";

export const privateRoutes = [
    {path: '/dev', component: <MainPage />, id: 1},
    {path: '/dev/bot', component: <BotPage />, id: 2},
    {path: '/dev/users', component: <UsersPage />, id: 3},
    {path: '/dev/referrals', component: <ReferralsPage />, id: 4},

];

export const publicRoutes = [
    {path: '/login', component: <LoginPage />, id: 1}
];
