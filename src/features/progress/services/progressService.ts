import { DEMO_USER_ID } from "../../auth/constants/auth";

import type { LessonProgress, LessonProgressStatus } from "../types/progress";

import { localProgressRepository } from "./localProgressRepository";

const repository = localProgressRepository;

export async function getProgress(): Promise<LessonProgress[]> {
  return repository.getAll(DEMO_USER_ID);
}

export async function getLessonProgress(
  lessonId: string,
): Promise<LessonProgress | undefined> {
  return repository.getByLessonId(DEMO_USER_ID, lessonId);
}

export async function setLessonProgress(
  lessonId: string,
  status: LessonProgressStatus,
): Promise<LessonProgress> {
  return repository.setStatus(DEMO_USER_ID, lessonId, status);
}

export async function startLessonIfNeeded(
  lessonId: string,
): Promise<LessonProgress> {
  const existing = await repository.getByLessonId(DEMO_USER_ID, lessonId);

  if (existing) {
    return existing;
  }

  return repository.setStatus(DEMO_USER_ID, lessonId, "in-progress");
}
