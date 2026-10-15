import { createBrowserRouter } from 'react-router';

import Landing from '../pages/Landing/Landing.jsx';
import MapPage from '../pages/Map/MapPage.jsx';
import CameraPage from '../pages/Camera/CameraPage.jsx';
import SeedsPage from '../pages/Seeds/SeedsPage.jsx';
import AuthPage from '../pages/Auth/AuthPage.jsx';
import ProfilePage from '../pages/Profile/ProfilePage.jsx';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Landing />,
    },
    {
        path: '/map',
        element: <MapPage />,
    },
    {
        path: '/map/camera',
        element: <CameraPage />,
    },
    {
        path: '/seeds',
        element: <SeedsPage />,
    },
    {
        path: '/acceso',
        element: <AuthPage />,
    },
    {
        element: <ProtectedRoute />,
        children: [
            {
                path: '/perfil',
                element: <ProfilePage />,
            },
        ],
    },
]);

export default router;