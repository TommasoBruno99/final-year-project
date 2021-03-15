import { prisma } from "../..";
import { ScheduleResponse } from "../../utils/interfaces/schedules";

export const getScheduleOfUser = async (
  userId: number
): Promise<ScheduleResponse> => {
  try {
    const schedulesByUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        schedules: true,
      },
    });

    return {
      success: true,
      schedules: schedulesByUser?.schedules,
    };
  } catch (e) {
    return {
      success: false,
      error: e.message,
    };
  }
};
