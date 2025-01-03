import React from 'react';
import { useParams } from 'react-router-dom';

const City: React.FC = () => {
  const { city } = useParams<{ city: string }>();
  const formattedCity = city
    ?.split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div>
      <h2 className='text-2xl font-bold mb-6'>Concerts in {formattedCity}</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {/* This would typically be populated with real concert data */}
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className='bg-white rounded-lg shadow-md p-6'>
            <h3 className='text-xl font-semibold mb-2'>Sample Concert {i}</h3>
            <p className='text-gray-600 mb-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className='flex justify-between items-center'>
              <span className='text-blue-600 font-medium'>$49.99</span>
              <button className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'>
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default City;
