import React, { useState } from "react";
import { ADD_SCHEDULE_API } from "../../constants/api";
import { useAuth } from "../../hooks";
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

  const submitSchedule = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const schedule = {
        startingDay: parseInt(startDay),
        startingMonth: parseInt(startMonth),
        startingYear: parseInt(startYear),
        endingDay: parseInt(endDay),
        endingMonth: parseInt(endMonth),
        endingYear: parseInt(endYear),
        reason: reason,
      };

      await fetch(ADD_SCHEDULE_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authentication: state.access_token,
        },
        body: JSON.stringify({
          user_id: state.user!.id,
          schedule: schedule,
        }),
      });
    } catch (e) {
      console.log(e.message);
    } finally {
      setStartDay("");
      setStartMonth("");
      setStartYear("");
      setEndDay("");
      setEndMonth("");
      setEndYear("");
      setReason("");
    }
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
