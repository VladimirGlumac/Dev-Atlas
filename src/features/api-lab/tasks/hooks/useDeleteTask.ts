import { useMutation, useQueryClient } from "@tanstack/react-query";

import type { Task } from "../types/task";

import { deleteTask } from "../services/taskService";

import { taskQueryKeys } from "../api/taskQueryKeys";

export function useDeleteTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTask,

    onSuccess: (deletedTaskId) => {
      queryClient.setQueryData<Task[]>(taskQueryKeys.all, (currentTasks) => {
        if (!currentTasks) {
          return currentTasks;
        }

        return currentTasks.filter((task) => task.id !== deletedTaskId);
      });
    },
  });
}
