import React from "react";
import { useParams } from "react-router";

const UserProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return <p>The id is {id}</p>;
};

export default UserProfilePage;
