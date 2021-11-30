import Link from "next/link";

const BrownButton = ({ paddingLeftRight, content, link, maxWidth }) => {
  return (
    <Link href={link}>
      <a
        className="button__brown button"
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

export default BrownButton;
