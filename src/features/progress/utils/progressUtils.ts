import type { Lesson } from "../../learning/types/learning";
import type { LessonProgress } from "../types/progress";

import type { TechnologyProgressSummary } from "../types/progressSummary";

export function calculateTechnologyProgress(
  technologyId: string,
  lessons: Lesson[],
  progress: LessonProgress[],
): TechnologyProgressSummary {
  const publishedLessons = lessons.filter(
    (lesson) => lesson.status === "published",
  );

  const publishedLessonIds = new Set(
    publishedLessons.map((lesson) => lesson.id),
  );

  let completedLessons = 0;
  let inProgressLessons = 0;

  for (const item of progress) {
    if (!publishedLessonIds.has(item.lessonId)) {
      continue;
    }

    if (item.status === "completed") {
      completedLessons += 1;
    }

    if (item.status === "in-progress") {
      inProgressLessons += 1;
    }
  }

  const totalLessons = publishedLessons.length;

  const percentage =
    totalLessons === 0
      ? 0
      : Math.round((completedLessons / totalLessons) * 100);

  return {
    technologyId,
    totalLessons,
    completedLessons,
    inProgressLessons,
    percentage,
  };
}
