import { useRoutes } from 'react-router-dom';

// routes
import AuthRoutes from './AuthRoutes'

export default function ThemeRoutes() {
    return useRoutes([AuthRoutes], '');
}
