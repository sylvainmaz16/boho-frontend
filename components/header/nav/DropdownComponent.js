import Image from "next/image";
import Link from "next/link";

const DropdownComponent = ({ onClick }) => {
  return (
    <div className="dropdown">
      <div onClick={onClick} className="dropdown__icon">
        <Image
          src="https://res.cloudinary.com/dkceblkn7/image/upload/v1640931706/boho%20vendor%20assets/Polygon_1_2_lsnah4.svg"
          width="24px"
          height="20px"
        />
      </div>
      <div className="dropdown__container"></div>
    </div>
  );
};

export default DropdownComponent;
