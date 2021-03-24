import React from "react";
import {
  ProfileCardContainer,
  ProfileCardDays,
  ProfileCardDescription,
  ProfileCardWrapper,
} from "./profileCard.styled";

const ProfileCard = () => {
  return (
    <ProfileCardContainer>
      <ProfileCardWrapper>
        <ProfileCardDescription>Holidays Left</ProfileCardDescription>
        <ProfileCardDays> 24/24 </ProfileCardDays>
      </ProfileCardWrapper>
    </ProfileCardContainer>
  );
};

export default ProfileCard;
