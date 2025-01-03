import React from 'react';
import { Link } from 'react-router-dom';

const ConcertsHome: React.FC = () => {
  const cities = ['New York', 'Los Angeles', 'Chicago', 'Miami', 'Austin'];

  return (
    <div>
      <h2 className='text-2xl font-bold mb-6'>Popular Concert Cities</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {cities.map((city) => (
          <Link
            key={city}
            to={`/concerts/${city.toLowerCase().replace(' ', '-')}`}
            className='block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow'
          >
            <h3 className='text-xl font-semibold mb-2'>{city}</h3>
            <p className='text-gray-600'>Discover concerts in {city}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ConcertsHome;
