import Link from "next/link";

const DropdownLink = ({ content, link }) => {
  return (
    <div className="dropdown__link">
      <Link href={link}>
        <a>{content}</a>
      </Link>
    </div>
  );
};

export default DropdownLink;
