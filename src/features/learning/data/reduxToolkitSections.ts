import type { LearningSection } from "../types/learning";

export const reduxToolkitSections: LearningSection[] = [
  {
    id: "redux-foundations",
    technologyId: "redux-toolkit",
    title: "Foundations",
    slug: "foundations",
    description:
      "Understand Redux Toolkit, the store, slices, reducers and predictable state updates.",
    order: 1,
  },

  {
    id: "redux-react-integration",
    technologyId: "redux-toolkit",
    title: "React Integration",
    slug: "react-integration",
    description:
      "Connect Redux Toolkit to React with Provider, typed hooks, selectors and dispatch.",
    order: 2,
  },

  {
    id: "redux-state-modeling",
    technologyId: "redux-toolkit",
    title: "State Modeling",
    slug: "state-modeling",
    description:
      "Design scalable Redux state with selectors, normalized data and entity adapters.",
    order: 3,
  },

  {
    id: "redux-async",
    technologyId: "redux-toolkit",
    title: "Async Logic",
    slug: "async",
    description:
      "Handle asynchronous Redux workflows and understand when Redux should not own server state.",
    order: 4,
  },

  {
    id: "redux-production",
    technologyId: "redux-toolkit",
    title: "Production Patterns",
    slug: "production",
    description:
      "Choose Redux intentionally and organize scalable Redux code in production applications.",
    order: 5,
  },
];
