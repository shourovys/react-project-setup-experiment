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

  const renderRouteElement = (route: AppRoute) => {
    const element = route.auth ? (
      <RoleBasedRoute
        isAuthenticated={isAuthenticated}
        userRoles={userRoles}
        allowedRoles={route.roles || []}
      >
        {route.element}
      </RoleBasedRoute>
    ) : (
      route.element
    );

    return <Suspense fallback={<LoadingFallback />}>{element}</Suspense>;
  };

  const renderRoutes = (routes: AppRoute[]) => {
    return routes.map((route) => {
      // For layout routes, we want to render the layout element with its children
      if (route.isLayout) {
        return (
          <Route key={'layout'} element={renderRouteElement(route)}>
            {route.children && renderRoutes(route.children)}
          </Route>
        );
      }

      // For index routes
      if (route.index) {
        return <Route key='index' index element={renderRouteElement(route)} />;
      }

      // For regular routes
      return (
        <Route
          key={route.path}
          path={route.path}
          element={renderRouteElement(route)}
        >
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
