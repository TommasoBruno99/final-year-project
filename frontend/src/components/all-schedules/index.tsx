import React from "react";
import { useMutation, useQuery } from "react-query";
import { queryClient } from "../../app";
import { useAuth } from "../../hooks";
import {
  fetchSchedulesAdmin,
  response,
} from "../../store/actions/schedules/fetchSchedules";
import { updateScheduleStatus } from "../../store/actions/schedules/updateScheduleStatus";
import {
  SchedulesWrapper,
  ScheduleContainer,
  ScheduleDate,
  ScheduleDates,
  Button,
  ButtonWrapper,
} from "./allSchedules.styled";

const AllSchedules: React.FC = () => {
  const { state } = useAuth();

  const { data } = useQuery<response[]>(
    ["admin-schedules", state.user!.team_id, state.access_token],
    () => fetchSchedulesAdmin(state.user!.team_id, state.access_token)
  );

  const mutation = useMutation(updateScheduleStatus, {
    onSuccess: () => {
      queryClient.refetchQueries(["admin-schedules"], {
        active: true,
      });
    },
  });

  const updateStatus = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    status: string,
    id: string
  ) => {
    evt.preventDefault();
    mutation.mutate({ schedule_id: id, status, state });
  };

  return (
    <SchedulesWrapper>
      {data
        ? data.map((user) =>
            user.schedules.length > 0
              ? user.schedules.map((schedule) =>
                  schedule.status === "PENDING" ? (
                    <ScheduleContainer key={schedule.id}>
                      {schedule.reason + " // "}
                      {user.firstName +
                        " " +
                        user.lastName +
                        " (" +
                        user.seniority +
                        " )"}
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
                      <ButtonWrapper>
                        <Button
                          value="Approve"
                          onClick={(evt) =>
                            updateStatus(evt, "APPROVED", schedule.id)
                          }
                        >
                          Approve
                        </Button>
                        <Button
                          value="Reject"
                          onClick={(evt) =>
                            updateStatus(evt, "REJECTED", schedule.id)
                          }
                        >
                          {" "}
                          Reject{" "}
                        </Button>
                      </ButtonWrapper>
                    </ScheduleContainer>
                  ) : null
                )
              : "No schedules found"
          )
        : "No user found, contact the database administrators to add an employee"}
    </SchedulesWrapper>
  );
};

export default AllSchedules;
