import type { LessonContent } from "../../../types/learning";

export const tanStackProductionBestPracticesContent: LessonContent = {
  lessonId: "tanstack-production-best-practices",

  overview:
    "Production TanStack Query code depends on clear server-state ownership, stable query keys, intentional freshness rules and predictable cache synchronization after mutations.",

  mentalModel:
    "TanStack Query owns synchronized server state. Components describe what data they need, while query keys, query functions and cache strategies define how that server state is managed.",

  sections: [
    {
      id: "server-state-ownership",
      title: "1. Keep server state in TanStack Query",
      body: "Do not copy query data into Redux or local state unless the user is intentionally creating a separate editable draft.",
      codeExamples: [
        {
          id: "ownership-rule",
          title: "Source of truth",
          language: "ts",
          code: `Server owns data
→ TanStack Query cache

Temporary form draft
→ local/form state

Complex shared client workflow
→ Redux if justified`,
        },
      ],
    },

    {
      id: "query-keys",
      title: "2. Design query keys carefully",
      body: "Every variable that changes which server data is requested should normally be represented in the query key.",
      codeExamples: [
        {
          id: "query-key-example",
          title: "Complete query identity",
          language: "ts",
          code: `[
  "issues",
  {
    page,
    status,
    priority,
    sort,
  },
]`,
        },
      ],
    },

    {
      id: "query-key-factory",
      title: "3. Centralize query keys when the feature grows",
      body: "A small query-key factory helps avoid typos and makes invalidation more predictable.",
      codeExamples: [
        {
          id: "query-key-factory-example",
          title: "Issue query keys",
          language: "ts",
          code: `export const issueQueryKeys = {
  all: ["issues"] as const,

  lists: () =>
    [
      ...issueQueryKeys.all,
      "list",
    ] as const,

  list: (
    filters: IssueFilters,
  ) =>
    [
      ...issueQueryKeys.lists(),
      filters,
    ] as const,

  details: () =>
    [
      ...issueQueryKeys.all,
      "detail",
    ] as const,

  detail: (
    issueId: number,
  ) =>
    [
      ...issueQueryKeys.details(),
      issueId,
    ] as const,
};`,
        },
      ],
    },

    {
      id: "query-functions",
      title: "4. Keep query functions focused",
      body: "Query functions should call a service and either return valid domain data or throw an error.",
      codeExamples: [
        {
          id: "query-function-example",
          title: "Focused query function",
          language: "ts",
          code: `async function fetchIssues(
  filters: IssueFilters,
): Promise<Issue[]> {
  return issueService
    .getIssues(filters);
}`,
        },
      ],
    },

    {
      id: "freshness",
      title: "5. Choose staleTime intentionally",
      body: "staleTime is a product decision about how long cached data can be treated as fresh, not a random performance number.",
      codeExamples: [
        {
          id: "stale-time-thinking",
          title: "Freshness thinking",
          language: "ts",
          code: `rapidly changing dashboard
→ shorter staleTime

documentation/categories
→ longer staleTime

rarely changing static data
→ potentially very long staleTime`,
        },
      ],
    },

    {
      id: "gc-time",
      title: "6. Freshness and cache lifetime are different",
      body: "staleTime controls freshness. Cache garbage-collection settings control how long unused query data stays cached. Do not treat them as the same concept.",
    },

    {
      id: "enabled",
      title: "7. Use enabled for real dependencies",
      body: "Use enabled when required input does not yet exist rather than manually orchestrating every request.",
      codeExamples: [
        {
          id: "enabled-example",
          title: "Conditional query",
          language: "ts",
          code: `enabled:
  projectId != null`,
        },
      ],
    },

    {
      id: "query-vs-mutation",
      title: "8. Query reads, mutation writes",
      body: "useQuery represents server-state reads. useMutation represents explicit server-changing operations.",
      codeExamples: [
        {
          id: "query-mutation-rule",
          title: "Basic rule",
          language: "ts",
          code: `GET/read
→ useQuery

POST/PATCH/DELETE
→ useMutation`,
        },
      ],
    },

    {
      id: "cache-strategy",
      title: "9. Choose the simplest cache synchronization strategy",
      body: "Start with invalidation. Use direct cache updates when the exact result is known. Use optimistic updates only when instant UI provides meaningful value.",
      codeExamples: [
        {
          id: "cache-strategy-example",
          title: "Decision rule",
          language: "ts",
          code: `Simple and reliable
→ invalidateQueries

Exact server result known
→ setQueryData

Need immediate UI
→ optimistic update`,
        },
      ],
    },

    {
      id: "optimistic",
      title: "10. Optimistic updates need rollback",
      body: "A proper optimistic mutation cancels conflicting queries, snapshots previous data, applies temporary cache state, rolls back on error and reconciles afterward.",
      codeExamples: [
        {
          id: "optimistic-flow",
          title: "Optimistic lifecycle",
          language: "ts",
          code: `cancel
↓
snapshot
↓
optimistic update
↓
request

├── success
│   → reconcile
│
└── error
    → rollback

↓
invalidate / settle`,
        },
      ],
    },

    {
      id: "loading-states",
      title: "11. Distinguish pending from background fetching",
      body: "Do not replace already usable cached data with a full loading screen during every refetch.",
      codeExamples: [
        {
          id: "loading-state-rule",
          title: "UI behavior",
          language: "ts",
          code: `isPending
→ no usable data

isFetching
→ request running

data + isFetching
→ show existing data
   + subtle refresh feedback`,
        },
      ],
    },

    {
      id: "empty-state",
      title: "12. Handle empty results explicitly",
      body: "A successful query returning no records is usually a valid empty state, not an error.",
    },

    {
      id: "pagination",
      title: "13. Keep pagination identity in the key",
      body: "Page, cursor, filters and sorting values that change the response belong in query identity.",
    },

    {
      id: "prefetch",
      title: "14. Prefetch selectively",
      body: "Prefetch likely future data when it improves perceived latency, but avoid generating unnecessary network traffic.",
    },

    {
      id: "error-boundary",
      title: "15. Know where errors belong",
      body: "Expected API failures normally belong in query error UI. Error boundaries are for unexpected rendering failures unless your architecture intentionally integrates query errors with boundaries.",
    },

    {
      id: "testing",
      title: "16. Test behavior with a fresh QueryClient",
      body: "Tests should isolate cache state so one test cannot affect another.",
      codeExamples: [
        {
          id: "test-client-example",
          title: "Test QueryClient",
          language: "ts",
          code: `const queryClient =
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },

      mutations: {
        retry: false,
      },
    },
  });`,
        },
      ],
    },

    {
      id: "testing-boundary",
      title: "17. Mock the external boundary",
      body: "Prefer testing user-visible behavior while mocking HTTP/service boundaries instead of mocking TanStack Query internals.",
    },

    {
      id: "devtools",
      title: "18. Use Query Devtools while developing",
      body: "Devtools help inspect query keys, freshness, cache state and fetching behavior when debugging server-state problems.",
    },

    {
      id: "checklist",
      title: "Production Checklist",
      body: "Use this compact checklist when reviewing a TanStack Query feature.",
      codeExamples: [
        {
          id: "production-checklist-example",
          title: "TanStack Query Definition of Done",
          language: "ts",
          code: `□ server state really belongs in TanStack Query

□ queryKey includes all request identity

□ queryFn is focused

□ external response validated where needed

□ staleTime chosen intentionally

□ enabled only where dependency exists

□ loading/error/empty handled

□ background refetch UX handled

□ mutations synchronize cache

□ invalidation is targeted

□ optimistic update has rollback

□ no duplicated Redux/query server state

□ pagination/filter params in key

□ prefetching only where useful

□ important behavior tested`,
        },
      ],
    },

    {
      id: "decision-map",
      title: "Quick decision map",
      body: "This small map covers most everyday TanStack Query decisions.",
      codeExamples: [
        {
          id: "decision-map-example",
          title: "Mental model",
          language: "ts",
          code: `Need server data?
→ useQuery

Need to change server data?
→ useMutation

Mutation changed unknown related data?
→ invalidateQueries

Mutation returns exact entity?
→ setQueryData

Need instant feedback?
→ optimistic update

Query needs an id first?
→ enabled

Request inputs changed?
→ update queryKey

Likely next navigation?
→ prefetch`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Do not optimize cache behavior prematurely. Start with correct query identity and simple invalidation, then add direct cache updates, prefetching or optimistic behavior when the product actually benefits.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Review TaskMutationLab and GitHub User Search using the production checklist. Identify query ownership, query keys, freshness settings, cache synchronization and UI states.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "A strong TanStack Query answer should discuss server-state ownership, query identity, freshness, invalidation, direct cache updates, optimistic rollback and background refetch behavior.",
    },
  ],

  commonMistakes: [
    "Using TanStack Query as a generic global client-state store.",
    "Leaving request variables out of query keys.",
    "Duplicating query data into Redux.",
    "Choosing staleTime without understanding freshness requirements.",
    "Invalidating the entire cache after every mutation.",
    "Using optimistic updates when simple invalidation would be sufficient.",
    "Ignoring rollback for optimistic state.",
    "Treating isFetching as initial loading.",
    "Sharing one QueryClient across isolated tests.",
    "Mocking TanStack Query itself instead of the external boundary.",
  ],

  notebookNote:
    "TanStack Query production rule: server state → stable queryKey → focused queryFn → intentional staleTime → correct UI states → mutation cache sync. Prefer simplest strategy: invalidate first, setQueryData when exact data is known, optimistic only when UX justifies rollback complexity.",

  relatedLessonIds: [
    "tanstack-query-keys",
    "tanstack-stale-time",
    "tanstack-use-mutation",
    "tanstack-invalidate-queries",
    "tanstack-cache-updates",
    "tanstack-pagination",
    "tanstack-prefetching",
  ],
};
