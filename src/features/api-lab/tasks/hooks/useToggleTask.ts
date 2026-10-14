import { useMutation, useQueryClient } from "@tanstack/react-query";

import type { Task } from "../types/task";

import { toggleTask } from "../services/taskService";

import { taskQueryKeys } from "../api/taskQueryKeys";

export function useToggleTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: toggleTask,

    onSuccess: (updatedTask) => {
      queryClient.setQueryData<Task[]>(taskQueryKeys.all, (currentTasks) => {
        if (!currentTasks) {
          return currentTasks;
        }

        return currentTasks.map((task) =>
          task.id === updatedTask.id ? updatedTask : task,
        );
      });
    },
  });
}
