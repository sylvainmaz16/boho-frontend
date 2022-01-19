import { ChevronDown } from "@/icons/*";
import { useState } from "react";

const EventPgDisc = ({ description, event_guide }) => {
  const [spinner, setSpinner] = useState(false);

  return (
    <div className="event_pg__disc">
      <article>
        <h3>Why you should Apply</h3>
        <p>{description}</p>
        <br />
        <br />
        <p>{event_guide}</p>
      </article>
      <section className="event_pg__disc__faqs">
        <h3>FAQs</h3>
        <div className="flex justify-between align-row">
          <h4>What is this</h4>
          <ChevronDown
            onClick={() => setSpinner(!spinner)}
            className={spinner ? "spin-180 icon--sm" : "spin-0 icon--sm"}
            color="accent-primary"
          />
        </div>
        <div className="flex">
          <div className="flex overflow-hidden">
            <div className={spinner ? "collapse" : "expand"}>
              {/* TODO using rem, however depending on the Q&As might be unstable */}
              CityLine and The Boho Market have partnered to bring a new kind of
              shopping experience to Richardson. CityLine and The Boho Market
              have partnered to bring
            </div>
          </div>
        </div>
      </section>
      <div className="divider" />
    </div>
  );
};

export default EventPgDisc;
