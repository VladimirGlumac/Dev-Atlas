import type { LessonContent } from "../../../types/learning";

export const storeSetupContent: LessonContent = {
  lessonId: "redux-store-setup",

  overview:
    "The Redux store is the central container for Redux-managed state. configureStore creates the store and combines feature reducers with useful development defaults.",

  mentalModel:
    "The store contains Redux state. Individual slices own specific parts of that state.",

  sections: [
    {
      id: "configure-store",
      title: "Create the store",
      body: "configureStore receives the reducers that own different portions of Redux state.",
      codeExamples: [
        {
          id: "store-example",
          title: "store/store.ts",
          language: "ts",
          code: `import {
  configureStore,
} from "@reduxjs/toolkit";

import counterReducer from
  "../features/counter/counterSlice";

export const store =
  configureStore({
    reducer: {
      counter: counterReducer,
    },
  });`,
        },
      ],
    },

    {
      id: "state-tree",
      title: "Redux state tree",
      body: "The reducer key determines where a slice appears in the global Redux state.",
      codeExamples: [
        {
          id: "state-tree-example",
          title: "Resulting state",
          language: "ts",
          code: `{
  counter: {
    value: 0
  }
}`,
        },
      ],
    },

    {
      id: "provider",
      title: "Provide the store to React",
      body: "React components access the store through React Redux Provider.",
      codeExamples: [
        {
          id: "provider-example",
          title: "main.tsx",
          language: "tsx",
          code: `import {
  Provider,
} from "react-redux";

import { store } from "./store/store";

createRoot(
  document.getElementById(
    "root",
  )!,
).render(
  <Provider store={store}>
    <App />
  </Provider>,
);`,
        },
      ],
    },

    {
      id: "root-state",
      title: "Infer RootState",
      body: "Do not manually duplicate the Redux state shape. Derive it directly from the store.",
      codeExamples: [
        {
          id: "root-state-example",
          title: "RootState",
          language: "ts",
          code: `export type RootState =
  ReturnType<
    typeof store.getState
  >;`,
        },
      ],
    },

    {
      id: "app-dispatch",
      title: "Infer AppDispatch",
      body: "The dispatch type should also come directly from the configured store.",
      codeExamples: [
        {
          id: "dispatch-type-example",
          title: "AppDispatch",
          language: "ts",
          code: `export type AppDispatch =
  typeof store.dispatch;`,
        },
      ],
    },

    {
      id: "under-hood",
      title: "Under the hood",
      body: "Provider places the Redux store into React context. React Redux hooks later retrieve that store and subscribe components to relevant state changes.",
      codeExamples: [
        {
          id: "provider-flow",
          title: "Flow",
          language: "ts",
          code: `configureStore()
↓
Redux store

Provider
↓
React context

useSelector / useDispatch
↓
components`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Keep store configuration centralized and derive RootState and AppDispatch from the actual store rather than maintaining duplicate manual types.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Add a second temporary reducer called settings and inspect how the RootState shape changes automatically.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be ready to explain what configureStore does, why Provider is required and why RootState should be inferred rather than manually written.",
    },
  ],

  commonMistakes: [
    "Creating multiple unrelated Redux stores for ordinary application state.",
    "Forgetting Provider.",
    "Manually writing RootState and allowing it to drift from the actual store.",
    "Putting React components inside store configuration.",
  ],

  notebookNote:
    "configureStore kreira Redux store. reducer key određuje state tree. Provider daje store React aplikaciji. RootState i AppDispatch inferuj direktno iz store-a.",

  relatedLessonIds: ["redux-slices-reducers", "redux-typed-hooks"],
};
