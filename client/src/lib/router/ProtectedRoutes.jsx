import { Outlet, Navigate } from 'react-router-dom';
import { useUserStore } from '@/store/user.store';

const ProtectedRoutes = ({ needsAuth = false, role = [] }) => {
  const { user } = useUserStore((state) => state);

  const hasRole = role.includes(user?.role);
  if (needsAuth) return user && hasRole ? <Outlet /> : <Navigate to="/login" />;
  if (!needsAuth) return user ? <Navigate to="/" /> : <Outlet />;
};

export default ProtectedRoutes;
