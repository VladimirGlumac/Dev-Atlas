import type { LessonProgress, LessonProgressStatus } from "../types/progress";

export interface ProgressRepository {
  getAll(userId: string): Promise<LessonProgress[]>;

  getByLessonId(
    userId: string,
    lessonId: string,
  ): Promise<LessonProgress | undefined>;

  setStatus(
    userId: string,
    lessonId: string,
    status: LessonProgressStatus,
  ): Promise<LessonProgress>;
}
