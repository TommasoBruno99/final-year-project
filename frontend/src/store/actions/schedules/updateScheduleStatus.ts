import { UPDATE_SCHEDULE_STATUS } from "../../../constants/api";
import { Schedule } from "../../context/schedules/schedules.context.interfaces";

export const updateScheduleStatus = async ({
  schedule_id,
  status,
  state,
}: any): Promise<Schedule> => {
  let updatedSchedule: Schedule | undefined = undefined;
  try {
    await fetch(UPDATE_SCHEDULE_STATUS, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authentication: state.access_token,
      },
      body: JSON.stringify({
        schedule_id: parseInt(schedule_id),
        status: status,
      }),
    })
      .then((res) => res.json())
      .then((result) => (updatedSchedule = result.schedules));
  } catch (e) {
    console.log(e.message);
  }
  return updatedSchedule! as Schedule;
};
