import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { routePaths } from '../routePaths';

const PublicLayout: React.FC = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to={routePaths.home}>Home</Link>
          <Link to={routePaths.about}>About</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default PublicLayout;
