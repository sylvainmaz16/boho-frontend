import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MainNavComponent from "./MainNavComponent";
import DropdownArrow from "./DropdownArrow";
import DropdownComponent from "./DropdownComponent";
import useOnclickOutside from "react-cool-onclickoutside";

const MainNav = () => {
  const [dropdownArrowVisible, setDropdownArrowVisible] = useState(true);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const ref = useOnclickOutside(() => {
    setDropdownArrowVisible(true);
    setDropdownVisible(false);
  });

  const toggleDropdown = () => {
    setDropdownArrowVisible(!dropdownArrowVisible);
    setDropdownVisible(!dropdownVisible);
  };

  const router = useRouter();
  const path = router.pathname;

  return (
    <div className="main-nav">
      <MainNavComponent path={path} link="/dashboard" content="Dashboard" />
      <MainNavComponent
        path={path}
        link="/upcoming-events"
        content="Upcoming Events"
      />
      <MainNavComponent path={path} link="" content="My Account" />
      <div
        ref={ref}
        onClick={toggleDropdown}
        className={`${
          dropdownArrowVisible
            ? "main-nav__dropdownArrowActive"
            : "main-nav__dropdownArrowInactive"
        }`}
      >
        <DropdownArrow />
      </div>
      <div
        ref={ref}
        className={`${
          dropdownVisible
            ? "main-nav__dropdownActive"
            : "main-nav__dropdownInactive"
        }`}
      >
        <DropdownComponent onClick={toggleDropdown} />
        {/* notifications icon */}
      </div>
    </div>
  );
};

export default MainNav;
