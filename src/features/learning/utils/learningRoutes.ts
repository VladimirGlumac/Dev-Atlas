import type { LearningSection, Lesson, Technology } from "../types/learning";

export function buildTechnologyRoute(
  technology: Pick<Technology, "slug">,
): string {
  return `/learn/${technology.slug}`;
}

export function buildLessonRoute(
  technology: Pick<Technology, "slug">,
  section: Pick<LearningSection, "slug">,
  lesson: Pick<Lesson, "slug">,
): string {
  return `/learn/${technology.slug}/${section.slug}/${lesson.slug}`;
}
