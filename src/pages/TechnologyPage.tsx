import { ArrowRight, BookOpen } from "lucide-react";

import { Link, useParams } from "react-router";

import TechnologyProgressCard from "../features/progress/components/TechnologyProgressCard";
import LessonStatusBadge from "../features/progress/components/LessonStatusBadge";

import { useTechnologyProgress } from "../features/progress/hooks/useTechnologyProgress";
import { useProgress } from "../features/progress/hooks/useProgress";

import {
  getLessonsBySection,
  getSectionsByTechnology,
  getTechnologyBySlug,
} from "../features/learning/services/learningService";

import { buildLessonRoute } from "../features/learning/utils/learningRoutes";

const difficultyStyles = {
  beginner: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",

  intermediate: "bg-amber-500/10 text-amber-700 dark:text-amber-400",

  advanced: "bg-red-500/10 text-red-700 dark:text-red-400",
};

export default function TechnologyPage() {
  const { technologySlug = "" } = useParams();

  const technology = getTechnologyBySlug(technologySlug);

  const technologyProgress = useTechnologyProgress(technology?.id ?? "");

  const { progress } = useProgress();

  if (!technologySlug) {
    return <div className="px-6 py-10">Invalid technology URL.</div>;
  }

  if (!technology) {
    return <div className="px-6 py-10">Technology not found.</div>;
  }

  const sections = getSectionsByTechnology(technology.id);

  return (
    <div className="px-6 py-10 lg:px-10">
      <div className="mx-auto max-w-350">
        <div className="mb-12">
          <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">
            {technology.name}
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight">
            {technology.name}
          </h1>

          <p className="mt-4 max-w-2xl leading-7 text-slate-600 dark:text-slate-400">
            {technology.description}
          </p>
        </div>

        {technologyProgress.totalLessons > 0 && (
          <div className="mb-12">
            <TechnologyProgressCard
              totalLessons={technologyProgress.totalLessons}
              completedLessons={technologyProgress.completedLessons}
              inProgressLessons={technologyProgress.inProgressLessons}
              percentage={technologyProgress.percentage}
            />
          </div>
        )}

        <div className="space-y-10">
          {sections.length === 0 ? (
            <div
              className="
                rounded-2xl
                border border-dashed
                border-slate-300
                p-8
                text-center
                dark:border-slate-700
              "
            >
              <h2 className="font-semibold">Content not published yet</h2>

              <p className="mt-2 text-sm text-slate-500">
                This technology is part of the learning roadmap, but its lessons
                have not been added yet.
              </p>
            </div>
          ) : (
            sections.map((section) => {
              const lessons = getLessonsBySection(technology.id, section.id);

              return (
                <section key={section.id}>
                  <div className="mb-4">
                    <h2 className="text-xl font-semibold">{section.title}</h2>

                    {section.description && (
                      <p className="mt-1 text-sm text-slate-500">
                        {section.description}
                      </p>
                    )}
                  </div>

                  {lessons.length === 0 ? (
                    <div
                      className="
                        rounded-2xl
                        border border-dashed
                        border-slate-300
                        p-6
                        text-sm
                        text-slate-500
                        dark:border-slate-700
                      "
                    >
                      Content coming later.
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {lessons.map((lesson) => {
                        const lessonProgress = progress.find(
                          (item) => item.lessonId === lesson.id,
                        );

                        const status = lessonProgress?.status ?? "not-started";

                        return (
                          <Link
                            key={lesson.id}
                            to={buildLessonRoute(technology, section, lesson)}
                            className="
                              group flex
                              items-center
                              justify-between
                              gap-6
                              rounded-2xl
                              border
                              border-slate-200
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
                            <div className="flex min-w-0 gap-4">
                              <span
                                className="
                                  flex size-10
                                  shrink-0
                                  items-center
                                  justify-center
                                  rounded-xl
                                  bg-cyan-500/10
                                  text-cyan-600
                                  dark:text-cyan-400
                                "
                              >
                                <BookOpen size={18} />
                              </span>

                              <div className="min-w-0">
                                <div className="flex flex-wrap items-center gap-2">
                                  <h3 className="font-semibold">
                                    {lesson.title}
                                  </h3>

                                  <span
                                    className={`
                                      rounded-full
                                      px-2 py-1
                                      text-xs
                                      font-medium
                                      ${difficultyStyles[lesson.difficulty]}
                                    `}
                                  >
                                    {lesson.difficulty}
                                  </span>

                                  <LessonStatusBadge status={status} />
                                </div>

                                <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
                                  {lesson.description}
                                </p>
                              </div>
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
                        );
                      })}
                    </div>
                  )}
                </section>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
