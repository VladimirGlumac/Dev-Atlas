import type { LessonContent } from "../../../types/learning";

export const serverStateVsClientStateContent: LessonContent = {
  lessonId: "tanstack-server-vs-client-state",

  overview:
    "Client state and server state solve different problems. Client state belongs to the browser and is usually controlled directly by your application. Server state belongs to a remote system and must be fetched, cached, synchronized and potentially refetched.",

  mentalModel:
    "useState answers: what does my UI currently remember? TanStack Query answers: what is the latest known version of remote data, how fresh is it, and when should it be synchronized again?",

  sections: [
    {
      id: "client-state",
      title: "Client state",
      body: "Client state is data owned by the frontend application. Examples include whether a modal is open, the selected tab, input text or the current theme.",
      codeExamples: [
        {
          id: "client-state-example",
          title: "Local UI state",
          language: "tsx",
          code: `const [isOpen, setIsOpen] =
  useState(false);

const [search, setSearch] =
  useState("");`,
        },
      ],
    },

    {
      id: "server-state",
      title: "Server state",
      body: "Server state is remote data your frontend does not own. Another user, service or request can change it without your component knowing.",
      codeExamples: [
        {
          id: "server-state-example",
          title: "Remote data",
          language: "ts",
          code: `GET /api/issues

[
  {
    "id": 1,
    "title": "Fix login bug",
    "status": "open"
  }
]`,
          explanation:
            "The browser only has a temporary copy of data whose source of truth lives on the server.",
        },
      ],
    },

    {
      id: "manual-fetching-problem",
      title: "The manual fetching problem",
      body: "Fetching remote data with useEffect and useState is possible, but a production application quickly needs much more than a single request.",
      codeExamples: [
        {
          id: "manual-fetch",
          title: "Manual request state",
          language: "tsx",
          code: `const [users, setUsers] =
  useState<User[]>([]);

const [isLoading, setIsLoading] =
  useState(true);

const [error, setError] =
  useState<string | null>(null);

useEffect(() => {
  async function loadUsers() {
    try {
      setIsLoading(true);

      const response =
        await fetch("/api/users");

      if (!response.ok) {
        throw new Error(
          "Failed to load users",
        );
      }

      const data =
        await response.json();

      setUsers(data);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Unknown error",
      );
    } finally {
      setIsLoading(false);
    }
  }

  loadUsers();
}, []);`,
        },
      ],
    },

    {
      id: "what-is-missing",
      title: "What manual fetching still does not solve",
      body: "Real applications also need caching, deduplication, stale-data tracking, background refetching, retries, invalidation, mutation synchronization and shared access to the same remote resource.",
    },

    {
      id: "tanstack-model",
      title: "TanStack Query mental model",
      body: "TanStack Query stores remote resources in a query cache. Components subscribe to queries instead of manually owning copies of remote data.",
      codeExamples: [
        {
          id: "query-model",
          title: "Query instead of manual request state",
          language: "tsx",
          code: `const {
  data,
  isPending,
  isError,
} = useQuery({
  queryKey: ["users"],
  queryFn: fetchUsers,
});`,
          explanation:
            "The query cache manages the remote resource while the component consumes its current state.",
        },
      ],
    },

    {
      id: "state-comparison",
      title: "Which state belongs where?",
      body: "Use React state for values the frontend owns. Use TanStack Query for remote asynchronous data. Use a global client-state store only when shared client state genuinely needs one.",
      codeExamples: [
        {
          id: "state-comparison-example",
          title: "Choosing the right tool",
          language: "ts",
          code: `// React state
modalOpen
searchInput
selectedTab

// TanStack Query
users
issues
products
comments
profileFromApi

// Redux / global client store
complex shared client state
when genuinely needed`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Do not copy query data into useState just to make it local. That creates two sources of truth. Derive UI values directly from query data unless the user is intentionally editing a separate local draft.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Take a component that manually fetches users with useEffect, loading state and error state. Identify which values represent server state and which values are actually local UI state.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be able to explain why server state is different from client state and why TanStack Query is not simply a replacement for Redux or useState.",
    },
  ],

  commonMistakes: [
    "Treating remote API data as ordinary local component state.",
    "Copying query data into useState without a real need.",
    "Using Redux purely as an API cache when TanStack Query is better suited for the job.",
    "Assuming fetched data stays correct forever after one request.",
    "Confusing client state ownership with cached server state.",
  ],

  notebookNote:
    "Client state pripada frontend-u: input, modal, theme, selected tab. Server state pripada udaljenom sistemu: users, issues, products, comments. TanStack Query rešava fetching, cache, freshness i sinhronizaciju server state-a.",

  relatedLessonIds: [
    "tanstack-query-client",
    "tanstack-use-query",
    "react-use-effect",
  ],
};
