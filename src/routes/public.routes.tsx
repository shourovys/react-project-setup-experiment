import React, { lazy } from 'react';
import { routePaths } from './routePaths';
import type { AppRoute } from './routes';

const PublicLayout = lazy(() => import('../layouts/PublicLayout'));
const AuthLayout = lazy(() => import('../layouts/AuthLayout'));

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Unauthorized = lazy(() => import('../pages/Unauthorized'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));

export const publicRoutes: AppRoute[] = [
  {
    element: React.createElement(PublicLayout),
    isLayout: true,
    children: [
      {
        index: true,
        element: React.createElement(Home),
        title: 'Home',
        breadcrumb: 'Home',
      },
      {
        path: routePaths.about,
        element: React.createElement(About),
        title: 'About',
        breadcrumb: 'About',
      },
      {
        path: routePaths.unauthorized,
        element: React.createElement(Unauthorized),
        title: 'Unauthorized',
        breadcrumb: 'Unauthorized',
      },
    ],
  },
  {
    element: React.createElement(AuthLayout),
    isLayout: true,
    children: [
      {
        path: routePaths.login,
        element: React.createElement(Login),
        title: 'Login',
        breadcrumb: 'Login',
      },
      {
        path: routePaths.register,
        element: React.createElement(Register),
        title: 'Register',
        breadcrumb: 'Register',
      },
    ],
  },
];
