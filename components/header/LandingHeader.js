import LoginButton from "../buttons/LoginButton";

const LandingHeader = () => {
  return (
    <div className="header container">
      <div className="wrapper-90 header__content">
        <div className="header__logo">
          <img
            src="https://res.cloudinary.com/dkceblkn7/image/upload/v1639540307/boho%20vendor%20assets/image_2_1_oglnq7.svg"
            alt="logo"
          />
        </div>
        <div className="header__navbar">
          <LoginButton />
        </div>
      </div>
    </div>
  );
};

export default LandingHeader;
