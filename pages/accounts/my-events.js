import React from "react";
import EventsList from "@/page-components/events/EventList";
import { getRandomUser } from "@/middleware/data";
import EmptyEvents from "@/page-components/events/EmptyEvent";
import MainLayout from "@/components/layout/MainLayout";

const MyEvents = ({ user }) => {
  const events = user.myEvents;
  return (
    <div className="wrapper-90">
      <h1>Your Upcoming Events</h1>
      {events ? <EventsList events={events} /> : <EmptyEvents />}
    </div>
  );
};

MyEvents.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getStaticProps() {
  const user = await getRandomUser();

  return { props: { user: user || null } };
}

export default MyEvents;
