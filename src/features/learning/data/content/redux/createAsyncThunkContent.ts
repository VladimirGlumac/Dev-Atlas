import type { LessonContent } from "../../../types/learning";

export const createAsyncThunkContent: LessonContent = {
  lessonId: "redux-create-async-thunk",

  overview:
    "createAsyncThunk creates a standardized async Redux workflow. It dispatches lifecycle actions for pending, fulfilled and rejected states around an asynchronous operation.",

  mentalModel:
    "A thunk represents an async operation. Redux Toolkit automatically creates actions describing the lifecycle of that operation.",

  sections: [
    {
      id: "basic-thunk",
      title: "Create an async thunk",
      body: "createAsyncThunk receives an action type prefix and an async payload creator function.",
      codeExamples: [
        {
          id: "basic-thunk-example",
          title: "Fetch users",
          language: "ts",
          code: `import {
  createAsyncThunk,
} from "@reduxjs/toolkit";

export const fetchUsers =
  createAsyncThunk<
    User[]
  >(
    "users/fetchUsers",

    async () => {
      const response =
        await fetch(
          "/api/users",
        );

      if (!response.ok) {
        throw new Error(
          "Failed to fetch users",
        );
      }

      return response.json();
    },
  );`,
        },
      ],
    },

    {
      id: "generated-actions",
      title: "Generated lifecycle actions",
      body: "A thunk automatically creates pending, fulfilled and rejected actions.",
      codeExamples: [
        {
          id: "generated-actions-example",
          title: "Lifecycle",
          language: "ts",
          code: `fetchUsers.pending
fetchUsers.fulfilled
fetchUsers.rejected`,
        },
      ],
    },

    {
      id: "dispatch-thunk",
      title: "Dispatch the thunk",
      body: "Async thunks are dispatched like other Redux actions.",
      codeExamples: [
        {
          id: "dispatch-thunk-example",
          title: "Trigger fetch",
          language: "tsx",
          code: `const dispatch =
  useAppDispatch();

dispatch(
  fetchUsers(),
);`,
        },
      ],
    },

    {
      id: "return-types",
      title: "Typed arguments and result",
      body: "createAsyncThunk can type both the fulfilled result and the argument passed when dispatching.",
      codeExamples: [
        {
          id: "typed-thunk-example",
          title: "Fetch one user",
          language: "ts",
          code: `export const fetchUser =
  createAsyncThunk<
    User,
    number
  >(
    "users/fetchUser",

    async (userId) => {
      const response =
        await fetch(
          \`/api/users/\${userId}\`,
        );

      if (!response.ok) {
        throw new Error(
          "Failed to fetch user",
        );
      }

      return response.json();
    },
  );`,
          explanation:
            "User is the fulfilled result type. number is the argument passed to the thunk.",
        },
      ],
    },

    {
      id: "reject-with-value",
      title: "rejectWithValue",
      body: "When an API failure has meaningful application data, rejectWithValue can return a typed rejected payload instead of relying only on thrown errors.",
      codeExamples: [
        {
          id: "reject-with-value-example",
          title: "Typed error payload",
          language: "ts",
          code: `interface ApiError {
  message: string;
}

export const saveProfile =
  createAsyncThunk<
    User,
    ProfileInput,
    {
      rejectValue:
        ApiError;
    }
  >(
    "profile/save",

    async (
      input,
      { rejectWithValue },
    ) => {
      const response =
        await fetch(
          "/api/profile",
          {
            method: "PATCH",
            body:
              JSON.stringify(
                input,
              ),
          },
        );

      if (!response.ok) {
        return rejectWithValue({
          message:
            "Could not save profile",
        });
      }

      return response.json();
    },
  );`,
        },
      ],
    },

    {
      id: "under-hood",
      title: "Under the hood",
      body: "When the thunk is dispatched, Redux Toolkit dispatches pending first. It then awaits the async operation and dispatches either fulfilled with the result or rejected with error information.",
      codeExamples: [
        {
          id: "thunk-flow",
          title: "Lifecycle",
          language: "ts",
          code: `dispatch(fetchUsers())

↓
fetchUsers.pending

↓
async request

├── success
│   ↓
│ fetchUsers.fulfilled
│
└── failure
    ↓
  fetchUsers.rejected`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "createAsyncThunk is useful for Redux-owned async workflows. Do not automatically use it for ordinary server-state fetching if TanStack Query already solves caching and synchronization better.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Create fetchUserById using createAsyncThunk<User, number>. Handle non-OK responses and dispatch it from a component.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Know the pending, fulfilled and rejected lifecycle and explain what createAsyncThunk generates for you.",
    },
  ],

  commonMistakes: [
    "Using createAsyncThunk for every API request by default.",
    "Putting async logic inside reducers.",
    "Ignoring rejected state.",
    "Using any for thunk arguments or results.",
    "Duplicating TanStack Query server state inside Redux.",
  ],

  notebookNote:
    "createAsyncThunk pravi async Redux lifecycle: pending → fulfilled/rejected. Koristan za async workflow koji Redux stvarno poseduje. Nije automatska zamena za TanStack Query.",

  relatedLessonIds: ["redux-async-state", "redux-vs-tanstack-query"],
};
