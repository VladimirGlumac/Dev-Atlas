import GitHubUserSearch from "../features/api-lab/github/components/GitHubUserSearch";
import TaskMutationLab from "../features/api-lab/tasks/components/TaskMutationLab";

export default function ApiLabPage() {
  return (
    <div className="px-6 py-10 lg:px-10">
      <div className="mx-auto max-w-350">
        <header>
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
            API Lab
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Real API playground
          </h1>

          <p className="mt-4 max-w-2xl leading-7 text-slate-600 dark:text-slate-400">
            Practice fetching, caching, mutations and error handling against
            real external APIs.
          </p>
        </header>

        <section className="mt-10">
          <div className="mb-5">
            <p className="text-sm font-medium text-slate-500">TanStack Query</p>

            <h2 className="mt-1 text-2xl font-bold">GitHub User Search</h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Search a real GitHub user and inspect how query keys, caching,
              enabled and query lifecycle states behave.
            </p>
          </div>

          <GitHubUserSearch />
        </section>

        <section className="mt-12">
          <TaskMutationLab />

          <div className="mt-6 rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
            <p className="text-sm font-semibold">What happens on Create?</p>

            <pre className="mt-3 text-xs leading-6 text-slate-500">
              {`mutate()
↓
mutationFn
↓
createTask()
↓
server state changes
↓
onSuccess
↓
invalidateQueries()
↓
query refetch
↓
cache updated`}
            </pre>
          </div>
        </section>
      </div>
    </div>
  );
}
