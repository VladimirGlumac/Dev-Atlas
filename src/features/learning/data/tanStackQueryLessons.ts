import type { Lesson } from "../types/learning";

export const tanStackQueryLessons: Lesson[] = [
  // Foundations
  {
    id: "tanstack-server-vs-client-state",
    technologyId: "tanstack-query",
    sectionId: "tanstack-foundations",
    title: "Server State vs Client State",
    slug: "server-state-vs-client-state",
    description:
      "Understand why remote data is fundamentally different from local React state.",
    difficulty: "beginner",
    status: "published",
    order: 1,
  },

  {
    id: "tanstack-query-client",
    technologyId: "tanstack-query",
    sectionId: "tanstack-foundations",
    title: "QueryClient & Provider",
    slug: "query-client-provider",
    description:
      "Configure QueryClient and expose the query cache to your React application.",
    difficulty: "beginner",
    status: "published",
    order: 2,
  },

  {
    id: "tanstack-use-query",
    technologyId: "tanstack-query",
    sectionId: "tanstack-foundations",
    title: "useQuery",
    slug: "use-query",
    description:
      "Fetch and consume remote data using queryKey, queryFn and query state.",
    difficulty: "beginner",
    status: "published",
    order: 3,
  },

  {
    id: "tanstack-query-keys",
    technologyId: "tanstack-query",
    sectionId: "tanstack-foundations",
    title: "Query Keys",
    slug: "query-keys",
    description:
      "Design predictable query keys for caching, invalidation and parameterized data.",
    difficulty: "beginner",
    status: "published",
    order: 4,
  },

  // Lifecycle
  {
    id: "tanstack-query-states",
    technologyId: "tanstack-query",
    sectionId: "tanstack-query-lifecycle",
    title: "Pending, Error & Success",
    slug: "query-states",
    description:
      "Model loading, error and successful query states correctly in the UI.",
    difficulty: "beginner",
    status: "published",
    order: 1,
  },

  {
    id: "tanstack-stale-time",
    technologyId: "tanstack-query",
    sectionId: "tanstack-query-lifecycle",
    title: "staleTime & Freshness",
    slug: "stale-time",
    description:
      "Understand when cached data becomes stale and when TanStack Query refetches it.",
    difficulty: "intermediate",
    status: "published",
    order: 2,
  },

  {
    id: "tanstack-enabled",
    technologyId: "tanstack-query",
    sectionId: "tanstack-query-lifecycle",
    title: "Conditional Queries",
    slug: "conditional-queries",
    description:
      "Control when a query should run using enabled and dependent input.",
    difficulty: "intermediate",
    status: "published",
    order: 3,
  },

  // Mutations
  {
    id: "tanstack-use-mutation",
    technologyId: "tanstack-query",
    sectionId: "tanstack-mutations",
    title: "useMutation",
    slug: "use-mutation",
    description: "Send create, update and delete operations to remote systems.",
    difficulty: "intermediate",
    status: "published",
    order: 1,
  },

  {
    id: "tanstack-invalidate-queries",
    technologyId: "tanstack-query",
    sectionId: "tanstack-mutations",
    title: "invalidateQueries",
    slug: "invalidate-queries",
    description:
      "Synchronize cached queries after a mutation changes server data.",
    difficulty: "intermediate",
    status: "published",
    order: 2,
  },

  // Advanced
  {
    id: "tanstack-dependent-queries",
    technologyId: "tanstack-query",
    sectionId: "tanstack-advanced",
    title: "Dependent Queries",
    slug: "dependent-queries",
    description:
      "Run one query only after data from another query becomes available.",
    difficulty: "intermediate",
    status: "published",
    order: 1,
  },

  {
    id: "tanstack-pagination",
    technologyId: "tanstack-query",
    sectionId: "tanstack-advanced",
    title: "Pagination",
    slug: "pagination",
    description:
      "Cache pages independently and build responsive paginated interfaces.",
    difficulty: "intermediate",
    status: "published",
    order: 2,
  },

  {
    id: "tanstack-prefetching",
    technologyId: "tanstack-query",
    sectionId: "tanstack-advanced",
    title: "Prefetching",
    slug: "prefetching",
    description: "Load data before navigation to make interfaces feel instant.",
    difficulty: "advanced",
    status: "published",
    order: 3,
  },

  // Optimistic
  {
    id: "tanstack-optimistic-updates",
    technologyId: "tanstack-query",
    sectionId: "tanstack-optimistic",
    title: "Optimistic Mutations",
    slug: "optimistic-mutations",
    description:
      "Update cached data immediately, snapshot previous state and rollback on failure.",
    difficulty: "advanced",
    status: "published",
    order: 1,
  },

  // Practice
  {
    id: "tanstack-github-api-practice",
    technologyId: "tanstack-query",
    sectionId: "tanstack-practice",
    title: "GitHub API Practice",
    slug: "github-api-practice",
    description:
      "Build a real GitHub data explorer using queries, caching and error handling.",
    difficulty: "intermediate",
    status: "published",
    order: 1,
  },

  {
    id: "tanstack-crud-practice",
    technologyId: "tanstack-query",
    sectionId: "tanstack-practice",
    title: "CRUD Mutation Practice",
    slug: "crud-mutation-practice",
    description:
      "Practice create, update, delete and cache invalidation in a realistic CRUD flow.",
    difficulty: "intermediate",
    status: "published",
    order: 2,
  },
];
