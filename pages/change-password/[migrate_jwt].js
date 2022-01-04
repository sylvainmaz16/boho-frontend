import { useState, useEffect } from "react";
import MigrateForm from "../../components/page-components/forms/MigrateForm";
import AuthHeader from "../../components/page-components/auth/AuthHeader";
import ErrorMessage from "../../components/error/ErrorMessage";
import fetchWrapper from "../../services/useFetch";
import { pageFilter } from "../../services/cms/pages";

const Migrate = ({ pageData }) => {
  const [error, setError] = useState();
  const [visible, setVisible] = useState(false);

  return (
    <div className="auth container">
      <div className="wrapper-form">
        <AuthHeader pageData={pageData ? pageData[0] : null} />
        <ErrorMessage
          content={error}
          visible={visible}
          setVisible={setVisible}
        />
        <MigrateForm setError={setError} setVisible={setVisible} />
      </div>
    </div>
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
    "pages.AuthPage",
  );

  let pageData;
  if (pageStatus.returnData.status === 200) {
    const pageTemp = await pageStatus.returnData.json();
    pageData = await pageFilter(pageTemp, "migrate");
  }

  return {
    props: { pageData: pageData || null },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { migrate_jwt: "migrate_jwt" } }, // See the "paths" section below
    ],
    fallback: true, // See the "fallback" section below
  };
}

export default Migrate;
