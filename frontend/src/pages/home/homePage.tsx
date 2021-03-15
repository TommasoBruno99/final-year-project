import React from "react";
import DashboardContainer from "../../containers/dashboard/dashboard.container";
import { useTitle } from "../../hooks";

const HomePage: React.FC = () => {
  useTitle("Dashboard");
  return <DashboardContainer />;
};

export default HomePage;
