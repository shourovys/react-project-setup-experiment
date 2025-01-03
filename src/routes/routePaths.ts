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
  settings: '/settings',
  userDetails: (userId: string) => `/users/${userId}`,

  // Catch-all
  notFound: '*',
} as const;
