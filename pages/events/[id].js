import getEvents, { getEventById } from "@/middleware/events";
import MainLayout from "../../components/layout/MainLayout";
import EventPgHead from "@/page-components/events/EventPgHead";
import EventPgFoot from "@/page-components/events/EventPgFoot";
import EventPgContent from "@/page-components/events/EventPgContent";

export default function Event({ event }) {
  return (
    <>
      <div className="event_pg wrapper-90">
        <EventPgHead {...event} />
        <EventPgContent event={event} />
        <EventPgFoot />
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const events = await getEvents();
  const paths = events.map((event) => ({
    params: { id: event?.id },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const event = await getEventById(+params.id);
  return {
    props: { event },
  };
}

Event.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
