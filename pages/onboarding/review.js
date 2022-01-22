import Onboarding from "../../components/page-components/onboarding/Onboarding";
import { pageFilter } from "../../services/cms/pages";
import fetchWrapper, { fetchPage } from "../../services/useFetch";

const OnboardingReview = ({ pageData, userData }) => {
  console.log(userData);
  return (
    <Onboarding
      page={3}
      imageUrl="https://res.cloudinary.com/dkceblkn7/image/upload/v1640914799/boho%20vendor%20assets/Group_442_urqw5i.svg"
      imageAlt="picture of looking at data"
      linkForward="/walkthrough/about-you"
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
    pageData = await pageFilter(pageTemp, "onboarding p3review");
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

export default OnboardingReview;
