import EventPgDetails from "./EventPgDetails";
import EventPgDisc from "./EventPgDisc";

export default function EventPgContent({ event }) {
  return (
    <div className="event_pg__content wrapper-90">
      <EventPgDisc {...event} />
      <EventPgDetails {...event} />
    </div>
  );
}
