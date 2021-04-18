import React, { useContext, useState } from "react";
import { IScheduleContext, Schedule } from "./schedules.context.interfaces";

const initialState: Schedule[] = [];

export const scheduleContext = React.createContext<IScheduleContext>({
  schedules: initialState,
  setSchedules: () => null,
});

export const ScheduleContextProvider: React.FC = ({ children }) => {
  const [schedules, setSchedules] = useState<Schedule[]>([]);

  return (
    <scheduleContext.Provider value={{ schedules, setSchedules }}>
      {children}
    </scheduleContext.Provider>
  );
};

export const useScheduleContext = () => {
  return useContext(scheduleContext);
};
