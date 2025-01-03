import React from 'react';
import { Navigate } from 'react-router-dom';
import type { UserRole } from '../routes/config';

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
  const hasRequiredRole = userRoles.some((role) => allowedRoles.includes(role));

  if (!isAuthenticated) {
    return <Navigate to='/' replace />;
  }

  if (!hasRequiredRole) {
    return <Navigate to='/unauthorized' replace />;
  }

  return <>{children}</>;
};

export default RoleBasedRoute;
