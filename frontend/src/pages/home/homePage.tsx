import React from "react";
import HolidaysOptions from "../../components/holidaysOptions";
import ProfileCard from "../../components/profileCard";
import { useTitle } from "../../hooks";

const HomePage: React.FC = () => {
  useTitle("Dashboard");
  return (
    <>
      <ProfileCard />
      <HolidaysOptions />
    </>
  );
};

export default HomePage;
