export type BookmarkTargetType = "lesson";

export interface Bookmark {
  id: string;
  userId: string;

  targetType: BookmarkTargetType;
  targetId: string;

  createdAt: string;
}
