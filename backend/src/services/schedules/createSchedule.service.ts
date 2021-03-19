import { prisma } from "../../";
import { Schedule, ScheduleResponse } from "../../utils/interfaces/schedules";

export const createScheduleService = async (
  user_id: number,
  schedule: Schedule
): Promise<ScheduleResponse> => {
  try {
    const newSchedule = await prisma.schedule.create({
      data: {
        startingDay: schedule.startingDay,
        startingMonth: schedule.startingMonth,
        startingYear: schedule.startingYear,
        endingDay: schedule.endingDay,
        endingMonth: schedule.endingMonth,
        endingYear: schedule.endingYear,
        reason: schedule.reason,
        user_id: user_id,
      },
    });

    return {
      success: true,
      schedules: newSchedule,
    };
  } catch (e) {
    return {
      success: false,
      error: e.message,
    };
  }
};
