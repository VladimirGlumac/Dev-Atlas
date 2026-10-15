import { useMutation, useQueryClient } from "@tanstack/react-query";

import type { Task } from "../types/task";

import { toggleTask } from "../services/taskService";

import { taskQueryKeys } from "../api/taskQueryKeys";

interface ToggleTaskContext {
  previousTasks?: Task[];
}

export function useToggleTask() {
  const queryClient = useQueryClient();

  return useMutation<Task, Error, number, ToggleTaskContext>({
    mutationFn: toggleTask,

    onMutate: async (taskId) => {
      await queryClient.cancelQueries({
        queryKey: taskQueryKeys.all,
      });

      const previousTasks = queryClient.getQueryData<Task[]>(taskQueryKeys.all);

      queryClient.setQueryData<Task[]>(taskQueryKeys.all, (currentTasks) => {
        if (!currentTasks) {
          return currentTasks;
        }

        return currentTasks.map((task) =>
          task.id === taskId
            ? {
                ...task,
                completed: !task.completed,
              }
            : task,
        );
      });

      return {
        previousTasks,
      };
    },

    onError: (_error, _taskId, context) => {
      if (!context?.previousTasks) {
        return;
      }

      queryClient.setQueryData(taskQueryKeys.all, context.previousTasks);
    },

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

    onSettled: async () => {
      await queryClient.invalidateQueries({
        queryKey: taskQueryKeys.all,
      });
    },
  });
}
