import type { LucideIcon } from "lucide-react";

interface DashboardStatCardProps {
  label: string;
  value: string | number;
  description: string;
  icon: LucideIcon;
}

export default function DashboardStatCard({
  label,
  value,
  description,
  icon: Icon,
}: DashboardStatCardProps) {
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
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">{label}</p>

          <p className="mt-2 text-3xl font-bold tracking-tight">{value}</p>
        </div>

        <span
          className="
            flex size-10
            items-center justify-center
            rounded-xl
            bg-cyan-500/10
            text-cyan-600
            dark:text-cyan-400
          "
        >
          <Icon size={19} />
        </span>
      </div>

      <p className="mt-4 text-xs text-slate-500">{description}</p>
    </div>
  );
}
