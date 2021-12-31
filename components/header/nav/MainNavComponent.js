import Link from "next/link";

const MainNavComponent = ({ path, link, content }) => {
  return (
    <div className="main-nav__container">
      <Link href={link}>
        <a className={`${path === link ? "nav__active" : null}`}>{content}</a>
      </Link>{" "}
      <div className={`${path === link ? "nav__underline" : null}`}></div>
    </div>
  );
};

export default MainNavComponent;
