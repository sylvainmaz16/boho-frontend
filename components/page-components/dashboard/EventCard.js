import React from 'react';
import {
  ClockIcon,
  CalenderIcon,
  LocationIcon,
  EventDetailsButton,
} from './icons';

export const EventCard = ({
  eventImage,
  eventTitle,
  eventLocation,
  eventDates,
  eventLength,
  eventDetails,
}) => {
  return (
    <div
      className='event_card font-xl-bold'
      //cams-??
      // I've been adding style attribute to some stuff, it doesn't have priority over class names.
      //I also use the var(--key-word) to use the root: {} styles I defined in globals.
      style={{ color: 'var(--gray-400)' }}>
      <div className='event_card_img'>
        <img src={eventImage} height='200px' width='200px' />
      </div>
      {console.log(eventTitle.split('', 23).join(''))}
      <div className='event_card_content'>
        {/* figured it my be a good Idea to add a fail safe to title so it doesn't trail off. cams-?? */}
        <h4>{eventTitle.split('', 32).join('')}</h4>
        <div>
          <LocationIcon size='sm' color='#BC7F7C' />
          <div className='font-xl-bold'>{eventLocation}</div>
        </div>
        <div>
          <CalenderIcon size='sm' color='#BC7F7C' />
          <div>{eventDates}</div>
        </div>
        <div>
          <ClockIcon size='sm' color='#BC7F7C' />
          <div>{eventLength}</div>
        </div>
      </div>
      <EventDetailsButton url='/dashboard' />
    </div>
  );
};

export default EventCard;
