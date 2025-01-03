import React, { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';
import { protectedRoutes } from './protected.routes';
import { publicRoutes } from './public.routes';

const NotFound = lazy(() => import('../pages/NotFound'));

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
