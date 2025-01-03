import React from 'react';

const Trending: React.FC = () => {
  const trendingConcerts = [
    {
      id: 1,
      title: 'Summer Music Festival',
      artist: 'Various Artists',
      location: 'Central Park, New York',
      date: 'July 15, 2024',
      price: '79.99',
    },
    {
      id: 2,
      title: 'Rock Revolution',
      artist: 'The Rockers',
      location: 'Madison Square Garden',
      date: 'August 2, 2024',
      price: '89.99',
    },
    {
      id: 3,
      title: 'Jazz Night',
      artist: 'Jazz Ensemble',
      location: 'Blue Note, Chicago',
      date: 'June 30, 2024',
      price: '59.99',
    },
  ];

  return (
    <div>
      <h2 className='text-2xl font-bold mb-6'>Trending Concerts</h2>
      <div className='space-y-6'>
        {trendingConcerts.map((concert) => (
          <div
            key={concert.id}
            className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow'
          >
            <div className='flex justify-between items-start'>
              <div>
                <h3 className='text-xl font-semibold mb-2'>{concert.title}</h3>
                <p className='text-gray-600 mb-1'>Artist: {concert.artist}</p>
                <p className='text-gray-600 mb-1'>
                  Location: {concert.location}
                </p>
                <p className='text-gray-600'>Date: {concert.date}</p>
              </div>
              <div className='text-right'>
                <p className='text-blue-600 font-bold text-xl mb-2'>
                  ${concert.price}
                </p>
                <button className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'>
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
