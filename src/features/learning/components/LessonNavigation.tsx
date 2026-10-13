import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router";

import {
  getLessonNavigation,
  getSectionById,
} from "../services/learningService";

import { buildLessonRoute } from "../utils/learningRoutes";

import type { Lesson, Technology } from "../types/learning";

interface LessonNavigationProps {
  lesson: Lesson;
  technology: Technology;
}

export default function LessonNavigation({
  lesson,
  technology,
}: LessonNavigationProps) {
  const { previous, next } = getLessonNavigation(lesson);

  const previousSection = previous
    ? getSectionById(technology.id, previous.sectionId)
    : undefined;

  const nextSection = next
    ? getSectionById(technology.id, next.sectionId)
    : undefined;

  if (!previous && !next) {
    return null;
  }

  return (
    <nav
      aria-label="Lesson navigation"
      className="
        mt-12 grid gap-4
        sm:grid-cols-2
      "
    >
      <div>
        {previous && previousSection && (
          <Link
            to={buildLessonRoute(technology, previousSection, previous)}
            className="
              group flex h-full
              items-center gap-4
              rounded-2xl
              border border-slate-200
              bg-white
              p-5
              transition
              hover:border-cyan-300
              hover:shadow-md
              dark:border-slate-800
              dark:bg-slate-900
              dark:hover:border-cyan-800
            "
          >
            <ArrowLeft
              size={18}
              className="
                shrink-0
                text-slate-400
                transition-transform
                group-hover:-translate-x-1
                group-hover:text-cyan-500
              "
            />

            <div>
              <p className="text-xs text-slate-500">Previous lesson</p>

              <p className="mt-1 font-semibold">{previous.title}</p>
            </div>
          </Link>
        )}
      </div>

      <div>
        {next && nextSection && (
          <Link
            to={buildLessonRoute(technology, nextSection, next)}
            className="
              group flex h-full
              items-center
              justify-between
              gap-4
              rounded-2xl
              border border-slate-200
              bg-white
              p-5
              text-right
              transition
              hover:border-cyan-300
              hover:shadow-md
              dark:border-slate-800
              dark:bg-slate-900
              dark:hover:border-cyan-800
            "
          >
            <div className="ml-auto">
              <p className="text-xs text-slate-500">Next lesson</p>

              <p className="mt-1 font-semibold">{next.title}</p>
            </div>

            <ArrowRight
              size={18}
              className="
                shrink-0
                text-slate-400
                transition-transform
                group-hover:translate-x-1
                group-hover:text-cyan-500
              "
            />
          </Link>
        )}
      </div>
    </nav>
  );
}
