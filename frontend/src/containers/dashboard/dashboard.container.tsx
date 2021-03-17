import React from "react";
import { OptionsContainer } from "..";
import { Dashboard, DashboardInner, DashboardName } from "../../components";
import { useAuth } from "../../hooks";
import { transformFirstLetterUppercase } from "../../utils/transformString";
import BadgeContainer from "./badge/badge.container";

const DashboardContainer: React.FC = () => {
  const { state } = useAuth();

  return (
    <Dashboard>
      <DashboardInner>
        <DashboardName>
          {transformFirstLetterUppercase(state.user!.firstName) +
            " " +
            transformFirstLetterUppercase(state.user!.lastName)}
        </DashboardName>
        <BadgeContainer> {state.user?.role} </BadgeContainer>
      </DashboardInner>
      <OptionsContainer />
    </Dashboard>
  );
};

export default DashboardContainer;
