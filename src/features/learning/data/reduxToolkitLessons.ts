import type { Lesson } from "../types/learning";

export const reduxToolkitLessons: Lesson[] = [
  {
    id: "redux-why-redux-toolkit",
    technologyId: "redux-toolkit",
    sectionId: "redux-foundations",
    title: "Why Redux Toolkit?",
    slug: "why-redux-toolkit",
    description:
      "Understand what Redux solves, when global client state is justified and why Redux Toolkit is the standard Redux approach.",
    difficulty: "beginner",
    status: "published",
    order: 1,
  },

  {
    id: "redux-store-setup",
    technologyId: "redux-toolkit",
    sectionId: "redux-foundations",
    title: "Store Setup",
    slug: "store-setup",
    description:
      "Create and provide a Redux Toolkit store to a React application.",
    difficulty: "beginner",
    status: "published",
    order: 2,
  },

  {
    id: "redux-slices-reducers",
    technologyId: "redux-toolkit",
    sectionId: "redux-foundations",
    title: "Slices & Reducers",
    slug: "slices-reducers",
    description:
      "Create feature state, reducers and generated actions with createSlice.",
    difficulty: "beginner",
    status: "published",
    order: 3,
  },

  {
    id: "redux-typed-hooks",
    technologyId: "redux-toolkit",
    sectionId: "redux-react-integration",
    title: "Typed Redux Hooks",
    slug: "typed-hooks",
    description:
      "Create reusable typed versions of useSelector and useDispatch for TypeScript applications.",
    difficulty: "intermediate",
    status: "published",
    order: 1,
  },
  {
    id: "redux-selectors",
    technologyId: "redux-toolkit",
    sectionId: "redux-state-modeling",
    title: "Selectors",
    slug: "selectors",
    description:
      "Read and derive Redux state through reusable selector functions.",
    difficulty: "intermediate",
    status: "published",
    order: 1,
  },
  {
    id: "redux-payload-action",
    technologyId: "redux-toolkit",
    sectionId: "redux-state-modeling",
    title: "PayloadAction & Typed Actions",
    slug: "payload-action",
    description:
      "Model reducer inputs safely with typed Redux action payloads.",
    difficulty: "intermediate",
    status: "published",
    order: 2,
  },
  {
    id: "redux-normalized-state",
    technologyId: "redux-toolkit",
    sectionId: "redux-state-modeling",
    title: "Normalized State",
    slug: "normalized-state",
    description:
      "Store entity collections in structures optimized for lookup and updates.",
    difficulty: "intermediate",
    status: "published",
    order: 3,
  },
  {
    id: "redux-entity-adapter",
    technologyId: "redux-toolkit",
    sectionId: "redux-state-modeling",
    title: "createEntityAdapter",
    slug: "create-entity-adapter",
    description:
      "Manage normalized entity collections with Redux Toolkit's createEntityAdapter.",
    difficulty: "advanced",
    status: "published",
    order: 4,
  },
  {
    id: "redux-create-async-thunk",
    technologyId: "redux-toolkit",
    sectionId: "redux-async",
    title: "createAsyncThunk",
    slug: "create-async-thunk",
    description:
      "Handle asynchronous Redux workflows with typed pending, fulfilled and rejected actions.",
    difficulty: "intermediate",
    status: "published",
    order: 1,
  },
  {
    id: "redux-async-state",
    technologyId: "redux-toolkit",
    sectionId: "redux-async",
    title: "Async State with extraReducers",
    slug: "async-state-extra-reducers",
    description:
      "Handle thunk lifecycle actions with loading, success and error state.",
    difficulty: "intermediate",
    status: "published",
    order: 2,
  },
  {
    id: "redux-vs-tanstack-query",
    technologyId: "redux-toolkit",
    sectionId: "redux-production",
    title: "Redux Toolkit vs TanStack Query",
    slug: "redux-vs-tanstack-query",
    description:
      "Choose the correct tool for client state and server state without duplicating ownership.",
    difficulty: "intermediate",
    status: "published",
    order: 2,
  },
  {
    id: "redux-vs-context",
    technologyId: "redux-toolkit",
    sectionId: "redux-production",
    title: "Redux Toolkit vs Context",
    slug: "redux-vs-context",
    description:
      "Choose between React Context and Redux Toolkit based on state complexity, update frequency and ownership.",
    difficulty: "intermediate",
    status: "published",
    order: 1,
  },
  {
    id: "redux-project-structure",
    technologyId: "redux-toolkit",
    sectionId: "redux-production",
    title: "Redux Project Structure",
    slug: "project-structure",
    description:
      "Organize Redux code by feature and keep store configuration, selectors and state ownership predictable.",
    difficulty: "intermediate",
    status: "published",
    order: 3,
  },
];
