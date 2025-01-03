import React, { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';
import { protectedRoutes } from './protected';
import { publicRoutes } from './public';

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
