import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { routePaths } from '../routePaths';

const DashboardLayout: React.FC = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to={routePaths.dashboard}>Dashboard</Link>
          <Link to={routePaths.settings}>Settings</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
