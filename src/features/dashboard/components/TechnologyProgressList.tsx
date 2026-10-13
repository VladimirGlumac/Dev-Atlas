import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

import type { Technology } from "../../learning/types/learning";

import { buildTechnologyRoute } from "../../learning/utils/learningRoutes";

interface TechnologyProgressItem {
  technology: Technology;

  totalLessons: number;
  completedLessons: number;
  inProgressLessons: number;
  percentage: number;
}

interface TechnologyProgressListProps {
  items: TechnologyProgressItem[];
}

export default function TechnologyProgressList({
  items,
}: TechnologyProgressListProps) {
  if (items.length === 0) {
    return (
      <div
        className="
          rounded-2xl
          border border-dashed
          border-slate-300
          p-8
          text-sm
          text-slate-500
          dark:border-slate-700
        "
      >
        No published learning content yet.
      </div>
    );
  }

  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        border border-slate-200
        bg-white
        dark:border-slate-800
        dark:bg-slate-900
      "
    >
      {items.map((item) => (
        <Link
          key={item.technology.id}
          to={buildTechnologyRoute(item.technology)}
          className="
            group block
            border-b border-slate-200
            p-5
            transition
            last:border-b-0
            hover:bg-slate-50
            dark:border-slate-800
            dark:hover:bg-slate-800/60
          "
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold">{item.technology.name}</h3>

              <p className="mt-1 text-xs text-slate-500">
                {item.completedLessons} of {item.totalLessons} completed
                {item.inProgressLessons > 0 &&
                  ` · ${item.inProgressLessons} in progress`}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">
                {item.percentage}%
              </span>

              <ArrowRight
                size={16}
                className="
                  text-slate-400
                  transition-transform
                  group-hover:translate-x-1
                "
              />
            </div>
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
                transition-[width]
                duration-300
              "
              style={{
                width: `${item.percentage}%`,
              }}
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
