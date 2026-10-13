import { ArrowUpRight, BookOpen } from "lucide-react";
import { Link } from "react-router";
import { getLessonsByIds, getSectionById } from "../services/learningService";
import { buildLessonRoute } from "../utils/learningRoutes";
import type { Technology } from "../types/learning";

interface RelatedLessonsProps {
  lessonIds?: string[];
  technology: Technology;
}

export default function RelatedLessons({
  lessonIds,
  technology,
}: RelatedLessonsProps) {
  if (!lessonIds?.length) {
    return null;
  }

  const relatedLessons = lessonIds
    ? getLessonsByIds(technology.id, lessonIds)
    : [];

  if (relatedLessons.length === 0) {
    return null;
  }

  return (
    <aside>
      <div
        className="
          rounded-2xl
          border border-slate-200
          bg-white
          p-5
          shadow-sm
          dark:border-slate-800
          dark:bg-slate-900
        "
      >
        <div className="flex items-center gap-2">
          <BookOpen size={18} className="text-cyan-600 dark:text-cyan-400" />

          <h2 className="font-semibold">Related lessons</h2>
        </div>

        <div className="mt-4 space-y-2">
          {relatedLessons.map((lesson) => {
            const section = getSectionById(technology.id, lesson.sectionId);

            if (!section) {
              return null;
            }

            return (
              <Link
                key={lesson.id}
                to={buildLessonRoute(technology, section, lesson)}
                className="
        group flex items-center
        justify-between gap-4
        rounded-xl
        border border-slate-200
        p-3
        transition
        hover:border-cyan-300
        hover:bg-slate-50
        dark:border-slate-800
        dark:hover:border-cyan-800
        dark:hover:bg-slate-800/60
      "
              >
                <div className="min-w-0">
                  <p className="text-sm font-medium">{lesson.title}</p>

                  <p className="mt-1 text-xs text-slate-500">
                    {lesson.difficulty}
                  </p>
                </div>

                <ArrowUpRight
                  size={16}
                  className="
          shrink-0 text-slate-400
          transition
          group-hover:text-cyan-500
        "
                />
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
