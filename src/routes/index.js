import { useRoutes } from 'react-router-dom';

// routes
import DefaultRoutes from './DefaultRoutes'
import DashRoutes from './DashRoutes'

export default function ThemeRoutes() {
    return useRoutes([DefaultRoutes, DashRoutes], '');
}
