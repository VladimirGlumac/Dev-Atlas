import type { LessonContent } from "../../../types/learning";

export const testingRenderingQueriesContent: LessonContent = {
  lessonId: "react-testing-rendering-queries",

  overview:
    "React Testing Library renders components into a test DOM and provides queries for finding elements. Prefer queries that reflect how users and assistive technologies understand the page.",

  mentalModel:
    "Ask the test DOM questions the way a user would identify elements: by role, label, visible text or accessible name.",

  sections: [
    {
      id: "render",
      title: "Render a component",
      body: "render mounts a React component into the jsdom test environment.",
      codeExamples: [
        {
          id: "render-example",
          title: "Render component",
          language: "tsx",
          code: `import {
  render,
  screen,
} from "@testing-library/react";

render(
  <LoginForm />,
);`,
        },
      ],
    },

    {
      id: "role",
      title: "Prefer getByRole",
      body: "Role queries closely reflect accessibility semantics and are usually the best first choice.",
      codeExamples: [
        {
          id: "role-example",
          title: "Find submit button",
          language: "tsx",
          code: `const submitButton =
  screen.getByRole(
    "button",
    {
      name: /sign in/i,
    },
  );`,
        },
      ],
    },

    {
      id: "label",
      title: "getByLabelText",
      body: "Form fields should often be selected by their accessible label.",
      codeExamples: [
        {
          id: "label-example",
          title: "Find email input",
          language: "tsx",
          code: `const emailInput =
  screen.getByLabelText(
    /email/i,
  );`,
        },
      ],
    },

    {
      id: "text",
      title: "getByText",
      body: "Visible text can be useful for content that has no more meaningful semantic query.",
      codeExamples: [
        {
          id: "text-example",
          title: "Find visible message",
          language: "tsx",
          code: `expect(
  screen.getByText(
    /welcome back/i,
  ),
).toBeInTheDocument();`,
        },
      ],
    },

    {
      id: "query-types",
      title: "getBy, queryBy and findBy",
      body: "The query families communicate different expectations about whether an element should exist immediately, should not exist or will appear asynchronously.",
      codeExamples: [
        {
          id: "query-types-example",
          title: "Quick rule",
          language: "ts",
          code: `getBy...
→ must exist now

queryBy...
→ may not exist
→ useful for absence

findBy...
→ wait for element
→ async UI`,
        },
      ],
    },

    {
      id: "test-id",
      title: "data-testid is usually a fallback",
      body: "Prefer semantic queries first. data-testid is useful when an element has no meaningful accessible representation.",
      codeExamples: [
        {
          id: "test-id-rule",
          title: "Query priority",
          language: "ts",
          code: `role
↓
label
↓
text
↓
other semantic queries
↓
test id when genuinely needed`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "If an element is difficult to select using semantic queries, sometimes that reveals an accessibility problem in the actual UI.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Render a login form and select the email field, password field and submit button without using querySelector or data-testid.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Know when to use getBy, queryBy and findBy, and why getByRole is often preferred.",
    },
  ],

  commonMistakes: [
    "Using querySelector everywhere.",
    "Using data-testid as the first choice.",
    "Using getBy when testing that an element should not exist.",
    "Using findBy for elements that are already present synchronously.",
    "Writing inaccessible markup that makes semantic testing difficult.",
  ],

  notebookNote:
    "RTL query prioritet: role → label → text → testid kao fallback. getBy = mora odmah postojati, queryBy = može/ne treba da postoji, findBy = čekaj async pojavljivanje.",

  relatedLessonIds: ["react-testing-user-event", "react-testing-async-ui"],
};
