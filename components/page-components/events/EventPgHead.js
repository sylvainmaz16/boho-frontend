import Image from "next/image";
import BrownButton from "~/components/buttons/BrownButton";

export const EventPgHead = ({ name, description, image_url }) => {
  return (
    <div className="event_pg__head ">
      <div className="event_pg__head__img">
        <Image
          src={image_url}
          alt="Image of Event"
          layout="fill"
          objectFit="cover"
          blurDataURL
          priority
        />
      </div>

      <div className="event_pg__head__card">
        <h2>{name}</h2>
        <p>{description}</p>

        <BrownButton paddingLeftRight="65" maxWidth="300px" link="/events/1">
          Join Us Now
        </BrownButton>
      </div>
    </div>
  );
};

export default EventPgHead;
