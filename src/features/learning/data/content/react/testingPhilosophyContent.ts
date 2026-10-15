import type { LessonContent } from "../../../types/learning";

export const testingPhilosophyContent: LessonContent = {
  lessonId: "react-testing-philosophy",

  overview:
    "Good React tests verify observable behavior rather than internal implementation details. The closer a test resembles how a user interacts with the application, the more confidence it usually provides during refactoring.",

  mentalModel:
    "Do not test how the component is implemented. Test what the user can see and do.",

  sections: [
    {
      id: "behavior",
      title: "Test behavior",
      body: "A component test should usually describe what the user experiences rather than which hooks or internal functions were called.",
      codeExamples: [
        {
          id: "behavior-example",
          title: "User-visible behavior",
          language: "tsx",
          code: `render(<Counter />);

const button =
  screen.getByRole(
    "button",
    { name: "+" },
  );

await user.click(button);

expect(
  screen.getByText("Count: 1"),
).toBeInTheDocument();`,
        },
      ],
    },

    {
      id: "implementation-details",
      title: "Avoid implementation details",
      body: "Tests that depend heavily on internal state, private helper functions or exact component structure often break during harmless refactoring.",
      codeExamples: [
        {
          id: "bad-test-thinking",
          title: "Avoid this mindset",
          language: "ts",
          code: `// Avoid testing things like:

"useState was called"
"setCount was called"
"component has exactly 3 divs"

// Prefer:

"user clicks +"
"count changes to 1"`,
        },
      ],
    },

    {
      id: "confidence",
      title: "Test for confidence",
      body: "The purpose of a test suite is not maximum test count or 100% coverage. The purpose is confidence that important behavior still works.",
    },

    {
      id: "test-priority",
      title: "What deserves tests most?",
      body: "Prioritize important workflows, business logic, forms, permissions, state transitions and areas where regressions would be expensive.",
      codeExamples: [
        {
          id: "priority-example",
          title: "Good candidates",
          language: "ts",
          code: `login flow
form validation
checkout
permissions
API error UI
task mutations
routing behavior
domain utilities`,
        },
      ],
    },

    {
      id: "testing-pyramid",
      title: "Different test levels",
      body: "Unit tests isolate small logic, integration tests verify several pieces working together, and end-to-end tests verify full application flows. React Testing Library commonly sits in the unit/integration area.",
      codeExamples: [
        {
          id: "testing-levels",
          title: "Mental model",
          language: "ts",
          code: `unit
→ small isolated logic

integration
→ components + providers + behavior

e2e
→ browser + real application flow`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Prefer fewer meaningful tests over many fragile tests. A refactor that preserves user behavior should ideally require little or no test rewriting.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Take the Task Mutation Lab and write down five behaviors worth testing without mentioning useState, useMutation or internal function names.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be ready to explain why React Testing Library encourages testing behavior and accessibility-oriented queries instead of component implementation details.",
    },
  ],

  commonMistakes: [
    "Testing internal hook calls instead of behavior.",
    "Writing tests only to increase coverage percentage.",
    "Mocking so much that the real interaction disappears.",
    "Testing trivial markup while ignoring critical workflows.",
    "Creating tests that break every time components are refactored.",
  ],

  notebookNote:
    "React test treba da proverava ponašanje koje korisnik vidi. Ne testiraj kako je komponenta implementirana ako to nije deo javnog ponašanja. Cilj testova je confidence, ne broj testova.",

  relatedLessonIds: ["react-testing-setup", "react-testing-rendering-queries"],
};
