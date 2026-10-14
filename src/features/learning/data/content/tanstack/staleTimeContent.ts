import type { LessonContent } from "../../../types/learning";

export const staleTimeContent: LessonContent = {
  lessonId: "tanstack-stale-time",

  overview:
    "staleTime controls how long TanStack Query considers cached data fresh. Fresh data is reused without automatically refetching for freshness-triggered events, while stale data is eligible for background refetching.",

  mentalModel:
    "Fresh does not mean permanent and stale does not mean deleted. A stale query can still have perfectly usable cached data. Stale only means TanStack Query is allowed to consider that data old enough to synchronize again.",

  sections: [
    {
      id: "basic-stale-time",
      title: "Basic staleTime",
      body: "staleTime is expressed in milliseconds.",
      codeExamples: [
        {
          id: "stale-time-basic",
          title: "Five minute freshness",
          language: "tsx",
          code: `useQuery({
  queryKey: ["github-user", username],
  queryFn: () => fetchGitHubUser(username),

  staleTime:
    5 * 60 * 1000,
});`,
          explanation:
            "The successful query result is considered fresh for five minutes.",
        },
      ],
    },

    {
      id: "fresh-vs-stale",
      title: "Fresh vs stale",
      body: "Fresh data is considered recent enough that TanStack Query does not need to synchronize it just because a freshness trigger occurs. Stale data remains cached and renderable, but can be refetched.",
      codeExamples: [
        {
          id: "fresh-stale-model",
          title: "Mental model",
          language: "ts",
          code: `fresh:
cached data exists
+
TanStack considers it recent

stale:
cached data still exists
+
TanStack may refetch it`,
        },
      ],
    },

    {
      id: "stale-is-not-loading",
      title: "Stale does not mean loading",
      body: "A query may be stale while the UI still renders cached data. If a background refetch begins, isFetching becomes true without necessarily returning to the initial pending state.",
    },

    {
      id: "stale-time-choice",
      title: "Choosing staleTime",
      body: "Choose staleTime based on how quickly the remote resource changes and how important freshness is. There is no universal value that is correct for every query.",
      codeExamples: [
        {
          id: "stale-time-examples",
          title: "Different resources",
          language: "ts",
          code: `// Frequently changing dashboard
staleTime: 10_000

// User profile
staleTime: 5 * 60 * 1000

// Rarely changing reference data
staleTime: 60 * 60 * 1000`,
        },
      ],
    },

    {
      id: "manual-refetch",
      title: "Manual refetch",
      body: "A query can be manually requested again using refetch even while its current data is cached.",
      codeExamples: [
        {
          id: "manual-refetch-example",
          title: "Refetch button",
          language: "tsx",
          code: `const {
  data,
  refetch,
  isFetching,
} = useQuery({
  queryKey: ["users"],
  queryFn: fetchUsers,
});

<button
  type="button"
  onClick={() => {
    void refetch();
  }}
>
  {isFetching
    ? "Refreshing..."
    : "Refresh"}
</button>`,
        },
      ],
    },

    {
      id: "data-updated-at",
      title: "dataUpdatedAt",
      body: "dataUpdatedAt contains the timestamp of the most recent successful data update. It can be useful in debugging or for interfaces that show when remote data was last synchronized.",
    },

    {
      id: "stale-time-vs-gc-time",
      title: "staleTime vs gcTime",
      body: "staleTime determines freshness. gcTime determines how long an unused query can remain in cache before garbage collection. They solve different problems.",
      codeExamples: [
        {
          id: "stale-vs-gc",
          title: "Difference",
          language: "ts",
          code: `staleTime
→ when data becomes stale

gcTime
→ when an inactive cached query
  may be removed`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Do not choose staleTime only to reduce requests. Model how fresh the user actually needs the resource to be. Different queries in the same application can and often should use different freshness settings.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Set the GitHub User Search staleTime to 10 seconds. Search a user, inspect Fresh, wait until it becomes stale, then trigger a manual refetch. Finally restore a more realistic staleTime.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be ready to explain that stale data is not deleted or automatically unusable. Explain the difference between staleTime, isFetching and initial pending state.",
    },
  ],

  commonMistakes: [
    "Thinking stale means the cache entry has disappeared.",
    "Using the same staleTime for every resource.",
    "Confusing staleTime with gcTime.",
    "Replacing the entire UI with a loading screen during every background refetch.",
    "Using an extremely large staleTime without considering actual data freshness requirements.",
  ],

  notebookNote:
    "staleTime određuje koliko dugo je cached server data fresh. Kada postane stale, data i dalje postoji i može da se prikazuje; TanStack samo dobija pravo da je ponovo sinhronizuje. staleTime nije isto što i gcTime.",
  relatedLessonIds: [
    "tanstack-query-keys",
    "tanstack-query-states",
    "tanstack-use-mutation",
  ],
};
