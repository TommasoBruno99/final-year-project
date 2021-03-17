import React from "react";
import {
  OptionsContainer,
  OptionsContainerInner,
  Button,
} from "../../../components";

const ScheduleOptionsContainer: React.FC = () => {
  return (
    <OptionsContainer>
      <OptionsContainerInner>
        <Button> Request holiday </Button>
        <Button> View your holidays </Button>
      </OptionsContainerInner>
    </OptionsContainer>
  );
};

export default ScheduleOptionsContainer;
