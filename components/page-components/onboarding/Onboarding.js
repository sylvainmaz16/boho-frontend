import { useState, useEffect } from "react";
import ErrorMessage from "../../error/ErrorMessage";
import Content from "./Content";
import CircleLink from "./CircleLinks";
import BrownButton from "../../buttons/BrownButton";
import GreyButton from "../../buttons/GreyButton";

const Onboarding = ({
  page,
  imageUrl,
  imageAlt,
  linkBack = null,
  linkForward,
  pageData,
  userData,
}) => {
  return (
    <div className="onboarding container">
      <div className="wrapper-form">
        <div className="onboarding__header">
          <img
            src="https://res.cloudinary.com/dkceblkn7/image/upload/v1638073911/boho-vendor-assets/image_1_p7c2hr.svg"
            alt="Boho Market Logo"
          />
        </div>
        <div className="onboarding__mainImage">
          <img
            className="onboarding__mainForeground"
            src={imageUrl}
            alt={imageAlt}
          />
          <img
            className="onboarding__mainBackground"
            src="https://res.cloudinary.com/dkceblkn7/image/upload/v1638074240/boho-vendor-assets/Rectangle_41_f6bvpo.svg"
            alt=""
          />
        </div>

        {userData?.legacy === true && (
          <Content
            header={pageData?.legacy_user_header}
            content={pageData?.legacy_user_content}
          />
        )}

        {userData?.legacy === false && (
          <Content
            header={pageData?.new_user_header}
            content={pageData?.new_user_content}
          />
        )}

        <div className="onboarding__circleLinks">
          <CircleLink
            link="/onboarding/profile"
            active={page === 1 ? true : false}
          />
          <CircleLink
            link="/onboarding/join"
            active={page === 2 ? true : false}
          />
          <CircleLink
            link="/onboarding/review"
            active={page === 3 ? true : false}
          />
        </div>
        <div className="onboarding__buttons">
          {page === 1 ? null : (
            <GreyButton
              paddingUpDown={20}
              paddingLeftRight={62.5}
              content="Previous"
              link={linkBack ? linkBack : ""}
              maxWidth="232px"
            />
          )}
          <BrownButton
            paddingUpDown={20}
            paddingLeftRight={86}
            content={"Next"}
            link={linkForward}
            maxWidth="232px"
          />
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
