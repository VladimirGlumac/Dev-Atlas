import { BookOpen, Layers3 } from "lucide-react";

import type { SearchResult } from "../types/search";

interface SearchResultItemProps {
  result: SearchResult;
  isActive?: boolean;
  onSelect: () => void;
}

const resultIcons = {
  technology: Layers3,
  section: BookOpen,
  lesson: BookOpen,
};

export default function SearchResultItem({
  result,
  isActive = false,
  onSelect,
}: SearchResultItemProps) {
  const Icon = resultIcons[result.type];

  return (
    <button
      type="button"
      onClick={onSelect}
      className={[
        "flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition",
        isActive
          ? "bg-cyan-500/10"
          : "hover:bg-slate-100 dark:hover:bg-slate-800",
      ].join(" ")}
    >
      <span
        className="
          flex size-9 shrink-0
          items-center justify-center
          rounded-lg
          bg-cyan-500/10
          text-cyan-600
          dark:text-cyan-400
        "
      >
        <Icon size={17} />
      </span>

      <div className="min-w-0">
        <p className="truncate text-sm font-medium">{result.title}</p>

        {result.description && (
          <p className="mt-0.5 truncate text-xs text-slate-500">
            {result.description}
          </p>
        )}

        <p className="mt-1 text-[10px] uppercase tracking-wider text-slate-400">
          {result.type}
        </p>
      </div>
    </button>
  );
}
