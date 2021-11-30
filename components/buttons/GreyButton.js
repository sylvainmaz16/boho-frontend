import Link from "next/link";

const GreyButton = ({ paddingLeftRight, content, link = "", maxWidth }) => {
  return (
    <Link href={link}>
      <a
        className="button__grey button"
        style={{
          padding: `20px ${paddingLeftRight}px`,
          maxWidth: maxWidth,
        }}
      >
        {content}
      </a>
    </Link>
  );
};

export default GreyButton;
