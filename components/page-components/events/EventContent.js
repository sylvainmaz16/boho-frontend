import React from 'react';
import Image from 'next/image';
export const EventContent = ({ EventTitle, eventImage, EventContent }) => {
  let eventImg = false;
  let defaultImg =
    'https://res.cloudinary.com/dkceblkn7/image/upload/v1640900847/boho%20vendor%20assets/Group_344_1_ja8y8l.svg';
  return (
    <div className='event_content'>
      <div style={{ position: 'relative' }}>
        <Image
          alt='event Image'
          layout='fill'
          objectFit='cover'
          src={eventImg ? eventImage : defaultImg}
        />
      </div>

      <h1>{EventTitle}</h1>
      <p>{EventContent}</p>
    </div>
  );
};
