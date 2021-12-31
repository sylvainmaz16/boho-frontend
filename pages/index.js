import RightContent from "../components/page-components/landing/RightContent";
import LeftContent from "../components/page-components/landing/LeftContent";
import LandingHeader from "../components/header/LandingHeader";
import fetchWrapper from "../services/useFetch";
import { pageFilter } from "../services/cms/pages";

const LandingPage = ({ pageData }) => {
  console.log(process.env.NEXT_PUBLIC_BASE_CMS);
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
  const pageStatus = await fetchWrapper(
    process.env.NEXT_PUBLIC_BASE_CMS,
    "",
    "GET",
    null,
    false,
    null,
    "pages.LandingPage"
  );
  // console.log(pageStatus);
  let pageData;
  if (pageStatus.returnData.status === 200) {
    const pageTemp = await pageStatus.returnData.json();
    pageData = await pageFilter(pageTemp, "landing");
  }

  return {
    props: { pageData: pageData || null },
  };
}

export default LandingPage;
