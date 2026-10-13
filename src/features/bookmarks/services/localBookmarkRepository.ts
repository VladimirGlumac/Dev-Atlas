import type { Bookmark } from "../types/bookmark";

import type { BookmarkRepository } from "./bookmarkRepository";

const STORAGE_KEY = "devatlas-bookmarks";

function readBookmarks(): Bookmark[] {
  const stored = localStorage.getItem(STORAGE_KEY);

  if (!stored) {
    return [];
  }

  try {
    const parsed: unknown = JSON.parse(stored);

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed as Bookmark[];
  } catch {
    return [];
  }
}

function writeBookmarks(bookmarks: Bookmark[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
}

export const localBookmarkRepository: BookmarkRepository = {
  async getAll(userId): Promise<Bookmark[]> {
    return readBookmarks().filter((bookmark) => bookmark.userId === userId);
  },

  async add(bookmark): Promise<Bookmark> {
    const bookmarks = readBookmarks();

    const alreadyExists = bookmarks.some(
      (item) =>
        item.userId === bookmark.userId && item.targetId === bookmark.targetId,
    );

    if (alreadyExists) {
      return bookmark;
    }

    const nextBookmarks = [...bookmarks, bookmark];

    writeBookmarks(nextBookmarks);

    return bookmark;
  },

  async remove(userId, targetId): Promise<void> {
    const bookmarks = readBookmarks();

    const nextBookmarks = bookmarks.filter(
      (bookmark) =>
        !(bookmark.userId === userId && bookmark.targetId === targetId),
    );

    writeBookmarks(nextBookmarks);
  },

  async isBookmarked(userId, targetId): Promise<boolean> {
    return readBookmarks().some(
      (bookmark) =>
        bookmark.userId === userId && bookmark.targetId === targetId,
    );
  },
};
