import BrownButton from "@/components/buttons/BrownButton";

const EventPgFoot = () => {
  return (
    <div className="event_pg__footer">
      <h1>Join Us Now!</h1>
      <BrownButton link="/events/1" maxWidth="650px" paddingLeftRight="110">
        submit Application
      </BrownButton>
    </div>
  );
};

export default EventPgFoot;
