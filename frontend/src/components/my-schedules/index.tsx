import React from "react";
import { useAuth } from "../../hooks";
import { fetchSchedules } from "../../store/actions/schedules/fetchSchedules";
import { useScheduleContext } from "../../store/context/schedules/schedules.context";
import {
  ScheduleContainer,
  ScheduleDate,
  ScheduleDates,
  SchedulesWrapper,
} from "./my-schedules.styled";

const MySchedules: React.FC = () => {
  const { state } = useAuth();
  const { schedules, setSchedules } = useScheduleContext();

  React.useEffect(() => {
    const id = state.user!.id;
    const token = state.access_token;
    fetchSchedules(id, token, setSchedules);
  }, [state.user, state.access_token, setSchedules]);

  return (
    <SchedulesWrapper>
      {schedules.map((schedule, idx) => (
        <ScheduleContainer key={idx}>
          {schedule.reason}
          <ScheduleDates>
            <ScheduleDate>
              {schedule.startingDay +
                "/" +
                schedule.startingMonth +
                "/" +
                schedule.startingYear +
                " "}
            </ScheduleDate>
            <span> - </span>
            <ScheduleDate>
              {schedule.endingDay +
                "/" +
                schedule.endingMonth +
                "/" +
                schedule.endingYear}
            </ScheduleDate>
          </ScheduleDates>
        </ScheduleContainer>
      ))}
    </SchedulesWrapper>
  );
};

export default MySchedules;
