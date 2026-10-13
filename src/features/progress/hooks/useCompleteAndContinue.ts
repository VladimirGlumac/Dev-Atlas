import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";

import { progressQueryKeys } from "../api/progressQueryKeys";
import { setLessonProgress } from "../services/progressService";

interface CompleteAndContinueInput {
  lessonId: string;
  nextRoute?: string;
}

export function useCompleteAndContinue() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: ({ lessonId }: CompleteAndContinueInput) =>
      setLessonProgress(lessonId, "completed"),

    onSuccess: async (_data, variables) => {
      await queryClient.invalidateQueries({
        queryKey: progressQueryKeys.all,
      });

      if (variables.nextRoute) {
        navigate(variables.nextRoute);
      }
    },
  });

  return {
    completeAndContinue: mutation.mutate,

    isCompleting: mutation.isPending,
  };
}
