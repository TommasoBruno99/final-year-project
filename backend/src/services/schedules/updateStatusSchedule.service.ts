import { Status } from ".prisma/client";
import { prisma } from "../../";
import { ScheduleResponse } from "../../utils/interfaces/schedules";

export const updateScheduleStatusService = async (
  schedule_id: number,
  status: Status
): Promise<ScheduleResponse> => {
  try {
    const updatedSchedule = await prisma.schedule.update({
      where: {
        id: schedule_id,
      },
      data: {
        status: status,
      },
    });

    return {
      success: true,
      schedules: updatedSchedule,
    };
  } catch (e) {
    return {
      success: false,
      error: e.message,
    };
  }
};
