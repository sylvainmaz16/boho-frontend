import React from 'react';
import Image from 'next/image';
export const EventContent = () => {
  return (
    <div className='empty_event'>
      <div style={{ position: 'relative' }}>
        <Image
          src={
            'https://res.cloudinary.com/dkceblkn7/image/upload/v1640900847/boho%20vendor%20assets/Group_344_1_ja8y8l.svg'
          }
          layout='fill'
          objectFit='fill'
        />
      </div>
      <h1>No Events Yet? Explore Events</h1>
      <p>
        You don't have events history, because you didn’t apply for any events
        yet. Explore our upcoming events to connect with our family and sell
        your products
      </p>
    </div>
  );
};
