import type { LessonContent } from "../../../types/learning";

export const testingAsyncUiContent: LessonContent = {
  lessonId: "react-testing-async-ui",

  overview:
    "Modern React interfaces frequently update asynchronously after API requests, mutations, timers or transitions. Tests must wait for observable UI changes instead of assuming they happen immediately.",

  mentalModel:
    "Trigger the interaction, then wait for the UI condition that proves the asynchronous work completed.",

  sections: [
    {
      id: "find-by",
      title: "findBy queries",
      body: "findBy waits until an element appears or the query times out.",
      codeExamples: [
        {
          id: "find-by-example",
          title: "Wait for loaded data",
          language: "tsx",
          code: `expect(
  await screen.findByText(
    "Vladimir",
  ),
).toBeInTheDocument();`,
        },
      ],
    },

    {
      id: "wait-for",
      title: "waitFor",
      body: "waitFor is useful when you need to wait for an assertion rather than simply wait for one element to appear.",
      codeExamples: [
        {
          id: "wait-for-example",
          title: "Wait for button state",
          language: "tsx",
          code: `await waitFor(() => {
  expect(
    submitButton,
  ).not.toBeDisabled();
});`,
        },
      ],
    },

    {
      id: "loading-success",
      title: "Test loading → success",
      body: "Important async components often deserve tests for both the pending state and final successful result.",
      codeExamples: [
        {
          id: "loading-success-example",
          title: "Async lifecycle",
          language: "tsx",
          code: `render(<Users />);

expect(
  screen.getByText(
    /loading/i,
  ),
).toBeInTheDocument();

expect(
  await screen.findByText(
    "Ana",
  ),
).toBeInTheDocument();`,
        },
      ],
    },

    {
      id: "error-state",
      title: "Test errors too",
      body: "A production interface should handle failed requests, so tests should cover meaningful error UI.",
      codeExamples: [
        {
          id: "error-example",
          title: "Error state",
          language: "tsx",
          code: `expect(
  await screen.findByText(
    /failed to load/i,
  ),
).toBeInTheDocument();`,
        },
      ],
    },

    {
      id: "disappearance",
      title: "Waiting for disappearance",
      body: "Loading indicators or dialogs sometimes need to disappear asynchronously.",
      codeExamples: [
        {
          id: "disappearance-example",
          title: "Loading removed",
          language: "tsx",
          code: `await waitFor(() => {
  expect(
    screen.queryByText(
      /loading/i,
    ),
  ).not.toBeInTheDocument();
});`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Do not add arbitrary sleep delays to tests. Wait for meaningful UI conditions. Tests based on real observable completion conditions are faster and less flaky.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Test the GitHub User Search: submit a username, verify the loading UI, then wait for the user card. Add another test for a 404 error.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Know when to use findBy versus waitFor and why fixed delays make tests unreliable.",
    },
  ],

  commonMistakes: [
    "Using setTimeout or arbitrary sleep delays.",
    "Expecting async data synchronously.",
    "Testing success but ignoring loading and error states.",
    "Using waitFor when a simple findBy would be clearer.",
    "Putting side effects inside waitFor instead of assertions.",
  ],

  notebookNote:
    "Async test: izazovi user akciju → čekaj observable UI rezultat. findBy = čekaj element. waitFor = čekaj assertion. Ne koristi proizvoljne sleep delay-e.",

  relatedLessonIds: [
    "react-testing-user-event",
    "react-testing-tanstack-query",
  ],
};
