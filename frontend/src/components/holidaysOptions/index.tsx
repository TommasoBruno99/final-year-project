import React from "react";
import {
  OptionsContainer,
  OptionsWrapper,
  Option,
  OptionColumn,
  OptionDescription,
} from "./holidaysOptions.styled";
import travelers from "../../images/travelers.svg";

const HolidaysOptions = () => {
  return (
    <OptionsContainer>
      <OptionsWrapper>
        <OptionColumn>
          <Option src={travelers} />
          <OptionDescription>Get Started. Request an holiday</OptionDescription>
        </OptionColumn>
      </OptionsWrapper>
    </OptionsContainer>
  );
};

export default HolidaysOptions;
