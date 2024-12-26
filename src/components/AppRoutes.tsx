import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// Lazy load components
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const UserDetails = lazy(() => import('../pages/UserDetails'));
const Settings = lazy(() => import('../pages/Settings'));
const NotFound = lazy(() => import('../pages/NotFound'));
const PublicLayout = lazy(() => import('../layouts/PublicLayout'));
const DashboardLayout = lazy(() => import('../layouts/DashboardLayout'));
const PrivateRoute = lazy(() => import('./PrivateRoute'));

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
      </Route>

      <Route element={<PrivateRoute isAuthenticated={true} />}>
        <Route path='dashboard' element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='settings' element={<Settings />} />
          <Route path='users/:userId' element={<UserDetails />} />
        </Route>
      </Route>

      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
