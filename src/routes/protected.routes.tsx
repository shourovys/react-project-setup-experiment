import React, { lazy } from 'react';
import { routePaths } from './routePaths';
import type { AppRoute } from './routes';

const DashboardLayout = lazy(() => import('../layouts/DashboardLayout'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Settings = lazy(() => import('../pages/Settings'));
const UserDetails = lazy(() => import('../pages/UserDetails'));

export const protectedRoutes: AppRoute[] = [
  {
    path: routePaths.dashboard,
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
