import React from "react";
import {
  Dashboard,
  DashboardInner,
  DashboardName,
  Badge,
} from "../../components";
import { useAuth } from "../../hooks";
import { transformFirstLetterUppercase } from "../../utils/transformString";

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
        <Badge> {state.user?.role} </Badge>
      </DashboardInner>
    </Dashboard>
  );
};

export default DashboardContainer;
