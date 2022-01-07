import MainLayout from "../components/layout/MainLayout";
import EventList from "@/page-components/events/EventList";
import { getLimitedEvents, getRandomUser } from "@/testdata/*";
import DashBoardHead from "@/components/page-components/dashboard/DashBoardHead";
import Head from "next/head";

const Dashboard = ({ user, events }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Dashboard</title>
        <meta name="description" content="a list of events" />
        <meta name="author" content="Boho" />
        <meta name="copyright" content="boho" />
        <meta name="robots" content="index, follow" />
        <meta name="rating" content="14 years" />
      </Head>
      <DashBoardHead name={user.first_name}>
        <EventList events={events} />
      </DashBoardHead>
    </>
  );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export const getStaticProps = async () => {
  const user = await getRandomUser();
  const events = await getLimitedEvents(3);

  return {
    props: { user: user, events: events },
  };
};
