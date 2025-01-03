export const routePaths = {
  // Public routes
  home: '/',
  about: '/about',
  unauthorized: '/unauthorized',
  login: '/login',
  register: '/register',

  // Concert routes
  concerts: '/concerts',
  concertsHome: '/concerts',
  trending: '/concerts/trending',
  city: '/concerts/city/:cityId',

  // Protected routes
  dashboard: '/dashboard',
  settings: '/dashboard/settings',
  userDetails: (userId: string) => `/dashboard/users/${userId}`,

  // Catch-all
  notFound: '*',
} as const;
