import type { LessonContent } from "../../../types/learning";

export const whyReduxToolkitContent: LessonContent = {
  lessonId: "redux-why-redux-toolkit",

  overview:
    "Redux Toolkit is the official modern way to use Redux. It provides structured global client-state management while reducing the boilerplate traditionally associated with Redux.",

  mentalModel:
    "Redux is a centralized client-side state container. Use it when multiple distant parts of the application need coordinated access to complex client-owned state.",

  sections: [
    {
      id: "problem",
      title: "What problem does Redux solve?",
      body: "Redux becomes useful when client-side state is shared across many unrelated parts of an application and transitions need to remain predictable.",
      codeExamples: [
        {
          id: "shared-state-example",
          title: "Example",
          language: "ts",
          code: `App
├── Header
│   └── WorkflowStatus
│
├── Editor
│   ├── Toolbar
│   ├── Canvas
│   └── Inspector
│
└── Sidebar

All need access to:
editor workflow state`,
        },
      ],
    },

    {
      id: "redux-flow",
      title: "Redux data flow",
      body: "Components read state from the store and dispatch actions describing what happened. Reducers calculate the next state.",
      codeExamples: [
        {
          id: "redux-flow-example",
          title: "One-way data flow",
          language: "ts",
          code: `UI
↓
dispatch(action)
↓
reducer
↓
new store state
↓
UI re-renders`,
        },
      ],
    },

    {
      id: "not-every-state",
      title: "Not all state belongs in Redux",
      body: "Local component state should usually stay local. Moving every modal, input and toggle into Redux creates unnecessary global complexity.",
      codeExamples: [
        {
          id: "local-vs-redux",
          title: "Ownership",
          language: "ts",
          code: `Modal open/closed
→ useState

Input value
→ useState / form library

Complex shared editor state
→ Redux may fit`,
        },
      ],
    },

    {
      id: "server-state",
      title: "Server state is different",
      body: "Fetched API data usually has caching, synchronization, refetching and stale-data concerns. In DevAtlas, TanStack Query is generally the preferred tool for that kind of server state.",
      codeExamples: [
        {
          id: "redux-tanstack-rule",
          title: "Quick rule",
          language: "ts",
          code: `Complex shared client state
→ Redux Toolkit

API/server state
→ TanStack Query`,
        },
      ],
    },

    {
      id: "why-toolkit",
      title: "Why Redux Toolkit?",
      body: "Redux Toolkit provides configureStore, createSlice and other utilities that remove much of traditional Redux boilerplate and apply sensible defaults.",
      codeExamples: [
        {
          id: "toolkit-api",
          title: "Core APIs",
          language: "ts",
          code: `configureStore()
createSlice()
createAsyncThunk()
createEntityAdapter()`,
        },
      ],
    },

    {
      id: "immer",
      title: "Mutable-looking reducer syntax",
      body: "Redux Toolkit uses Immer internally, allowing reducer code that looks mutable while producing immutable state updates safely.",
      codeExamples: [
        {
          id: "immer-example",
          title: "Reducer syntax",
          language: "ts",
          code: `increment(state) {
  state.value += 1;
}`,
          explanation:
            "You are not directly mutating the existing Redux state object. Immer creates the immutable next state.",
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Redux should be introduced because the application has a state-management problem, not because Redux is considered mandatory in React applications.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Classify these as local state, server state or possible Redux state: modal visibility, API users, multi-step editor workflow, search query in URL and input field value.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be ready to explain what Redux solves, why Redux Toolkit replaced much of traditional Redux boilerplate and when you would choose TanStack Query instead.",
    },
  ],

  commonMistakes: [
    "Putting all application state into Redux.",
    "Using Redux as an API cache by default.",
    "Using Redux because a project is large without analyzing the actual state problem.",
    "Assuming mutable-looking createSlice reducers break immutability.",
  ],

  notebookNote:
    "Redux Toolkit = complex shared client state. UI-local state ostaje local. Server/API state obično ide u TanStack Query. Redux data flow: dispatch action → reducer → new state → UI.",

  relatedLessonIds: ["redux-store-setup", "react-state-ownership"],
};
