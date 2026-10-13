export const progressQueryKeys = {
  all: ["progress"] as const,

  lesson: (lessonId: string) => ["progress", "lesson", lessonId] as const,
};
