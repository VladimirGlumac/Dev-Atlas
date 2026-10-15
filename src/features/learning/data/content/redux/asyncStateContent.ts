import type { LessonContent } from "../../../types/learning";

export const asyncStateContent: LessonContent = {
  lessonId: "redux-async-state",

  overview:
    "Async Redux state commonly tracks data together with operation status and error information. extraReducers lets a slice respond to actions generated outside its own reducers, including createAsyncThunk lifecycle actions.",

  mentalModel:
    "The thunk performs the async operation. The slice reacts to the thunk lifecycle and updates Redux state.",

  sections: [
    {
      id: "state-shape",
      title: "Model async state",
      body: "A simple async slice may track data, status and error.",
      codeExamples: [
        {
          id: "state-shape-example",
          title: "Users state",
          language: "ts",
          code: `type RequestStatus =
  | "idle"
  | "loading"
  | "succeeded"
  | "failed";

interface UsersState {
  items: User[];
  status:
    RequestStatus;
  error:
    string | null;
}

const initialState:
  UsersState = {
    items: [],
    status: "idle",
    error: null,
  };`,
        },
      ],
    },

    {
      id: "extra-reducers",
      title: "extraReducers",
      body: "extraReducers handles actions that were not directly created by the slice's reducers.",
      codeExamples: [
        {
          id: "extra-reducers-example",
          title: "Thunk lifecycle",
          language: "ts",
          code: `const usersSlice =
  createSlice({
    name: "users",

    initialState,

    reducers: {},

    extraReducers:
      (builder) => {
        builder
          .addCase(
            fetchUsers.pending,
            (state) => {
              state.status =
                "loading";

              state.error =
                null;
            },
          )

          .addCase(
            fetchUsers.fulfilled,
            (
              state,
              action,
            ) => {
              state.status =
                "succeeded";

              state.items =
                action.payload;
            },
          )

          .addCase(
            fetchUsers.rejected,
            (
              state,
              action,
            ) => {
              state.status =
                "failed";

              state.error =
                action.error
                  .message ??
                "Unknown error";
            },
          );
      },
  });`,
        },
      ],
    },

    {
      id: "builder",
      title: "Builder callback",
      body: "The builder API gives TypeScript strong inference for the actions handled by each case.",
    },

    {
      id: "ui",
      title: "Render async state",
      body: "Components can select the async status and render the appropriate UI.",
      codeExamples: [
        {
          id: "ui-state-example",
          title: "Status UI",
          language: "tsx",
          code: `if (
  status === "loading"
) {
  return <Spinner />;
}

if (
  status === "failed"
) {
  return (
    <ErrorMessage>
      {error}
    </ErrorMessage>
  );
}

return (
  <UserList
    users={users}
  />
);`,
        },
      ],
    },

    {
      id: "discriminated-thinking",
      title: "Think in explicit states",
      body: "Avoid unrelated booleans such as isLoading, hasLoaded and hasError when a clear status union can represent the workflow more predictably.",
      codeExamples: [
        {
          id: "status-union-example",
          title: "Explicit lifecycle",
          language: "ts",
          code: `"idle"
| "loading"
| "succeeded"
| "failed"`,
        },
      ],
    },

    {
      id: "duplicate-server-state",
      title: "But should Redux own this?",
      body: "The pattern is valid, but ordinary remote collections often require caching, stale-time handling, background refetching and invalidation. TanStack Query handles those concerns directly.",
      codeExamples: [
        {
          id: "comparison-example",
          title: "Redux requires manual server-state lifecycle",
          language: "ts",
          code: `Redux:
data
status
error
fetch lifecycle
refetch rules
cache decisions

TanStack Query:
server-state lifecycle
already built in`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Use explicit async status when Redux truly owns the workflow. Avoid manually rebuilding an API cache in Redux when a dedicated server-state library is already available.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Build a users slice that handles fetchUsers pending, fulfilled and rejected. Expose selectors for users, status and error.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be ready to explain extraReducers, why thunk lifecycle actions are handled there and how async status can be modeled.",
    },
  ],

  commonMistakes: [
    "Handling async side effects directly inside reducers.",
    "Ignoring loading or error states.",
    "Using several contradictory boolean flags.",
    "Reimplementing a full server-state cache manually in Redux.",
  ],

  notebookNote:
    "Thunk radi async posao. extraReducers reaguje na pending/fulfilled/rejected i menja Redux state. Za status koristi jasan union umesto gomile booleans.",

  relatedLessonIds: ["redux-create-async-thunk", "redux-vs-tanstack-query"],
};
