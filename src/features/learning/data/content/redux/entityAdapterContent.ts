import type { LessonContent } from "../../../types/learning";

export const entityAdapterContent: LessonContent = {
  lessonId: "redux-entity-adapter",

  overview:
    "createEntityAdapter provides standardized reducers and selectors for normalized entity collections. It removes much of the repetitive code required for ids and entities management.",

  mentalModel:
    "Normalized state is the pattern. createEntityAdapter is Redux Toolkit's helper for implementing that pattern.",

  sections: [
    {
      id: "adapter",
      title: "Create an adapter",
      body: "The adapter understands the entity type and manages normalized collection operations.",
      codeExamples: [
        {
          id: "adapter-example",
          title: "Task adapter",
          language: "ts",
          code: `import {
  createEntityAdapter,
} from "@reduxjs/toolkit";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const tasksAdapter =
  createEntityAdapter<Task>();`,
        },
      ],
    },

    {
      id: "initial-state",
      title: "Adapter initial state",
      body: "getInitialState creates the normalized ids/entities structure.",
      codeExamples: [
        {
          id: "initial-state-example",
          title: "Normalized state",
          language: "ts",
          code: `const initialState =
  tasksAdapter
    .getInitialState();`,
        },
      ],
    },

    {
      id: "slice",
      title: "Use adapter reducers",
      body: "Adapter methods can perform common entity updates inside createSlice reducers.",
      codeExamples: [
        {
          id: "adapter-slice-example",
          title: "Tasks slice",
          language: "ts",
          code: `const tasksSlice =
  createSlice({
    name: "tasks",

    initialState,

    reducers: {
      taskAdded:
        tasksAdapter.addOne,

      tasksAdded:
        tasksAdapter.addMany,

      taskRemoved:
        tasksAdapter.removeOne,

      tasksCleared:
        tasksAdapter.removeAll,
    },
  });`,
        },
      ],
    },

    {
      id: "update-one",
      title: "Update one entity",
      body: "updateOne expects an id and a changes object.",
      codeExamples: [
        {
          id: "update-one-example",
          title: "Update task",
          language: "ts",
          code: `dispatch(
  taskUpdated({
    id: 3,

    changes: {
      completed: true,
    },
  }),
);`,
        },
      ],
    },

    {
      id: "selectors",
      title: "Generated selectors",
      body: "The adapter can generate reusable selectors for common normalized-state operations.",
      codeExamples: [
        {
          id: "adapter-selectors-example",
          title: "Selectors",
          language: "ts",
          code: `export const {
  selectAll:
    selectAllTasks,

  selectById:
    selectTaskById,

  selectIds:
    selectTaskIds,

  selectTotal:
    selectTaskTotal,
} =
  tasksAdapter
    .getSelectors(
      (
        state:
          RootState,
      ) =>
        state.tasks,
    );`,
        },
      ],
    },

    {
      id: "sort-comparer",
      title: "Keep entities sorted",
      body: "An adapter may define sortComparer when consumers need a consistent ordering.",
      codeExamples: [
        {
          id: "sort-comparer-example",
          title: "Sort tasks",
          language: "ts",
          code: `const tasksAdapter =
  createEntityAdapter<Task>({
    sortComparer:
      (a, b) =>
        a.title.localeCompare(
          b.title,
        ),
  });`,
        },
      ],
    },

    {
      id: "under-hood",
      title: "Under the hood",
      body: "The adapter manages ids and entities and provides standardized immutable updates through Redux Toolkit.",
      codeExamples: [
        {
          id: "entity-flow",
          title: "Entity model",
          language: "ts",
          code: `Task[]
↓
normalized collection

ids
+
entities

↓
adapter operations

addOne
updateOne
removeOne
setAll`,
        },
      ],
    },

    {
      id: "when-to-use",
      title: "When should you use it?",
      body: "createEntityAdapter is useful when Redux genuinely owns a collection of identifiable entities with frequent CRUD-like updates. It is not required for every array.",
    },

    {
      id: "server-warning",
      title: "Do not duplicate TanStack Query unnecessarily",
      body: "If the collection exists mainly because it came from a server and TanStack Query already manages it, copying the same data into Redux may create two sources of truth.",
      codeExamples: [
        {
          id: "duplicate-state-warning",
          title: "Avoid",
          language: "ts",
          code: `API
↓
TanStack cache
↓
copy same users
↓
Redux

❌ usually unnecessary`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Entity adapter is most useful for complex client-owned entity state. Always decide ownership before choosing the tool.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Create a task adapter with addOne, removeOne and updateOne, then expose selectAllTasks and selectTaskById selectors.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Know what normalized state is, what createEntityAdapter provides and why duplicating server data into Redux can be problematic.",
    },
  ],

  commonMistakes: [
    "Using createEntityAdapter for every tiny list.",
    "Copying TanStack Query server state into Redux without a real reason.",
    "Storing duplicate entity versions in multiple Redux locations.",
    "Using the adapter without understanding normalized state first.",
  ],

  notebookNote:
    "createEntityAdapter = RTK helper za normalized entity state. Daje ids/entities strukturu, CRUD reducer helpers i selectors. Koristi ga kada Redux stvarno poseduje kompleksnu entity kolekciju.",

  relatedLessonIds: [
    "redux-normalized-state",
    "redux-selectors",
    "redux-vs-tanstack-query",
  ],
};
