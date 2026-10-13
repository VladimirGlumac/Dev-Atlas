import type { LessonProgress, LessonProgressStatus } from "../types/progress";

import type { ProgressRepository } from "./progressRepository";

const STORAGE_KEY = "devatlas-progress";

function readProgress(): LessonProgress[] {
  const stored = localStorage.getItem(STORAGE_KEY);

  if (!stored) {
    return [];
  }

  try {
    const parsed: unknown = JSON.parse(stored);

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed as LessonProgress[];
  } catch {
    return [];
  }
}

function writeProgress(progress: LessonProgress[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function createProgressEntry(
  userId: string,
  lessonId: string,
  status: LessonProgressStatus,
): LessonProgress {
  const now = new Date().toISOString();

  return {
    id: crypto.randomUUID(),

    userId,
    lessonId,

    status,

    startedAt: status === "not-started" ? undefined : now,

    completedAt: status === "completed" ? now : undefined,

    updatedAt: now,
  };
}

export const localProgressRepository: ProgressRepository = {
  async getAll(userId): Promise<LessonProgress[]> {
    return readProgress().filter((item) => item.userId === userId);
  },

  async getByLessonId(userId, lessonId): Promise<LessonProgress | undefined> {
    return readProgress().find(
      (item) => item.userId === userId && item.lessonId === lessonId,
    );
  },

  async setStatus(userId, lessonId, status): Promise<LessonProgress> {
    const progress = readProgress();

    const existing = progress.find(
      (item) => item.userId === userId && item.lessonId === lessonId,
    );

    if (!existing) {
      const newEntry = createProgressEntry(userId, lessonId, status);

      writeProgress([...progress, newEntry]);

      return newEntry;
    }

    const now = new Date().toISOString();

    const updatedEntry: LessonProgress = {
      ...existing,

      status,

      startedAt:
        status === "not-started" ? undefined : (existing.startedAt ?? now),

      completedAt: status === "completed" ? now : undefined,

      updatedAt: now,
    };

    const nextProgress = progress.map((item) =>
      item.id === updatedEntry.id ? updatedEntry : item,
    );

    writeProgress(nextProgress);

    return updatedEntry;
  },
};
