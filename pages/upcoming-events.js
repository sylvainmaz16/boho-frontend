import { getLimitedEvents } from "@/testdata/*";
import EventList from "@/page-components/events/EventList";
import MainLayout from "../components/layout/MainLayout";
import React from "react";

export default function UpcomingEvents({ events }) {
  return (
    <div className="wrapper-90">
      <div className="">
        <h1>Upcoming Events</h1>
        <EventList events={events} />
      </div>
    </div>
  );
}

UpcomingEvents.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getStaticProps() {
  const events = await getLimitedEvents(9);
  return {
    props: { events: events },
  };
}
