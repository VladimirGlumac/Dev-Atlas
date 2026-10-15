import type { LessonContent } from "../../../types/learning";

export const reduxVsContextContent: LessonContent = {
  lessonId: "redux-vs-context",

  overview:
    "React Context and Redux Toolkit can both share state across distant components, but they solve different levels of complexity. Context is built into React and works well for simpler shared values, while Redux Toolkit provides a structured model for larger client-state workflows.",

  mentalModel:
    "Context answers 'how do I make this value available deeply in the tree?'. Redux answers 'how do I manage complex shared state transitions predictably at application scale?'.",

  sections: [
    {
      id: "context-use-case",
      title: "Good Context use cases",
      body: "Context is a strong fit when a relatively small shared value needs to be available to many descendants.",
      codeExamples: [
        {
          id: "context-examples",
          title: "Context candidates",
          language: "ts",
          code: `theme
locale
simple auth/session info
feature flags
small app settings`,
        },
      ],
    },

    {
      id: "redux-use-case",
      title: "Good Redux use cases",
      body: "Redux becomes more attractive when shared client state has many actions, transitions, consumers or domains.",
      codeExamples: [
        {
          id: "redux-examples",
          title: "Redux candidates",
          language: "ts",
          code: `complex editor
workflow state
multi-step shared draft
large client-side entity state
cross-page state transitions`,
        },
      ],
    },

    {
      id: "update-frequency",
      title: "Update frequency matters",
      body: "A Context value update causes consumers of that context to re-evaluate. For frequently changing, complex shared state, more focused Redux selectors can provide clearer update boundaries.",
    },

    {
      id: "context-plus-reducer",
      title: "Context + useReducer",
      body: "Context combined with useReducer can manage moderately complex shared state without introducing Redux.",
      codeExamples: [
        {
          id: "context-reducer-flow",
          title: "Smaller shared state",
          language: "ts",
          code: `Context
+
useReducer
→ can be enough

Redux
→ when structure/tooling/scale
becomes valuable`,
        },
      ],
    },

    {
      id: "tooling",
      title: "Redux adds structure and tooling",
      body: "Redux Toolkit provides slices, predictable actions, middleware, selectors and Redux DevTools integration.",
    },

    {
      id: "decision",
      title: "Decision guide",
      body: "Start with the simplest tool that clearly fits the problem.",
      codeExamples: [
        {
          id: "decision-example",
          title: "Quick guide",
          language: "ts",
          code: `simple shared value
→ Context

moderate shared logic
→ Context + useReducer

complex shared client state
→ Redux Toolkit`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Do not migrate working Context state to Redux simply because the project grew. Introduce Redux when state complexity or maintainability creates a real benefit.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Classify theme, locale, authenticated user permissions, a collaborative editor workflow and a complex checkout draft as Context, Redux, or context-dependent.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Avoid saying Redux is always better than Context. Explain tradeoffs in state complexity, update behavior, tooling and maintainability.",
    },
  ],

  commonMistakes: [
    "Using Redux for one simple global boolean.",
    "Using one giant Context for rapidly changing unrelated state.",
    "Assuming Context and Redux are identical because both share state.",
    "Migrating to Redux without identifying a real state-management problem.",
  ],

  notebookNote:
    "Context = jednostavnije shared values. Context + useReducer može pokriti srednju kompleksnost. Redux Toolkit = kompleksan shared client state sa mnogo transitions, actions i consumers.",

  relatedLessonIds: [
    "redux-vs-tanstack-query",
    "react-state-ownership",
    "react-use-context",
  ],
};
