import type { Lesson } from "../types/learning";

export const reactLessons: Lesson[] = [
  {
    id: "react-use-state",
    technologyId: "react",
    sectionId: "react-core-hooks",

    title: "useState",
    slug: "use-state",

    description:
      "Manage local component state and understand React state snapshots.",

    difficulty: "beginner",
    status: "published",

    order: 1,
  },

  {
    id: "react-use-effect",
    technologyId: "react",
    sectionId: "react-core-hooks",

    title: "useEffect",
    slug: "use-effect",

    description:
      "Synchronize React components with external systems and handle effect cleanup.",

    difficulty: "beginner",
    status: "published",

    order: 2,
  },

  {
    id: "react-use-ref",
    technologyId: "react",
    sectionId: "react-core-hooks",

    title: "useRef",
    slug: "use-ref",

    description:
      "Persist mutable values between renders and access DOM elements.",

    difficulty: "beginner",
    status: "published",

    order: 3,
  },

  {
    id: "react-use-context",
    technologyId: "react",
    sectionId: "react-core-hooks",

    title: "useContext",
    slug: "use-context",

    description:
      "Read shared context values without passing props through every component.",

    difficulty: "beginner",
    status: "published",

    order: 4,
  },

  {
    id: "react-use-memo",
    technologyId: "react",
    sectionId: "react-performance",

    title: "useMemo",
    slug: "use-memo",

    description:
      "Memoize expensive derived calculations when performance benefits justify it.",

    difficulty: "intermediate",
    status: "published",

    order: 1,
  },

  {
    id: "react-use-callback",
    technologyId: "react",
    sectionId: "react-performance",

    title: "useCallback",
    slug: "use-callback",

    description:
      "Stabilize callback references when reference equality matters.",

    difficulty: "intermediate",
    status: "published",

    order: 2,
  },

  {
    id: "react-use-transition",
    technologyId: "react",
    sectionId: "react-advanced-hooks",

    title: "useTransition",
    slug: "use-transition",

    description:
      "Mark non-urgent state updates as transitions and keep interfaces responsive.",

    difficulty: "intermediate",
    status: "published",

    order: 1,
  },

  {
    id: "react-use-optimistic",
    technologyId: "react",
    sectionId: "react-advanced-hooks",

    title: "useOptimistic",
    slug: "use-optimistic",

    description:
      "Provide immediate optimistic feedback while an asynchronous operation completes.",

    difficulty: "intermediate",
    status: "published",

    order: 2,
  },
];
