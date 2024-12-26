import React from 'react';
import { Link } from 'react-router-dom';
import { routePaths } from '../routePaths';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
      <div>
        <h2>Quick Links</h2>
        <ul>
          <li>
            <Link to={routePaths.settings}>Go to Settings</Link>
          </li>
          <li>
            <Link to={routePaths.userDetails('123')}>View User Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
