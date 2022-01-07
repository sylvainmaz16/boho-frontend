import React from "react";
import Image from "next/image";
import BrownButton from "@/components/buttons/BrownButton";
export const EmptyEvents = () => {
  return (
    <div className="empty_event">
      <div className="empty__events__img">
        <Image
          src="https://res.cloudinary.com/dkceblkn7/image/upload/v1640900847/boho%20vendor%20assets/Group_344_1_ja8y8l.svg"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <h2>
        You didn’t join our events yet? Explore our Upcoming Events and Join Us!
      </h2>
      <p>
        You don't have events history, because you didn’t apply for any events
        yet. Explore our upcoming events to connect with our family and sell
        your products
      </p>
      <BrownButton
        link="/upcoming-Events"
        content="Explore Events"
        paddingLeftRight="110"
        maxWidth="500px"
      />
    </div>
  );
};

export default EmptyEvents;
