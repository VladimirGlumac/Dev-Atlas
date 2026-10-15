import type { LessonContent } from "../../../types/learning";

export const useMutationContent: LessonContent = {
  lessonId: "tanstack-use-mutation",

  overview:
    "useMutation handles server-changing operations such as create, update and delete. Unlike queries, mutations usually run in response to an explicit user action.",

  mentalModel:
    "Query asks for server state. Mutation asks the server to change state.",

  sections: [
    {
      id: "basic",
      title: "Basic mutation",
      body: "mutationFn receives the variables supplied to mutate.",
      codeExamples: [
        {
          id: "basic-example",
          title: "Create task",
          language: "tsx",
          code: `const mutation =
  useMutation({
    mutationFn:
      createTask,
  });

mutation.mutate({
  title: "Learn Query",
});`,
        },
      ],
    },

    {
      id: "variables",
      title: "Mutation variables",
      body: "The value passed to mutate becomes the argument of mutationFn.",
      codeExamples: [
        {
          id: "variables-example",
          title: "Flow",
          language: "ts",
          code: `mutate({
  title: "Task"
})

↓
mutationFn({
  title: "Task"
})`,
        },
      ],
    },

    {
      id: "states",
      title: "Mutation states",
      body: "Mutations expose pending, error and success information for user feedback.",
      codeExamples: [
        {
          id: "mutation-state-example",
          title: "Pending button",
          language: "tsx",
          code: `<button
  disabled={
    mutation.isPending
  }
>
  {mutation.isPending
    ? "Creating..."
    : "Create"}
</button>`,
        },
      ],
    },

    {
      id: "callbacks",
      title: "Lifecycle callbacks",
      body: "onSuccess, onError, onMutate and onSettled support cache synchronization and UI workflows.",
      codeExamples: [
        {
          id: "callbacks-example",
          title: "Success callback",
          language: "ts",
          code: `useMutation({
  mutationFn:
    createTask,

  onSuccess:
    (createdTask) => {
      // update cache
    },

  onError:
    (error) => {
      // handle failure
    },
});`,
        },
      ],
    },

    {
      id: "hook-vs-call",
      title: "Hook callbacks vs mutate callbacks",
      body: "Hook-level callbacks are useful for mutation/cache behavior. Call-level callbacks can handle interaction-specific UI behavior.",
      codeExamples: [
        {
          id: "callback-split",
          title: "Example",
          language: "tsx",
          code: `const mutation =
  useCreateTask();

mutation.mutate(
  { title },
  {
    onSuccess: () => {
      setTitle("");
    },
  },
);`,
          explanation:
            "The hook can own cache synchronization, while the component owns clearing its local input.",
        },
      ],
    },

    {
      id: "mutate-async",
      title: "mutateAsync",
      body: "mutateAsync returns a Promise and can be useful when surrounding code genuinely needs await-style control flow.",
      codeExamples: [
        {
          id: "mutate-async-example",
          title: "Await mutation",
          language: "ts",
          code: `const task =
  await mutation
    .mutateAsync({
      title: "Task",
    });`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Keep server/cache synchronization close to the mutation hook. Keep component-specific UI behavior close to the component.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Create useDeleteTask and expose pending/error state to the UI. Disable only the task being deleted.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Know the difference between query and mutation and explain the purpose of mutation lifecycle callbacks.",
    },
  ],

  commonMistakes: [
    "Using useQuery for write operations.",
    "Forgetting to synchronize cache after successful mutations.",
    "Putting every UI concern inside the mutation hook.",
    "Disabling the entire list when only one entity mutation is pending.",
  ],

  notebookNote:
    "useMutation = create/update/delete server state. mutate(variables) → mutationFn(variables). Hook-level callbacks za server/cache behavior; call-level callbacks za local UI behavior.",

  relatedLessonIds: ["tanstack-invalidate-queries", "tanstack-cache-updates"],
};
