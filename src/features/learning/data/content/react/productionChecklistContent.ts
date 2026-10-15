import type { LessonContent } from "../../../types/learning";

export const productionChecklistContent: LessonContent = {
  lessonId: "react-production-checklist",

  overview:
    "A feature is not production-ready just because the happy path works. A repeatable checklist helps catch missing states, accessibility issues, weak boundaries and important regression risks.",

  mentalModel:
    "Definition of Done should cover correctness, user experience, architecture and maintainability — not only whether the feature renders.",

  sections: [
    {
      id: "types",
      title: "1. Type safety",
      body: "Resolve TypeScript errors and avoid unsafe assertions at important boundaries.",
      codeExamples: [
        {
          id: "types-checklist",
          title: "Check",
          language: "ts",
          code: `□ no TypeScript errors
□ no unnecessary any
□ external data validated
□ props/contracts clear`,
        },
      ],
    },

    {
      id: "states",
      title: "2. UI states",
      body: "Check all meaningful application states, not just successful rendering.",
      codeExamples: [
        {
          id: "state-checklist",
          title: "Async UI",
          language: "ts",
          code: `□ loading
□ error
□ empty
□ success
□ retry/recovery where useful`,
        },
      ],
    },

    {
      id: "state-ownership",
      title: "3. State ownership",
      body: "Verify that each piece of state lives in the correct layer.",
      codeExamples: [
        {
          id: "ownership-checklist",
          title: "Ownership",
          language: "ts",
          code: `□ local state stays local
□ derived state not duplicated
□ server state in query layer
□ URL state used when shareable
□ Redux only when justified`,
        },
      ],
    },

    {
      id: "effects",
      title: "4. Effects",
      body: "Every effect should have a clear synchronization purpose and correct dependencies/cleanup.",
      codeExamples: [
        {
          id: "effect-checklist",
          title: "Effects",
          language: "ts",
          code: `□ effect actually needed
□ dependencies correct
□ cleanup where required
□ event logic not hidden in effect`,
        },
      ],
    },

    {
      id: "architecture",
      title: "5. Architecture",
      body: "Check component responsibilities and feature boundaries.",
      codeExamples: [
        {
          id: "architecture-checklist",
          title: "Structure",
          language: "ts",
          code: `□ clear component responsibility
□ API logic separated
□ custom hooks meaningful
□ feature ownership clear
□ no unnecessary abstraction`,
        },
      ],
    },

    {
      id: "accessibility",
      title: "6. Accessibility",
      body: "Keyboard and assistive technology users must be able to understand and operate the feature.",
      codeExamples: [
        {
          id: "a11y-checklist",
          title: "Accessibility",
          language: "ts",
          code: `□ semantic HTML
□ accessible names
□ labels
□ keyboard operation
□ visible focus
□ focus management
□ dynamic feedback where needed`,
        },
      ],
    },

    {
      id: "responsive",
      title: "7. Responsive UI",
      body: "Verify layout at realistic viewport sizes and with long or unexpected content.",
      codeExamples: [
        {
          id: "responsive-checklist",
          title: "Responsive",
          language: "ts",
          code: `□ mobile
□ tablet
□ desktop
□ long text
□ empty content
□ overflow`,
        },
      ],
    },

    {
      id: "testing",
      title: "8. Tests",
      body: "Protect important behavior, not implementation details.",
      codeExamples: [
        {
          id: "testing-checklist",
          title: "Testing",
          language: "ts",
          code: `□ critical happy path
□ validation/error behavior
□ async behavior where important
□ important edge cases
□ no implementation-detail tests`,
        },
      ],
    },

    {
      id: "performance",
      title: "9. Performance",
      body: "Look for real performance risks instead of adding optimization hooks automatically.",
      codeExamples: [
        {
          id: "performance-checklist",
          title: "Performance",
          language: "ts",
          code: `□ no obvious expensive repeated work
□ large lists considered
□ unnecessary global updates avoided
□ memoization only when justified`,
        },
      ],
    },

    {
      id: "security",
      title: "10. Frontend security hygiene",
      body: "Frontend code must not contain secrets or pretend client-side checks provide backend security.",
      codeExamples: [
        {
          id: "security-checklist",
          title: "Security",
          language: "ts",
          code: `□ no secrets in frontend
□ auth UI is not treated as authorization
□ external data handled safely
□ unsafe HTML avoided`,
        },
      ],
    },

    {
      id: "git",
      title: "11. Git review",
      body: "Inspect the final diff before considering the feature done.",
      codeExamples: [
        {
          id: "git-checklist",
          title: "Before commit",
          language: "bash",
          code: `git status

git diff

git diff --staged`,
        },
      ],
    },

    {
      id: "definition-of-done",
      title: "Compact Definition of Done",
      body: "Use this short version while building real projects.",
      codeExamples: [
        {
          id: "definition-of-done-example",
          title: "DevAtlas React DoD",
          language: "ts",
          code: `□ types clean
□ loading/error/empty handled
□ state ownership correct
□ effects justified
□ API boundary clean
□ accessibility checked
□ responsive
□ critical tests
□ no secrets
□ clean Git diff`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Not every tiny feature requires the same depth of review. Apply the checklist proportionally to user impact, complexity and risk.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Use the checklist on TaskMutationLab and record every item that is already satisfied and every item that still needs work.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "When asked what production-ready frontend code means, discuss states, architecture, accessibility, testing, type safety and failure handling rather than only visual completion.",
    },
  ],

  commonMistakes: [
    "Considering a feature finished when only the happy path works.",
    "Treating tests as the only measure of production readiness.",
    "Ignoring accessibility or responsive behavior.",
    "Adding optimizations without evidence.",
    "Skipping final diff review.",
  ],

  notebookNote:
    "React Definition of Done: types → states → state ownership → effects → architecture → accessibility → responsive → tests → performance → security hygiene → clean Git diff.",

  relatedLessonIds: [
    "react-loading-error-empty",
    "react-code-smells",
    "react-accessibility-basics",
    "react-api-boundaries",
  ],
};
