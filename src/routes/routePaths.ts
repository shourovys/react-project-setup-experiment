export const routePaths = {
  // Public routes
  home: '/',
  about: '/about',
  unauthorized: '/unauthorized',

  // Protected routes
  dashboard: '/dashboard',
  settings: '/dashboard/settings',
  userDetails: (userId: string) => `/dashboard/users/${userId}`,

  // Catch-all
  notFound: '*',
} as const;
