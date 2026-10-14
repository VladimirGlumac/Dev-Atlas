import type { LessonContent } from "../../../types/learning";

export const useQueryContent: LessonContent = {
  lessonId: "tanstack-use-query",

  overview:
    "useQuery subscribes a React component to asynchronous server state stored in the TanStack Query cache. It combines a query key, a function that retrieves data and query lifecycle state.",

  mentalModel:
    "A component does not own the remote data. It subscribes to a cached resource identified by queryKey. TanStack Query decides whether it can use cached data or needs to run queryFn again.",

  sections: [
    {
      id: "basic-query",
      title: "Basic query",
      body: "A query needs at least a queryKey and queryFn.",
      codeExamples: [
        {
          id: "use-query-basic",
          title: "Fetch users",
          language: "tsx",
          code: `import { useQuery } from "@tanstack/react-query";

const usersQuery = useQuery({
  queryKey: ["users"],
  queryFn: fetchUsers,
});`,
          explanation:
            "The key identifies the cached resource and queryFn describes how to retrieve that resource.",
        },
      ],
    },

    {
      id: "typed-query-function",
      title: "Typed query function",
      body: "Keep network logic outside the component and give the service function an explicit Promise return type.",
      codeExamples: [
        {
          id: "typed-query-fn",
          title: "User API service",
          language: "ts",
          code: `interface User {
  id: number;
  name: string;
  email: string;
}

export async function fetchUsers(): Promise<User[]> {
  const response =
    await fetch("/api/users");

  if (!response.ok) {
    throw new Error(
      "Failed to fetch users",
    );
  }

  return response.json();
}`,
          explanation:
            "TanStack Query handles a rejected promise as a query error.",
        },
      ],
    },

    {
      id: "query-data",
      title: "Reading query data",
      body: "useQuery returns query state including data, pending state, error state and many other fields.",
      codeExamples: [
        {
          id: "query-result",
          title: "Consume query state",
          language: "tsx",
          code: `const {
  data: users,
  isPending,
  isError,
  error,
} = useQuery({
  queryKey: ["users"],
  queryFn: fetchUsers,
});`,
        },
      ],
    },

    {
      id: "loading-error-success",
      title: "Render query states",
      body: "Handle pending and error states before rendering the successful data.",
      codeExamples: [
        {
          id: "query-render-states",
          title: "Query lifecycle UI",
          language: "tsx",
          code: `if (isPending) {
  return <p>Loading...</p>;
}

if (isError) {
  return (
    <p>
      {error instanceof Error
        ? error.message
        : "Something went wrong"}
    </p>
  );
}

return (
  <ul>
    {users.map((user) => (
      <li key={user.id}>
        {user.name}
      </li>
    ))}
  </ul>
);`,
        },
      ],
    },

    {
      id: "query-key-with-parameters",
      title: "Parameterized queries",
      body: "When the requested resource depends on a parameter, include that parameter in the query key.",
      codeExamples: [
        {
          id: "query-user-id",
          title: "User by ID",
          language: "tsx",
          code: `const userQuery = useQuery({
  queryKey: ["users", userId],

  queryFn: () =>
    fetchUser(userId),
});`,
          explanation: "Different user IDs produce different cache entries.",
        },
      ],
    },

    {
      id: "query-fn-not-called",
      title: "Pass the function, do not call it immediately",
      body: "queryFn expects a function TanStack Query can execute when appropriate.",
      codeExamples: [
        {
          id: "query-fn-function",
          title: "Function vs immediate call",
          language: "tsx",
          code: `// Wrong
queryFn: fetchUser(userId)

// Correct
queryFn: () =>
  fetchUser(userId)`,
        },
      ],
    },

    {
      id: "query-vs-use-effect",
      title: "useQuery vs useEffect fetching",
      body: "useQuery handles server-state lifecycle and cache concerns that manual useEffect fetching would otherwise require you to build yourself.",
      codeExamples: [
        {
          id: "query-vs-effect",
          title: "Conceptual comparison",
          language: "ts",
          code: `// Manual approach
useState
useEffect
loading
error
fetch
cache?
retry?
refetch?
deduplication?

// TanStack Query
useQuery({
  queryKey,
  queryFn,
});`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Keep query functions focused on retrieving and validating remote data. Keep query keys deterministic. Do not copy query data into local state unless you intentionally need a separate editable draft.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Create a typed fetchUsers service and load users with useQuery. Add loading and error states, then render the users. After that, create fetchUser(id) and use a parameterized query key.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be ready to explain queryKey, queryFn, why the query function should throw on failed HTTP responses, and how useQuery differs from storing fetched data in useState.",
    },
  ],

  commonMistakes: [
    "Using the same query key for different resources.",
    "Calling a parameterized query function immediately instead of passing a function.",
    "Ignoring response.ok when using fetch.",
    "Copying query data into useState unnecessarily.",
    "Treating isPending as the only useful query state.",
    "Putting network implementation details directly into large UI components.",
  ],

  notebookNote:
    "useQuery povezuje komponentu sa server-state resursom. queryKey identifikuje cache, queryFn dobavlja podatke. Query funkcija treba da throw-uje kod neuspešnog response-a. Parametre koji menjaju resurs uključi u queryKey.",

  relatedLessonIds: [
    "tanstack-query-client",
    "tanstack-query-keys",
    "tanstack-query-states",
  ],
};
