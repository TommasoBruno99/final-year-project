export interface Schedule {
  startingDay: number;
  startingMonth: number;
  startingYear: number;
  endingDay: number;
  endingMonth: number;
  endingYear: number;
}

export interface ScheduleResponse {
  success: boolean;
  schedules?: Schedule[];
  error?: string;
}
