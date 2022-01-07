import EventCard from "./EventCard";

export const EventDashBoardList = ({ events }) => {
  return (
    <div className="event_list">
      {events.map((event, idx) => {
        return (
          <EventCard
            key={idx}
            eventImage={event.image_url}
            eventName={event.name}
            eventStart={event.start}
            eventEnd={event.end}
            eventHours={event.hours}
            eventLocation={event.location}
            eventUrl={event.details_url}
          />
        );
      })}
    </div>
  );
};

export default EventDashBoardList;
