import type { LessonContent } from "../../../types/learning";

export const arrayMethodsContent: LessonContent = {
  lessonId: "typescript-array-methods",

  overview:
    "Array methods are fundamental for immutable data transformations in React and modern JavaScript applications.",

  mentalModel:
    "Use the method that matches the question you are asking: transform, filter, find one, check any or check all.",

  sections: [
    {
      id: "map",
      title: "map",
      body: "map transforms every element and returns a new array with the same length.",
      codeExamples: [
        {
          id: "map-example",
          title: "Extract names",
          language: "ts",
          code: `const names = developers.map(
  (developer) => developer.name,
);`,
        },
      ],
    },

    {
      id: "filter",
      title: "filter",
      body: "filter keeps only elements that satisfy a condition.",
      codeExamples: [
        {
          id: "filter-example",
          title: "Active developers",
          language: "ts",
          code: `const activeDevelopers =
  developers.filter(
    (developer) =>
      developer.active,
  );`,
        },
      ],
    },

    {
      id: "find",
      title: "find",
      body: "find returns the first matching element or undefined.",
      codeExamples: [
        {
          id: "find-example",
          title: "Find by ID",
          language: "ts",
          code: `const developer =
  developers.find(
    (item) =>
      item.id === developerId,
  );

// Developer | undefined`,
        },
      ],
    },

    {
      id: "some",
      title: "some",
      body: "some returns true when at least one element satisfies the condition.",
      codeExamples: [
        {
          id: "some-example",
          title: "Any senior developer?",
          language: "ts",
          code: `const hasSenior =
  developers.some(
    (developer) =>
      developer.level === "senior",
  );`,
        },
      ],
    },

    {
      id: "every",
      title: "every",
      body: "every returns true only when all elements satisfy the condition.",
      codeExamples: [
        {
          id: "every-example",
          title: "All active?",
          language: "ts",
          code: `const allActive =
  developers.every(
    (developer) =>
      developer.active,
  );`,
        },
      ],
    },

    {
      id: "immutable-update",
      title: "Immutable updates",
      body: "map and filter are frequently used to update application data without mutating the original array.",
      codeExamples: [
        {
          id: "immutable-update-example",
          title: "Update one item",
          language: "ts",
          code: `const updated =
  developers.map(
    (developer) =>
      developer.id === id
        ? {
            ...developer,
            active: false,
          }
        : developer,
  );`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Prefer expressive collection methods over manual loops when they make intent clearer. Remember that find may return undefined and should be handled safely.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Given a list of issues, return only open issues, find one issue by ID, check whether any are high priority and verify whether all issues have an assignee.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Know the behavioral difference between map, filter, find, some and every.",
    },
  ],

  commonMistakes: [
    "Using map when you actually want filter.",
    "Forgetting that find returns undefined.",
    "Mutating objects inside array transformations without intending to.",
    "Using forEach when you really need a returned array.",
  ],

  notebookNote:
    "map = transform all, filter = keep matching, find = first match | undefined, some = at least one, every = all. Ovi metodi su ključni za immutable React/TanStack update-e.",

  relatedLessonIds: ["typescript-functions", "typescript-arrays-objects"],
};
