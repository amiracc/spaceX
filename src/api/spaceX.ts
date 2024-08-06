import axios from "axios";
import { SanitizedLaunch, Launch } from "../interfaces";

// Creating an instance for reusability (in cases where we have more than one request type)
const axiosInstance = axios.create({
  baseURL: "https://api.spacexdata.com/v4",
});

// Sanitizing the data as we are interested in only a few fields, but also to handle possible errors
const sanitizeData = (data: Launch[]): SanitizedLaunch[] => {
  return data.map((launch) => ({
    id: launch.id,
    mission_name: launch.name || "Mission name unknown",
    launch_year: new Date(launch.date_utc).getFullYear(),
    status: launch.success,
    mission_patch: launch.links?.patch?.large || "",
  }));
};

export const fetchLaunches = async (): Promise<SanitizedLaunch[]> => {
  const response = await axiosInstance.get("/launches");
  return sanitizeData(response.data);
};
