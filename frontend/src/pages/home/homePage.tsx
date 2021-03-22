import React from "react";
import { useTitle } from "../../hooks";

const HomePage: React.FC = () => {
  useTitle("Dashboard");
  return <p>Hello Home</p>;
};

export default HomePage;
