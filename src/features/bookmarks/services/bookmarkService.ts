import { DEMO_USER_ID } from "../../auth/constants/auth";

import { localBookmarkRepository } from "./localBookmarkRepository";

import type { Bookmark } from "../types/bookmark";

const repository = localBookmarkRepository;

export async function getBookmarks(): Promise<Bookmark[]> {
  return repository.getAll(DEMO_USER_ID);
}

export async function addLessonBookmark(lessonId: string): Promise<Bookmark> {
  const bookmark: Bookmark = {
    id: crypto.randomUUID(),

    userId: DEMO_USER_ID,

    targetType: "lesson",
    targetId: lessonId,

    createdAt: new Date().toISOString(),
  };

  return repository.add(bookmark);
}

export async function removeLessonBookmark(lessonId: string): Promise<void> {
  return repository.remove(DEMO_USER_ID, lessonId);
}

export async function isLessonBookmarked(lessonId: string): Promise<boolean> {
  return repository.isBookmarked(DEMO_USER_ID, lessonId);
}
