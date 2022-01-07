import RightContent from "../components/page-components/landing/RightContent";
import LeftContent from "../components/page-components/landing/LeftContent";
import LandingHeader from "../components/header/LandingHeader";
import { fetchPage } from "../services/useFetch";
import { pageFilter } from "../services/cms/pages";

const LandingPage = ({ pageData }) => {
  return (
    <>
      <LandingHeader />
      <div className="landing container">
        <div className="wrapper-90 content columns">
          <LeftContent pageData={pageData ? pageData[0] : null} />
          <RightContent />
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const pageStatus = await fetchPage("pages.LandingPage");
  let pageData;
  if (pageStatus.status === 200) {
    const pageTemp = await pageStatus.json();
    pageData = await pageFilter(pageTemp, "landing");
  }

  return {
    props: { pageData: pageData || null },
  };
}

export default LandingPage;
