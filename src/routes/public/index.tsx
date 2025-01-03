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

export const publicRoutes: AppRoute[] = [
  {
    path: '/',
    element: React.createElement(PublicLayout),
    children: [
      {
        index: true,
        element: React.createElement(Home),
        title: 'Home',
        breadcrumb: 'Home',
      },
      {
        path: 'about',
        element: React.createElement(About),
        title: 'About',
        breadcrumb: 'About',
      },
      {
        path: 'unauthorized',
        element: React.createElement(About),
        title: 'Unauthorized',
        breadcrumb: 'Unauthorized',
      },
    ],
  },
];
