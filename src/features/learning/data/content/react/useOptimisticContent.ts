import type { LessonContent } from "../../../types/learning";

export const useOptimisticContent: LessonContent = {
  lessonId: "react-use-optimistic",

  overview:
    "useOptimistic lets the interface temporarily show the result of an action before the real operation has finished, making interactions feel immediate.",

  mentalModel:
    "The UI predicts that an operation will succeed. It shows the expected next state immediately, while the real request or action continues in the background. If the real state later differs, React reconciles the optimistic view with the actual result.",

  sections: [
    {
      id: "basic-syntax",
      title: "Basic syntax",
      body: "useOptimistic receives the real state and a reducer-like function describing how an optimistic action should create the temporary state.",
      codeExamples: [
        {
          id: "optimistic-basic",
          title: "Optimistic messages",
          language: "tsx",
          code: `import { useOptimistic } from "react";

type Message = {
  id: string;
  text: string;
  sending?: boolean;
};

const [optimisticMessages, addOptimisticMessage] =
  useOptimistic(
    messages,
    (
      currentMessages,
      newMessage: Message,
    ) => [
      ...currentMessages,
      {
        ...newMessage,
        sending: true,
      },
    ],
  );`,
          explanation:
            "The optimistic state derives from the real messages plus temporary optimistic actions.",
        },
      ],
    },

    {
      id: "optimistic-action",
      title: "Applying an optimistic update",
      body: "Trigger the optimistic update before waiting for the real operation to finish.",
      codeExamples: [
        {
          id: "optimistic-action-example",
          title: "Immediate feedback",
          language: "tsx",
          code: `async function handleSend(
  text: string,
): Promise<void> {
  const optimisticMessage = {
    id: crypto.randomUUID(),
    text,
  };

  addOptimisticMessage(
    optimisticMessage,
  );

  await sendMessage(text);
}`,
          explanation:
            "The user sees the new message immediately instead of waiting for the server round trip.",
        },
      ],
    },

    {
      id: "real-vs-optimistic-state",
      title: "Real state vs optimistic state",
      body: "The original state remains the source of truth. Optimistic state is temporary presentation layered on top of it while an action is pending.",
      codeExamples: [
        {
          id: "optimistic-source-truth",
          title: "Render optimistic state",
          language: "tsx",
          code: `{optimisticMessages.map(
  (message) => (
    <p key={message.id}>
      {message.text}

      {message.sending &&
        " (Sending...)"}
    </p>
  ),
)}`,
        },
      ],
    },

    {
      id: "failure-handling",
      title: "Handling failures",
      body: "Optimistic UX must account for failure. If the real operation fails, show an error and let the real source of truth replace the optimistic result. For complex server mutations, libraries such as TanStack Query provide stronger rollback and cache-management patterns.",
    },

    {
      id: "use-optimistic-vs-query",
      title: "useOptimistic vs TanStack Query optimistic updates",
      body: "useOptimistic is a React primitive for temporary optimistic UI. TanStack Query optimistic mutations operate around server-state cache and are often a better fit when remote cached data must be rolled back or synchronized across many components.",
    },

    {
      id: "when-to-use",
      title: "When to use useOptimistic",
      body: "Use optimistic UI for actions that usually succeed and where immediate feedback substantially improves UX: posting comments, adding items, sending messages, liking content or changing simple states.",
    },

    {
      id: "when-not-to-use",
      title: "When not to use useOptimistic",
      body: "Avoid optimistic updates when failure is common, the operation has serious consequences, or the final server result is unpredictable. In those cases, waiting for confirmation may be safer and clearer.",
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Optimistic interfaces need clear pending and error states. Never treat the optimistic value as confirmed data. Keep the real server response as the ultimate source of truth.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Build a comment form that immediately inserts a temporary comment marked as Sending. Simulate a delayed API call and then reconcile the optimistic comment with the confirmed data.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be ready to explain optimistic UI, why it improves perceived performance, what rollback means and when optimistic behavior is inappropriate.",
    },
  ],

  commonMistakes: [
    "Treating optimistic data as confirmed server data.",
    "Ignoring failed mutations.",
    "Using optimistic UI for risky or unpredictable operations.",
    "Not showing any pending state to distinguish temporary data.",
    "Duplicating server-state logic instead of using a proper cache solution for complex remote data.",
  ],

  notebookNote:
    "useOptimistic prikazuje očekivani rezultat akcije pre nego što je prava operacija završena. Optimistic state je privremen; real state/server ostaje source of truth. Kod kompleksnog server-state-a često je bolji TanStack Query optimistic mutation.",

  relatedLessonIds: ["react-use-transition"],
};
