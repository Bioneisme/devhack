import {LoginPage} from '../pages/LoginPage';
import {ReferralsPage} from "../pages/ReferralsPage";

export const privateRoutes = [
    {path: '/dev', component: <ReferralsPage />, id: 1},

];

export const publicRoutes = [
    {path: '/login', component: <LoginPage />, id: 1}
];
