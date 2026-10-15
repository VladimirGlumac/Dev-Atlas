import type { LessonContent } from "../../../types/learning";

export const payloadActionContent: LessonContent = {
  lessonId: "redux-payload-action",

  overview:
    "PayloadAction describes data carried by a Redux action. Typed payloads make reducer inputs predictable and prevent invalid dispatch calls at compile time.",

  mentalModel:
    "An action describes what happened. payload contains the data required to perform that state transition.",

  sections: [
    {
      id: "simple-payload",
      title: "Simple payload",
      body: "A reducer can define exactly what type of value it expects through PayloadAction<T>.",
      codeExamples: [
        {
          id: "number-payload-example",
          title: "Set counter value",
          language: "ts",
          code: `setValue(
  state,
  action:
    PayloadAction<number>,
) {
  state.value =
    action.payload;
}`,
        },
      ],
    },

    {
      id: "object-payload",
      title: "Object payloads",
      body: "More complex actions usually carry structured object payloads.",
      codeExamples: [
        {
          id: "object-payload-example",
          title: "Rename task",
          language: "ts",
          code: `interface RenameTaskPayload {
  id: number;
  title: string;
}

renameTask(
  state,
  action:
    PayloadAction<
      RenameTaskPayload
    >,
) {
  const task =
    state.items.find(
      (item) =>
        item.id ===
        action.payload.id,
    );

  if (!task) return;

  task.title =
    action.payload.title;
}`,
        },
      ],
    },

    {
      id: "dispatch-safety",
      title: "Typed dispatch",
      body: "Generated action creators inherit the payload type, so incorrect dispatch arguments become TypeScript errors.",
      codeExamples: [
        {
          id: "dispatch-safety-example",
          title: "Compile-time safety",
          language: "ts",
          code: `dispatch(
  renameTask({
    id: 1,
    title: "Learn Redux",
  }),
);

// Type error:
// renameTask({
//   id: "1",
//   title: 42,
// })`,
        },
      ],
    },

    {
      id: "minimal-payload",
      title: "Send only what the reducer needs",
      body: "Action payloads should usually describe the minimum information required for the transition instead of passing unrelated application state.",
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Prefer domain-specific payload objects when an action needs multiple values. Clear payload names improve reducer readability and future refactoring.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Create toggleTask(id), renameTask({ id, title }) and setTaskPriority({ id, priority }) reducers with correctly typed PayloadAction values.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Know what action.type and action.payload represent and how PayloadAction<T> improves TypeScript safety.",
    },
  ],

  commonMistakes: [
    "Using any for action payloads.",
    "Passing entire unrelated objects when an id is enough.",
    "Creating ambiguous payload shapes.",
    "Putting side effects inside reducers instead of describing state transitions.",
  ],

  notebookNote:
    "PayloadAction<T> tipizira action.payload. Action treba da nosi minimalne podatke potrebne za state transition. Generated action creator automatski nasleđuje payload tip.",

  relatedLessonIds: ["redux-slices-reducers", "redux-selectors"],
};
