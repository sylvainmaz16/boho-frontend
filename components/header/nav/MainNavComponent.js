import Link from "next/link";

const MainNavComponent = ({ path, link, content }) => {
  //Info: next/Link needs `passHref` prop when descending props to child element <a></a>
  //For more Information visit: https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-custom-component-that-wraps-an-a-tag
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
