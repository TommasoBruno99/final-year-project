import { User } from ".prisma/client";

enum Status {
  PENDING,
  APPROVED,
  REJECTED,
}
export interface Schedule {
  startingDay: number;
  startingMonth: number;
  startingYear: number;
  endingDay: number;
  endingMonth: number;
  endingYear: number;
  status: string;
  reason: string;
}

export interface ScheduleResponse {
  success: boolean;
  schedules?: Schedule[] | Schedule;
  error?: string;
}

export interface allScheduleResponse {
  success: boolean;
  result?: (User & {
    schedules: Schedule[];
  })[];
  error?: string;
}
