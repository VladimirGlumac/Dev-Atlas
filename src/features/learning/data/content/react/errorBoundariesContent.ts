import type { LessonContent } from "../../../types/learning";

export const errorBoundariesContent: LessonContent = {
  lessonId: "react-error-boundaries",

  overview:
    "Error boundaries catch rendering errors in a React subtree and display fallback UI instead of allowing the entire application tree to fail.",

  mentalModel:
    "An error boundary is a safety net around a part of the React tree. It does not replace ordinary request error handling.",

  sections: [
    {
      id: "problem",
      title: "Rendering failures",
      body: "Unexpected render errors can otherwise remove a large part of the UI or crash the application experience.",
    },

    {
      id: "boundary",
      title: "Boundary fallback",
      body: "Wrap important areas so one failing feature does not necessarily destroy the whole application.",
      codeExamples: [
        {
          id: "boundary-usage",
          title: "Feature boundary",
          language: "tsx",
          code: `<ErrorBoundary
  fallback={
    <FeatureError />
  }
>
  <Dashboard />
</ErrorBoundary>`,
        },
      ],
    },

    {
      id: "placement",
      title: "Where to place boundaries",
      body: "Useful boundaries may exist around the application shell, routes or isolated complex features.",
      codeExamples: [
        {
          id: "placement-example",
          title: "Possible boundaries",
          language: "ts",
          code: `App
├── global boundary
│
├── Dashboard
│   └── feature boundary
│
└── Playground
    └── feature boundary`,
        },
      ],
    },

    {
      id: "not-fetch-errors",
      title: "Not for ordinary API errors",
      body: "A 404 or failed request should normally be represented through query or application state, not thrown simply so an error boundary can catch it.",
      codeExamples: [
        {
          id: "error-separation",
          title: "Different concerns",
          language: "ts",
          code: `API 404
→ query error state

Unexpected render exception
→ Error Boundary`,
        },
      ],
    },

    {
      id: "recovery",
      title: "Provide recovery",
      body: "Fallback UI can provide retry, reset or navigation options instead of only displaying a dead-end error.",
    },

    {
      id: "logging",
      title: "Log unexpected failures",
      body: "Production boundaries are useful places to report unexpected UI crashes to an error-monitoring system.",
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Place boundaries strategically. One global boundary is better than none, but smaller route or feature boundaries can prevent one failure from taking down unrelated UI.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Decide where boundaries belong in DevAtlas around AppLayout, LessonPage and Playground.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Explain what error boundaries catch and why they do not replace normal async error handling.",
    },
  ],

  commonMistakes: [
    "Using error boundaries for every failed HTTP request.",
    "Having only a blank fallback.",
    "Wrapping every tiny component individually.",
    "Ignoring unexpected render errors entirely.",
  ],

  notebookNote:
    "Error Boundary = safety net za unexpected render errors u React subtree-u. API/request errors rešavaj kroz normal state/query handling. Boundary fallback treba da ponudi recovery.",

  relatedLessonIds: [
    "react-loading-error-empty",
    "react-testing-what-not-to-test",
  ],
};
