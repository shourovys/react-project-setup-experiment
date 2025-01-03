import React, { lazy } from 'react';
import { routePaths } from './routePaths';
import type { AppRoute } from './routes';

const PublicLayout = lazy(() => import('../layouts/PublicLayout'));
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Unauthorized = lazy(() => import('../pages/Unauthorized'));

export const publicRoutes: AppRoute[] = [
  {
    path: routePaths.home,
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
        element: React.createElement(Unauthorized),
        title: 'Unauthorized',
        breadcrumb: 'Unauthorized',
      },
    ],
  },
];
