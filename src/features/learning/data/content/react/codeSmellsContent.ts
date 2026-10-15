import type { LessonContent } from "../../../types/learning";

export const codeSmellsContent: LessonContent = {
  lessonId: "react-code-smells",

  overview:
    "Code smells are not automatic bugs. They are patterns that often signal unnecessary complexity, unclear ownership or future maintenance problems.",

  mentalModel:
    "A smell means 'inspect this carefully', not 'this code is always wrong'. Context still matters.",

  sections: [
    {
      id: "derived-state",
      title: "Duplicated derived state",
      body: "If a value can be calculated from existing props or state, storing another synchronized state value often creates bugs.",
      codeExamples: [
        {
          id: "derived-state-bad",
          title: "Usually avoid",
          language: "tsx",
          code: `const [users, setUsers] =
  useState<User[]>([]);

const [
  filteredUsers,
  setFilteredUsers,
] =
  useState<User[]>([]);

useEffect(() => {
  setFilteredUsers(
    users.filter(...),
  );
}, [users]);`,
        },
        {
          id: "derived-state-better",
          title: "Better",
          language: "tsx",
          code: `const filteredUsers =
  users.filter(...);`,
        },
      ],
    },

    {
      id: "effect-for-event",
      title: "Using effects for user events",
      body: "Effects synchronize with external systems. User-triggered actions often belong directly in event handlers.",
      codeExamples: [
        {
          id: "effect-event-bad",
          title: "Usually avoid",
          language: "tsx",
          code: `useEffect(() => {
  if (submitted) {
    saveForm();
  }
}, [submitted]);`,
        },
        {
          id: "effect-event-better",
          title: "Better",
          language: "tsx",
          code: `function handleSubmit() {
  saveForm();
}`,
        },
      ],
    },

    {
      id: "global-everything",
      title: "Global state for everything",
      body: "Moving local UI state into Context or Redux without need increases coupling.",
    },

    {
      id: "god-component",
      title: "God components",
      body: "A component that owns unrelated API, form, permissions, analytics, modal and large UI responsibilities deserves architectural review.",
    },

    {
      id: "prop-drilling",
      title: "Prop drilling is context-dependent",
      body: "Passing props through a few components is normal. It becomes a smell when intermediate components exist mainly to forward unrelated data.",
    },

    {
      id: "premature-memo",
      title: "Premature memoization",
      body: "Adding useMemo, useCallback and memo everywhere increases complexity without guaranteed performance benefits.",
      codeExamples: [
        {
          id: "memo-rule",
          title: "Rule",
          language: "ts",
          code: `measure / identify problem
↓
optimize intentionally`,
        },
      ],
    },

    {
      id: "api-component",
      title: "Transport logic everywhere",
      body: "Repeated fetch, parsing and validation logic inside presentation components usually signals a missing boundary.",
    },

    {
      id: "mega-hook",
      title: "Mega custom hooks",
      body: "A custom hook with many unrelated responsibilities can become the same god object problem moved out of the component.",
    },

    {
      id: "index-key",
      title: "Unstable list keys",
      body: "Using array index as key can cause incorrect identity behavior when items are inserted, removed or reordered.",
      codeExamples: [
        {
          id: "key-example",
          title: "Prefer stable identity",
          language: "tsx",
          code: `items.map((item) => (
  <Item
    key={item.id}
    item={item}
  />
));`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Do not refactor based on pattern names alone. Confirm that the smell creates readability, correctness, performance or ownership problems.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Review one React page and identify unnecessary state, unnecessary effects, overly broad responsibilities and premature abstractions.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "A strong answer explains tradeoffs instead of claiming patterns such as prop drilling or useEffect are always bad.",
    },
  ],

  commonMistakes: [
    "Treating every useEffect as bad.",
    "Treating every prop chain as a reason for Context.",
    "Using memoization automatically.",
    "Refactoring based on line count instead of responsibilities.",
    "Calling a pattern a smell without explaining the actual risk.",
  ],

  notebookNote:
    "Code smell nije automatska greška. Najčešći React smells: duplicated derived state, effect za event logic, global state bez potrebe, god component, premature memoization i transport logic u UI komponentama.",

  relatedLessonIds: [
    "react-component-responsibilities",
    "react-state-ownership",
    "react-api-boundaries",
  ],
};
