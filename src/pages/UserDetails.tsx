import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetails: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();

  return (
    <div className='bg-white overflow-hidden shadow rounded-lg'>
      <div className='px-4 py-5 sm:p-6'>
        <h1 className='text-3xl font-bold text-gray-900 mb-6'>User Details</h1>
        <p className='text-gray-600 text-lg mb-8'>
          Viewing details for user ID: {userId}
        </p>

        <div className='mt-6'>
          <h2 className='text-xl font-semibold text-gray-900 mb-4'>
            User Information
          </h2>
          <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 rounded-lg'>
            <div className='text-sm font-medium text-gray-500'>User ID</div>
            <div className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
              {userId}
            </div>
          </div>
          <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <div className='text-sm font-medium text-gray-500'>Name</div>
            <div className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
              John Doe
            </div>
          </div>
          <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 rounded-lg'>
            <div className='text-sm font-medium text-gray-500'>Email</div>
            <div className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
              john@example.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
