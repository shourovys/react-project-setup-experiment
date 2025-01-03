import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { routeConfig } from '../config';

const findRouteTitle = (pathname: string): string => {
  const findTitle = (routes: typeof routeConfig): string => {
    for (const route of routes) {
      if (route.path === pathname) {
        return route.title || '';
      }
      if (route.children) {
        const childTitle = findTitle(route.children);
        if (childTitle) return childTitle;
      }
    }
    return '';
  };

  return findTitle(routeConfig);
};

export const useRouteTitle = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const title = findRouteTitle(pathname);
    if (title) {
      document.title = `${title} | Your App Name`;
    }
  }, [pathname]);
};
