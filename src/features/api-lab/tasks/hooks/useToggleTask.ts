import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toggleTask } from "../services/taskService";

import { taskQueryKeys } from "../api/taskQueryKeys";

export function useToggleTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: toggleTask,

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: taskQueryKeys.all,
      });
    },
  });
}
