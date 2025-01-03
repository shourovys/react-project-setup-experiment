import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import ErrorBoundary from './ErrorBoundary';
import RoleBasedRoute from './RoleBasedRoute';
import { AppRoute, routeConfig } from './routes';

const LoadingFallback = () => (
  <div className='flex items-center justify-center h-screen'>
    <div className='animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary'></div>
  </div>
);

const AppRoutes: React.FC = () => {
  const { isAuthenticated, userRoles } = useAuth();

  const renderRoutes = (routes: AppRoute[]) => {
    return routes.map((route) => {
      const wrappedElement = (
        <Suspense fallback={<LoadingFallback />}>
          {route.auth ? (
            <RoleBasedRoute
              isAuthenticated={isAuthenticated}
              userRoles={userRoles}
              allowedRoles={route.roles || []}
            >
              {route.element}
            </RoleBasedRoute>
          ) : (
            route.element
          )}
        </Suspense>
      );

      if (route.index) {
        return <Route key='index' index element={wrappedElement} />;
      }

      return (
        <Route key={route.path} path={route.path} element={wrappedElement}>
          {route.children && renderRoutes(route.children)}
        </Route>
      );
    });
  };

  return (
    <ErrorBoundary>
      <Routes>{renderRoutes(routeConfig)}</Routes>
    </ErrorBoundary>
  );
};

export default AppRoutes;
