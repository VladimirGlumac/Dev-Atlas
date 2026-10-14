import { GlobeCode, Search, Users, BookOpen, ExternalLink } from "lucide-react";

import { useState, type FormEvent } from "react";

import { useGitHubUser } from "../hooks/useGitHubUser";
import GitHubQueryDebug from "./GitHubQueryDebug";

export default function GitHubUserSearch() {
  const [input, setInput] = useState("");

  const [username, setUsername] = useState("");

  const {
    data: user,
    isPending,
    isError,
    error,
    isFetching,
    refetch,
    dataUpdatedAt,
    isStale,
  } = useGitHubUser(username);

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const trimmedInput = input.trim();

    if (!trimmedInput) {
      return;
    }

    setUsername(trimmedInput);
  }

  return (
    <div className="space-y-6">
      <form
        onSubmit={handleSubmit}
        className="
          flex flex-col gap-3
          sm:flex-row
        "
      >
        <label className="flex-1">
          <span className="sr-only">GitHub username</span>

          <div
            className="
              flex items-center gap-3
              rounded-xl
              border border-slate-200
              bg-white
              px-4
              dark:border-slate-800
              dark:bg-slate-900
            "
          >
            <GlobeCode size={18} className="text-slate-400" />

            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Enter GitHub username..."
              className="
                min-w-0 flex-1
                bg-transparent
                py-3
                outline-none
              "
            />
          </div>
        </label>

        <button
          type="submit"
          className="
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-cyan-500
            px-5 py-3
            font-semibold
            text-slate-950
            transition
            hover:bg-cyan-400
          "
        >
          <Search size={17} />
          Search
        </button>
      </form>

      <GitHubQueryDebug
        username={username}
        isFetching={isFetching}
        isStale={isStale}
        dataUpdatedAt={dataUpdatedAt}
        onRefetch={() => {
          void refetch();
        }}
      />

      {username && isPending && (
        <div className="rounded-2xl border border-slate-200 p-6 text-sm text-slate-500 dark:border-slate-800">
          Loading GitHub user...
        </div>
      )}

      {isError && (
        <div className="rounded-2xl border border-red-500/30 bg-red-500/5 p-6 text-sm text-red-600 dark:text-red-400">
          {error instanceof Error ? error.message : "Something went wrong."}
        </div>
      )}

      {user && (
        <article
          className="
            rounded-3xl
            border border-slate-200
            bg-white
            p-6
            shadow-sm
            dark:border-slate-800
            dark:bg-slate-900
          "
        >
          <div className="flex flex-col gap-6 sm:flex-row">
            <img
              src={user.avatar_url}
              alt={`${user.login} avatar`}
              className="
                size-24
                rounded-2xl
                object-cover
              "
            />

            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
                @{user.login}
              </p>

              <h2 className="mt-1 text-2xl font-bold">
                {user.name ?? user.login}
              </h2>

              {user.bio && (
                <p className="mt-3 max-w-2xl leading-7 text-slate-600 dark:text-slate-400">
                  {user.bio}
                </p>
              )}

              <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-500">
                <span className="inline-flex items-center gap-2">
                  <Users size={16} />
                  {user.followers} followers
                </span>

                <span>{user.following} following</span>

                <span className="inline-flex items-center gap-2">
                  <BookOpen size={16} />
                  {user.public_repos} repos
                </span>
              </div>

              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-cyan-600
                  dark:text-cyan-400
                "
              >
                Open GitHub profile
                <ExternalLink size={15} />
              </a>

              {isFetching && (
                <p className="mt-3 text-xs text-slate-400">
                  Refreshing data...
                </p>
              )}
            </div>
          </div>
        </article>
      )}
    </div>
  );
}
