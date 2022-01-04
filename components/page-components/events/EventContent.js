import React from "react";
export const EventContent = ({ EventTitle, eventImage, EventContent }) => {
  let eventImg = false;
  let defaultImg =
    "https://res.cloudinary.com/dkceblkn7/image/upload/v1640900847/boho%20vendor%20assets/Group_344_1_ja8y8l.svg";
  return (
    <div className="event_content">
      <img src={eventImg ? eventImage : defaultImg} />
      <h1>{EventTitle}</h1>
      <p>{EventContent}</p>
    </div>
  );
};
