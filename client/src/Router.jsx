import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import ProfilePage from './pages/ProfilePage';
import SearchPage from './pages/SearchPage';
import PostPage from './pages/PostPage';
import ProtectedRoutes from './lib/router/ProtectedRoutes';

const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<HomePage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="login" element={<AuthPage />} />
        <Route path="register" element={<AuthPage />} />
      </Route>
      <Route element={<ProtectedRoutes needsAuth />}>
        <Route path="profile" element={<ProfilePage />}>
          <Route path="" element={<PostPage />} />
          <Route path="favorites" element={<PostPage />} />
          {/* <Route path="/reservations" element={<ProfilePage />} /> */}
        </Route>
      </Route>
      <Route path="search" element={<SearchPage />} />
      <Route path="posts/:id" element={<PostPage />} />
    </Routes>
  );
};

export default Router;
