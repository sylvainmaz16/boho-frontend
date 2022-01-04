import Onboarding from '../../components/page-components/onboarding/Onboarding';
import fetchWrapper from '../../services/useFetch';
import { pageFilter } from '../../services/cms/pages';
import { serverCookieSet, serverCookieGet } from '../../services/cookies';

const OnboardingJoin = ({ pageData, userData }) => {
  console.log(userData);
  return (
    <Onboarding
      page={2}
      imageUrl='https://res.cloudinary.com/dkceblkn7/image/upload/v1640914749/boho%20vendor%20assets/Group_443_eor1kt.svg'
      imageAlt='picture of looking at data'
      linkForward='/onboarding/review'
      pageData={pageData ? pageData[0] : null}
      userData={userData}
    />
  );
};

export async function getServerSideProps({ req, res }) {
  const user = serverCookieGet(req, res);

  const pageStatus = await fetchWrapper(process.env.NEXT_PUBLIC_BASE_CMS, {
    pageType: "pages.OnboardingPage",
    user
  });

  let pageData;
  if (pageStatus.tokenAuth) {
    serverCookieSet(req, res, pageStatus.tokenAuth);
  }
  if (pageStatus.returnData.status === 200) {
    const pageTemp = await pageStatus.returnData.json();
    pageData = await pageFilter(pageTemp, "onboarding p2join");
  }

  const userStatus = await fetchWrapper("/api/user/onboarding", { user });

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

export default OnboardingJoin;
