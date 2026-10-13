import { ArrowRight, Bookmark, BookOpen } from "lucide-react";
import { Link } from "react-router";

import { useBookmarks } from "../features/bookmarks/hooks/useBookmarks";

import {
  findLessonById,
  getSectionById,
  getTechnologyById,
} from "../features/learning/services/learningService";

import { buildLessonRoute } from "../features/learning/utils/learningRoutes";

export default function BookmarksPage() {
  const { bookmarks, isLoading, isError } = useBookmarks();

  if (isLoading) {
    return (
      <div className="px-6 py-10 lg:px-10">
        <p className="text-sm text-slate-500">Loading bookmarks...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="px-6 py-10 lg:px-10">
        <p className="text-sm text-red-500">Failed to load bookmarks.</p>
      </div>
    );
  }

  const bookmarkedLessons = bookmarks.flatMap((bookmark) => {
    if (bookmark.targetType !== "lesson") {
      return [];
    }

    const lesson = findLessonById(bookmark.targetId);

    if (!lesson) {
      return [];
    }

    const technology = getTechnologyById(lesson.technologyId);

    if (!technology) {
      return [];
    }

    const section = getSectionById(technology.id, lesson.sectionId);

    if (!section) {
      return [];
    }

    return [
      {
        bookmark,
        lesson,
        technology,
        section,
      },
    ];
  });

  return (
    <div className="px-6 py-10 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        <header className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
            Bookmarks
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Saved lessons
          </h1>

          <p className="mt-4 max-w-2xl leading-7 text-slate-600 dark:text-slate-400">
            Keep important lessons close and return to them whenever you need a
            quick reference.
          </p>
        </header>

        {bookmarkedLessons.length === 0 ? (
          <div
            className="
              rounded-3xl
              border border-dashed
              border-slate-300
              px-6 py-16
              text-center
              dark:border-slate-700
            "
          >
            <span
              className="
                mx-auto flex size-14
                items-center justify-center
                rounded-2xl
                bg-cyan-500/10
                text-cyan-600
                dark:text-cyan-400
              "
            >
              <Bookmark size={24} />
            </span>

            <h2 className="mt-5 text-xl font-semibold">No bookmarks yet</h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
              Bookmark lessons while learning and they will appear here.
            </p>

            <Link
              to="/learn"
              className="
                mt-6 inline-flex
                items-center gap-2
                rounded-xl
                bg-cyan-500
                px-5 py-3
                text-sm font-semibold
                text-slate-950
                transition
                hover:bg-cyan-400
              "
            >
              Explore lessons
              <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {bookmarkedLessons.map(
              ({ bookmark, lesson, technology, section }) => (
                <Link
                  key={bookmark.id}
                  to={buildLessonRoute(technology, section, lesson)}
                  className="
                    group rounded-2xl
                    border border-slate-200
                    bg-white
                    p-5
                    shadow-sm
                    transition
                    hover:-translate-y-1
                    hover:border-cyan-300
                    hover:shadow-lg
                    dark:border-slate-800
                    dark:bg-slate-900
                    dark:hover:border-cyan-800
                  "
                >
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className="
                        flex size-10
                        items-center justify-center
                        rounded-xl
                        bg-cyan-500/10
                        text-cyan-600
                        dark:text-cyan-400
                      "
                    >
                      <BookOpen size={18} />
                    </span>

                    <Bookmark size={17} className="text-cyan-500" />
                  </div>

                  <p className="mt-5 text-xs font-medium uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                    {technology.name}
                    {" · "}
                    {section.title}
                  </p>

                  <h2 className="mt-2 text-lg font-semibold">{lesson.title}</h2>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {lesson.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-cyan-600 dark:text-cyan-400">
                    Open lesson
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              ),
            )}
          </div>
        )}
      </div>
    </div>
  );
}
