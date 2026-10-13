import { ArrowRight, CheckCircle2, Clock3, Construction } from "lucide-react";
import { Link } from "react-router";

import { technologies } from "../../learning/data/technologies";
import type { TechnologyStatus } from "../../learning/types/learning";

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

export default function TechnologyGrid() {
  return (
    <section className="px-6 py-16 lg:px-10">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              Technologies
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Explore the learning stack
            </h2>

            <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
              Every section grows with the actual material available in
              DevAtlas.
            </p>
          </div>

          <Link
            to="/learn"
            className="hidden items-center gap-2 text-sm font-semibold text-cyan-600 hover:text-cyan-500 sm:flex dark:text-cyan-400"
          >
            View all
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {technologies.map((technology) => {
            const status = statusConfig[technology.status];

            const StatusIcon = status.icon;

            return (
              <Link
                key={technology.id}
                to={`/learn/${technology.slug}`}
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
                  <h3 className="text-lg font-semibold">{technology.name}</h3>

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

                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {technology.description}
                </p>

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
    </section>
  );
}
