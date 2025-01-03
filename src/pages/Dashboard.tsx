import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import { routePaths } from '../routes/routePaths';

const Dashboard: React.FC = () => {
  return (
    <PageLayout>
      <div className='space-y-6'>
        <div className='bg-white overflow-hidden shadow rounded-lg'>
          <div className='px-4 py-5 sm:p-6'>
            <h1 className='text-3xl font-bold text-gray-900 mb-4'>Dashboard</h1>
            <p className='text-gray-600 text-lg'>
              Welcome to your personalized dashboard!
            </p>
          </div>
        </div>

        <div className='bg-white overflow-hidden shadow rounded-lg'>
          <div className='px-4 py-5 sm:p-6'>
            <h2 className='text-xl font-semibold text-gray-900 mb-4'>
              Quick Links
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <Link
                to={routePaths.settings}
                className='inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50'
              >
                Go to Settings
              </Link>
              <Link
                to={routePaths.userDetails('123')}
                className='inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50'
              >
                View User Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Dashboard;
