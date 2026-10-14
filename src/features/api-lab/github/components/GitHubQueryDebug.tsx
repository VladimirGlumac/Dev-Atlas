interface GitHubQueryDebugProps {
  username: string;
  isFetching: boolean;
  isStale: boolean;
  dataUpdatedAt: number;
  onRefetch: () => void;
}

export default function GitHubQueryDebug({
  username,
  isFetching,
  isStale,
  dataUpdatedAt,
  onRefetch,
}: GitHubQueryDebugProps) {
  if (!username) {
    return null;
  }

  const queryKey = ["github-user", username.trim().toLowerCase()];

  const updatedAt =
    dataUpdatedAt > 0 ? new Date(dataUpdatedAt).toLocaleTimeString() : "Never";

  return (
    <div
      className="
        rounded-2xl
        border border-slate-200
        bg-slate-50
        p-5
        dark:border-slate-800
        dark:bg-slate-900/60
      "
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold">Query Debug</p>

          <p className="mt-1 text-xs text-slate-500">
            Inspect how TanStack Query sees this cached resource.
          </p>
        </div>

        <button
          type="button"
          onClick={onRefetch}
          disabled={isFetching}
          className="
            rounded-xl
            border border-slate-200
            px-4 py-2
            text-sm font-medium
            transition
            hover:border-cyan-300
            hover:text-cyan-600
            disabled:cursor-not-allowed
            disabled:opacity-50
            dark:border-slate-700
            dark:hover:text-cyan-400
          "
        >
          {isFetching ? "Refetching..." : "Manual refetch"}
        </button>
      </div>

      <dl className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <dt className="text-xs text-slate-500">Query key</dt>

          <dd className="mt-1 break-all font-mono text-sm">
            {JSON.stringify(queryKey)}
          </dd>
        </div>

        <div>
          <dt className="text-xs text-slate-500">Freshness</dt>

          <dd className="mt-1 text-sm font-medium">
            {isStale ? "Stale" : "Fresh"}
          </dd>
        </div>

        <div>
          <dt className="text-xs text-slate-500">Fetching</dt>

          <dd className="mt-1 text-sm font-medium">
            {isFetching ? "Yes" : "No"}
          </dd>
        </div>

        <div>
          <dt className="text-xs text-slate-500">Last updated</dt>

          <dd className="mt-1 text-sm font-medium">{updatedAt}</dd>
        </div>
      </dl>
    </div>
  );
}
