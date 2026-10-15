import type { LessonContent } from "../../../types/learning";

export const paginationContent: LessonContent = {
  lessonId: "rest-pagination",

  overview:
    "Pagination limits how much collection data is returned in one response. This improves performance, payload size and user experience for large datasets.",

  mentalModel:
    "Do not send an entire large table when the client currently needs only one manageable slice of it.",

  sections: [
    {
      id: "page-limit",
      title: "Page-based pagination",
      body: "A simple API can use page and limit query parameters.",
      codeExamples: [
        {
          id: "page-limit-example",
          title: "Page 2",
          language: "bash",
          code: `GET /issues?page=2&limit=20`,
        },
      ],
    },

    {
      id: "offset",
      title: "Offset-based pagination",
      body: "Offset and limit directly describe how many records to skip and return.",
      codeExamples: [
        {
          id: "offset-example",
          title: "Offset pagination",
          language: "bash",
          code: `GET /issues
  ?offset=20
  &limit=20`,
        },
      ],
    },

    {
      id: "metadata",
      title: "Return pagination metadata",
      body: "Clients often need enough information to render navigation and understand the result set.",
      codeExamples: [
        {
          id: "pagination-response-example",
          title: "Paginated response",
          language: "json",
          code: `{
  "data": [
    {
      "id": 21,
      "title": "Issue"
    }
  ],
  "pagination": {
    "page": 2,
    "limit": 20,
    "total": 97,
    "totalPages": 5
  }
}`,
        },
      ],
    },

    {
      id: "limits",
      title: "Validate limits",
      body: "Set reasonable defaults and maximum page sizes so clients cannot accidentally request huge result sets.",
      codeExamples: [
        {
          id: "limit-rule",
          title: "Example",
          language: "ts",
          code: `defaultLimit = 20
maxLimit = 100`,
        },
      ],
    },

    {
      id: "cursor",
      title: "Cursor-based pagination",
      body: "For large or frequently changing datasets, cursor pagination can be more stable and efficient than large numeric offsets.",
      codeExamples: [
        {
          id: "cursor-example",
          title: "Cursor request",
          language: "bash",
          code: `GET /issues
  ?cursor=eyJpZCI6NDJ9
  &limit=20`,
        },
      ],
    },

    {
      id: "cursor-response",
      title: "Cursor response",
      body: "Cursor APIs commonly return the next cursor instead of total page counts.",
      codeExamples: [
        {
          id: "cursor-response-example",
          title: "Next cursor",
          language: "json",
          code: `{
  "data": [],
  "nextCursor": "abc123"
}`,
        },
      ],
    },

    {
      id: "stable-sort",
      title: "Pagination needs stable sorting",
      body: "Without deterministic ordering, records can appear on multiple pages or disappear between requests.",
    },

    {
      id: "frontend-query",
      title: "TanStack Query integration",
      body: "Pagination parameters usually become part of the query key because each page represents different server state.",
      codeExamples: [
        {
          id: "query-key-example",
          title: "Page-aware query key",
          language: "ts",
          code: `[
  "issues",
  {
    page,
    status,
  },
]`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Page-based pagination is easy and often sufficient. Cursor pagination becomes attractive for large, realtime or frequently changing collections. Choose based on actual requirements.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Design a paginated GET /products endpoint with default limit, maximum limit, sorting and response metadata.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Know the basic difference between offset/page pagination and cursor pagination and why stable ordering matters.",
    },
  ],

  commonMistakes: [
    "Returning unlimited collections.",
    "Allowing arbitrary huge limits.",
    "Paginating without deterministic sorting.",
    "Forgetting pagination variables in TanStack Query keys.",
    "Using cursor pagination just because it sounds more advanced.",
  ],

  notebookNote:
    "Pagination ograničava veličinu kolekcije. page/limit je jednostavno; cursor je koristan za velike ili često promenljive datasete. Uvek definiši limit i stabilan sort.",

  relatedLessonIds: ["rest-sorting", "rest-filtering"],
};
