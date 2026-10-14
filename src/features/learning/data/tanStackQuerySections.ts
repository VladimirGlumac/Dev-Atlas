import type { LearningSection } from "../types/learning";

export const tanStackQuerySections: LearningSection[] = [
  {
    id: "tanstack-foundations",
    technologyId: "tanstack-query",
    title: "Foundations",
    slug: "foundations",
    description:
      "Understand server state, QueryClient, queries and the core TanStack Query mental model.",
    order: 1,
  },

  {
    id: "tanstack-query-lifecycle",
    technologyId: "tanstack-query",
    title: "Query Lifecycle",
    slug: "query-lifecycle",
    description:
      "Learn caching, stale data, refetching, retries and conditional queries.",
    order: 2,
  },

  {
    id: "tanstack-mutations",
    technologyId: "tanstack-query",
    title: "Mutations",
    slug: "mutations",
    description:
      "Create, update and delete remote data while keeping the cache synchronized.",
    order: 3,
  },

  {
    id: "tanstack-advanced",
    technologyId: "tanstack-query",
    title: "Advanced Patterns",
    slug: "advanced-patterns",
    description:
      "Pagination, dependent queries, prefetching, cancellation and production patterns.",
    order: 4,
  },

  {
    id: "tanstack-optimistic",
    technologyId: "tanstack-query",
    title: "Optimistic Updates",
    slug: "optimistic-updates",
    description:
      "Update the UI before the server responds and safely rollback when mutations fail.",
    order: 5,
  },

  {
    id: "tanstack-practice",
    technologyId: "tanstack-query",
    title: "Practice",
    slug: "practice",
    description:
      "Build real API exercises using queries, mutations, pagination and cache synchronization.",
    order: 6,
  },
];
