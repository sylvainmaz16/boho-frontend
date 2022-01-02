import EventList from '../../components/page-components/events/EventList';

import React from 'react';

export const YourEvents = ({ events, pageData, userData }) => {
  return (
    <div className='event_layout'>
      {pageData}
      <EventList userDate={userData || null} events={events} />
    </div>
  );
};

export default YourEvents;

export const getSeverSideProps = async () => {
  return {
    props: {
      events: [
        {
          eventTitle: 'The Bake off',
          eventContent: 'this is the event content',
        },
      ],
      pageData: pageData || null,
      userData: null,
    },
  };
};
