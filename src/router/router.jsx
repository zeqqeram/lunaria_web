import { createBrowserRouter } from 'react-router';
import Landing from '../pages/Landing/Landing.jsx';
import MapPage from '../pages/Map/MapPage.jsx' ;
import SeedsPage from '../pages/Seeds/SeedsPage.jsx' ;


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
        path: '/seeds',
        element: <SeedsPage />,
    },
]);

export default router;