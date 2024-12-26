import React from 'react';

const About: React.FC = () => {
  return (
    <div className='bg-white overflow-hidden shadow rounded-lg'>
      <div className='px-4 py-5 sm:p-6'>
        <h1 className='text-3xl font-bold text-gray-900 mb-4'>About Us</h1>
        <div className='space-y-4'>
          <p className='text-gray-600 text-lg'>
            Learn more about our company and mission. We are dedicated to
            providing the best solutions for our customers.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
            <div className='bg-gray-50 p-4 rounded-lg'>
              <h3 className='text-lg font-medium text-gray-900'>Our Mission</h3>
              <p className='mt-2 text-gray-600'>
                To deliver innovative solutions that empower businesses and
                individuals.
              </p>
            </div>
            <div className='bg-gray-50 p-4 rounded-lg'>
              <h3 className='text-lg font-medium text-gray-900'>Our Vision</h3>
              <p className='mt-2 text-gray-600'>
                To be the leading provider of cutting-edge technology solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
