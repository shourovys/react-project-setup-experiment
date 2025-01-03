import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { routeConfig } from '../config';

interface Breadcrumb {
  path: string;
  label: string;
}

const findBreadcrumbs = (pathname: string): Breadcrumb[] => {
  const breadcrumbs: Breadcrumb[] = [];

  // Add home breadcrumb if not on home page
  if (pathname !== '/') {
    breadcrumbs.push({ path: '/', label: 'Home' });
  }

  // Split the pathname into segments
  const segments = pathname.split('/').filter(Boolean);
  let currentPath = '';

  const findRouteLabel = (path: string): string | undefined => {
    const findInRoutes = (routes: typeof routeConfig): string | undefined => {
      for (const route of routes) {
        // Check if this is the matching route
        if (
          route.path === path ||
          (route.path === undefined && route.children)
        ) {
          if (route.breadcrumb) return route.breadcrumb;

          // For index routes
          if (route.index && route.title) return route.title;
        }

        // Check children routes
        if (route.children) {
          const childLabel = findInRoutes(route.children);
          if (childLabel) return childLabel;
        }
      }
      return undefined;
    };

    return findInRoutes(routeConfig);
  };

  // Build breadcrumbs for each segment
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;

    // Handle dynamic segments (e.g., :userId)
    const isDynamicSegment = segment.match(/^\d+$/);
    const pathToMatch = isDynamicSegment
      ? currentPath.replace(segment, ':userId')
      : currentPath;

    const label = findRouteLabel(pathToMatch);
    if (label) {
      breadcrumbs.push({
        path: currentPath,
        label: isDynamicSegment ? `User ${segment}` : label,
      });
    }
  });

  return breadcrumbs;
};

export const useBreadcrumbs = () => {
  const { pathname } = useLocation();
  return useMemo(() => findBreadcrumbs(pathname), [pathname]);
};
