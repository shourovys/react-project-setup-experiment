import React from 'react';
import { Navigate } from 'react-router-dom';
import type { UserRole } from './routes';

interface RoleBasedRouteProps {
  isAuthenticated: boolean;
  userRoles: UserRole[];
  allowedRoles: UserRole[];
  children: React.ReactNode;
}

const RoleBasedRoute: React.FC<RoleBasedRouteProps> = ({
  isAuthenticated,
  userRoles,
  allowedRoles,
  children,
}) => {
  if (!isAuthenticated) {
    return <Navigate to='/unauthorized' replace />;
  }

  // If no roles are specified, allow access to authenticated users
  if (allowedRoles.length === 0) {
    return <>{children}</>;
  }

  // Check if user has any of the required roles
  const hasRequiredRole = userRoles.some((role) => allowedRoles.includes(role));

  if (!hasRequiredRole) {
    return <Navigate to='/unauthorized' replace />;
  }

  return <>{children}</>;
};

export default RoleBasedRoute;
