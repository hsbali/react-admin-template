import { lazy } from 'react';

// project imports
import AuthLayout from '../layouts/AuthLayout';
import Loadable from './../components/Loaders/Loadable';

const HomePage = Loadable(lazy(() => import('../pages/HomePage')));

const AuthRoutes = {
    path: '',
    element: <AuthLayout />,
    children: [
        {
            path: '',
            element: <HomePage />
        },
    ]
};

export default AuthRoutes;
