import { ADD_SCHEDULE_API } from "../../../constants/api";
import { Schedule } from "../../context/schedules/schedules.context.interfaces";

export const addSchedule = async ({
  schedule,
  state,
}: any): Promise<Schedule> => {
  let newSchedule: Schedule | null = null;
  try {
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
    })
      .then((res) => res.json())
      .then((result) => (newSchedule = result.schedules));
  } catch (e) {
    console.log(e.message);
  }
  return newSchedule! as Schedule;
};
