import React from "react";
import {
  ProfileCardContainer,
  ProfileCardDescription,
  ProfileCardWrapper,
} from "./profileCard.styled";

const ProfileCard = () => {
  return (
    <ProfileCardContainer>
      <ProfileCardWrapper>
        <ProfileCardDescription>Holidays Form</ProfileCardDescription>
      </ProfileCardWrapper>
    </ProfileCardContainer>
  );
};

export default ProfileCard;
