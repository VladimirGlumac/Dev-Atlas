import { ArrowRight, CheckCircle2, Clock3, Construction } from "lucide-react";
import { Link } from "react-router";
import { getPublishedLessonCount } from "../features/learning/services/learningService";
import { technologies } from "../features/learning/data/technologies";
import { buildTechnologyRoute } from "../features/learning/utils/learningRoutes";
import type { TechnologyStatus } from "../features/learning/types/learning";

const statusConfig: Record<
  TechnologyStatus,
  {
    label: string;
    icon: typeof CheckCircle2;
  }
> = {
  available: {
    label: "Available",
    icon: CheckCircle2,
  },

  "in-progress": {
    label: "In progress",
    icon: Construction,
  },

  planned: {
    label: "Planned",
    icon: Clock3,
  },
};

export default function LearnPage() {
  return (
    <div className="px-6 py-10 lg:px-10">
      <div className="mx-auto max-w-350">
        <header className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
            Learn
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Learning Hub
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-400">
            Explore the technologies, tools and concepts that make up the
            DevAtlas learning path.
          </p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {technologies.map((technology) => {
            const status = statusConfig[technology.status];
            const StatusIcon = status.icon;

            const publishedLessonCount = getPublishedLessonCount(technology.id);

            return (
              <Link
                key={technology.id}
                to={buildTechnologyRoute(technology)}
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
                  <h2 className="text-lg font-semibold">{technology.name}</h2>

                  <span
                    className="
            inline-flex shrink-0
            items-center gap-1.5
            rounded-full
            bg-slate-100
            px-2.5 py-1
            text-xs font-medium
            text-slate-600
            dark:bg-slate-800
            dark:text-slate-300
          "
                  >
                    <StatusIcon size={13} />

                    {status.label}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-200">
                  {technology.description}
                </p>

                {publishedLessonCount > 0 && (
                  <p className="mt-4 text-xs font-medium text-slate-200">
                    {publishedLessonCount} published{" "}
                    {publishedLessonCount === 1 ? "lesson" : "lessons"}
                  </p>
                )}

                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-cyan-600 dark:text-cyan-400">
                  Explore
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
