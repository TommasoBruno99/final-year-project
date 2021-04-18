import { Role } from ".prisma/client";
import { prisma } from "../../";
import { allScheduleResponse } from "../../utils/interfaces/schedules";

export const getAllSchedulesService = async (): Promise<allScheduleResponse> => {
  try {
    const result = await prisma.user.findMany({
      where: {
        role: Role.USER,
      },
      include: {
        schedules: true,
      },
    });

    return {
      success: true,
      result,
    };
  } catch (e) {
    return {
      success: false,
      error: e.message,
    };
  }
};
