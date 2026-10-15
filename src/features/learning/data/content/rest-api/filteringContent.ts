import type { LessonContent } from "../../../types/learning";

export const filteringContent: LessonContent = {
  lessonId: "rest-filtering",

  overview:
    "Filtering lets clients request only resources that match specific conditions. REST APIs commonly express optional filters through query parameters.",

  mentalModel:
    "The collection stays the same resource. Query parameters narrow which members of that collection are returned.",

  sections: [
    {
      id: "basic-filter",
      title: "Basic filtering",
      body: "Use query parameters for optional collection filters.",
      codeExamples: [
        {
          id: "basic-filter-example",
          title: "Filter issues",
          language: "bash",
          code: `GET /issues?status=open`,
        },
      ],
    },

    {
      id: "multiple-filters",
      title: "Combine filters",
      body: "Multiple filters can be combined when the API defines how they interact.",
      codeExamples: [
        {
          id: "multiple-filter-example",
          title: "Multiple conditions",
          language: "bash",
          code: `GET /issues
  ?status=open
  &priority=high
  &assigneeId=42`,
        },
      ],
    },

    {
      id: "validation",
      title: "Validate filter values",
      body: "Query parameters are external input and should be validated before they influence database queries.",
      codeExamples: [
        {
          id: "filter-validation-example",
          title: "Allowed values",
          language: "ts",
          code: `status:
"open"
| "in-progress"
| "done"

priority:
"low"
| "medium"
| "high"`,
        },
      ],
    },

    {
      id: "unknown-filter",
      title: "Unknown filters",
      body: "Your API should define whether unknown query parameters are ignored or rejected. Consistency matters.",
    },

    {
      id: "boolean-number",
      title: "Remember query parameters are strings",
      body: "Values from URLs arrive as strings and must be parsed into the intended domain types.",
      codeExamples: [
        {
          id: "query-string-example",
          title: "String input",
          language: "ts",
          code: `?completed=true
?page=2

incoming values:
"true"
"2"

not:
true
2`,
        },
      ],
    },

    {
      id: "empty-results",
      title: "No matches is usually not an error",
      body: "A valid filtered collection with no matching resources usually returns an empty array rather than 404.",
      codeExamples: [
        {
          id: "empty-filter-example",
          title: "Valid empty collection",
          language: "json",
          code: `[]`,
        },
      ],
    },

    {
      id: "frontend",
      title: "Frontend integration",
      body: "Filters often map naturally to URL state on the frontend, making views shareable and refresh-safe.",
      codeExamples: [
        {
          id: "frontend-filter-example",
          title: "Shareable view",
          language: "bash",
          code: `/issues?status=open&priority=high`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Whitelist supported filters and validate values. Never directly convert arbitrary query parameter names into database conditions without controlling what fields may be queried.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Design filters for an issue list by status, priority, assignee and completed state. Decide which values are valid and what happens when no results match.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Know why filtering belongs naturally in query parameters and why query input must be validated.",
    },
  ],

  commonMistakes: [
    "Returning 404 for a valid empty collection.",
    "Trusting arbitrary query parameters.",
    "Forgetting that URL values initially arrive as strings.",
    "Allowing filtering by every database field automatically.",
  ],

  notebookNote:
    "Filtering kolekcije obično ide kroz query params. Query input je external data: parse + validate. Nema rezultata najčešće znači 200 + [], ne 404.",

  relatedLessonIds: [
    "rest-path-query-params",
    "rest-sorting",
    "rest-pagination",
  ],
};
