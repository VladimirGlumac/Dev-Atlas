import type { LessonContent } from "../../../types/learning";

export const tanStackPaginationContent: LessonContent = {
  lessonId: "tanstack-pagination",

  overview:
    "Paginated queries treat page, filters and other request parameters as part of query identity. TanStack Query can cache each page independently while keeping transitions responsive.",

  mentalModel:
    "Page 1 and page 2 are different server-state snapshots, so their parameters belong in the query key.",

  sections: [
    {
      id: "page-key",
      title: "Page belongs in the query key",
      body: "Changing the page changes the requested data, so page must be part of query identity.",
      codeExamples: [
        {
          id: "page-key-example",
          title: "Paginated key",
          language: "tsx",
          code: `const query =
  useQuery({
    queryKey: [
      "issues",
      {
        page,
        status,
      },
    ],

    queryFn: () =>
      fetchIssues({
        page,
        status,
      }),
  });`,
        },
      ],
    },

    {
      id: "page-cache",
      title: "Pages are cached independently",
      body: "Different query keys create separate cache entries.",
      codeExamples: [
        {
          id: "cache-pages-example",
          title: "Cache entries",
          language: "ts",
          code: `[
  "issues",
  { page: 1 }
]

[
  "issues",
  { page: 2 }
]`,
        },
      ],
    },

    {
      id: "placeholder-data",
      title: "Keep previous page visible",
      body: "placeholderData can keep previous page data visible while the next page is loading.",
      codeExamples: [
        {
          id: "placeholder-example",
          title: "Smooth pagination",
          language: "tsx",
          code: `import {
  keepPreviousData,
  useQuery,
} from "@tanstack/react-query";

const query =
  useQuery({
    queryKey: [
      "issues",
      page,
    ],

    queryFn: () =>
      fetchIssues(page),

    placeholderData:
      keepPreviousData,
  });`,
        },
      ],
    },

    {
      id: "is-placeholder",
      title: "isPlaceholderData",
      body: "When previous data is temporarily shown for a new key, isPlaceholderData helps the UI distinguish that state.",
      codeExamples: [
        {
          id: "placeholder-state-example",
          title: "Disable next when appropriate",
          language: "tsx",
          code: `<button
  disabled={
    query.isPlaceholderData ||
    !query.data?.hasMore
  }
>
  Next
</button>`,
        },
      ],
    },

    {
      id: "filters",
      title: "Filters belong in the key too",
      body: "Any input that changes returned server data should usually participate in the query key.",
      codeExamples: [
        {
          id: "filter-key-example",
          title: "Complete identity",
          language: "ts",
          code: `[
  "issues",
  {
    page,
    status,
    priority,
    sort,
  },
]`,
        },
      ],
    },

    {
      id: "url-state",
      title: "Pagination often belongs in the URL",
      body: "Page and filter state is commonly shareable and refresh-safe, making URL search params a natural owner.",
      codeExamples: [
        {
          id: "pagination-url-example",
          title: "Shareable page",
          language: "bash",
          code: `/issues
?page=2
&status=open`,
        },
      ],
    },

    {
      id: "cursor",
      title: "Cursor pagination",
      body: "Cursor-based APIs may use useInfiniteQuery when the interface loads data incrementally rather than navigating numbered pages.",
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Keep query keys aligned with the real request contract. Avoid manually clearing page data when TanStack Query can manage separate cache entries.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Build an issue list with page and status in the query key and keep the previous page visible while the next page loads.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Explain why pagination variables belong in query keys and how keepPreviousData improves page transitions.",
    },
  ],

  commonMistakes: [
    "Using one query key for every page.",
    "Keeping page-specific API data manually in useState.",
    "Forgetting filters in query identity.",
    "Replacing old page content with a full-screen spinner during every page transition.",
  ],

  notebookNote:
    "Pagination params su deo query identity-ja. Svaka stranica može imati svoj cache entry. `keepPreviousData` čuva prethodnu stranicu vidljivom dok sledeća stiže.",

  relatedLessonIds: ["tanstack-query-keys", "tanstack-prefetching"],
};
