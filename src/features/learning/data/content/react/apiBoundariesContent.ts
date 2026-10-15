import type { LessonContent } from "../../../types/learning";

export const apiBoundariesContent: LessonContent = {
  lessonId: "react-api-boundaries",

  overview:
    "Production React code should keep transport, validation and server-state concerns away from presentation components. Components should consume trusted application-level data through focused services and hooks.",

  mentalModel:
    "External world → service boundary → validation → query/hook → component.",

  sections: [
    {
      id: "bad-component",
      title: "Avoid transport-heavy components",
      body: "A component becomes harder to maintain when it builds URLs, performs fetch calls, parses JSON, validates data and renders UI in the same file.",
      codeExamples: [
        {
          id: "bad-flow",
          title: "Too many responsibilities",
          language: "ts",
          code: `Component
→ construct request
→ fetch
→ check status
→ parse JSON
→ validate
→ state
→ render

Too much ownership`,
        },
      ],
    },

    {
      id: "service",
      title: "Service boundary",
      body: "A service should own transport details and return a clean domain result.",
      codeExamples: [
        {
          id: "service-example",
          title: "Issue API",
          language: "ts",
          code: `export async function fetchIssues():
  Promise<Issue[]> {
  const response =
    await fetch("/api/issues");

  if (!response.ok) {
    throw new Error(
      "Failed to fetch issues",
    );
  }

  const data: unknown =
    await response.json();

  return issueListSchema.parse(
    data,
  );
}`,
        },
      ],
    },

    {
      id: "query-hook",
      title: "Query hook",
      body: "A custom query hook owns query keys and server-state synchronization.",
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
      id: "component",
      title: "Presentation component",
      body: "The component consumes application-level states rather than knowing transport details.",
      codeExamples: [
        {
          id: "component-example",
          title: "Issues page",
          language: "tsx",
          code: `const query =
  useIssues();

if (query.isPending) {
  return <LoadingState />;
}

if (query.isError) {
  return <ErrorState />;
}

return (
  <IssueList
    issues={query.data}
  />
);`,
        },
      ],
    },

    {
      id: "flow",
      title: "Full boundary flow",
      body: "Keeping clear boundaries creates one predictable data path.",
      codeExamples: [
        {
          id: "full-flow-example",
          title: "Production flow",
          language: "ts",
          code: `REST API
↓
service
↓
runtime validation
↓
trusted domain type
↓
TanStack Query
↓
React component`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Do not over-layer tiny applications, but keep external-system concerns out of presentation components as complexity grows.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Take one direct-fetch component and divide responsibility between service, schema validation, query hook and UI.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Explain why runtime validation belongs near trust boundaries and why presentation components should generally not own HTTP transport details.",
    },
  ],

  commonMistakes: [
    "Calling fetch throughout presentation components.",
    "Casting response.json() with as Type.",
    "Duplicating API handling in several components.",
    "Putting TanStack Query configuration and HTTP parsing everywhere.",
    "Creating excessive layers with no benefit in tiny codebases.",
  ],

  notebookNote:
    "React API boundary: external API → service → runtime validation → trusted domain data → TanStack Query → component. Presentation komponenta ne treba da zna transport detalje.",

  relatedLessonIds: ["react-service-layer", "react-loading-error-empty"],
};
