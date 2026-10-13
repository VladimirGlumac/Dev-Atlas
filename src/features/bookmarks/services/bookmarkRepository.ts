import type { Bookmark } from "../types/bookmark";

export interface BookmarkRepository {
  getAll(userId: string): Promise<Bookmark[]>;

  add(bookmark: Bookmark): Promise<Bookmark>;

  remove(userId: string, targetId: string): Promise<void>;

  isBookmarked(userId: string, targetId: string): Promise<boolean>;
}
