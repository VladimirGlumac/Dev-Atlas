import { getLessonsByTechnology } from "../../learning/services/learningService";

import { useProgress } from "./useProgress";

import { calculateTechnologyProgress } from "../utils/progressUtils";

export function useTechnologyProgress(technologyId: string) {
  const { progress, isLoading, isError } = useProgress();

  const lessons = getLessonsByTechnology(technologyId);

  const summary = calculateTechnologyProgress(technologyId, lessons, progress);

  return {
    ...summary,

    isLoading,
    isError,
  };
}
