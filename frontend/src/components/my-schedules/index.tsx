import React from "react";
import { useQuery } from "react-query";
import { useAuth } from "../../hooks";
import { fetchSchedules } from "../../store/actions/schedules/fetchSchedules";
import { Schedule } from "../../store/context/schedules/schedules.context.interfaces";
import {
  ScheduleContainer,
  ScheduleDate,
  ScheduleDates,
  SchedulesWrapper,
} from "./my-schedules.styled";

const MySchedules: React.FC = () => {
  const { state } = useAuth();

  const { data, isLoading } = useQuery<Schedule[]>(
    ["my-schedules", state.user!.id, state.access_token],
    () => fetchSchedules(state.user!.id, state.access_token)
  );

  if (isLoading)
    return (
      <SchedulesWrapper>
        <h3> Loading ... </h3>
      </SchedulesWrapper>
    );
  return (
    <SchedulesWrapper>
      {data
        ? data!.map((schedule, idx) => (
            <ScheduleContainer key={idx} status={schedule.status}>
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
          ))
        : "No schedule available"}
    </SchedulesWrapper>
  );
};

export default MySchedules;
