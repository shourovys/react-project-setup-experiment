import React, { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

const PublicLayout = lazy(() => import('../layouts/PublicLayout'));
const DashboardLayout = lazy(() => import('../layouts/DashboardLayout'));
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Settings = lazy(() => import('../pages/Settings'));
const UserDetails = lazy(() => import('../pages/UserDetails'));
const NotFound = lazy(() => import('../pages/NotFound'));
// const Unauthorized = lazy(() => import('../pages/Unauthorized'));

export type UserRole = 'admin' | 'user' | 'manager';

export interface AppRoute extends Omit<RouteObject, 'children'> {
  title?: string;
  breadcrumb?: string;
  auth?: boolean;
  roles?: UserRole[];
  children?: AppRoute[];
}

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

export const routeConfig: AppRoute[] = [
  ...publicRoutes,
  ...protectedRoutes,
  {
    path: '*',
    element: React.createElement(NotFound),
    title: 'Not Found',
    breadcrumb: 'Not Found',
  },
];
