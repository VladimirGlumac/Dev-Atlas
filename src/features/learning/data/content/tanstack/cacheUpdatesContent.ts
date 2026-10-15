import type { LessonContent } from "../../../types/learning";

export const cacheUpdatesContent: LessonContent = {
  lessonId: "tanstack-cache-updates",

  overview:
    "After a mutation changes server data, the client cache must be synchronized. TanStack Query gives you several strategies: invalidate and refetch, update the cache directly from a successful server response, or update optimistically before the server responds.",

  mentalModel:
    "The server remains the source of truth. The query cache is only the client's current snapshot of that server state. After a mutation, your job is to decide the safest and most efficient way to make that snapshot correct again.",

  sections: [
    {
      id: "three-strategies",
      title: "Three cache update strategies",
      body: "There are three common approaches. Start with invalidation because it is simple and safe. Use direct cache updates when the server response gives you enough information. Use optimistic updates when instant feedback provides meaningful UX value.",
      codeExamples: [
        {
          id: "cache-strategies",
          title: "Progression",
          language: "ts",
          code: `1. mutation
   → invalidateQueries
   → refetch

2. mutation
   → server response
   → setQueryData

3. onMutate
   → optimistic setQueryData
   → mutation
   → success or rollback`,
        },
      ],
    },

    {
      id: "invalidation",
      title: "Invalidate and refetch",
      body: "Invalidation tells TanStack Query that cached data may no longer be trustworthy. Active queries can then refetch their authoritative server state.",
      codeExamples: [
        {
          id: "invalidate-example",
          title: "Safe synchronization",
          language: "ts",
          code: `const queryClient =
  useQueryClient();

useMutation({
  mutationFn: createTask,

  onSuccess: async () => {
    await queryClient.invalidateQueries({
      queryKey: ["tasks"],
    });
  },
});`,
          explanation:
            "This is simple and reliable because the client asks the server for the complete current state again.",
        },
      ],
    },

    {
      id: "direct-cache-update",
      title: "Direct cache updates",
      body: "If a successful mutation returns the complete updated entity, you can often update the cached data directly instead of issuing another request.",
      codeExamples: [
        {
          id: "set-query-data-example",
          title: "Replace one cached task",
          language: "ts",
          code: `onSuccess: (updatedTask) => {
  queryClient.setQueryData<Task[]>(
    ["tasks"],
    (currentTasks) => {
      if (!currentTasks) {
        return currentTasks;
      }

      return currentTasks.map(
        (task) =>
          task.id === updatedTask.id
            ? updatedTask
            : task,
      );
    },
  );
}`,
          explanation:
            "The mutation has already returned the new server value, so the cache can be updated without an extra GET request.",
        },
      ],
    },

    {
      id: "optimistic-update",
      title: "Optimistic updates",
      body: "An optimistic update modifies the cache before the server confirms the mutation. The interface feels instant, but the application must be able to recover if the server rejects the change.",
      codeExamples: [
        {
          id: "optimistic-flow",
          title: "Optimistic lifecycle",
          language: "ts",
          code: `mutate(taskId)

↓
onMutate(taskId)

↓
snapshot old cache

↓
update cache immediately

↓
mutationFn(taskId)

SUCCESS
→ keep/reconcile server result

ERROR
→ rollback snapshot`,
        },
      ],
    },

    {
      id: "cancel-queries",
      title: "Cancel active queries",
      body: "Before applying an optimistic cache update, cancel relevant in-flight queries. Otherwise an older request may finish later and overwrite the optimistic state.",
      codeExamples: [
        {
          id: "cancel-query-example",
          title: "Prevent stale overwrite",
          language: "ts",
          code: `await queryClient.cancelQueries({
  queryKey: ["tasks"],
});`,
        },
      ],
    },

    {
      id: "snapshot",
      title: "Create a rollback snapshot",
      body: "Before changing the cache optimistically, store its previous state. That snapshot becomes your recovery point.",
      codeExamples: [
        {
          id: "snapshot-example",
          title: "Read current cache",
          language: "ts",
          code: `const previousTasks =
  queryClient.getQueryData<Task[]>(
    ["tasks"],
  );`,
        },
      ],
    },

    {
      id: "optimistic-set-query-data",
      title: "Update the cache immediately",
      body: "setQueryData can now apply the predicted result before the mutation request completes.",
      codeExamples: [
        {
          id: "optimistic-cache-example",
          title: "Toggle task immediately",
          language: "ts",
          code: `queryClient.setQueryData<Task[]>(
  ["tasks"],
  (currentTasks) => {
    if (!currentTasks) {
      return currentTasks;
    }

    return currentTasks.map(
      (task) =>
        task.id === taskId
          ? {
              ...task,
              completed:
                !task.completed,
            }
          : task,
    );
  },
);`,
        },
      ],
    },

    {
      id: "mutation-context",
      title: "Mutation context",
      body: "onMutate can return context that TanStack Query later passes to onError and onSettled. This is where rollback data is commonly stored.",
      codeExamples: [
        {
          id: "context-example",
          title: "Return rollback context",
          language: "ts",
          code: `onMutate: async (taskId) => {
  const previousTasks =
    queryClient.getQueryData<Task[]>(
      ["tasks"],
    );

  // optimistic update...

  return {
    previousTasks,
  };
}`,
        },
      ],
    },

    {
      id: "rollback",
      title: "Rollback on error",
      body: "If the mutation fails, restore the cached snapshot created before the optimistic update.",
      codeExamples: [
        {
          id: "rollback-example",
          title: "Restore old cache",
          language: "ts",
          code: `onError: (
  _error,
  _taskId,
  context,
) => {
  if (!context?.previousTasks) {
    return;
  }

  queryClient.setQueryData(
    ["tasks"],
    context.previousTasks,
  );
}`,
        },
      ],
    },

    {
      id: "server-reconciliation",
      title: "Reconcile with the server",
      body: "The optimistic value is only a prediction. When the server succeeds, prefer the actual returned entity if the server may modify or calculate additional fields.",
      codeExamples: [
        {
          id: "reconciliation-example",
          title: "Use server response",
          language: "ts",
          code: `onSuccess: (updatedTask) => {
  queryClient.setQueryData<Task[]>(
    ["tasks"],
    (tasks) =>
      tasks?.map((task) =>
        task.id === updatedTask.id
          ? updatedTask
          : task,
      ),
  );
}`,
        },
      ],
    },

    {
      id: "when-to-use-what",
      title: "Choosing the right strategy",
      body: "Invalidation is the safest default. Direct cache updates are useful when mutation responses are authoritative and easy to merge. Optimistic updates are best when the interaction benefits from instant feedback and rollback logic remains manageable.",
      codeExamples: [
        {
          id: "strategy-rule",
          title: "Rule of thumb",
          language: "ts",
          code: `invalidateQueries
→ safest default

setQueryData
→ server returned enough data

optimistic update
→ instant UX matters
→ rollback is manageable`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Do not use optimistic updates merely because they look advanced. They add complexity, especially when multiple mutations overlap or the server performs complex side effects. Prefer the simplest strategy that keeps the cache correct and the user experience good.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "In the Task Mutation Lab, keep create using invalidateQueries, update using an optimistic mutation and delete using setQueryData. Compare how each operation changes server state and cache state.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be able to compare invalidation, setQueryData and optimistic updates. Explain why optimistic updates need cancellation, snapshots and rollback, and why the server remains the source of truth.",
    },
  ],

  commonMistakes: [
    "Updating the cache before saving a rollback snapshot.",
    "Forgetting to cancel a relevant in-flight query.",
    "Treating optimistic data as authoritative server data.",
    "Using optimistic updates for complicated mutations without a reliable rollback strategy.",
    "Mutating cached arrays or objects directly instead of returning immutable copies.",
    "Calling invalidateQueries for unrelated resources.",
    "Assuming setQueryData also changes data on the server.",
  ],

  notebookNote:
    "Posle mutation-a cache mora da se uskladi sa serverom. invalidateQueries je najbezbedniji default. setQueryData direktno menja cache kada imamo pouzdan server response. Optimistic update menja cache pre server odgovora, zato mora imati snapshot i rollback.",

  relatedLessonIds: [
    "tanstack-use-mutation",
    "tanstack-invalidate-queries",
    "tanstack-optimistic-updates",
  ],
};
