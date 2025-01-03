import React, { Suspense } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import { routeConfig } from './config';

// Loading Component
const LoadingFallback = () => (
  <div className='min-h-screen flex items-center justify-center bg-gray-50'>
    <div className='text-center'>
      <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto' />
      <p className='mt-4 text-gray-600'>Loading...</p>
    </div>
  </div>
);

// Error Boundary Component
const ErrorBoundary: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [hasError, setHasError] = React.useState(false);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      setHasError(true);
      setError(error.error);
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-red-50'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold text-red-600 mb-4'>
            Oops! Something went wrong.
          </h1>
          <p className='text-gray-600 mb-4'>
            {error?.message || 'An unexpected error occurred.'}
          </p>
          <button
            onClick={() => window.location.reload()}
            className='px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700'
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

function AppRouter() {
  const routing = useRoutes(routeConfig as RouteObject[]);

  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingFallback />}>{routing}</Suspense>
    </ErrorBoundary>
  );
}

export default AppRouter;
