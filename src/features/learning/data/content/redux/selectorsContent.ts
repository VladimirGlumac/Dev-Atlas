import type { LessonContent } from "../../../types/learning";

export const selectorsContent: LessonContent = {
  lessonId: "redux-selectors",

  overview:
    "Selectors are functions that read or derive values from Redux state. They keep components independent from detailed store structure and centralize reusable state-reading logic.",

  mentalModel:
    "Components should ask the store for meaningful values, not know every detail about how state is stored internally.",

  sections: [
    {
      id: "basic-selector",
      title: "Basic selector",
      body: "A selector receives RootState and returns a value from the Redux store.",
      codeExamples: [
        {
          id: "basic-selector-example",
          title: "Counter selector",
          language: "ts",
          code: `export const selectCounterValue =
  (state: RootState) =>
    state.counter.value;`,
        },
      ],
    },

    {
      id: "use-selector",
      title: "Use selector in a component",
      body: "Components can pass reusable selectors directly to useAppSelector.",
      codeExamples: [
        {
          id: "component-selector-example",
          title: "Use reusable selector",
          language: "tsx",
          code: `const value =
  useAppSelector(
    selectCounterValue,
  );`,
        },
      ],
    },

    {
      id: "derived-state",
      title: "Derived state",
      body: "Selectors can calculate values from stored state instead of duplicating derived values inside Redux.",
      codeExamples: [
        {
          id: "derived-selector-example",
          title: "Completed task count",
          language: "ts",
          code: `export const selectCompletedCount =
  (state: RootState) =>
    state.tasks.items.filter(
      (task) =>
        task.completed,
    ).length;`,
        },
      ],
    },

    {
      id: "parameterized",
      title: "Parameterized selectors",
      body: "Selectors may receive additional arguments when a component needs a specific entity or filtered view.",
      codeExamples: [
        {
          id: "parameterized-selector-example",
          title: "Find task",
          language: "ts",
          code: `export const selectTaskById = (
  state: RootState,
  taskId: number,
) =>
  state.tasks.items.find(
    (task) =>
      task.id === taskId,
  );`,
        },
      ],
    },

    {
      id: "store-shape",
      title: "Selectors hide store structure",
      body: "If the internal Redux state shape changes, reusable selectors reduce how many components need to know about that change.",
      codeExamples: [
        {
          id: "selector-boundary-example",
          title: "Component contract",
          language: "ts",
          code: `Component
→ selectCurrentUser(state)

instead of

Component
→ state.auth.session.user`,
        },
      ],
    },

    {
      id: "memoization",
      title: "Memoized selectors",
      body: "Expensive derived calculations can be memoized with createSelector so the result is recalculated only when relevant inputs change.",
      codeExamples: [
        {
          id: "create-selector-example",
          title: "Memoized filtered tasks",
          language: "ts",
          code: `import {
  createSelector,
} from "@reduxjs/toolkit";

const selectTasks =
  (state: RootState) =>
    state.tasks.items;

export const selectCompletedTasks =
  createSelector(
    [selectTasks],
    (tasks) =>
      tasks.filter(
        (task) =>
          task.completed,
      ),
  );`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Do not memoize every trivial selector. Use createSelector when derived computation is meaningful or when referential stability matters.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Create selectors for all tasks, completed tasks, incomplete tasks and one task by id.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be ready to explain why selectors improve encapsulation and when createSelector is useful.",
    },
  ],

  commonMistakes: [
    "Reading deeply nested store paths everywhere in components.",
    "Storing derived values that could be calculated by selectors.",
    "Using createSelector for every one-line property access.",
    "Selecting the whole store when a component needs one small value.",
  ],

  notebookNote:
    "Selector = funkcija koja čita ili derive-uje Redux state. Komponente treba da zavise od selector API-ja, ne od detaljne store strukture. createSelector koristi za meaningful derived/memoized state.",

  relatedLessonIds: ["redux-normalized-state", "redux-entity-adapter"],
};
