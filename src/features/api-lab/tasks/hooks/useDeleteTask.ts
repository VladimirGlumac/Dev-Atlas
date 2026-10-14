import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteTask } from "../services/taskService";

import { taskQueryKeys } from "../api/taskQueryKeys";

export function useDeleteTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTask,

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: taskQueryKeys.all,
      });
    },
  });
}
