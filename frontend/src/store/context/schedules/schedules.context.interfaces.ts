export interface Schedule {
  id: string;
  startingDay: number;
  startingMonth: number;
  startingYear: number;
  endingDay: number;
  endingMonth: number;
  endingYear: number;
  reason: string;
}

export interface IScheduleState {
  schedules: Schedule[];
}

export interface IScheduleContext {
  schedules: Schedule[];
  setSchedules: React.Dispatch<React.SetStateAction<Schedule[]>>;
}

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  seniority: string;
  role: string;
};
