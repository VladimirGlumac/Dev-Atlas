interface TechnologyProgressCardProps {
  totalLessons: number;
  completedLessons: number;
  inProgressLessons: number;
  percentage: number;
}

export default function TechnologyProgressCard({
  totalLessons,
  completedLessons,
  inProgressLessons,
  percentage,
}: TechnologyProgressCardProps) {
  return (
    <div
      className="
        rounded-2xl
        border border-slate-200
        bg-white
        p-5
        shadow-sm
        dark:border-slate-800
        dark:bg-slate-900
      "
    >
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">Progress</p>

          <p className="mt-1 text-2xl font-bold">{percentage}%</p>
        </div>

        <p className="text-sm text-slate-500">
          {completedLessons} / {totalLessons} completed
        </p>
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
            width: `${percentage}%`,
          }}
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-500">
        <span>{totalLessons} published</span>

        <span>{completedLessons} completed</span>

        <span>{inProgressLessons} in progress</span>
      </div>
    </div>
  );
}
