import React from "react";
import { Badge } from "../../../components";
import { useAuth } from "../../../hooks";

const BadgeContainer: React.FC = () => {
  const { state } = useAuth();
  return <Badge> {state.user!.role} </Badge>;
};

export default BadgeContainer;
