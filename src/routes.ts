import React, { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

// Define route types
export type AppRoute = RouteObject & {
  name?: string;
  children?: AppRoute[];
};

// Lazy load components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const UserDetails = lazy(() => import('./pages/UserDetails'));
const Settings = lazy(() => import('./pages/Settings'));
const NotFound = lazy(() => import('./pages/NotFound'));
const PublicLayout = lazy(() => import('./layouts/PublicLayout'));
const DashboardLayout = lazy(() => import('./layouts/DashboardLayout'));
const PrivateRoute = lazy(() => import('./components/PrivateRoute'));

// Type-safe route configuration
export const routes: AppRoute[] = [
  {
    path: '/',
    element: React.createElement(PublicLayout),
    name: 'Public Layout',
    children: [
      { index: true, element: React.createElement(Home), name: 'Home' },
      { path: 'about', element: React.createElement(About), name: 'About' },
    ],
  },
  {
    element: React.createElement(PrivateRoute, { isAuthenticated: true }),
    children: [
      {
        path: 'dashboard',
        element: React.createElement(DashboardLayout),
        name: 'Dashboard Layout',
        children: [
          {
            index: true,
            element: React.createElement(Dashboard),
            name: 'Dashboard',
          },
          {
            path: 'settings',
            element: React.createElement(Settings),
            name: 'Settings',
          },
          {
            path: 'users/:userId',
            element: React.createElement(UserDetails),
            name: 'User Details',
          },
        ],
      },
    ],
  },
  { path: '*', element: React.createElement(NotFound), name: 'Not Found' },
];
