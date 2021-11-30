import Onboarding from "../../components/page-components/onboarding/Onboarding";
import fetchWrapper from "../../services/useFetch";
import { pageFilter } from "../../services/cms/pages";
import { serverCookieSet, serverCookieGet } from "../../services/cookies";

const OnboardingProfile = ({ pageData, userData }) => {
  console.log(userData);
  return (
    <Onboarding
      page={1}
      imageUrl="https://res.cloudinary.com/dkceblkn7/image/upload/v1638074373/boho-vendor-assets/Group_316_glxwt2.svg"
      imageAlt="picture of reviewing information"
      linkForward="/onboarding/join"
      pageData={pageData ? pageData[0] : null}
      userData={userData}
    />
  );
};

export async function getServerSideProps({ req, res }) {
  const user = serverCookieGet(req, res);

  const pageStatus = await fetchWrapper(
    "http://localhost:5050",
    "",
    "GET",
    user,
    true,
    null,
    "pages.OnboardingPage"
  );

  let pageData;
  if (pageStatus.tokenAuth) {
    serverCookieSet(req, res, pageStatus.tokenAuth);
  }
  if (pageStatus.returnData.status === 200) {
    const pageTemp = await pageStatus.returnData.json();
    pageData = await pageFilter(pageTemp, "onboarding p1profile");
  }

  const userStatus = await fetchWrapper(
    "http://localhost:5050",
    "/api/user/onboarding",
    "GET",
    user,
    true,
    null,
    null
  );

  if (userStatus.tokenAuth) {
    serverCookieSet(req, res, userStatus.tokenAuth);
  }

  let userData;
  if (userStatus.returnData.status === 200) {
    userData = await userStatus.returnData.json();
  }

  return {
    props: {
      userData: userData || null,
      pageData: pageData || null,
    },
  };
}

export default OnboardingProfile;
