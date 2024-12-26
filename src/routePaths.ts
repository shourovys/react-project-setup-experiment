export const routePaths = {
  home: '/',
  about: '/about',
  dashboard: '/dashboard',
  settings: '/dashboard/settings',
  userDetails: (userId: string) => `/dashboard/users/${userId}`,
} as const;
