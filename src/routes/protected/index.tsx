import React, { lazy } from 'react';

const PublicLayout = lazy(() => import('../layouts/PublicLayout'));
const DashboardLayout = lazy(() => import('../layouts/DashboardLayout'));
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Settings = lazy(() => import('../pages/Settings'));
const UserDetails = lazy(() => import('../pages/UserDetails'));
const NotFound = lazy(() => import('../pages/NotFound'));
// const Unauthorized = lazy(() => import('../pages/Unauthorized'));

export const protectedRoutes: AppRoute[] = [
  {
    path: '/dashboard',
    element: React.createElement(DashboardLayout),
    auth: true,
    children: [
      {
        index: true,
        element: React.createElement(Dashboard),
        title: 'Dashboard',
        breadcrumb: 'Dashboard',
        roles: ['admin', 'user', 'manager'],
        auth: true,
      },
      {
        path: 'settings',
        element: React.createElement(Settings),
        title: 'Settings',
        breadcrumb: 'Settings',
        roles: ['admin', 'manager'],
        auth: true,
      },
      {
        path: 'users/:userId',
        element: React.createElement(UserDetails),
        title: 'User Details',
        breadcrumb: 'User Details',
        roles: ['admin'],
        auth: true,
      },
    ],
  },
];
