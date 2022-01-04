import React from "react";
import Image from "next/image";
import {
  ClockIcon,
  CalenderIcon,
  LocationIcon,
  EventDetailsButton,
} from '../dashboard/icons';

export const EventCard = ({
  eventImage,
  eventTitle,
  eventLocation,
  eventDates,
  eventLength,
  eventDetails,
}) => {
  return (
    <div className='event_card' style={{ color: 'var(--gray-400)' }}>
      <div className='event_card_img'>
        <Image
          alt='image of event'
          src={eventImage}
          layout='fill'
          objectFit='cover'
        />

      </div>
      <div className='event_card_content'>
        <h4>{eventTitle.split('', 32).join('')}</h4>
        <div>
          <LocationIcon size="sm" color="#BC7F7C" />
          <div className="font-xl-bold">{eventLocation}</div>
        </div>
        <div>
          <CalenderIcon size="sm" color="#BC7F7C" />
          <div>{eventDates}</div>
        </div>
        <div>
          <ClockIcon size="sm" color="#BC7F7C" />
          <div>{eventLength}</div>
        </div>
      </div>
      <EventDetailsButton url="/dashboard" />
    </div>
  );
};

export default EventCard;
