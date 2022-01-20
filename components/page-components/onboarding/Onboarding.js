// import { useState, useEffect } from "react";
// import ErrorMessage from "../../error/ErrorMessage";
import Content from "./Content";
import CircleLink from "./CircleLinks";
import BrownButton from "../../buttons/BrownButton";
import GreyButton from "../../buttons/GreyButton";
import Image from "next/image";

const Onboarding = ({
  page,
  imageUrl,
  imageAlt,
  linkBack = null,
  linkForward,
  pageData,
  // userData,
}) => {
  console.log(pageData);
  const userData = { legacy: true };
  // temporary until userData is fixed+
  return (
    <div className="onboarding container">
      <div className="wrapper-form">
        <div className="onboarding__header">
          <Image
            src="https://res.cloudinary.com/dkceblkn7/image/upload/v1640914159/boho%20vendor%20assets/image_1_1_i9o3e4.svg"
            alt="Boho Market Logo"
            height="64"
            width="235.29"
          />
        </div>
        <div className="onboarding__mainImage">
          <Image src={imageUrl} alt={imageAlt} width="280" height="280" />
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
