import type { LessonContent } from "../../../types/learning";

export const testingWhatNotToTestContent: LessonContent = {
  lessonId: "react-testing-what-not-to-test",

  overview:
    "Not every line of code deserves a dedicated test. Good test suites focus effort on behavior and risk instead of mechanically testing implementation details.",

  mentalModel:
    "Ask whether the test would catch a meaningful regression. If the answer is no, the test may not be worth maintaining.",

  sections: [
    {
      id: "implementation",
      title: "Internal implementation details",
      body: "Avoid asserting private state, hook call counts or internal helper usage when those details are not observable behavior.",
      codeExamples: [
        {
          id: "implementation-example",
          title: "Avoid",
          language: "ts",
          code: `Do not test:
"useState called once"
"setOpen called with true"

Test:
"user opens dialog"
"dialog becomes visible"`,
        },
      ],
    },

    {
      id: "library-behavior",
      title: "Do not retest libraries",
      body: "Your test suite does not need to prove that React, Zod, React Hook Form or TanStack Query themselves work.",
      codeExamples: [
        {
          id: "library-example",
          title: "Focus",
          language: "ts",
          code: `Do not test:
"Zod validates email"

Test:
"our form shows the correct
validation message for invalid input"`,
        },
      ],
    },

    {
      id: "trivial-markup",
      title: "Low-value markup tests",
      body: "A test that only confirms static markup exists may add little value unless the content is important product behavior.",
    },

    {
      id: "snapshot-overuse",
      title: "Avoid giant snapshots",
      body: "Large snapshots frequently approve accidental changes without encouraging meaningful review.",
    },

    {
      id: "coverage",
      title: "Coverage is a signal, not the goal",
      body: "High coverage does not guarantee useful tests. Critical behavior with meaningful assertions is more valuable than mechanically reaching 100 percent.",
    },

    {
      id: "mocking",
      title: "Do not mock everything",
      body: "Excessive mocking can result in tests that prove your mocks interact correctly rather than the application.",
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Prioritize tests by business importance, complexity and regression risk. Delete tests that consistently create maintenance cost without protecting real behavior.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Review five existing tests and identify whether each protects user behavior, domain logic or an important integration. Mark low-value implementation-detail tests for removal.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be ready to explain why 100% coverage is not automatically a sign of a strong test suite.",
    },
  ],

  commonMistakes: [
    "Trying to achieve coverage numbers instead of confidence.",
    "Testing React or third-party library internals.",
    "Mocking every dependency.",
    "Maintaining huge snapshots nobody meaningfully reviews.",
    "Keeping fragile tests solely because they already exist.",
  ],

  notebookNote:
    "Ne testiraj implementaciju samo zato što možeš. Ne retestiraj library behavior. Coverage je signal, ne cilj. Najvredniji test štiti važno ponašanje ili logiku od regresije.",

  relatedLessonIds: [
    "react-testing-philosophy",
    "react-testing-tanstack-query",
  ],
};
