import type { LessonContent } from "../../../types/learning";

export const stateOwnershipContent: LessonContent = {
  lessonId: "react-state-ownership",

  overview:
    "Good React architecture depends heavily on state ownership. State should live at the lowest level that can correctly serve every component that needs it.",

  mentalModel:
    "Before choosing useState, Context, Redux or TanStack Query, first ask: who owns this data and what kind of state is it?",

  sections: [
    {
      id: "local-state",
      title: "Local UI state",
      body: "State used by one component or a small subtree should usually stay local.",
      codeExamples: [
        {
          id: "local-state-example",
          title: "Modal state",
          language: "tsx",
          code: `const [isOpen, setIsOpen] =
  useState(false);`,
        },
      ],
    },

    {
      id: "lift-state",
      title: "Lift state when siblings share it",
      body: "When multiple sibling components need the same state, move ownership to their closest common parent.",
      codeExamples: [
        {
          id: "lift-state-flow",
          title: "Ownership",
          language: "ts",
          code: `Parent
├── SearchInput
└── Results

search state
→ Parent`,
        },
      ],
    },

    {
      id: "derived-state",
      title: "Do not store derived state unnecessarily",
      body: "If a value can be calculated from existing state or props, calculate it during rendering instead of creating another synchronized state variable.",
      codeExamples: [
        {
          id: "derived-state-example",
          title: "Derived filtering",
          language: "tsx",
          code: `const filteredUsers =
  users.filter((user) =>
    user.name
      .toLowerCase()
      .includes(
        search.toLowerCase(),
      ),
  );`,
        },
      ],
    },

    {
      id: "server-state",
      title: "Server state",
      body: "Remote API data is not ordinary React state. It has caching, synchronization, stale-data and refetch concerns.",
      codeExamples: [
        {
          id: "server-state-rule",
          title: "Server-state ownership",
          language: "ts",
          code: `API data
→ TanStack Query

local UI state
→ useState / useReducer`,
        },
      ],
    },

    {
      id: "url-state",
      title: "URL state",
      body: "Filters, search terms, pagination or selected views that should survive refresh or be shareable may belong in the URL rather than React state.",
      codeExamples: [
        {
          id: "url-state-example",
          title: "Shareable state",
          language: "bash",
          code: `/issues?status=open&page=2`,
        },
      ],
    },

    {
      id: "global-client-state",
      title: "Global client state",
      body: "Shared client-side workflows that span distant parts of the application may justify Context, useReducer or Redux Toolkit.",
    },

    {
      id: "decision-model",
      title: "State tool decision model",
      body: "Choose the tool based on ownership rather than popularity.",
      codeExamples: [
        {
          id: "state-tool-example",
          title: "Quick guide",
          language: "ts",
          code: `component-only UI
→ useState

complex local transitions
→ useReducer

simple shared client state
→ Context

complex shared client state
→ Redux Toolkit

server state
→ TanStack Query

shareable navigation/filter state
→ URL`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Do not make state global unless multiple distant consumers genuinely need shared ownership. Global state increases coupling and makes data flow harder to reason about.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "For an issue tracker, decide where modal state, issue data, selected filter, logged-in user UI preferences and multi-step editor state should live.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be ready to explain state lifting, derived state and why not all shared data belongs in Redux.",
    },
  ],

  commonMistakes: [
    "Putting all state into a global store.",
    "Copying TanStack Query data into useState.",
    "Storing values that can be derived during render.",
    "Keeping shareable filter state only in memory when the URL is more appropriate.",
    "Lifting state much higher than necessary.",
  ],

  notebookNote:
    "Pre state alata pitaj: ko poseduje podatak? local UI → useState, complex local → useReducer, simple shared → Context, complex shared client → Redux, server state → TanStack Query, shareable filter/navigation → URL.",

  relatedLessonIds: [
    "react-project-structure",
    "react-feature-based-architecture",
    "react-use-context",
  ],
};
