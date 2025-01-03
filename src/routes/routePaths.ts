export const routePaths = {
  // Public routes
  home: '/',
  about: '/about',
  unauthorized: '/unauthorized',

  // Protected routes
  dashboard: '/dashboard',
  settings: '/settings',
  userDetails: (userId: string) => `/users/${userId}`,

  // Catch-all
  notFound: '*',
} as const;
