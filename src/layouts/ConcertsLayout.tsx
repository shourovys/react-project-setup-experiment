import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const ConcertsLayout: React.FC = () => {
  const location = useLocation();

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold mb-4'>Concerts</h1>
        <nav className='space-x-4'>
          <Link
            to='/concerts'
            className={`${
              location.pathname === '/concerts'
                ? 'text-blue-600 font-bold'
                : 'text-gray-600'
            } hover:text-blue-500`}
          >
            All Concerts
          </Link>
          <Link
            to='/concerts/trending'
            className={`${
              location.pathname === '/concerts/trending'
                ? 'text-blue-600 font-bold'
                : 'text-gray-600'
            } hover:text-blue-500`}
          >
            Trending
          </Link>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default ConcertsLayout;
