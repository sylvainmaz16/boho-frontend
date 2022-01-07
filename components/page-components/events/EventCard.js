import React from "react";
import Image from "next/image";
import Link from "next/link";
import IconButton from "@/buttons/IconButton";
import {
  ClockIcon,
  CalenderIcon,
  LocationIcon,
  ChevronLeftIcon,
} from "@/icons/*";

export const EventCard = ({
  eventImage,
  eventName,
  eventLocation,
  eventStart,
  eventEnd,
  eventHours,
  eventUrl,
}) => {
  return (
    <div className="event_card">
      <div className="event_card_img">
        <Image
          alt="image of event"
          src={eventImage}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="event__card__content">
        <h4>{eventName}</h4>
        <div>
          <LocationIcon color="accent-3" />
          <p className="font-xl-bold">{eventLocation}</p>
        </div>
        <div>
          <CalenderIcon color="accent-3" />
          <p>
            From {eventStart} to {eventEnd}
          </p>
        </div>
        <div>
          <ClockIcon className="icon--sm" color="accent-3" />
          <p>{eventHours}</p>
        </div>
      </div>
      <div className="event__card__action">
        Event Details
        <Link href={eventUrl} passHref>
          <a className="event__card__btn">
            <ChevronLeftIcon color="gray-50" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
