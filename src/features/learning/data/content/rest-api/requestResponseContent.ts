import type { LessonContent } from "../../../types/learning";

export const requestResponseContent: LessonContent = {
  lessonId: "rest-request-response",

  overview:
    "HTTP communication follows a request-response model. A client sends an HTTP request to a server, and the server processes that request and returns an HTTP response.",

  mentalModel:
    "Client asks for or sends something. Server processes the request and responds with status, headers and optionally a body.",

  sections: [
    {
      id: "request",
      title: "HTTP request",
      body: "A request commonly contains a method, URL, headers and sometimes a body.",
      codeExamples: [
        {
          id: "request-example",
          title: "Example request",
          language: "bash",
          code: `POST /api/issues HTTP/1.1

Content-Type: application/json
Authorization: Bearer <token>

{
  "title": "Fix login bug",
  "priority": "high"
}`,
        },
      ],
    },

    {
      id: "response",
      title: "HTTP response",
      body: "A response contains a status code, response headers and optionally a response body.",
      codeExamples: [
        {
          id: "response-example",
          title: "Example response",
          language: "bash",
          code: `HTTP/1.1 201 Created

Content-Type: application/json

{
  "id": 42,
  "title": "Fix login bug",
  "priority": "high"
}`,
        },
      ],
    },

    {
      id: "client-server",
      title: "Client and server responsibilities",
      body: "The client decides what request to send. The server validates it, applies business rules and produces the response.",
      codeExamples: [
        {
          id: "client-server-flow",
          title: "Request lifecycle",
          language: "ts",
          code: `React client
↓
HTTP request
↓
Express server
↓
validation
↓
business logic
↓
database
↓
HTTP response
↓
React client`,
        },
      ],
    },

    {
      id: "body",
      title: "Request and response bodies",
      body: "JSON is common for REST APIs, but HTTP itself is not limited to JSON.",
      codeExamples: [
        {
          id: "json-example",
          title: "JSON body",
          language: "json",
          code: `{
  "id": 1,
  "name": "Vladimir"
}`,
        },
      ],
    },

    {
      id: "stateless",
      title: "REST and stateless requests",
      body: "REST APIs are generally designed so each request contains enough information for the server to understand and process it without depending on hidden conversational state from previous requests.",
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Keep request and response contracts clear. Validate incoming data and return predictable response shapes so frontend consumers do not need to guess.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Write the conceptual request and response for creating a new issue with title and priority.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be ready to describe the complete HTTP request-response lifecycle from React client to backend and back.",
    },
  ],

  commonMistakes: [
    "Thinking HTTP request means only the URL.",
    "Ignoring headers.",
    "Returning inconsistent response shapes.",
    "Trusting incoming request bodies without validation.",
  ],

  notebookNote:
    "HTTP = request → server processing → response. Request ima method, URL, headers i opcioni body. Response ima status, headers i opcioni body.",

  relatedLessonIds: ["rest-http-methods", "rest-status-codes"],
};
