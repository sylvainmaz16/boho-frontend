import Link from "next/link";

//TODO ask kat if it would be okay to switch this to children in stead of content.
const BrownButton = ({
  paddingLeftRight,
  content,
  children,
  link,
  maxWidth,
}) => {
  return (
    <Link href={link}>
      <a
        className="button__brown button"
        style={{
          padding: `20px ${paddingLeftRight}px`,
          maxWidth: maxWidth,
        }}
      >
        {content?.length > 0 ? content : children}
      </a>
    </Link>
  );
};

export default BrownButton;
