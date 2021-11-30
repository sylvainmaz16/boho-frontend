import Link from "next/link";

const CircleLink = ({ link, active = false }) => {
  return (
    <Link href={link}>
      <a
        className={`circle-link ${
          active ? "circle-active" : "circle-inactive"
        }`}
      >
        <div
          className={`circle-inside ${active ? "circle-inside-active" : null}`}
        ></div>
      </a>
    </Link>
  );
};

export default CircleLink;
