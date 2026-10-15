import type { LessonContent } from "../../../types/learning";

export const sortingContent: LessonContent = {
  lessonId: "rest-sorting",

  overview:
    "Sorting lets clients control the ordering of collection results. APIs should expose only supported sort fields and use predictable direction conventions.",

  mentalModel:
    "Filtering decides which resources are returned. Sorting decides the order in which those resources are returned.",

  sections: [
    {
      id: "basic-sorting",
      title: "Basic sorting",
      body: "A common design uses one parameter for the sort field and another for direction.",
      codeExamples: [
        {
          id: "sorting-example",
          title: "Newest issues first",
          language: "bash",
          code: `GET /issues
  ?sort=createdAt
  &order=desc`,
        },
      ],
    },

    {
      id: "supported-fields",
      title: "Whitelist sortable fields",
      body: "Do not allow clients to inject arbitrary database column names into sort logic.",
      codeExamples: [
        {
          id: "sort-fields-example",
          title: "Allowed sort fields",
          language: "ts",
          code: `type IssueSortField =
  | "createdAt"
  | "priority"
  | "title";`,
        },
      ],
    },

    {
      id: "direction",
      title: "Sort direction",
      body: "Common direction values are asc and desc.",
      codeExamples: [
        {
          id: "sort-direction-example",
          title: "Direction",
          language: "ts",
          code: `type SortOrder =
  | "asc"
  | "desc";`,
        },
      ],
    },

    {
      id: "default-sort",
      title: "Define a default order",
      body: "Collection endpoints should have a stable default sort so pagination and repeated requests behave predictably.",
      codeExamples: [
        {
          id: "default-sort-example",
          title: "Stable default",
          language: "ts",
          code: `default:
createdAt desc`,
        },
      ],
    },

    {
      id: "tie-breaker",
      title: "Use deterministic tie-breakers",
      body: "If many records share the same primary sort value, a secondary unique field such as id can keep ordering stable.",
      codeExamples: [
        {
          id: "tie-break-example",
          title: "Stable ordering",
          language: "ts",
          code: `ORDER BY
createdAt DESC,
id DESC`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Stable sorting becomes especially important with pagination. Whitelist fields, validate direction and define deterministic defaults.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Design sorting for products by price, name and createdAt. Choose default order and a tie-breaker.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Explain why arbitrary sort fields should not be accepted directly and why deterministic sorting matters for pagination.",
    },
  ],

  commonMistakes: [
    "Passing arbitrary client sort strings directly to a database query.",
    "Having no default order.",
    "Using unstable sorting with pagination.",
    "Confusing filtering with sorting.",
  ],

  notebookNote:
    "Sorting menja redosled, ne membership kolekcije. Whitelist sort fields, validiraj asc/desc i koristi stabilan default + tie-breaker kada treba.",

  relatedLessonIds: ["rest-filtering", "rest-pagination"],
};
