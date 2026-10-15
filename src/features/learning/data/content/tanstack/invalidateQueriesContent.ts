import type { LessonContent } from "../../../types/learning";

export const invalidateQueriesContent: LessonContent = {
  lessonId: "tanstack-invalidate-queries",

  overview:
    "invalidateQueries marks matching cached queries as stale and can trigger active queries to refetch. It is a simple and reliable way to synchronize server state after a mutation.",

  mentalModel:
    "A mutation changed the server. Invalidation tells TanStack Query that its cached knowledge may no longer be trustworthy.",

  sections: [
    {
      id: "basic",
      title: "Invalidate after mutation",
      body: "Use QueryClient inside mutation callbacks to invalidate related queries.",
      codeExamples: [
        {
          id: "invalidate-example",
          title: "Create task",
          language: "ts",
          code: `const queryClient =
  useQueryClient();

return useMutation({
  mutationFn:
    createTask,

  onSuccess: async () => {
    await queryClient
      .invalidateQueries({
        queryKey: [
          "tasks",
        ],
      });
  },
});`,
        },
      ],
    },

    {
      id: "stale",
      title: "Invalidation means stale",
      body: "Invalidating a query does not simply delete the cache. It marks matching data as stale so TanStack Query knows fresh server data may be needed.",
    },

    {
      id: "matching",
      title: "Query-key matching",
      body: "Structured query keys allow invalidating an entire related family of queries.",
      codeExamples: [
        {
          id: "matching-example",
          title: "Task key family",
          language: "ts",
          code: `["tasks"]

["tasks", {
  status: "open",
}]

["tasks", {
  status: "done",
}]`,
        },
      ],
    },

    {
      id: "invalidate-vs-set",
      title: "Invalidation vs direct cache update",
      body: "Invalidation asks the server for fresh truth. setQueryData can update known cache values directly when the mutation result provides enough information.",
      codeExamples: [
        {
          id: "strategy-example",
          title: "Rule of thumb",
          language: "ts",
          code: `server result unclear
→ invalidate

server returns exact updated entity
→ setQueryData may be enough

need instant UI before server
→ optimistic update`,
        },
      ],
    },

    {
      id: "over-invalidation",
      title: "Avoid invalidating everything",
      body: "Broad invalidation can create unnecessary requests. Invalidate the cache families affected by the mutation.",
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Invalidation is often the safest first implementation. Optimize toward direct or optimistic cache updates only when the UX or request pattern justifies the added complexity.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "After creating an issue, invalidate the issue-list query without invalidating unrelated users or settings queries.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Explain what invalidation does and compare it with setQueryData and optimistic updates.",
    },
  ],

  commonMistakes: [
    "Thinking invalidation permanently removes cached data.",
    "Invalidating every query after every mutation.",
    "Using complex optimistic updates when simple invalidation is enough.",
    "Forgetting query-key structure when targeting invalidation.",
  ],

  notebookNote:
    "invalidateQueries = cached data više nije pouzdano → mark stale → active query može refetch. Najjednostavniji safe sync posle mutation-a.",

  relatedLessonIds: ["tanstack-use-mutation", "tanstack-cache-updates"],
};
