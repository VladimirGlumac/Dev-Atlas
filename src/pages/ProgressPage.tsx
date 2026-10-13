import { BarChart3 } from "lucide-react";

import {
  getAllPublishedLessons,
  getSectionById,
} from "../features/learning/services/learningService";

import { buildLessonRoute } from "../features/learning/utils/learningRoutes";

import { useProgress } from "../features/progress/hooks/useProgress";

import ProgressLessonRow from "../features/progress/components/ProgressLessonRow";

import { technologies } from "../features/learning/data/technologies";

export default function ProgressPage() {
  const { progress, isLoading, isError } = useProgress();

  const publishedLessons = getAllPublishedLessons();

  const completedCount = progress.filter(
    (item) => item.status === "completed",
  ).length;

  const totalLessons = publishedLessons.length;

  const overallPercentage =
    totalLessons === 0 ? 0 : Math.round((completedCount / totalLessons) * 100);

  if (isLoading) {
    return (
      <div className="px-6 py-10 lg:px-10">
        <p className="text-sm text-slate-500">Loading progress...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="px-6 py-10 lg:px-10">
        <p className="text-sm text-red-500">Failed to load progress.</p>
      </div>
    );
  }

  return (
    <div className="px-6 py-10 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        <header>
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
            Progress
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Learning progress
          </h1>

          <p className="mt-4 max-w-2xl leading-7 text-slate-600 dark:text-slate-400">
            Track completed lessons and continue through your learning path.
          </p>
        </header>

        <section
          className="
            mt-10
            rounded-3xl
            border border-slate-200
            bg-white
            p-6
            shadow-sm
            dark:border-slate-800
            dark:bg-slate-900
          "
        >
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Overall progress
              </p>

              <p className="mt-2 text-4xl font-bold">{overallPercentage}%</p>

              <p className="mt-2 text-sm text-slate-500">
                {completedCount} of {totalLessons} lessons completed
              </p>
            </div>

            <span
              className="
                flex size-12
                items-center
                justify-center
                rounded-2xl
                bg-cyan-500/10
                text-cyan-600
                dark:text-cyan-400
              "
            >
              <BarChart3 size={22} />
            </span>
          </div>

          <div
            className="
              mt-6 h-3
              overflow-hidden
              rounded-full
              bg-slate-100
              dark:bg-slate-800
            "
          >
            <div
              className="
                h-full
                rounded-full
                bg-cyan-500
                transition-[width]
                duration-300
              "
              style={{
                width: `${overallPercentage}%`,
              }}
            />
          </div>
        </section>

        <section className="mt-10 space-y-8">
          {technologies.map((technology) => {
            const lessons = publishedLessons.filter(
              (lesson) => lesson.technologyId === technology.id,
            );

            if (lessons.length === 0) {
              return null;
            }

            const completedLessons = lessons.filter((lesson) =>
              progress.some(
                (item) =>
                  item.lessonId === lesson.id && item.status === "completed",
              ),
            );

            const percentage = Math.round(
              (completedLessons.length / lessons.length) * 100,
            );

            return (
              <div
                key={technology.id}
                className="
                    rounded-2xl
                    border border-slate-200
                    bg-white
                    p-5
                    dark:border-slate-800
                    dark:bg-slate-900
                  "
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-semibold">{technology.name}</h2>

                    <p className="mt-1 text-sm text-slate-500">
                      {completedLessons.length} of {lessons.length} completed
                    </p>
                  </div>

                  <span className="font-semibold text-cyan-600 dark:text-cyan-400">
                    {percentage}%
                  </span>
                </div>

                <div
                  className="
                      mt-4 h-2
                      overflow-hidden
                      rounded-full
                      bg-slate-100
                      dark:bg-slate-800
                    "
                >
                  <div
                    className="
                        h-full
                        rounded-full
                        bg-cyan-500
                      "
                    style={{
                      width: `${percentage}%`,
                    }}
                  />
                </div>

                <div className="mt-5 space-y-1">
                  {lessons.map((lesson) => {
                    const lessonProgress = progress.find(
                      (item) => item.lessonId === lesson.id,
                    );

                    const status = lessonProgress?.status ?? "not-started";

                    const section = getSectionById(
                      technology.id,
                      lesson.sectionId,
                    );

                    if (!section) {
                      return null;
                    }

                    return (
                      <ProgressLessonRow
                        key={lesson.id}
                        title={lesson.title}
                        description={lesson.description}
                        status={status}
                        route={buildLessonRoute(technology, section, lesson)}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}
