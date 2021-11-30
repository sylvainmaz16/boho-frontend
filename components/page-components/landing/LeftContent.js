import { useState, useEffect } from "react";
import BrownButton from "../../buttons/BrownButton";
import Headers from "./Headers";

const LeftContent = ({ pageData }) => {
  // const [headers, setHeaders] = useState();
  // const [body, setBody] = useState();

  useEffect(() => {
    // getPageData();
  }, []);

  return (
    <div className="landing wrapper-form-landing">
      <Headers headers={pageData?.header} />
      <div className="landing__content">
        <p> {pageData?.content} </p>
        <div className="landing__CTA">
          <BrownButton
            paddingLeftRight={146}
            link="/signup"
            content="Join The Family"
          />
        </div>
      </div>
    </div>
  );
};

export default LeftContent;
