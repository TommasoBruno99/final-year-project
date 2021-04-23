import {
  GET_ALL_SCHEDULES,
  GET_SCHEDULE_OF_USER,
} from "../../../constants/api";
import { Schedule } from "../../context/schedules/schedules.context.interfaces";

export interface response {
  firstName: string;
  lastName: string;
  schedules: Schedule[];
}

export const fetchSchedules = async (id: string, token: string) => {
  let schedules: Schedule[] = [];
  try {
    await fetch(GET_SCHEDULE_OF_USER + id, {
      headers: {
        authentication: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        schedules = data.schedules;
      });
  } catch (e) {
    throw new Error(e.message);
  }
  return schedules;
};

export const fetchSchedulesAdmin = async (team: number, token: string) => {
  let res: response[] = [];

  try {
    await fetch(GET_ALL_SCHEDULES + team, {
      headers: {
        authentication: token,
      },
    })
      .then((res) => res.json())
      .then((result_two) => (res = result_two.result));
  } catch (e) {
    console.log(e.message);
  }

  return res;
};
