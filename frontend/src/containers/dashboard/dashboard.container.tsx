import React from "react";
import {
  Dashboard,
  DashboardInner,
  DashboardName,
  DashboardTextFlex,
  DashboardTitle,
} from "../../components";
import { useAuth } from "../../hooks";
import { transformFirstLetterUppercase } from "../../utils/transformString";

const DashboardContainer: React.FC = () => {
  const { state } = useAuth();
  return (
    <Dashboard>
      <DashboardInner>
        <DashboardTextFlex>
          <DashboardTitle>Welcome Back,</DashboardTitle>
          <DashboardName>
            {transformFirstLetterUppercase(state.user!.firstName)}
          </DashboardName>
        </DashboardTextFlex>
      </DashboardInner>
    </Dashboard>
  );
};

export default DashboardContainer;
