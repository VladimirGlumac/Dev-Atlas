import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import type { LessonProgressStatus } from "../types/progress";

import { getProgress, setLessonProgress } from "../services/progressService";

import { progressQueryKeys } from "../api/progressQueryKeys";

interface UpdateLessonProgressInput {
  lessonId: string;
  status: LessonProgressStatus;
}

export function useProgress() {
  const queryClient = useQueryClient();

  const progressQuery = useQuery({
    queryKey: progressQueryKeys.all,

    queryFn: getProgress,
  });

  const updateMutation = useMutation({
    mutationFn: ({ lessonId, status }: UpdateLessonProgressInput) =>
      setLessonProgress(lessonId, status),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: progressQueryKeys.all,
      });
    },
  });

  return {
    progress: progressQuery.data ?? [],

    isLoading: progressQuery.isPending,

    isError: progressQuery.isError,

    updateProgress: updateMutation.mutate,

    isUpdating: updateMutation.isPending,
  };
}
