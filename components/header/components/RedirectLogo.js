import Link from "next/link";
import Image from "next/image";

const RedirectLogo = () => {
  return (
    <div className="header__logo">
      <Link href="/dashboard">
        <a>
          <Image
            src="https://res.cloudinary.com/dkceblkn7/image/upload/v1639540307/boho%20vendor%20assets/image_2_1_oglnq7.svg"
            alt="logo"
            height="46.17"
            width="211.03"
          />
        </a>
      </Link>
    </div>
  );
};

export default RedirectLogo;
