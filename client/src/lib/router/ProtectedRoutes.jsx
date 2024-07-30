import { Outlet, Navigate } from 'react-router-dom';
import { useUserStore } from '@/store/user';

const ProtectedRoutes = ({ needsAuth = false }) => {
  const { user } = useUserStore((state) => state);

  if (needsAuth) return user ? <Outlet /> : <Navigate to="/login" />;
  if (!needsAuth) return user ? <Navigate to="/" /> : <Outlet />;
};

export default ProtectedRoutes;
