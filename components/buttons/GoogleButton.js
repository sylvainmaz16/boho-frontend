import Image from "next/image";

const GoogleButton = ({ renderProps, content }) => {
  return (
    <button
      onClick={renderProps?.onClick}
      disabled={renderProps?.disabled}
      className="button__google"
    >
      <Image
        src="https://res.cloudinary.com/dkceblkn7/image/upload/v1640912119/boho%20vendor%20assets/Group_286_myqs2l.svg"
        alt="Google's G Logo"
        width="20"
        height="20"
      />
      <p>{content}</p>
    </button>
  );
};

export default GoogleButton;
