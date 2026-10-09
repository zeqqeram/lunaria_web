import { Navigate, Outlet } from 'react-router';

import { useAuth } from '../../context/useAuth.js';
function ProtectedRoute() {
    const { user, loading } = useAuth();

    if (loading) {
        return <p role="status">Comprobando sesión...</p>;
    }

    if (!user) {
        return <Navigate to="/acceso" replace />;
    }

    return <Outlet />;
}

export default ProtectedRoute;