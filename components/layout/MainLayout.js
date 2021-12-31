import { useState } from "react";
import Banner from "../banner";
import MainHeader from "../header/MainHeader";

const MainLayout = ({ children }) => {
  //TODO: hook it up to user status
  const [bannerVisible, setBannerVisible] = useState(false);
  return (
    <>
      <Banner content="Test Content" visible={bannerVisible} />
      <MainHeader />
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
