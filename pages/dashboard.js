import MainLayout from '../components/layout/MainLayout';
import ProgressBar from '../components/page-components/dashboard/ProgressBar';
import EventDashBoardList from '../components/page-components/dashboard/EventDashBoardList';
import Head from 'next/head';

const Dashboard = () => {
  let user = 'Sherlock';
  //just dummy data for testing how it looks.
  //lemme know if there is a particular events model you'd like me to follow? cams-??
  const fakeEvents = [
    {
      eventImage: '/images/test.jpg',
      eventLocation: '22 B backer Street',
      eventTitle: 'The Hound of the Baskervilles',
      eventDates: '12th - 15th',
      eventLength: '2hrs',
      eventDetails: 'events/1',
    },
    {
      eventImage: '/images/test.jpg',
      eventLocation: '22 B backer Street',
      eventTitle: 'The Hound of the Baskervilles',
      eventDates: '12th - 15th',
      eventLength: '2hrs',
      eventDetails: 'events/1',
    },
    {
      eventImage: '/images/test.jpg',
      eventLocation: '22 B backer Street',
      eventTitle: 'The Hound of the Baskervilles',
      eventDates: '12th - 15th',
      eventLength: '2hrs',
      eventDetails: 'events/1',
    },
    {
      eventImage: '',
      eventLocation: '22 B backer Street',
      eventTitle: 'The Hound of the Baskervilles',
      eventDates: '12th - 15th',
      eventLength: '2hrs',
      eventDetails: 'events/1',
    },
  ];
  return (
    <>
      <Head>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Dashboard</title>
        <meta name='description' content='a list of events' />
        <meta name='author' content='Boho' />
        <meta name='copyright' content='boho' />
        <meta name='robots' content='index, follow' />
        <meta name='rating' content='14 years' />
      </Head>
      <div className='dashboard_page' style={{ minHeight: '80vh' }}>
        <div className='dashboard_head'>
          <h1>Welcome, {user}</h1>
          <ProgressBar />
        </div>
        <EventDashBoardList events={fakeEvents} />
      </div>
    </>
  );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
