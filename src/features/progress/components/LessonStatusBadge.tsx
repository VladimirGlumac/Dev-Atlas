import { CheckCircle2, Circle, PlayCircle } from "lucide-react";

import type { LessonProgressStatus } from "../types/progress";

interface LessonStatusBadgeProps {
  status: LessonProgressStatus;
}

const statusConfig = {
  "not-started": {
    label: "Not started",
    icon: Circle,
    className:
      "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400",
  },

  "in-progress": {
    label: "In progress",
    icon: PlayCircle,
    className: "bg-amber-500/10 text-amber-700 dark:text-amber-400",
  },

  completed: {
    label: "Completed",
    icon: CheckCircle2,
    className: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
  },
} satisfies Record<
  LessonProgressStatus,
  {
    label: string;
    icon: typeof Circle;
    className: string;
  }
>;

export default function LessonStatusBadge({ status }: LessonStatusBadgeProps) {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <span
      className={`
        inline-flex items-center gap-1.5
        rounded-full
        px-2.5 py-1
        text-xs font-medium
        ${config.className}
      `}
    >
      <Icon size={13} />

      {config.label}
    </span>
  );
}
