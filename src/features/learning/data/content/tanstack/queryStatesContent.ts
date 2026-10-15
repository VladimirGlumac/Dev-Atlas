import type { LessonContent } from "../../../types/learning";

export const queryStatesContent: LessonContent = {
  lessonId: "tanstack-query-states",

  overview:
    "TanStack Query exposes query state so the UI can distinguish between the initial pending state, failures and successful data.",

  mentalModel:
    "A query is not just data. It is a state machine describing the lifecycle of remote data.",

  sections: [
    {
      id: "basic-states",
      title: "Core query states",
      body: "A query commonly moves through pending, error and success states.",
      codeExamples: [
        {
          id: "query-state-flow",
          title: "Lifecycle",
          language: "ts",
          code: `pending
↓
request

├── success
└── error`,
        },
      ],
    },

    {
      id: "is-pending",
      title: "isPending",
      body: "isPending means the query does not yet have successful data available.",
      codeExamples: [
        {
          id: "pending-example",
          title: "Loading UI",
          language: "tsx",
          code: `if (query.isPending) {
  return <LoadingState />;
}`,
        },
      ],
    },

    {
      id: "is-error",
      title: "isError",
      body: "isError means the latest query result is in an error state.",
      codeExamples: [
        {
          id: "error-example",
          title: "Error UI",
          language: "tsx",
          code: `if (query.isError) {
  return (
    <ErrorState
      message={
        query.error.message
      }
    />
  );
}`,
        },
      ],
    },

    {
      id: "is-success",
      title: "isSuccess",
      body: "isSuccess means usable data exists and query.data is available with the expected data type.",
      codeExamples: [
        {
          id: "success-example",
          title: "Success",
          language: "tsx",
          code: `if (query.isSuccess) {
  return (
    <UserList
      users={query.data}
    />
  );
}`,
        },
      ],
    },

    {
      id: "is-fetching",
      title: "isFetching is different",
      body: "isFetching means a network request is currently running. A query may already have successful cached data while also fetching fresh data.",
      codeExamples: [
        {
          id: "fetching-example",
          title: "Background refresh",
          language: "tsx",
          code: `return (
  <>
    {query.isFetching && (
      <RefreshIndicator />
    )}

    <UserList
      users={query.data}
    />
  </>
);`,
        },
      ],
    },

    {
      id: "empty-state",
      title: "Empty is not an error",
      body: "A successful query that returns an empty collection should normally render an empty state rather than error UI.",
      codeExamples: [
        {
          id: "empty-example",
          title: "Empty result",
          language: "tsx",
          code: `if (
  query.data.length === 0
) {
  return (
    <EmptyState />
  );
}`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Distinguish initial pending state from background fetching. Keeping existing data visible during refetch often produces better UX than replacing the page with a full spinner.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Build UI for a users query with pending, error, empty, success and background-fetch indicators.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be ready to explain the difference between isPending and isFetching.",
    },
  ],

  commonMistakes: [
    "Treating isFetching as identical to initial loading.",
    "Treating an empty array as an error.",
    "Rendering query.data before handling pending/error states.",
    "Replacing useful cached data with a full loading screen during every refetch.",
  ],

  notebookNote:
    "Query lifecycle: pending → success/error. isPending = nema usable data. isFetching = request trenutno radi i može postojati cached data. Empty success nije error.",

  relatedLessonIds: ["tanstack-stale-time", "tanstack-conditional-queries"],
};
