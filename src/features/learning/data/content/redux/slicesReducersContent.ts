import type { LessonContent } from "../../../types/learning";

export const slicesReducersContent: LessonContent = {
  lessonId: "redux-slices-reducers",

  overview:
    "A Redux Toolkit slice groups one feature's state, reducer logic and generated action creators together.",

  mentalModel:
    "A slice owns one meaningful portion of Redux state and defines the valid state transitions for that domain.",

  sections: [
    {
      id: "state",
      title: "Define slice state",
      body: "Start by defining the shape and initial state for the feature.",
      codeExamples: [
        {
          id: "counter-state-example",
          title: "Counter state",
          language: "ts",
          code: `interface CounterState {
  value: number;
}

const initialState:
  CounterState = {
    value: 0,
  };`,
        },
      ],
    },

    {
      id: "create-slice",
      title: "createSlice",
      body: "createSlice receives a name, initial state and reducer functions.",
      codeExamples: [
        {
          id: "create-slice-example",
          title: "Counter slice",
          language: "ts",
          code: `const counterSlice =
  createSlice({
    name: "counter",

    initialState,

    reducers: {
      increment(state) {
        state.value += 1;
      },

      decrement(state) {
        state.value -= 1;
      },
    },
  });`,
        },
      ],
    },

    {
      id: "generated-actions",
      title: "Generated actions",
      body: "createSlice automatically generates action creators corresponding to reducer names.",
      codeExamples: [
        {
          id: "actions-example",
          title: "Export actions",
          language: "ts",
          code: `export const {
  increment,
  decrement,
} = counterSlice.actions;`,
        },
      ],
    },

    {
      id: "reducer-export",
      title: "Export the reducer",
      body: "The slice reducer is registered inside configureStore.",
      codeExamples: [
        {
          id: "reducer-export-example",
          title: "Default export",
          language: "ts",
          code: `export default
  counterSlice.reducer;`,
        },
      ],
    },

    {
      id: "payload-action",
      title: "PayloadAction",
      body: "Actions can carry data through action.payload.",
      codeExamples: [
        {
          id: "payload-example",
          title: "Increment by amount",
          language: "ts",
          code: `incrementByAmount(
  state,
  action:
    PayloadAction<number>,
) {
  state.value +=
    action.payload;
}`,
        },
      ],
    },

    {
      id: "action-shape",
      title: "What an action looks like",
      body: "Redux actions are plain objects describing what happened.",
      codeExamples: [
        {
          id: "action-object-example",
          title: "Generated action",
          language: "ts",
          code: `incrementByAmount(5)

// approximately:
{
  type:
    "counter/incrementByAmount",
  payload: 5
}`,
        },
      ],
    },

    {
      id: "under-hood",
      title: "Under the hood",
      body: "dispatch sends the action to the Redux store. The relevant reducer calculates the next state. React Redux subscriptions then update components whose selected state changed.",
      codeExamples: [
        {
          id: "slice-flow",
          title: "Flow",
          language: "ts",
          code: `dispatch(
  incrementByAmount(5),
)

↓
action

↓
counter reducer

↓
state.value changes

↓
subscribed UI updates`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Reducers should remain predictable and focused on state transitions. Avoid performing network requests or unrelated side effects directly inside reducers.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Extend the counter slice with reset and setValue reducers. setValue should receive a number through PayloadAction<number>.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Know what a Redux slice contains, how actions are generated and why mutable-looking reducer syntax remains immutable through Immer.",
    },
  ],

  commonMistakes: [
    "Performing API requests inside reducers.",
    "Mutating external values from a reducer.",
    "Creating one enormous slice for the whole application.",
    "Using untyped action payloads.",
  ],

  notebookNote:
    "Slice = state + reducers + generated actions za jedan domain. dispatch(action) → reducer → new state. PayloadAction<T> tipizira action.payload. createSlice koristi Immer.",

  relatedLessonIds: ["redux-store-setup", "redux-typed-hooks"],
};
