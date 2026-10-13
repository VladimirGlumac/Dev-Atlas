import { CheckCircle2, Circle, PlayCircle } from "lucide-react";

import { useProgress } from "../hooks/useProgress";

import type { LessonProgressStatus } from "../types/progress";

interface LessonProgressControlsProps {
  lessonId: string;
}

const options: Array<{
  status: LessonProgressStatus;
  label: string;
  icon: typeof Circle;
}> = [
  {
    status: "not-started",
    label: "Not started",
    icon: Circle,
  },
  {
    status: "in-progress",
    label: "In progress",
    icon: PlayCircle,
  },
  {
    status: "completed",
    label: "Completed",
    icon: CheckCircle2,
  },
];

export default function LessonProgressControls({
  lessonId,
}: LessonProgressControlsProps) {
  const { progress, updateProgress, isUpdating } = useProgress();

  const currentProgress = progress.find((item) => item.lessonId === lessonId);

  const currentStatus = currentProgress?.status ?? "not-started";

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => {
        const Icon = option.icon;

        const isActive = option.status === currentStatus;

        return (
          <button
            key={option.status}
            type="button"
            disabled={isUpdating}
            aria-pressed={isActive}
            onClick={() =>
              updateProgress({
                lessonId,
                status: option.status,
              })
            }
            className={[
              "inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium transition",
              isActive
                ? "border-cyan-500 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400"
                : "border-slate-200 text-slate-600 hover:border-cyan-300 dark:border-slate-800 dark:text-slate-300",
              isUpdating ? "cursor-not-allowed opacity-50" : "",
            ].join(" ")}
          >
            <Icon size={16} />

            {option.label}
          </button>
        );
      })}
    </div>
  );
}
