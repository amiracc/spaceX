import { useQuery } from "@tanstack/react-query";
import { fetchLaunches } from "../api/spaceX";

// Hook for using neatly the results and loading/error states in the component
export const useLaunches = () => {
  return useQuery({ queryKey: ["launches"], queryFn: fetchLaunches });
};
