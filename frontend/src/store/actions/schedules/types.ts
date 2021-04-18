import { Schedule } from "../../context/schedules/schedules.context.interfaces";

interface FetchSchedule {
  readonly type: "fetch_schedule";
  readonly payload: Schedule[];
}

interface AddSchedule {
  readonly type: "add_schedule";
  readonly payload: Schedule;
}

type ScheduleTypes = FetchSchedule | AddSchedule;

export type { ScheduleTypes };
