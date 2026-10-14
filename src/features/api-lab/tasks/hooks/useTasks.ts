import { useQuery } from "@tanstack/react-query";

import { fetchTasks } from "../services/taskService";

import { taskQueryKeys } from "../api/taskQueryKeys";

export function useTasks() {
  return useQuery({
    queryKey: taskQueryKeys.all,

    queryFn: fetchTasks,

    staleTime: 30_000,
  });
}
