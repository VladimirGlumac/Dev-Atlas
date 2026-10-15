import type { LessonContent } from "../../../types/learning";

export const statusCodesContent: LessonContent = {
  lessonId: "rest-status-codes",

  overview:
    "HTTP status codes communicate the outcome of a request. Good APIs use status codes consistently so clients can distinguish success, validation problems, authentication failures, missing resources and server errors.",

  mentalModel:
    "The response body explains details. The status code gives the high-level result of the HTTP operation.",

  sections: [
    {
      id: "families",
      title: "Status code families",
      body: "The first digit groups status codes into broad categories.",
      codeExamples: [
        {
          id: "status-families",
          title: "Families",
          language: "ts",
          code: `2xx
→ success

3xx
→ redirection

4xx
→ client-side request problem

5xx
→ server-side failure`,
        },
      ],
    },

    {
      id: "success",
      title: "Common success codes",
      body: "Different successful operations can communicate different outcomes.",
      codeExamples: [
        {
          id: "success-codes",
          title: "2xx",
          language: "ts",
          code: `200 OK
→ normal successful response

201 Created
→ resource created

204 No Content
→ success with no response body`,
        },
      ],
    },

    {
      id: "bad-request",
      title: "400 Bad Request",
      body: "Use 400 when the request cannot be processed because it is malformed or invalid at a general request level.",
    },

    {
      id: "unauthorized",
      title: "401 Unauthorized",
      body: "401 usually means authentication is missing or invalid.",
      codeExamples: [
        {
          id: "unauthorized-rule",
          title: "401",
          language: "ts",
          code: `Who are you?
→ unknown / invalid credentials
→ 401`,
        },
      ],
    },

    {
      id: "forbidden",
      title: "403 Forbidden",
      body: "403 means the server understands who the user is, but that identity does not have permission to perform the operation.",
      codeExamples: [
        {
          id: "forbidden-rule",
          title: "403",
          language: "ts",
          code: `We know who you are
but you cannot do this
→ 403`,
        },
      ],
    },

    {
      id: "not-found",
      title: "404 Not Found",
      body: "404 indicates that the requested resource or route could not be found.",
      codeExamples: [
        {
          id: "not-found-example",
          title: "Missing issue",
          language: "bash",
          code: `GET /issues/999

→ 404 Not Found`,
        },
      ],
    },

    {
      id: "conflict",
      title: "409 Conflict",
      body: "409 is useful when a valid request conflicts with the current state of the system, such as creating a resource with a unique value that already exists.",
      codeExamples: [
        {
          id: "conflict-example",
          title: "Duplicate email",
          language: "ts",
          code: `POST /users

email already exists

→ 409 Conflict`,
        },
      ],
    },

    {
      id: "unprocessable",
      title: "422 Unprocessable Content",
      body: "422 is commonly used when the request syntax is understandable but semantic validation fails.",
      codeExamples: [
        {
          id: "unprocessable-example",
          title: "Validation failure",
          language: "ts",
          code: `email:
"not-an-email"

→ 422`,
        },
      ],
    },

    {
      id: "server-error",
      title: "500 Internal Server Error",
      body: "500 represents an unexpected server-side failure. Do not intentionally use it for normal validation or authorization problems.",
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Consistency matters more than memorizing every status code. Define clear API conventions and use the same meaning across endpoints.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Choose status codes for: user created, deleted successfully with no body, missing token, authenticated user without admin permission, missing issue, duplicate username and unexpected database crash.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "You should be able to clearly explain the difference between 401 and 403 and give realistic uses for 200, 201, 204, 404 and 409.",
    },
  ],

  commonMistakes: [
    "Returning 200 for every response.",
    "Confusing 401 with 403.",
    "Using 500 for validation errors.",
    "Returning success status codes when an operation actually failed.",
  ],

  notebookNote:
    "Najbitniji statusi: 200 OK, 201 Created, 204 No Content, 400 Bad Request, 401 unauthenticated, 403 forbidden, 404 not found, 409 conflict, 422 validation, 500 server failure.",

  relatedLessonIds: ["rest-request-response", "rest-error-responses"],
};
