import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import ProfilePage from './pages/ProfilePage';
import SearchPage from './pages/SearchPage';
import PostPage from './pages/PostPage';
import ProtectedRoutes from './lib/router/ProtectedRoutes';
import ProfileCard from './components/ProfileCard';
import FavoritesList from './components/FavoritesList';
import AdminPostPage from './pages/AdminPostPage';
import { VALID_ROLES } from './constants';

const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<HomePage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="login" element={<AuthPage />} />
        <Route path="register" element={<AuthPage />} />
      </Route>
      <Route element={<ProtectedRoutes needsAuth role={Object.values(VALID_ROLES)} />}>
        <Route path="profile" element={<ProfilePage />}>
          <Route path="" element={<ProfileCard />} />
          <Route path="favorites" element={<FavoritesList />} />
        </Route>
      </Route>
      <Route element={<ProtectedRoutes needsAuth role={[VALID_ROLES.admin, VALID_ROLES.superUser]} />}>
        <Route path="admin" >
            <Route path="posts" index element={<AdminPostPage />} />
        </Route>
      </Route>
      <Route path="search" element={<SearchPage />} />
      <Route path="posts/:id" element={<PostPage />} />
    </Routes>
  );
};

export default Router;
