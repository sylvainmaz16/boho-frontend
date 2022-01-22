import Onboarding from "~/components/page-components/onboarding/Onboarding";
import { pageFilter } from "~/services/cms/pages";
import fetchWrapper, { fetchPage } from "~/services/useFetch";

const OnboardingJoin = ({ pageData, userData }) => {
  return (
    <Onboarding
      page={2}
      imageUrl="https://res.cloudinary.com/dkceblkn7/image/upload/v1640914749/boho%20vendor%20assets/Group_443_eor1kt.svg"
      imageAlt="picture of looking at data"
      linkForward="/onboarding/review"
      pageData={pageData ? pageData[0] : null}
      userData={userData}
    />
  );
};

export async function getServerSideProps({ req }) {
  const pageStatus = await fetchPage("pages.OnboardingPage");

  let pageData;
  if (pageStatus.status === 200) {
    const pageTemp = await pageStatus.json();
    pageData = await pageFilter(pageTemp, "onboarding p2join");
  }

  const userStatus = await fetchWrapper("/api/user/onboarding", {
    mode: "cors",
    credentials: "include",
    req
  });

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

export default OnboardingJoin;
