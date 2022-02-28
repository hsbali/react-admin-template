import { lazy } from 'react';

// project imports
import DashLayout from '../layouts/DashLayout';
import Loadable from '../components/Loaders/Loadable';

const HomePage = Loadable(lazy(() => import('../pages/HomePage')));

const AuthRoutes = {
    path: 'dashboard',
    element: <DashLayout homeRoute="/dashboard" />,
    children: [
        {
            path: '',
            element: <HomePage />
        },
    ]
};

export default AuthRoutes;
