import type { LessonContent } from "../../../types/learning";

export const typedHooksContent: LessonContent = {
  lessonId: "redux-typed-hooks",

  overview:
    "Typed Redux hooks centralize RootState and AppDispatch typing so components can use Redux safely without repeating TypeScript annotations.",

  mentalModel:
    "Configure Redux types once, then expose application-specific hooks that already know the store types.",

  sections: [
    {
      id: "problem",
      title: "Why typed hooks?",
      body: "Raw React Redux hooks do not automatically know your application's complete store type unless you provide it.",
    },

    {
      id: "typed-hooks",
      title: "Create application hooks",
      body: "Create typed versions of useDispatch and useSelector once and reuse them everywhere.",
      codeExamples: [
        {
          id: "typed-hooks-example",
          title: "store/hooks.ts",
          language: "ts",
          code: `import {
  useDispatch,
  useSelector,
} from "react-redux";

import type {
  TypedUseSelectorHook,
} from "react-redux";

import type {
  AppDispatch,
  RootState,
} from "./store";

export const useAppDispatch:
  () => AppDispatch =
  useDispatch;

export const useAppSelector:
  TypedUseSelectorHook<RootState> =
  useSelector;`,
        },
      ],
    },

    {
      id: "selector",
      title: "Read Redux state",
      body: "useAppSelector receives the correctly typed RootState.",
      codeExamples: [
        {
          id: "selector-example",
          title: "Read counter",
          language: "tsx",
          code: `const value =
  useAppSelector(
    (state) =>
      state.counter.value,
  );`,
        },
      ],
    },

    {
      id: "dispatch",
      title: "Dispatch Redux actions",
      body: "useAppDispatch returns the correctly typed dispatch function.",
      codeExamples: [
        {
          id: "dispatch-example",
          title: "Dispatch action",
          language: "tsx",
          code: `const dispatch =
  useAppDispatch();

dispatch(
  incrementByAmount(5),
);`,
        },
      ],
    },

    {
      id: "component",
      title: "Component example",
      body: "The component remains focused on reading state and dispatching user actions.",
      codeExamples: [
        {
          id: "counter-component-example",
          title: "Counter",
          language: "tsx",
          code: `export function Counter() {
  const value =
    useAppSelector(
      (state) =>
        state.counter.value,
    );

  const dispatch =
    useAppDispatch();

  return (
    <>
      <p>
        Count: {value}
      </p>

      <button
        onClick={() =>
          dispatch(
            increment(),
          )
        }
      >
        +
      </button>
    </>
  );
}`,
        },
      ],
    },

    {
      id: "under-hood",
      title: "Under the hood",
      body: "useSelector subscribes the component to the selected part of Redux state. When that selected result changes, React Redux triggers a component re-render.",
      codeExamples: [
        {
          id: "selector-flow",
          title: "Selector lifecycle",
          language: "ts",
          code: `store changes
↓
selector runs
↓
selected value compared
↓
changed?
↓
component re-renders`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Prefer typed application hooks throughout the codebase so Redux typing remains consistent and components do not repeatedly import RootState or AppDispatch.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Use useAppSelector to read the counter and useAppDispatch to implement increment, decrement and incrementByAmount without importing RootState into the component.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Know what useSelector does, why useDispatch sends actions and why typed wrapper hooks improve TypeScript Redux applications.",
    },
  ],

  commonMistakes: [
    "Importing RootState manually into every component.",
    "Using untyped dispatch throughout a TypeScript application.",
    "Selecting the entire Redux store when a component needs only one value.",
    "Using selectors for state that does not belong in Redux.",
  ],

  notebookNote:
    "useAppSelector = typed useSelector. useAppDispatch = typed useDispatch. Selector čita deo store-a i komponenta se re-renderuje kada se izabrana vrednost promeni.",

  relatedLessonIds: ["redux-store-setup", "redux-slices-reducers"],
};
