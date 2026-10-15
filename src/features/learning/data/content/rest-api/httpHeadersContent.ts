import type { LessonContent } from "../../../types/learning";

export const httpHeadersContent: LessonContent = {
  lessonId: "rest-http-headers",

  overview:
    "HTTP headers carry metadata about requests and responses. They communicate content type, authentication information, caching behavior and other protocol-level details.",

  mentalModel:
    "The body contains the main payload. Headers describe how that payload and request should be interpreted or handled.",

  sections: [
    {
      id: "content-type",
      title: "Content-Type",
      body: "Content-Type describes the format of the body.",
      codeExamples: [
        {
          id: "content-type-example",
          title: "JSON body",
          language: "bash",
          code: `Content-Type: application/json`,
        },
      ],
    },

    {
      id: "authorization",
      title: "Authorization",
      body: "The Authorization header commonly carries credentials such as a bearer access token.",
      codeExamples: [
        {
          id: "authorization-example",
          title: "Bearer token",
          language: "bash",
          code: `Authorization: Bearer <access-token>`,
        },
      ],
    },

    {
      id: "accept",
      title: "Accept",
      body: "Accept tells the server which response media types the client can handle.",
      codeExamples: [
        {
          id: "accept-example",
          title: "Accept JSON",
          language: "bash",
          code: `Accept: application/json`,
        },
      ],
    },

    {
      id: "headers-fetch",
      title: "Headers with fetch",
      body: "Frontend code can send request headers through the fetch options object.",
      codeExamples: [
        {
          id: "fetch-header-example",
          title: "Fetch request",
          language: "ts",
          code: `await fetch(
  "/api/issues",
  {
    method: "POST",

    headers: {
      "Content-Type":
        "application/json",
    },

    body:
      JSON.stringify({
        title:
          "Login bug",
      }),
  },
);`,
        },
      ],
    },

    {
      id: "response-headers",
      title: "Response headers",
      body: "Servers also return headers. These may contain caching instructions, content metadata or other response information.",
      codeExamples: [
        {
          id: "response-header-example",
          title: "Caching",
          language: "bash",
          code: `Cache-Control: max-age=300`,
        },
      ],
    },

    {
      id: "cookies",
      title: "Cookies and authentication",
      body: "Authentication may also use cookies instead of manually sending Authorization headers. Secure production authentication design will be covered later with Node and security.",
    },

    {
      id: "cors",
      title: "CORS-related headers",
      body: "Browsers enforce cross-origin rules using HTTP headers. CORS is a browser security mechanism, not an authentication mechanism.",
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Do not put secrets into custom frontend headers and assume they are hidden. Anything sent from frontend code can be inspected by the user.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Write a POST fetch request that sends JSON to /api/issues and identify the purpose of Content-Type and Authorization headers.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Know the purpose of Content-Type, Accept and Authorization and understand that CORS is enforced by browsers.",
    },
  ],

  commonMistakes: [
    "Confusing Content-Type with Accept.",
    "Thinking frontend Authorization tokens are invisible to the user.",
    "Using CORS as if it were authentication.",
    "Forgetting Content-Type for JSON request bodies when required.",
  ],

  notebookNote:
    "Headers = metadata. Content-Type opisuje body format. Accept opisuje željeni response format. Authorization nosi credentials. CORS je browser security policy, ne auth.",

  relatedLessonIds: [
    "rest-request-response",
    "rest-authentication-authorization",
  ],
};
