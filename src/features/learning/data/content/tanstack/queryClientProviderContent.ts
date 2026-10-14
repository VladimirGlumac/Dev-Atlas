import type { LessonContent } from "../../../types/learning";

export const queryClientProviderContent: LessonContent = {
  lessonId: "tanstack-query-client",

  overview:
    "QueryClient is the central TanStack Query cache manager. QueryClientProvider exposes that client to React components so hooks such as useQuery and useMutation can access the shared query cache.",

  mentalModel:
    "Think of QueryClient as the manager of remote server-state cache. QueryClientProvider places that manager into React context so every query hook in the application can use the same cache.",

  sections: [
    {
      id: "create-query-client",
      title: "Create QueryClient",
      body: "Create one QueryClient instance for the application. It manages queries, mutations, caching, invalidation and default options.",
      codeExamples: [
        {
          id: "query-client-basic",
          title: "Create the client",
          language: "ts",
          code: `import { QueryClient } from "@tanstack/react-query";

export const queryClient =
  new QueryClient();`,
          explanation:
            "The same QueryClient instance should normally be reused by the application instead of creating a new client during every render.",
        },
      ],
    },

    {
      id: "query-client-provider",
      title: "QueryClientProvider",
      body: "Wrap the React application with QueryClientProvider and pass the QueryClient instance through the client prop.",
      codeExamples: [
        {
          id: "query-provider-example",
          title: "Provide the query client",
          language: "tsx",
          code: `import {
  QueryClientProvider,
} from "@tanstack/react-query";

import { queryClient } from "./lib/queryClient";

createRoot(
  document.getElementById("root")!,
).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
);`,
          explanation:
            "Components rendered inside the provider can now use TanStack Query hooks.",
        },
      ],
    },

    {
      id: "common-provider-error",
      title: "Common provider error",
      body: "Calling useQuery or useMutation outside QueryClientProvider causes TanStack Query to throw because no QueryClient is available.",
      codeExamples: [
        {
          id: "query-client-missing",
          title: "Typical error",
          language: "ts",
          code: `No QueryClient set,
use QueryClientProvider to set one`,
        },
      ],
    },

    {
      id: "new-query-client",
      title: "QueryClient is an instance",
      body: "QueryClient is a class. QueryClientProvider expects an instance created with new QueryClient(), not the QueryClient class itself.",
      codeExamples: [
        {
          id: "query-client-instance",
          title: "Class vs instance",
          language: "tsx",
          code: `// Wrong
<QueryClientProvider client={QueryClient}>

// Correct
const queryClient =
  new QueryClient();

<QueryClientProvider client={queryClient}>`,
          explanation:
            "This is the same class-vs-instance distinction you encountered when TypeScript suggested using new.",
        },
      ],
    },

    {
      id: "default-options",
      title: "Default query options",
      body: "QueryClient can define application-wide defaults such as staleTime, retry behavior and refetchOnWindowFocus.",
      codeExamples: [
        {
          id: "query-client-options",
          title: "Production defaults",
          language: "ts",
          code: `export const queryClient =
  new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 30_000,
        retry: 1,
        refetchOnWindowFocus: false,
      },
    },
  });`,
        },
      ],
    },

    {
      id: "why-one-client",
      title: "Why one shared client?",
      body: "Queries with the same query key can share the same cached server-state resource when they use the same QueryClient. Multiple unrelated clients would create separate caches.",
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Keep QueryClient creation outside ordinary rendering code so it is not recreated accidentally. Centralize application-wide defaults, but override them per query when a resource needs different freshness or retry behavior.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Create a Vite React application with QueryClient in src/lib/queryClient.ts and wrap App with QueryClientProvider. Intentionally pass QueryClient instead of new QueryClient() once and inspect the TypeScript error.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be ready to explain what QueryClient manages, why QueryClientProvider is required and why recreating the client repeatedly can break the expected shared-cache behavior.",
    },
  ],

  commonMistakes: [
    "Passing the QueryClient class instead of a QueryClient instance.",
    "Forgetting QueryClientProvider.",
    "Creating a new QueryClient during every component render.",
    "Using several independent QueryClient instances without understanding that they have separate caches.",
    "Putting every resource-specific option into global defaults.",
  ],

  notebookNote:
    "QueryClient upravlja TanStack Query cache-om. Pravimo jednu instancu sa new QueryClient() i prosleđujemo je kroz QueryClientProvider. Svi query/mutation hookovi ispod provider-a koriste isti cache.",

  relatedLessonIds: ["tanstack-server-vs-client-state", "tanstack-use-query"],
};
