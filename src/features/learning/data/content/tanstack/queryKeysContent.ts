import type { LessonContent } from "../../../types/learning";

export const queryKeysContent: LessonContent = {
  lessonId: "tanstack-query-keys",

  overview:
    "Query keys uniquely identify server-state resources inside the TanStack Query cache. TanStack Query uses them for caching, refetching, invalidation and sharing data between components.",

  mentalModel:
    "Think of a query key as the address of a resource inside the query cache. If two components use the same query key, they subscribe to the same cached resource. If the key changes, TanStack Query treats it as a different resource.",

  sections: [
    {
      id: "basic-query-key",
      title: "Basic query key",
      body: "Query keys are arrays. A simple collection query can use a single stable identifier.",
      codeExamples: [
        {
          id: "query-key-basic",
          title: "Users collection",
          language: "tsx",
          code: `useQuery({
  queryKey: ["users"],
  queryFn: fetchUsers,
});`,
          explanation:
            'The cache stores this resource under the key ["users"].',
        },
      ],
    },

    {
      id: "parameterized-query-keys",
      title: "Parameterized query keys",
      body: "Every value that changes which remote resource is requested should usually be represented in the query key.",
      codeExamples: [
        {
          id: "query-key-user",
          title: "User by ID",
          language: "tsx",
          code: `useQuery({
  queryKey: ["users", userId],
  queryFn: () => fetchUser(userId),
});`,
          explanation:
            '["users", 1] and ["users", 2] are two separate cache entries.',
        },
      ],
    },

    {
      id: "github-example",
      title: "GitHub User Search",
      body: "Our API Lab already demonstrates parameterized query keys. Every GitHub username gets its own cache entry.",
      codeExamples: [
        {
          id: "github-query-key",
          title: "GitHub cache resource",
          language: "tsx",
          code: `const normalizedUsername =
  username.trim().toLowerCase();

useQuery({
  queryKey: [
    "github-user",
    normalizedUsername,
  ],

  queryFn: () =>
    fetchGitHubUser(
      normalizedUsername,
    ),

  enabled:
    normalizedUsername.length > 0,
});`,
          explanation:
            'Searching octocat creates ["github-user", "octocat"], while torvalds creates another independent cache entry.',
        },
      ],
    },

    {
      id: "dependencies",
      title: "Query key as a dependency",
      body: "If queryFn depends on a variable that changes the requested server resource, that variable normally belongs in the query key.",
      codeExamples: [
        {
          id: "query-key-dependency",
          title: "Correct dependency",
          language: "tsx",
          code: `// Risky
useQuery({
  queryKey: ["user"],
  queryFn: () => fetchUser(userId),
});

// Better
useQuery({
  queryKey: ["user", userId],
  queryFn: () => fetchUser(userId),
});`,
        },
      ],
    },

    {
      id: "hierarchical-keys",
      title: "Hierarchical keys",
      body: "Query keys can describe relationships between resources. This becomes useful when invalidating groups of related queries.",
      codeExamples: [
        {
          id: "hierarchical-query-keys",
          title: "Issue query keys",
          language: "ts",
          code: `["issues"]

["issues", issueId]

["issues", {
  status: "open",
}]

["projects", projectId, "issues"]`,
        },
      ],
    },

    {
      id: "query-key-factory",
      title: "Query key factories",
      body: "Larger applications should avoid repeating query key arrays throughout the codebase. A query key factory centralizes their structure.",
      codeExamples: [
        {
          id: "query-key-factory-example",
          title: "Centralized keys",
          language: "ts",
          code: `export const userQueryKeys = {
  all: ["users"] as const,

  detail: (userId: number) =>
    [
      "users",
      userId,
    ] as const,
};`,
        },
      ],
    },

    {
      id: "invalidation",
      title: "Query keys and invalidation",
      body: "Mutations use query keys to tell TanStack Query which cached resources may now be outdated.",
      codeExamples: [
        {
          id: "query-key-invalidation",
          title: "Invalidate users",
          language: "ts",
          code: `await queryClient.invalidateQueries({
  queryKey: ["users"],
});`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Keep query keys deterministic and descriptive. Do not include unrelated UI state. Include parameters that actually change the requested server resource and centralize key definitions as the application grows.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Using the GitHub User Search exercise, search three different usernames. Return to the first username and observe that TanStack Query recognizes the previously cached resource. Then inspect how changing the username changes the query key.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be ready to explain why query keys are more than labels: they identify cache entries, act as query dependencies and are used for invalidation and synchronization.",
    },
  ],

  commonMistakes: [
    "Using the same query key for different remote resources.",
    "Leaving a queryFn parameter out of the query key.",
    "Putting unrelated UI state into query keys.",
    "Building query keys differently in every component.",
    "Hardcoding query key arrays throughout a large application instead of centralizing them.",
  ],

  notebookNote:
    "queryKey je adresa server-state podatka u TanStack cache-u. Parametri koji menjaju resurs treba da budu deo key-a. Isti key = isti cached resource. U većem projektu pravimo query key factory.",

  relatedLessonIds: [
    "tanstack-use-query",
    "tanstack-stale-time",
    "tanstack-invalidate-queries",
  ],
};
