import React from "react";
import HolidaysForm from "../../components/holidaysForm";
import ProfileCard from "../../components/profileCard";
import { useTitle } from "../../hooks";

const HomePage: React.FC = () => {
  useTitle("Dashboard");
  return (
    <>
      <ProfileCard />
      <HolidaysForm />
    </>
  );
};

export default HomePage;
