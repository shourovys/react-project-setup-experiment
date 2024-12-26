import React, { Suspense } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { routes } from './routes';

function AppRouter() {
  const routing = useRoutes(routes);
  return routing;
}

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>App Loading...</div>}>
        <AppRouter />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
