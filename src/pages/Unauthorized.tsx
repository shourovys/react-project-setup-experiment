import React from 'react';
import { Link } from 'react-router-dom';

const Unauthorized: React.FC = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='max-w-md w-full p-8 bg-white rounded-lg shadow-lg'>
        <h1 className='text-4xl font-bold text-red-600 mb-4'>
          Unauthorized Access
        </h1>
        <p className='text-gray-600 mb-6'>
          You do not have permission to access this page. Please contact your
          administrator if you believe this is an error.
        </p>
        <Link
          to='/'
          className='inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors'
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default Unauthorized;
