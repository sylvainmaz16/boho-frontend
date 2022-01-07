import EventList from "@/page-components/events/EventList";

import React from "react";

export const YourEvents = ({ events, pageData, userData }) => {
  return (
    <div className="event_layout">
      {pageData}
      <EventList userDate={userData || null} events={false} />
    </div>
  );
};

export default YourEvents;

export const getServerSideProps = async () => {
  return {
    props: {
      events: [
        {
          eventTitle: "The Bake off",
          eventContent: "this is the event content",
        },
      ],
      pageData: "this is page data",
      userData: null,
    },
  };
};
