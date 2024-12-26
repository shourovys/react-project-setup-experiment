import React from 'react';

const Settings: React.FC = () => {
  return (
    <div className='bg-white overflow-hidden shadow rounded-lg'>
      <div className='px-4 py-5 sm:p-6'>
        <h1 className='text-3xl font-bold text-gray-900 mb-6'>Settings</h1>
        <p className='text-gray-600 text-lg mb-8'>
          Manage your account settings and preferences here.
        </p>

        <form className='space-y-6'>
          <div className='flex items-center justify-between'>
            <label htmlFor='email' className='flex items-center'>
              <span className='text-sm font-medium text-gray-700'>
                Email Notifications
              </span>
            </label>
            <div className='ml-4'>
              <input
                type='checkbox'
                id='email'
                name='email'
                className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
              />
            </div>
          </div>

          <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start'>
            <label
              htmlFor='theme'
              className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2'
            >
              Theme
            </label>
            <div className='mt-1 sm:mt-0 sm:col-span-2'>
              <select
                id='theme'
                name='theme'
                className='max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md'
              >
                <option value='light'>Light</option>
                <option value='dark'>Dark</option>
              </select>
            </div>
          </div>

          <div className='pt-5'>
            <div className='flex justify-end'>
              <button
                type='submit'
                className='ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
