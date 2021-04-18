import { GET_SCHEDULE_OF_USER } from "../../../constants/api";
import { Schedule } from "../../context/schedules/schedules.context.interfaces";

export const fetchSchedules = async (
  id: string,
  token: string,
  setSchedules: React.Dispatch<React.SetStateAction<Schedule[]>>
) => {
  try {
    console.log(GET_SCHEDULE_OF_USER + id);
    await fetch(GET_SCHEDULE_OF_USER + id, {
      headers: {
        authentication: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setSchedules(data.schedules);
      });
  } catch (e) {
    console.log(e.message);
  }
};
