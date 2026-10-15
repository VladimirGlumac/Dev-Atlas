import type { LessonContent } from "../../../types/learning";

export const errorResponsesContent: LessonContent = {
  lessonId: "rest-error-responses",

  overview:
    "A production API should return consistent error structures so clients can reliably display messages, distinguish error types and handle field validation.",

  mentalModel:
    "Status code tells the broad HTTP outcome. The error body provides machine-readable and human-readable details.",

  sections: [
    {
      id: "consistent-shape",
      title: "Use a consistent error shape",
      body: "Clients should not need completely different parsing logic for every endpoint.",
      codeExamples: [
        {
          id: "error-shape-example",
          title: "Error contract",
          language: "json",
          code: `{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Request validation failed"
  }
}`,
        },
      ],
    },

    {
      id: "machine-code",
      title: "Machine-readable error codes",
      body: "Application-specific codes let clients react to errors without comparing human-readable message text.",
      codeExamples: [
        {
          id: "error-code-example",
          title: "Codes",
          language: "ts",
          code: `"VALIDATION_ERROR"
"NOT_FOUND"
"EMAIL_ALREADY_EXISTS"
"FORBIDDEN"`,
        },
      ],
    },

    {
      id: "field-errors",
      title: "Validation field errors",
      body: "Form-oriented APIs may return structured field-level validation information.",
      codeExamples: [
        {
          id: "field-error-example",
          title: "Validation response",
          language: "json",
          code: `{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input",
    "fields": {
      "email": [
        "Invalid email address"
      ],
      "password": [
        "Password is too short"
      ]
    }
  }
}`,
        },
      ],
    },

    {
      id: "not-found",
      title: "Not found",
      body: "A missing single resource can return a predictable 404 error contract.",
      codeExamples: [
        {
          id: "not-found-response",
          title: "404 response",
          language: "json",
          code: `{
  "error": {
    "code": "ISSUE_NOT_FOUND",
    "message": "Issue was not found"
  }
}`,
        },
      ],
    },

    {
      id: "server-errors",
      title: "Do not expose internal details",
      body: "Unexpected server errors should be logged internally while the API returns a safe response to the client.",
      codeExamples: [
        {
          id: "internal-error-example",
          title: "Safe public response",
          language: "json",
          code: `{
  "error": {
    "code": "INTERNAL_ERROR",
    "message": "An unexpected error occurred"
  }
}`,
        },
      ],
    },

    {
      id: "avoid-stack-traces",
      title: "Never expose stack traces in production responses",
      body: "Stack traces, SQL details, file system paths and secret configuration can reveal sensitive implementation information.",
    },

    {
      id: "frontend",
      title: "Frontend handling",
      body: "A predictable error contract lets React and TanStack Query map server failures to user-friendly UI.",
      codeExamples: [
        {
          id: "frontend-error-flow",
          title: "Error lifecycle",
          language: "ts",
          code: `HTTP 422
↓
VALIDATION_ERROR
↓
map field errors
↓
form UI`,
        },
      ],
    },

    {
      id: "request-id",
      title: "Request identifiers",
      body: "Production systems may include a request or correlation id so support teams can match a user-facing error with server logs.",
      codeExamples: [
        {
          id: "request-id-example",
          title: "Traceable error",
          language: "json",
          code: `{
  "error": {
    "code": "INTERNAL_ERROR",
    "message": "Unexpected error"
  },
  "requestId": "req_abc123"
}`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Separate public error information from internal diagnostics. Return consistent codes and messages while logging richer debugging details securely on the server.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Design error responses for invalid signup input, duplicate email, missing user, forbidden admin action and unexpected database failure.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Explain why HTTP status alone is often insufficient and why stable machine-readable application error codes help frontend consumers.",
    },
  ],

  commonMistakes: [
    "Returning a different error shape from every endpoint.",
    "Making frontend logic depend on exact human-readable message text.",
    "Returning stack traces or database errors to clients.",
    "Returning 200 with an error object.",
    "Using 500 for expected validation or authorization failures.",
  ],

  notebookNote:
    "Error response treba da bude konzistentan: HTTP status + stable machine-readable code + safe message + optional field errors. Internal stack/DB details ostaju u server logovima.",

  relatedLessonIds: ["rest-status-codes", "rest-authentication-authorization"],
};
