import type { LessonContent } from "../../../types/learning";

export const restBestPracticesContent: LessonContent = {
  lessonId: "rest-best-practices",

  overview:
    "A good REST API is predictable, consistent and explicit about its contracts. Good design reduces frontend complexity and makes backend behavior easier to maintain.",

  mentalModel:
    "A consumer should be able to predict how a new endpoint behaves after learning the conventions of the rest of the API.",

  sections: [
    {
      id: "resource-oriented",
      title: "Use resource-oriented URLs",
      body: "Prefer predictable nouns and HTTP method semantics for ordinary CRUD operations.",
      codeExamples: [
        {
          id: "resource-rule",
          title: "Predictable CRUD",
          language: "bash",
          code: `GET    /issues
POST   /issues
GET    /issues/42
PATCH  /issues/42
DELETE /issues/42`,
        },
      ],
    },

    {
      id: "validate-input",
      title: "Validate all external input",
      body: "Path params, query params, headers and request bodies all originate outside your trusted application boundary.",
      codeExamples: [
        {
          id: "validation-boundaries",
          title: "Validate",
          language: "ts",
          code: `params
query
body
relevant headers`,
        },
      ],
    },

    {
      id: "consistent-responses",
      title: "Keep contracts consistent",
      body: "Collection, pagination and error responses should follow predictable structures across endpoints.",
    },

    {
      id: "status-codes",
      title: "Use meaningful status codes",
      body: "HTTP status codes should accurately communicate the broad request outcome instead of returning 200 for every scenario.",
    },

    {
      id: "security",
      title: "Enforce security on the server",
      body: "Authentication, authorization and input validation cannot be delegated to frontend code.",
    },

    {
      id: "pagination",
      title: "Paginate large collections",
      body: "Avoid endpoints that can accidentally return unbounded large datasets.",
    },

    {
      id: "whitelist",
      title: "Whitelist client-controlled behavior",
      body: "Only allow supported filters, sort fields and update fields.",
      codeExamples: [
        {
          id: "whitelist-example",
          title: "Avoid arbitrary fields",
          language: "ts",
          code: `allowedSortFields
allowedFilters
allowedPatchFields`,
        },
      ],
    },

    {
      id: "patch-safety",
      title: "Protect immutable fields",
      body: "Generic update endpoints should not automatically allow ids, ownership fields, roles or internal timestamps to be modified.",
      codeExamples: [
        {
          id: "patch-fields",
          title: "Allowed update shape",
          language: "ts",
          code: `allowed:
title
status
priority

not automatically:
id
ownerId
createdAt
role`,
        },
      ],
    },

    {
      id: "do-not-leak",
      title: "Do not leak internal details",
      body: "Public API responses should not expose stack traces, SQL errors, internal file paths or secrets.",
    },

    {
      id: "logging",
      title: "Log server diagnostics",
      body: "Unexpected failures should produce useful internal logs while clients receive safe public error information.",
    },

    {
      id: "documentation",
      title: "Document the contract",
      body: "Consumers need endpoint methods, URLs, input shapes, status codes and response contracts. Later this can be formalized with OpenAPI.",
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Consistency beats cleverness. A boring predictable API is easier to integrate with and maintain than an API where every endpoint invents new conventions.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Review an issue CRUD API and identify validation, authorization, pagination, error-contract and update-field rules.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "A strong REST answer should cover resource design, methods, status codes, validation, authorization, consistency and safe error handling.",
    },
  ],

  commonMistakes: [
    "Returning inconsistent response shapes.",
    "Trusting client-controlled field names.",
    "Allowing arbitrary mass updates.",
    "Exposing internal server errors.",
    "Building unbounded list endpoints.",
    "Depending on frontend validation for security.",
  ],

  notebookNote:
    "REST best practice = predictable resources, correct methods/statuses, validate all external input, enforce auth server-side, whitelist query/update fields, paginate collections i vrati consistent safe responses.",

  relatedLessonIds: [
    "rest-authentication-authorization",
    "rest-endpoint-checklist",
  ],
};
