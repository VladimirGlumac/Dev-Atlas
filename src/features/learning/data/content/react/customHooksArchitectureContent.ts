import type { LessonContent } from "../../../types/learning";

export const customHooksArchitectureContent: LessonContent = {
  lessonId: "react-custom-hooks-architecture",

  overview:
    "Custom hooks extract reusable behavior that depends on React hooks or React lifecycle semantics. They help components stay focused without hiding ordinary utility logic behind hook names.",

  mentalModel:
    "A custom hook is reusable React behavior, not simply any reusable function.",

  sections: [
    {
      id: "when-hook",
      title: "When to create a custom hook",
      body: "A custom hook is useful when multiple components need the same stateful, contextual, effectful or framework-specific behavior.",
      codeExamples: [
        {
          id: "use-theme-example",
          title: "Context wrapper",
          language: "ts",
          code: `export function useTheme() {
  const context =
    useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme must be used within ThemeProvider",
    );
  }

  return context;
}`,
        },
      ],
    },

    {
      id: "query-hooks",
      title: "Custom query hooks",
      body: "TanStack Query hooks are a good place to centralize query keys, query functions and query-specific options.",
      codeExamples: [
        {
          id: "query-hook-example",
          title: "useIssues",
          language: "tsx",
          code: `export function useIssues() {
  return useQuery({
    queryKey:
      issueQueryKeys.all,

    queryFn:
      fetchIssues,
  });
}`,
        },
      ],
    },

    {
      id: "component-cleanup",
      title: "Keep components focused",
      body: "A component becomes easier to understand when application behavior is expressed through well-named hooks.",
      codeExamples: [
        {
          id: "component-hook-example",
          title: "Readable component",
          language: "tsx",
          code: `function IssuesPage() {
  const issuesQuery =
    useIssues();

  const filters =
    useIssueFilters();

  return ...;
}`,
        },
      ],
    },

    {
      id: "not-a-hook",
      title: "Not everything is a hook",
      body: "Pure functions that do not use React capabilities should usually remain ordinary utilities.",
      codeExamples: [
        {
          id: "utility-vs-hook",
          title: "Utility vs hook",
          language: "ts",
          code: `// Utility
function formatDate(
  date: Date,
): string {
  ...
}

// Hook
function useWindowWidth() {
  const [width, setWidth] =
    useState(...);

  useEffect(...);

  return width;
}`,
        },
      ],
    },

    {
      id: "hook-api",
      title: "Design a clear hook API",
      body: "Return only the state and actions consumers need. Avoid exposing internal implementation details unnecessarily.",
      codeExamples: [
        {
          id: "hook-api-example",
          title: "Focused return contract",
          language: "ts",
          code: `return {
  theme,
  toggleTheme,
};`,
        },
      ],
    },

    {
      id: "hook-naming",
      title: "Hook naming",
      body: "Custom hooks must start with use so React tooling and lint rules can recognize hook semantics.",
      codeExamples: [
        {
          id: "hook-naming-example",
          title: "Examples",
          language: "ts",
          code: `useTheme
useBookmarks
useIssues
useDashboardOverview`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Do not create a custom hook solely to reduce a component by three lines. Extract behavior when it creates a meaningful reusable abstraction or clearer responsibility boundary.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Take a component containing URL search-param synchronization and extract that behavior into a custom hook with a small, intentional API.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be ready to explain what makes a function a custom hook and why pure formatting or calculation helpers usually should not be hooks.",
    },
  ],

  commonMistakes: [
    "Turning every helper function into a custom hook.",
    "Creating hooks that return huge internal implementation objects.",
    "Using hooks as dumping grounds for unrelated behavior.",
    "Duplicating query configuration across components instead of centralizing meaningful query hooks.",
    "Extracting logic prematurely when it is used only once and remains simple.",
  ],

  notebookNote:
    "Custom hook = reusable React behavior. Ako funkcija ne koristi React lifecycle/state/context/hook semantics, verovatno je običan utility. Hook treba da ima mali i jasan API.",

  relatedLessonIds: ["react-service-layer", "react-project-structure"],
};
