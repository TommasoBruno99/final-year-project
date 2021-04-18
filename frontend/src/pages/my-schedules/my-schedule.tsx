import React from "react";
import MySchedules from "../../components/my-schedules";
import { ScheduleContextProvider } from "../../store/context/schedules/schedules.context";

const MySchedulePage: React.FC = () => {
  return (
    <ScheduleContextProvider>
      <MySchedules />
    </ScheduleContextProvider>
  );
};

export default MySchedulePage;
