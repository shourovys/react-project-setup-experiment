import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { routePaths } from '../routePaths';

const PublicLayout: React.FC = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <header className='bg-white shadow-sm'>
        <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between h-16 items-center'>
            <div className='flex space-x-8'>
              <Link
                to={routePaths.home}
                className='text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium'
              >
                Home
              </Link>
              <Link
                to={routePaths.about}
                className='text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium'
              >
                About
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
        <div className='px-4 py-6 sm:px-0'>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default PublicLayout;
