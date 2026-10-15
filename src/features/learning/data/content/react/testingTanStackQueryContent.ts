import type { LessonContent } from "../../../types/learning";

export const testingTanStackQueryContent: LessonContent = {
  lessonId: "react-testing-tanstack-query",

  overview:
    "TanStack Query tests need a QueryClientProvider. Each test should normally use a fresh QueryClient so cache state does not leak between tests.",

  mentalModel:
    "Treat the query cache as test state. Every test should start with a predictable isolated cache.",

  sections: [
    {
      id: "fresh-client",
      title: "Create a QueryClient per test",
      body: "Sharing one QueryClient across tests can leak cached data and make tests depend on execution order.",
      codeExamples: [
        {
          id: "create-client-example",
          title: "Test QueryClient",
          language: "ts",
          code: `function createTestQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
      mutations: {
        retry: false,
      },
    },
  });
}`,
        },
      ],
    },

    {
      id: "wrapper",
      title: "Wrap the component",
      body: "Render the tested component inside QueryClientProvider.",
      codeExamples: [
        {
          id: "provider-test-example",
          title: "Query wrapper",
          language: "tsx",
          code: `const queryClient =
  createTestQueryClient();

render(
  <QueryClientProvider
    client={queryClient}
  >
    <UsersPage />
  </QueryClientProvider>,
);`,
        },
      ],
    },

    {
      id: "disable-retries",
      title: "Disable retries",
      body: "Retries can make intentional error tests slower and less predictable, so test clients commonly disable them.",
      codeExamples: [
        {
          id: "retry-example",
          title: "Testing defaults",
          language: "ts",
          code: `queries: {
  retry: false,
}`,
        },
      ],
    },

    {
      id: "success-flow",
      title: "Test query success",
      body: "Assert observable loading and success states through the rendered UI.",
      codeExamples: [
        {
          id: "query-success-example",
          title: "Query lifecycle",
          language: "tsx",
          code: `expect(
  screen.getByText(
    /loading/i,
  ),
).toBeInTheDocument();

expect(
  await screen.findByText(
    "Ana",
  ),
).toBeInTheDocument();`,
        },
      ],
    },

    {
      id: "error-flow",
      title: "Test errors",
      body: "Provide a failing API boundary and verify the component presents meaningful error feedback.",
    },

    {
      id: "mutations",
      title: "Test mutations through UI",
      body: "Trigger the user action that causes the mutation and assert the resulting interface rather than calling the mutation hook directly.",
      codeExamples: [
        {
          id: "mutation-test-flow",
          title: "Mutation behavior",
          language: "ts",
          code: `type task
↓
click Create
↓
pending UI
↓
server response
↓
task appears`,
        },
      ],
    },

    {
      id: "http-boundary",
      title: "Mock the network boundary",
      body: "For integration-style tests, mock HTTP behavior rather than TanStack Query internals whenever practical. This lets the real query and mutation logic run.",
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Avoid tests that inspect TanStack Query's internal cache implementation unless your code explicitly manages cache behavior. Most tests should care about user-visible results.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Test the GitHub User Search for loading, successful user data and a 404 error. Then test TaskMutationLab create behavior with an isolated QueryClient.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be ready to explain why each test should have an isolated QueryClient and why retries are commonly disabled in tests.",
    },
  ],

  commonMistakes: [
    "Sharing query cache between tests.",
    "Leaving retries enabled in intentional failure tests.",
    "Mocking useQuery instead of testing realistic behavior.",
    "Testing cache internals when user-visible behavior is the real requirement.",
  ],

  notebookNote:
    "TanStack Query test: novi QueryClient po testu → retry false → QueryClientProvider → mock external boundary → user action → assert UI. Ne deli cache između testova.",

  relatedLessonIds: ["react-testing-async-ui", "react-testing-user-event"],
};
