import { CheckCircle2, Circle, PlayCircle } from "lucide-react";

import { Link } from "react-router";

import type { LessonProgressStatus } from "../types/progress";

interface ProgressLessonRowProps {
  title: string;
  description: string;
  route: string;
  status: LessonProgressStatus;
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

export default function ProgressLessonRow({
  title,
  description,
  route,
  status,
}: ProgressLessonRowProps) {
  const config = statusConfig[status];

  const StatusIcon = config.icon;

  return (
    <Link
      to={route}
      className="
        flex items-start gap-4
        rounded-xl
        p-3
        transition
        hover:bg-slate-100
        dark:hover:bg-slate-800
      "
    >
      <span
        className="
          mt-0.5
          flex size-8
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-cyan-500/10
          text-cyan-600
          dark:text-cyan-400
        "
      >
        <StatusIcon size={16} />
      </span>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-medium">{title}</h3>

          <span className="text-xs text-slate-500">{config.label}</span>
        </div>

        <p className="mt-1 text-sm text-slate-500">{description}</p>
      </div>
    </Link>
  );
}
