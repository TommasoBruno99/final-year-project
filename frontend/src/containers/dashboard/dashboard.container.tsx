import React from "react";
import {
  Dashboard,
  DashboardInner,
  DashboardName,
  DashboardTextFlex,
  DashboardTitle,
} from "../../components";
import { useAuthContext } from "../../store/context/auth/authContext";
import { transformFirstLetterUppercase } from "../../utils/transformString";

const DashboardContainer: React.FC = () => {
  const { state } = useAuthContext();
  return (
    <Dashboard>
      <DashboardInner>
        <DashboardTextFlex>
          <DashboardTitle>Welcome Back,</DashboardTitle>
          <DashboardName>
            {transformFirstLetterUppercase(state.user!.first_name)}
          </DashboardName>
        </DashboardTextFlex>
      </DashboardInner>
    </Dashboard>
  );
};

export default DashboardContainer;
