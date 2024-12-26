import React, { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';

const AppRoutes = lazy(() => import('./components/AppRoutes'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
