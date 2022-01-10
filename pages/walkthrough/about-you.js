import MainLayout from "../../components/layout/MainLayout";
import Stepper from "../../components/page-components/walkthrough/stepper";
import AboutYouForm from "../../components/page-components/forms/AboutYouForm";

const AboutYou = () => {
  return (
    <div className="aboutYou">
      <Stepper currentStep={1} />
      <AboutYouForm />
    </div>
  );
};

export default AboutYou;

AboutYou.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
