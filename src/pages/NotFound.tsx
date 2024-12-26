import React from 'react';
import { Link } from 'react-router-dom';
import { routePaths } from '../routePaths';

const NotFound: React.FC = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to={routePaths.home}>Return to Home</Link>
    </div>
  );
};

export default NotFound;
