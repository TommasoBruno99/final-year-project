import React, { useState } from "react";
import { useMutation } from "react-query";
import { useAuth } from "../../hooks";
import { addSchedule } from "../../store/actions/schedules/addSchedule";
import { Schedule } from "../../store/context/schedules/schedules.context.interfaces";
import { queryClient } from "../../app";
import {
  HolidayForm,
  HolidayFormInput,
  HolidayWrapper,
  HolidayFlexRow,
  HolidayDayMonthYear,
  HolidayLabel,
  HolidayFormSubmit,
} from "./holidaysOptions.styled";

const HolidaysForm: React.FC = () => {
  const { state } = useAuth();
  const [startDay, setStartDay] = useState("");
  const [startMonth, setStartMonth] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endDay, setEndDay] = useState("");
  const [endMonth, setEndMonth] = useState("");
  const [endYear, setEndYear] = useState("");
  const [reason, setReason] = useState("");

  const mutation = useMutation(addSchedule, {
    onSuccess: () => {
      queryClient.refetchQueries(["my-schedules"], { active: true });
    },
  });

  const submitSchedule = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const schedule = {
      startingDay: parseInt(startDay),
      startingMonth: parseInt(startMonth),
      startingYear: parseInt(startYear),
      endingDay: parseInt(endDay),
      endingMonth: parseInt(endMonth),
      endingYear: parseInt(endYear),
      reason: reason,
    } as Schedule;
    mutation.mutate({ schedule, state });
    setStartDay("");
    setStartMonth("");
    setStartYear("");
    setEndDay("");
    setEndMonth("");
    setEndYear("");
  };

  return (
    <HolidayForm>
      <HolidayWrapper onSubmit={submitSchedule}>
        <HolidayFormInput
          type="text"
          value={reason}
          placeholder="Reason for holiday request"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setReason(e.target.value)
          }
        />
        <HolidayLabel> Starting date </HolidayLabel>
        <HolidayFlexRow>
          <HolidayDayMonthYear
            type="text"
            placeholder="Start day"
            value={startDay}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setStartDay(e.target.value)
            }
          />
          <HolidayDayMonthYear
            type="text"
            placeholder="Start month"
            value={startMonth}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setStartMonth(e.target.value)
            }
          />
          <HolidayDayMonthYear
            type="text"
            value={startYear}
            placeholder="Start year"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setStartYear(e.target.value)
            }
          />
        </HolidayFlexRow>
        <HolidayLabel> Ending date </HolidayLabel>
        <HolidayFlexRow>
          <HolidayDayMonthYear
            type="text"
            value={endDay}
            placeholder="End day"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEndDay(e.target.value)
            }
          />
          <HolidayDayMonthYear
            type="text"
            value={endMonth}
            placeholder="End month"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEndMonth(e.target.value)
            }
          />
          <HolidayDayMonthYear
            type="text"
            value={endYear}
            placeholder="End year"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEndYear(e.target.value)
            }
          />
        </HolidayFlexRow>
        <HolidayFormSubmit type="submit"> Request Holiday </HolidayFormSubmit>
      </HolidayWrapper>
    </HolidayForm>
  );
};

export default HolidaysForm;
