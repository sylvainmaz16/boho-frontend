import { CalendarIcon, ClockIcon, LocationIcon, ChevronDown } from "@/icons/*";
import Link from "next/link";
import { useState } from "react";
import Map from "@/middleware/map";

const EventPgDetails = ({ start, end, venue_id, dates }) => {
  const [spinner, setSpinner] = useState(false);
  const venue = venue_id[0];

  const XM = (time) => {
    let newTime = new Date(time);
    let hrs = newTime.getHours() - 12;
    let xm = hrs < 0 ? hrs * -1 + "am" : hrs * 1 + "pm";
    return { hrs: hrs, xm: xm, d: newTime.getUTCDate() };
  };

  return (
    <div className="event_pg__details">
      <section className="event_pg__details__ppl">
        <h1>120</h1>
        <p>people are coming</p>
      </section>
      <section className="event_pg__details__cat">
        <strong>Category Unavailable</strong>
        <p>
          Your category is unavailable at this event, allowed spaces for this
          category have been completed. You can still apply to the wait list.
        </p>
      </section>
      <section className="event_pg__details__info__a">
        <span className="align-row">
          <LocationIcon className="icon--sm" color="accent-light" />
          <p>{venue.street1}</p>
        </span>
        <span>
          <CalendarIcon className="icon--sm" color="accent-light" />

          <p>
            {XM(start).xm}
            &nbsp;-&nbsp;
            {XM(end).xm}
          </p>
        </span>
        <span>
          <ClockIcon className="icon--sm" color="accent-light" />
          {(XM(start).hrs - XM(end).hrs) * 1}hrs
        </span>
      </section>

      <section className="event_pg__details__info__b">
        <div className="flex justify-between">
          <div className="flex align-row">
            <ClockIcon className="icon--sm" color="accent-light" />
            <strong>Time Schedule</strong>
          </div>
          <ChevronDown
            onClick={() => setSpinner(!spinner)}
            className={spinner ? "spin-180 icon--sm" : "spin-0 icon--sm"}
            color="accent-primary"
          />
        </div>
        <div className="overflow-hidden">
          <div className={spinner ? "collapse" : "expand"}>
            {dates.map((date, idx) => (
              <div key={idx} className="flex align-row">
                <CalendarIcon className="icon--sm" color="accent-light" />

                <p>
                  {XM(date.day).d} {date.month}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="event_pg__details__map">
        <Map gps={venue.gps} />
        <div className="align-row">
          <LocationIcon className="icon--sm" color="accent-light" />
          <Link href="/">
            <a>{venue.city}</a>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EventPgDetails;
