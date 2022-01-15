// eslint-disable-next-line no-unused-vars

export const getEvents = async () => {
  const res = await fetch("https://61de3b42f60e8f0017668c19.mockapi.io/events");
  const data = res.json();
  return data;
};

export const getEventById = async (id) => {
  const res = await fetch(
    `https://61de3b42f60e8f0017668c19.mockapi.io/events/${id}`,
  );
  const data = res.json();
  return data;
};

export const getVenues = async () => {
  const res = await fetch("https://61de3b42f60e8f0017668c19.mockapi.io/venues");
  const data = res.json();
  return data;
};

export const getVenueById = async (id) => {
  const res = await fetch(
    `https://61de3b42f60e8f0017668c19.mockapi.io/venues/${id}`,
  );
  const data = res.json();
  return data;
};

export default getEvents;
