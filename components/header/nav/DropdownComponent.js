import Image from "next/image";
import DropdownLink from "./DropdownLink";
import DropdownLogout from "./DropdownLogout";

const DropdownComponent = ({ onClick }) => {
  return (
    <div className="dropdown">
      <div onClick={onClick} className="dropdown__icon">
        <Image
          src="https://res.cloudinary.com/dkceblkn7/image/upload/v1640931706/boho%20vendor%20assets/Polygon_1_2_lsnah4.svg"
          alt="drop Down Icon"
          width="24px"
          height="20px"
        />
      </div>
      <div className="dropdown__container">
        <DropdownLink content="Your Events" link="" />
        <DropdownLink content="Your Messages" link="" />
        <DropdownLink content="Your Payments" link="" />
        <DropdownLogout />
      </div>
    </div>
  );
};

export default DropdownComponent;
