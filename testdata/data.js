const Data = {
  users: {
    userWithEvents: {
      user_id: 1,
      first_name: "Sherlock",
      last_name: "Holmes",
      email: "Holmes@yourservices.com",
      account_status: "onboarded",
      myEvents: [
        {
          event_id: 1,
          image_url: "/images/test.jpg",
          location: "22 B backer Street",
          name: "The Hound of the Baskervilles",
          start: "14 July",
          end: "15 July",
          hours: "5 Hours",
          details_url: "/events/1",
        },
        {
          event_id: 2,
          image_url: "/images/test.jpg",
          location: "22 B backer Street",
          name: "The Hound of the Baskervilles",
          start: "14 July",
          end: "15 July",
          length: "5 Hours",
          details_url: "events/2",
        },
        {
          event_id: 3,
          image_url: "/images/test.jpg",
          location: "22 B backer Street",
          name: "The Hound of the Baskervilles",
          start: "14 July",
          end: "15 July",
          hours: "5 Hours",
          details_url: "events/3",
        },
        {
          event_id: 4,
          image_url: "/images/test.jpg",
          location: "22 B backer Street",
          name: "The Hound of the Baskervilles",
          start: "14 July",
          end: "15 July",
          hours: "5 Hours",
          details_url: "events/5",
        },
      ],
    },
    userWithOutEvents: {
      user_id: 2,
      first_name: "John",
      last_name: "Watson",
      email: "Dr_H_wastson@youservices.com",
      account_status: "onboarded",
      myEvents: [],
    },
    userWithPendingStatus: {
      user_id: 3,
      first_name: "Irene",
      last_name: "adler",
      email: "I_adler@youservices.com",
      account_status: "pending",
      myEvents: [
        {
          event_id: 3,
          image_url: "/images/test.jpg",
          location: "22 B backer Street",
          name: "The Hound of the Baskervilles",
          start: "14 July",
          end: "15 July",
          hours: "5 Hours",
          details_url: "/events/1",
        },
      ],
    },
    userWithIncompleteStatus: {
      user_id: 4,
      first_name: "Microft",
      last_name: "Holmes",
      eamil: "M_holmes@yourservices.com",
      account_status: "incomplete",
      myEvents: [
        {
          event_id: 4,
          image_url: "/images/test.jpg",
          location: "22 B backer Street",
          name: "The Hound of the Baskervilles",
          start: "14 July",
          end: "15 July",
          hours: "5 Hours",
          details_url: "events/5",
        },
        {
          event_id: 4,
          image_url: "/images/test.jpg",
          location: "22 B backer Street",
          name: "The Hound of the Baskervilles",
          start: "14 July",
          end: "15 July",
          hours: "5 Hours",
          details_url: "events/5",
        },
      ],
    },
  },
  allEvents: [
    {
      event_id: 1,
      image_url: "/images/test.jpg",
      location: "22 B Baker Street London UK",
      name: "The Hound of the Baskervilles",
      start: "21 November",
      end: "1 December",
      hours: "5 Hours",
      details_url: "/events/1",
    },
    {
      event_id: 2,
      image_url: "/images/test.jpg",
      location: "36 Lammas Street Great Barford",
      name: "A Study in Pink",
      start: "1 April",
      end: "2 April",
      length: "2 Hours",
      details_url: "events/2",
    },
    {
      event_id: 3,
      image_url: "/images/test.jpg",
      location: " 71 Simone Weil Avenue",
      name: "The Blind Banker",
      start: "14 July",
      end: "15 July",
      hours: "3 Hours",
      details_url: "events/3",
    },
    {
      event_id: 4,
      image_url: "/images/test.jpg",
      location: "20 Overton Circle",
      name: "The Great Game",
      start: "14 July",
      end: "15 July",
      hours: "1 Hours",
      details_url: "events/4",
    },
    {
      event_id: 5,
      image_url: "/images/test.jpg",
      location: "22 B backer Street London UK",
      name: "A Scandal in Belgravia",
      start: "14 July",
      end: "15 July",
      hours: "10 Hours",
      details_url: "events/5",
    },
    {
      event_id: 6,
      image_url: "/images/test.jpg",
      location: "49 Guild Street London UK",
      name: "The Adventure of the Blue Carbuncle",
      start: "14 July",
      end: "15 July",
      hours: "5 Hours",
      details_url: "events/6",
    },
    {
      event_id: 7,
      image_url: "/images/test.jpg",
      location: "75 Asfordby Rd AldFord UK",
      name: "The Adventure of the Engineer's Thumb",
      start: "14 July",
      end: "15 July",
      hours: "5 Hours",
      details_url: "events/7",
    },
    {
      event_id: 8,
      image_url: "/images/test.jpg",
      location: "22 B backer Street London UK",
      name: "The Reichenbach Fall",
      start: "14 July",
      end: "15 July",
      hours: "5 Hours",
      details_url: "events/8",
    },
    {
      event_id: 9,
      image_url: "/images/test.jpg",
      location: "6 Glandovey Terrace Tegare UK",
      name: "The Empty Hearse",
      start: "14 July",
      end: "15 July",
      hours: "5 Hours",
      details_url: "events/9",
    },
  ],
};

export const getAllEvents = async () => {
  return Data.allEvents;
};

export const getUserWithEvents = async () => {
  return Data.users.userWithEvents;
};

export const getUserWithOutEvents = async () => {
  return Data.users.getUserWithOutEvents;
};

export const getUserWithPendingStatus = async () => {
  return Data.users.userWithPendingStatus;
};

export const getUserWithIncompleteStatus = async () => {
  return Data.users.userWithIncompleteStatus;
};

export const getLimitedEvents = async (limit) => {
  let limitedEvents = [];
  for (let i = 0; i <= limit - 1; i++) {
    limitedEvents.push(Data.allEvents[i]);
  }
  return limitedEvents;
};

export const getRandomUser = async () => {
  const num = Math.round(Math.random() * 4);
  const users = Data.users;
  for (const user in users) {
    if (Data.users[user].user_id === num) {
      return users[user];
    }
  }
};

export default getAllEvents;
