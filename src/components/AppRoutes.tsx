import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoute, routeConfig, UserRole } from '../routes/config';
import RoleBasedRoute from './RoleBasedRoute';

// Mock authentication state - replace with your actual auth logic
const isAuthenticated = true;
const userRoles: UserRole[] = ['user'];

const AppRoutes: React.FC = () => {
  const renderRoutes = (routes: AppRoute[]) => {
    return routes.map((route) => {
      if (route.auth) {
        return (
          <Route
            path={route.path}
            element={
              <RoleBasedRoute
                isAuthenticated={isAuthenticated}
                userRoles={userRoles}
                allowedRoles={route.roles || []}
              >
                <Suspense fallback={<div>Loading...</div>}>
                  {route.element}
                </Suspense>
              </RoleBasedRoute>
            }
          >
            {route.children && renderRoutes(route.children)}
          </Route>
        );
      }

      if (route.index) {
        return (
          <Route
            index
            element={
              <Suspense fallback={<div>Loading...</div>}>
                {route.element}
              </Suspense>
            }
          />
        );
      }

      return (
        <Route
          path={route.path}
          element={
            <Suspense fallback={<div>Loading...</div>}>
              {route.element}
            </Suspense>
          }
        >
          {route.children && renderRoutes(route.children)}
        </Route>
      );
    });
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>{renderRoutes(routeConfig)}</Routes>
    </Suspense>
  );
};

export default AppRoutes;
