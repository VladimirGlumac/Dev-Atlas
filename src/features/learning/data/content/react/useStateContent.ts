import type { LessonContent } from "../../../types/learning";

export const useStateContent: LessonContent = {
  lessonId: "react-use-state",

  overview:
    "useState is a React Hook used to store local component state. Updating state schedules a new render so the UI can reflect the latest value.",

  mentalModel:
    "Think of state as the component's memory. A render reads the current state and describes the UI. Calling the setter does not immediately mutate the current render; it requests a future render with the new state.",

  sections: [
    {
      id: "basic-syntax",
      title: "Basic syntax",
      body: "useState returns a pair: the current state value and a setter function used to schedule an update.",
      codeExamples: [
        {
          id: "use-state-basic",
          title: "Counter",
          language: "tsx",
          code: `import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button
      type="button"
      onClick={() => setCount(count + 1)}
    >
      Count: {count}
    </button>
  );
}`,
          explanation:
            "count belongs to the current render. setCount schedules another render with the updated value.",
        },
      ],
    },

    {
      id: "functional-updates",
      title: "Functional updates",
      body: "When the next state depends on the previous state, prefer the functional setter form. React passes the latest queued state value into the updater function.",
      codeExamples: [
        {
          id: "use-state-functional",
          title: "Update from previous state",
          language: "tsx",
          code: `setCount((currentCount) => currentCount + 1);`,
          explanation:
            "This avoids relying on a potentially stale value from the current render.",
        },
      ],
    },

    {
      id: "objects-and-arrays",
      title: "Objects and arrays",
      body: "React state should be treated as immutable. Create a new object or array instead of mutating the existing state value.",
      codeExamples: [
        {
          id: "use-state-array",
          title: "Immutable array update",
          language: "tsx",
          code: `setDevelopers((currentDevelopers) => [
  ...currentDevelopers,
  newDeveloper,
]);`,
        },

        {
          id: "use-state-object",
          title: "Immutable object update",
          language: "tsx",
          code: `setForm((currentForm) => ({
  ...currentForm,
  name: "Vladimir",
}));`,
        },
      ],
    },

    {
      id: "lazy-initial-state",
      title: "Lazy initial state",
      body: "If calculating the initial state is expensive, pass a function to useState. React uses it when initializing the state instead of recalculating the value on every render.",
      codeExamples: [
        {
          id: "use-state-lazy",
          title: "Lazy initializer",
          language: "tsx",
          code: `const [theme, setTheme] = useState(() => {
  return localStorage.getItem("theme") ?? "light";
});`,
        },
      ],
    },

    {
      id: "when-to-use",
      title: "When to use useState",
      body: "Use local state for values owned by a component or a small component subtree: input values, toggles, selected tabs, open/closed UI, temporary form state and similar client-side state.",
    },

    {
      id: "when-not-to-use",
      title: "When not to use useState",
      body: "Do not store values that can be calculated from existing props or state. Avoid copying server data into local state without a clear reason. Server state is usually better handled by tools such as TanStack Query.",
      codeExamples: [
        {
          id: "derived-state-bad",
          title: "Avoid unnecessary derived state",
          language: "tsx",
          code: `// Avoid
const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

// Prefer
const filteredUsers = users.filter((user) =>
  user.name.toLowerCase().includes(search.toLowerCase()),
);`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Keep state as close as possible to the components that need it. Prefer several meaningful state values over one giant object when the values change independently. Do not introduce global state just because multiple components exist.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Build a small task filter with three states: all, active and completed. Store only the selected filter in state and derive the visible tasks from the task list.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be ready to explain why state updates are asynchronous from the perspective of a render, why functional updates matter, and why mutating arrays or objects directly can break React's update model.",
    },
  ],

  commonMistakes: [
    "Mutating arrays or objects directly.",
    "Using the current state value when the next value depends on previously queued updates.",
    "Storing derived values unnecessarily.",
    "Putting state too high in the component tree.",
    "Using useState for server state that already belongs in a query cache.",
  ],

  notebookNote:
    "useState je memorija komponente. Setter ne menja trenutni render odmah, već zakazuje novi render. Ako novi state zavisi od starog, koristi funkcionalni setter. Objekte i nizove tretiraj immutable.",

  relatedLessonIds: ["react-use-effect", "react-use-ref"],
};
