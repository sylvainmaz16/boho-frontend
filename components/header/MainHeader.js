import RedirectLogo from "./components/RedirectLogo";
import MainNav from "./nav/MainNav";

const MainHeader = () => {
  return (
    <div className="header container">
      <div className="wrapper-90 header__content">
        <RedirectLogo />
        <MainNav />
      </div>
    </div>
  );
};

export default MainHeader;
