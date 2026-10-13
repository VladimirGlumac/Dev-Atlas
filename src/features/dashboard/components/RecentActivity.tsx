import { CheckCircle2, Circle, PlayCircle } from "lucide-react";

import { Link } from "react-router";

import type { LessonProgressStatus } from "../../progress/types/progress";
import { formatRelativeTime } from "../../../lib/formatRelativeTime";

interface ActivityItem {
  id: string;
  status: LessonProgressStatus;
  updatedAt: string;

  lessonTitle: string;
  technologyName: string;
  sectionTitle: string;

  route: string;
}

interface RecentActivityProps {
  items: ActivityItem[];
}

const statusConfig = {
  "not-started": {
    label: "Not started",
    icon: Circle,
  },

  "in-progress": {
    label: "In progress",
    icon: PlayCircle,
  },

  completed: {
    label: "Completed",
    icon: CheckCircle2,
  },
} satisfies Record<
  LessonProgressStatus,
  {
    label: string;
    icon: typeof Circle;
  }
>;

export default function RecentActivity({ items }: RecentActivityProps) {
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
        No learning activity yet.
      </div>
    );
  }

  return (
    <div
      className="
        divide-y
        divide-slate-200
        overflow-hidden
        rounded-2xl
        border border-slate-200
        bg-white
        dark:divide-slate-800
        dark:border-slate-800
        dark:bg-slate-900
      "
    >
      {items.map((item) => {
        const status = statusConfig[item.status];

        const StatusIcon = status.icon;

        return (
          <Link
            key={item.id}
            to={item.route}
            className="
              flex items-start
              gap-4
              p-4
              transition
              hover:bg-slate-50
              dark:hover:bg-slate-800/60
            "
          >
            <span
              className="
                mt-0.5
                flex size-9
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-cyan-500/10
                text-cyan-600
                dark:text-cyan-400
              "
            >
              <StatusIcon size={17} />
            </span>

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-medium">{item.lessonTitle}</h3>

                <span
                  className="
                    rounded-full
                    bg-slate-100
                    px-2 py-1
                    text-[11px]
                    font-medium
                    text-slate-500
                    dark:bg-slate-800
                  "
                >
                  {status.label}
                </span>
              </div>

              <p className="mt-1 text-xs text-slate-500">
                {item.technologyName}
                {" · "}
                {item.sectionTitle}
              </p>

              <p className="mt-2 text-xs text-slate-400">
                {formatRelativeTime(item.updatedAt)}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
