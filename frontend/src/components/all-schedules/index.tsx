import React from "react";
import { useQuery } from "react-query";
import { useAuth } from "../../hooks";
import {
  fetchSchedulesAdmin,
  response,
} from "../../store/actions/schedules/fetchSchedules";
import {
  SchedulesWrapper,
  ScheduleContainer,
  ScheduleDate,
  ScheduleDates,
} from "./allSchedules.styled";

const AllSchedules: React.FC = () => {
  const { state } = useAuth();

  const { data } = useQuery<response[]>(
    ["admin-schedules", state.user!.team_id, state.access_token],
    () => fetchSchedulesAdmin(state.user!.team_id, state.access_token)
  );

  return (
    <SchedulesWrapper>
      {data
        ? data.map((user) =>
            user.schedules.length > 0
              ? user.schedules.map((schedule) => (
                  <ScheduleContainer key={schedule.id}>
                    {schedule.reason + " // "}
                    {user.firstName + " " + user.lastName}
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
              : "No schedules found"
          )
        : "No user found, contact the database administrators to add employee"}
    </SchedulesWrapper>
  );
};

export default AllSchedules;
