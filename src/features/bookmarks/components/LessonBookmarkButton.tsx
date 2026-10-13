import { Bookmark, BookmarkCheck } from "lucide-react";

import { useBookmarks } from "../hooks/useBookmarks";

interface LessonBookmarkButtonProps {
  lessonId: string;
}

export default function LessonBookmarkButton({
  lessonId,
}: LessonBookmarkButtonProps) {
  const { bookmarks, addBookmark, removeBookmark, isAdding, isRemoving } =
    useBookmarks();

  const isBookmarked = bookmarks.some(
    (bookmark) =>
      bookmark.targetType === "lesson" && bookmark.targetId === lessonId,
  );

  const isPending = isAdding || isRemoving;

  function handleToggle(): void {
    if (isPending) {
      return;
    }

    if (isBookmarked) {
      removeBookmark(lessonId);
      return;
    }

    addBookmark(lessonId);
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      disabled={isPending}
      aria-pressed={isBookmarked}
      className="
        inline-flex items-center
        gap-2 rounded-xl
        border border-slate-200
        bg-white
        px-4 py-2.5
        text-sm font-medium
        text-slate-700
        transition
        hover:border-cyan-300
        hover:text-cyan-600
        disabled:cursor-not-allowed
        disabled:opacity-50
        dark:border-slate-800
        dark:bg-slate-900
        dark:text-slate-300
        dark:hover:border-cyan-800
        dark:hover:text-cyan-400
      "
    >
      {isBookmarked ? (
        <>
          <BookmarkCheck size={17} />
          Bookmarked
        </>
      ) : (
        <>
          <Bookmark size={17} />
          Bookmark
        </>
      )}
    </button>
  );
}
