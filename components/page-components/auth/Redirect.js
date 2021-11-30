import Link from "next/link";

const Redirect = ({ content, link, linkContent }) => {
  return (
    <p className="auth__redirect">
      {content}
      <Link href={link}>{linkContent}</Link>
    </p>
  );
};

export default Redirect;
