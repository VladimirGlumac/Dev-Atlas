import type { LessonContent } from "../../../types/learning";

export const pathQueryParamsContent: LessonContent = {
  lessonId: "rest-path-query-params",

  overview:
    "Path parameters usually identify a specific resource or hierarchical context. Query parameters usually modify how a collection or resource is viewed, filtered, sorted or paginated.",

  mentalModel:
    "Path = identity or location. Query = optional instructions about the result.",

  sections: [
    {
      id: "path-params",
      title: "Path parameters",
      body: "Path parameters are part of the resource URL and commonly identify one specific resource.",
      codeExamples: [
        {
          id: "path-example",
          title: "User identity",
          language: "bash",
          code: `GET /users/42

42
→ user identifier`,
        },
      ],
    },

    {
      id: "query-params",
      title: "Query parameters",
      body: "Query parameters commonly control optional filtering, sorting, searching or pagination.",
      codeExamples: [
        {
          id: "query-example",
          title: "Filter users",
          language: "bash",
          code: `GET /users?role=admin&page=2`,
        },
      ],
    },

    {
      id: "identity-vs-filter",
      title: "Identity vs filtering",
      body: "If the value answers which resource is being requested, it often belongs in the path. If it changes the view of a collection, it often belongs in the query string.",
      codeExamples: [
        {
          id: "identity-filter-example",
          title: "Quick comparison",
          language: "bash",
          code: `/issues/42
→ specific issue

/issues?status=open
→ filtered issue collection`,
        },
      ],
    },

    {
      id: "optional-query",
      title: "Query parameters are often optional",
      body: "The collection endpoint should usually still have a sensible meaning without optional filters.",
      codeExamples: [
        {
          id: "optional-query-example",
          title: "Collection variants",
          language: "bash",
          code: `GET /issues

GET /issues?status=open

GET /issues?status=open&page=2`,
        },
      ],
    },

    {
      id: "multiple-query-params",
      title: "Combine query parameters",
      body: "Multiple optional concerns can be composed through the query string.",
      codeExamples: [
        {
          id: "multiple-query-example",
          title: "Search collection",
          language: "bash",
          code: `GET /issues
  ?status=open
  &priority=high
  &sort=createdAt
  &order=desc
  &page=2`,
        },
      ],
    },

    {
      id: "frontend-example",
      title: "Frontend usage",
      body: "React Router URL state and REST query parameters naturally work together for shareable filters.",
      codeExamples: [
        {
          id: "frontend-query-example",
          title: "Shareable issue filter",
          language: "bash",
          code: `/issues?status=open&page=2`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Do not put every input into path segments. Use paths for resource structure and query parameters for optional request modifiers.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Decide whether these belong in path or query: user id, page number, search phrase, issue id, sort direction and status filter.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "A strong explanation is: path params identify resources or hierarchy, while query params usually modify or filter the representation.",
    },
  ],

  commonMistakes: [
    "Putting pagination into the resource identity path.",
    "Using query params for obvious single-resource identity.",
    "Creating URLs with many optional path segments.",
    "Ignoring that query params are useful for shareable frontend state.",
  ],

  notebookNote:
    "Path param = identitet/hijerarhija resource-a. Query param = optional filter, sort, search, pagination ili drugi modifier. /issues/42 vs /issues?status=open.",

  relatedLessonIds: ["rest-resource-urls", "rest-filtering", "rest-pagination"],
};
