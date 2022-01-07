import Banner from "../banner";
import MainHeader from "../header/MainHeader";
import Footer from "../footer/Footer";

const MainLayout = ({ children }) => {
  //TODO: hook it up to user status
  // const [bannerVisible, setBannerVisible] = useState(false);

  return (
    <>
      <Banner content="Test Content" visible={false} />
      <MainHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
