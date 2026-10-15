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
  {
    id: "react-project-structure",
    technologyId: "react",
    sectionId: "react-architecture",
    title: "Project Structure",
    slug: "project-structure",
    description:
      "Organize React applications so code remains easy to find, change and scale.",
    difficulty: "intermediate",
    status: "published",
    order: 1,
  },
  {
    id: "react-feature-based-architecture",
    technologyId: "react",
    sectionId: "react-architecture",
    title: "Feature-Based Architecture",
    slug: "feature-based-architecture",
    description:
      "Organize domain code around features instead of scattering related files across technical folders.",
    difficulty: "intermediate",
    status: "published",
    order: 2,
  },
  {
    id: "react-state-ownership",
    technologyId: "react",
    sectionId: "react-architecture",
    title: "State Ownership",
    slug: "state-ownership",
    description:
      "Place state at the lowest level that needs to own it and choose the correct state tool for each problem.",
    difficulty: "intermediate",
    status: "published",
    order: 3,
  },
  {
    id: "react-service-layer",
    technologyId: "react",
    sectionId: "react-architecture",
    title: "Service Layer",
    slug: "service-layer",
    description:
      "Separate network and external-system logic from React components.",
    difficulty: "intermediate",
    status: "published",
    order: 4,
  },
  {
    id: "react-custom-hooks-architecture",
    technologyId: "react",
    sectionId: "react-architecture",
    title: "Custom Hooks Architecture",
    slug: "custom-hooks-architecture",
    description:
      "Extract reusable React behavior without turning hooks into arbitrary utility functions.",
    difficulty: "intermediate",
    status: "published",
    order: 5,
  },
  {
    id: "react-component-responsibilities",
    technologyId: "react",
    sectionId: "react-architecture",
    title: "Component Responsibilities",
    slug: "component-responsibilities",
    description:
      "Design focused components with clear responsibilities and predictable data flow.",
    difficulty: "intermediate",
    status: "published",
    order: 6,
  },
  {
    id: "react-testing-philosophy",
    technologyId: "react",
    sectionId: "react-testing",
    title: "Testing Philosophy",
    slug: "testing-philosophy",
    description:
      "Understand what React tests should verify and why behavior matters more than implementation details.",
    difficulty: "intermediate",
    status: "published",
    order: 1,
  },
  {
    id: "react-testing-setup",
    technologyId: "react",
    sectionId: "react-testing",
    title: "Vitest & RTL Setup",
    slug: "vitest-rtl-setup",
    description:
      "Configure Vitest, React Testing Library, jest-dom and jsdom for React component tests.",
    difficulty: "intermediate",
    status: "published",
    order: 2,
  },
  {
    id: "react-testing-rendering-queries",
    technologyId: "react",
    sectionId: "react-testing",
    title: "Rendering & Queries",
    slug: "rendering-queries",
    description:
      "Render components and select elements using accessibility-oriented Testing Library queries.",
    difficulty: "intermediate",
    status: "published",
    order: 3,
  },
  {
    id: "react-testing-user-event",
    technologyId: "react",
    sectionId: "react-testing",
    title: "Testing User Interactions",
    slug: "user-event",
    description: "Test realistic user interactions with userEvent.",
    difficulty: "intermediate",
    status: "published",
    order: 4,
  },
  {
    id: "react-testing-async-ui",
    technologyId: "react",
    sectionId: "react-testing",
    title: "Testing Async UI",
    slug: "async-ui",
    description:
      "Test loading, delayed rendering and asynchronous UI state changes.",
    difficulty: "intermediate",
    status: "published",
    order: 5,
  },
  {
    id: "react-testing-forms",
    technologyId: "react",
    sectionId: "react-testing",
    title: "Testing Forms",
    slug: "testing-forms",
    description: "Test form input, validation, submission and user feedback.",
    difficulty: "intermediate",
    status: "published",
    order: 6,
  },
  {
    id: "react-testing-router",
    technologyId: "react",
    sectionId: "react-testing",
    title: "Testing React Router",
    slug: "testing-router",
    description:
      "Test route-dependent components, navigation and URL behavior.",
    difficulty: "intermediate",
    status: "published",
    order: 7,
  },
  {
    id: "react-testing-tanstack-query",
    technologyId: "react",
    sectionId: "react-testing",
    title: "Testing TanStack Query",
    slug: "testing-tanstack-query",
    description:
      "Test query-driven React components with isolated QueryClient instances and realistic async behavior.",
    difficulty: "advanced",
    status: "published",
    order: 8,
  },
  {
    id: "react-testing-what-not-to-test",
    technologyId: "react",
    sectionId: "react-testing",
    title: "What Not To Test",
    slug: "what-not-to-test",
    description:
      "Avoid fragile, redundant and implementation-detail tests that provide little confidence.",
    difficulty: "intermediate",
    status: "published",
    order: 9,
  },
  {
    id: "redux-best-practices",
    technologyId: "redux-toolkit",
    sectionId: "redux-production",
    title: "Redux Toolkit Best Practices",
    slug: "best-practices",
    description:
      "Apply practical Redux Toolkit rules for state ownership, reducers, selectors and maintainable architecture.",
    difficulty: "advanced",
    status: "published",
    order: 4,
  },
  {
    id: "react-loading-error-empty",
    technologyId: "react",
    sectionId: "react-production",
    title: "Loading, Error & Empty States",
    slug: "loading-error-empty-states",
    description:
      "Design predictable UI states for async data and real production workflows.",
    difficulty: "intermediate",
    status: "published",
    order: 1,
  },
  {
    id: "react-error-boundaries",
    technologyId: "react",
    sectionId: "react-production",
    title: "Error Boundaries",
    slug: "error-boundaries",
    description:
      "Prevent rendering failures from crashing the entire React application.",
    difficulty: "intermediate",
    status: "published",
    order: 2,
  },
  {
    id: "react-accessibility-basics",
    technologyId: "react",
    sectionId: "react-production",
    title: "Accessibility Basics",
    slug: "accessibility-basics",
    description:
      "Build React interfaces with semantic HTML, keyboard support and accessible naming.",
    difficulty: "intermediate",
    status: "published",
    order: 3,
  },
  {
    id: "react-api-boundaries",
    technologyId: "react",
    sectionId: "react-production",
    title: "API Boundaries",
    slug: "api-boundaries",
    description:
      "Keep external data, validation and transport logic separated from presentation components.",
    difficulty: "intermediate",
    status: "published",
    order: 4,
  },
  {
    id: "react-reusable-components",
    technologyId: "react",
    sectionId: "react-production",
    title: "Reusable Component Design",
    slug: "reusable-component-design",
    description:
      "Design reusable components with focused APIs, composition and clear ownership.",
    difficulty: "intermediate",
    status: "published",
    order: 5,
  },
  {
    id: "react-code-smells",
    technologyId: "react",
    sectionId: "react-production",
    title: "React Code Smells",
    slug: "react-code-smells",
    description:
      "Recognize common React patterns that often indicate unnecessary state, effects, coupling or abstraction.",
    difficulty: "advanced",
    status: "published",
    order: 6,
  },
  {
    id: "react-production-checklist",
    technologyId: "react",
    sectionId: "react-production",
    title: "Production Checklist",
    slug: "production-checklist",
    description:
      "Review React features for correctness, maintainability, accessibility, testing and production readiness.",
    difficulty: "advanced",
    status: "published",
    order: 7,
  },
];
