import { useEffect } from "react";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { progressQueryKeys } from "../api/progressQueryKeys";

import { startLessonIfNeeded } from "../services/progressService";

export function useAutoStartLessonProgress(lessonId: string): void {
  const queryClient = useQueryClient();

  const { mutate: startLesson } = useMutation({
    mutationFn: startLessonIfNeeded,

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: progressQueryKeys.all,
      });
    },
  });

  useEffect(() => {
    if (!lessonId) {
      return;
    }

    startLesson(lessonId);
  }, [lessonId, startLesson]);
}
