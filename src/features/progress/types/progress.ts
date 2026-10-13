export type LessonProgressStatus = "not-started" | "in-progress" | "completed";

export interface LessonProgress {
  id: string;
  userId: string;
  lessonId: string;

  status: LessonProgressStatus;

  startedAt?: string;
  completedAt?: string;

  updatedAt: string;
}
