import { lazy } from 'react';

// project imports
import DefaultLayout from '../layouts/DefaultLayout';
import Loadable from '../components/Loaders/Loadable';

const HomePage = Loadable(lazy(() => import('../pages/HomePage')));

const AuthRoutes = {
    path: '',
    element: <DefaultLayout homeRoute={"/"} />,
    children: [
        {
            path: '',
            element: <HomePage />
        },
    ]
};

export default AuthRoutes;
