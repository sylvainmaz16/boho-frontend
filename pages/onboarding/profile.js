import Onboarding from '~/components/page-components/onboarding/Onboarding';
import fetchWrapper, { fetchPage } from '~/services/useFetch';
import { pageFilter } from '~/services/cms/pages';
import { serverCookieSet, serverCookieGet } from '~/services/cookies';

const OnboardingProfile = ({ pageData, userData }) => {
  console.log(userData);
  return (
    <Onboarding
      page={1}
      imageUrl='https://res.cloudinary.com/dkceblkn7/image/upload/v1640914362/boho%20vendor%20assets/thing_hl9hnm.svg'
      imageAlt='picture of reviewing information'
      linkForward='/onboarding/join'
      pageData={pageData ? pageData[0] : null}
      userData={userData}
    />
  );
};

export async function getServerSideProps({ req, res }) {
  const user = serverCookieGet(req, res);

  const pageStatus = await fetchPage("pages.OnboardingPage");

  let pageData;
  if (pageStatus.tokenAuth) {
    serverCookieSet(req, res, pageStatus.tokenAuth);
  }
  if (pageStatus.status === 200) {
    const pageTemp = await pageStatus.json();
    pageData = await pageFilter(pageTemp, "onboarding p1profile");
  }

  const userStatus = await fetchWrapper("/api/user/onboarding", { user });

  if (userStatus.tokenAuth) {
    serverCookieSet(req, res, userStatus.tokenAuth);
  }

  let userData;
  if (userStatus.status === 200) {
    userData = await userStatus.json();
  }

  return {
    props: {
      userData: userData || null,
      pageData: pageData || null,
    },
  };
}

export default OnboardingProfile;
