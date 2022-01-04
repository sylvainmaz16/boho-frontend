import EventCard from './EventCard';

export const EventDashBoardList = ({ events }) => {
  return (
    <div className='event_list'>
      {events.map((event, idx) => {
        return (
          <EventCard
            key={idx}
            eventImage={event.eventImage}
            eventTitle={event.eventTitle}
            eventDates={event.eventDates}
            eventLength={event.eventLength}
            eventLocation={event.eventLocation}
            eventDetails={event.eventDetails}
          />
        );
      })}
    </div>
  );
};

export default EventDashBoardList;
