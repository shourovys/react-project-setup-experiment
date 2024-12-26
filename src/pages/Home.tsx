import React from 'react';

const Home: React.FC = () => {
  return (
    <div className='bg-white overflow-hidden shadow rounded-lg'>
      <div className='px-4 py-5 sm:p-6'>
        <h1 className='text-3xl font-bold text-gray-900 mb-4'>
          Welcome to the Home Page
        </h1>
        <p className='text-gray-600 text-lg'>
          This is the public home page of our application. We provide modern
          solutions for modern problems.
        </p>
        <div className='mt-8'>
          <button className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
