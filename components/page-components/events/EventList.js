import React from 'react';
import BrownButton from '../../buttons/BrownButton';
import { EventContent } from './EventContent';

const EventList = ({ events }) => {
  return (
    <div className='event_container'>
      {events ? (
        events.map((event) => {
          <EventContent
            eventImage={false}
            title={event.eventTitle}
            content={event.content}
          />;
        })
      ) : (
        <EventContent
          EventImage={false}
          EventTitle={'No Events Yet? Explore Events'}
          EventContent={
            "You don't have events history, because you didn’t apply for any events yet. Explore our upcoming events to connect with our family and sell your products"
          }
        />
      )}
      <BrownButton
        paddingLeftRight='100'
        content='Explore Events'
        link='/events/upcoming-events'
        maxWidth='500px'
      />
    </div>
  );
};

export default EventList;
