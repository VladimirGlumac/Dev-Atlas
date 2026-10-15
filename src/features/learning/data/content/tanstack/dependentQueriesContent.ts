import type { LessonContent } from "../../../types/learning";

export const dependentQueriesContent: LessonContent = {
  lessonId: "tanstack-dependent-queries",

  overview:
    "Dependent queries are queries that can only run after another query or some required piece of data becomes available.",

  mentalModel:
    "Query B depends on information produced by Query A. Use enabled so B waits until its dependency exists.",

  sections: [
    {
      id: "basic-example",
      title: "Basic dependency",
      body: "A second query can use data returned by the first query.",
      codeExamples: [
        {
          id: "dependent-query-example",
          title: "User → projects",
          language: "tsx",
          code: `const userQuery =
  useQuery({
    queryKey: [
      "user",
      email,
    ],

    queryFn: () =>
      fetchUserByEmail(
        email,
      ),
  });

const userId =
  userQuery.data?.id;

const projectsQuery =
  useQuery({
    queryKey: [
      "projects",
      userId,
    ],

    queryFn: () =>
      fetchProjectsByUser(
        userId!,
      ),

    enabled:
      userId != null,
  });`,
        },
      ],
    },

    {
      id: "why-enabled",
      title: "Why enabled matters",
      body: "Without enabled, the dependent query may run before the required identifier is available.",
      codeExamples: [
        {
          id: "enabled-flow-example",
          title: "Lifecycle",
          language: "ts",
          code: `userId undefined
↓
projects query disabled

user query succeeds
↓
userId available

↓
projects query enabled
↓
request starts`,
        },
      ],
    },

    {
      id: "query-key",
      title: "Dependency belongs in the query key",
      body: "If userId changes which projects are requested, userId is part of query identity.",
      codeExamples: [
        {
          id: "dependent-key-example",
          title: "Correct identity",
          language: "ts",
          code: `[
  "projects",
  userId,
]`,
        },
      ],
    },

    {
      id: "loading-states",
      title: "Dependent loading states",
      body: "The UI may need to distinguish between waiting for the first query and loading the dependent query.",
      codeExamples: [
        {
          id: "dependent-ui-example",
          title: "Two stages",
          language: "tsx",
          code: `if (
  userQuery.isPending
) {
  return (
    <p>Loading user...</p>
  );
}

if (
  projectsQuery.isPending
) {
  return (
    <p>
      Loading projects...
    </p>
  );
}`,
        },
      ],
    },

    {
      id: "avoid-waterfalls",
      title: "Avoid unnecessary waterfalls",
      body: "Dependent queries naturally create sequential requests. If the second request does not truly depend on the first, run them in parallel instead.",
      codeExamples: [
        {
          id: "waterfall-example",
          title: "Sequential cost",
          language: "ts",
          code: `Request A
↓ wait
Request B

vs

Request A + Request B
in parallel`,
        },
      ],
    },

    {
      id: "backend-design",
      title: "Sometimes the API can remove the dependency",
      body: "If a frontend regularly needs one request only to obtain an identifier for another request, backend API design may sometimes provide a more direct endpoint.",
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Use dependent queries only for real dependencies. Avoid introducing request waterfalls that increase latency without necessity.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Fetch a project first, then fetch project tasks only after project.id becomes available.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be ready to explain dependent queries, enabled and the performance cost of unnecessary sequential requests.",
    },
  ],

  commonMistakes: [
    "Running the dependent query before its required id exists.",
    "Forgetting the dependency value in the query key.",
    "Creating sequential queries when they could run in parallel.",
    "Using non-null assertions without also controlling query execution.",
  ],

  notebookNote:
    "Dependent query = query B čeka podatak iz query A. `enabled` blokira fetch dok dependency ne postoji. Dependency treba da bude i deo queryKey-a.",

  relatedLessonIds: ["tanstack-conditional-queries", "tanstack-pagination"],
};
