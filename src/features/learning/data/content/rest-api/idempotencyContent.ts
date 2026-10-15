import type { LessonContent } from "../../../types/learning";

export const idempotencyContent: LessonContent = {
  lessonId: "rest-idempotency",

  overview:
    "An operation is idempotent when repeating the same request has the same intended final state as performing it once. Idempotency matters for retries, distributed systems and reliable API clients.",

  mentalModel:
    "Ask: if the exact same operation happens twice, is the final resource state effectively the same as after the first successful operation?",

  sections: [
    {
      id: "get",
      title: "GET is idempotent",
      body: "Repeated GET requests should not intentionally change the resource state.",
      codeExamples: [
        {
          id: "get-idempotent",
          title: "Repeated read",
          language: "bash",
          code: `GET /issues/42
GET /issues/42
GET /issues/42

→ resource state unchanged`,
        },
      ],
    },

    {
      id: "put",
      title: "PUT is idempotent",
      body: "Replacing the same resource with the same representation repeatedly should lead to the same final state.",
      codeExamples: [
        {
          id: "put-idempotent",
          title: "Repeated replacement",
          language: "bash",
          code: `PUT /users/42

{
  "name": "Ana"
}

repeat same request

→ final state still:
name = "Ana"`,
        },
      ],
    },

    {
      id: "delete",
      title: "DELETE is idempotent in effect",
      body: "Deleting the same resource repeatedly should leave the resource absent. Later calls may return a different status such as 404, but the intended final server state remains the same.",
    },

    {
      id: "post",
      title: "POST is usually not idempotent",
      body: "Repeating a creation request may create multiple resources.",
      codeExamples: [
        {
          id: "post-not-idempotent",
          title: "Repeated creation",
          language: "bash",
          code: `POST /orders
→ order 101

POST /orders
→ order 102

same request
→ different side effect`,
        },
      ],
    },

    {
      id: "patch",
      title: "PATCH depends on the operation",
      body: "PATCH can be idempotent or non-idempotent depending on what the patch means.",
      codeExamples: [
        {
          id: "patch-examples",
          title: "Two patch styles",
          language: "bash",
          code: `PATCH:
{
  "status": "done"
}

repeat
→ same state

PATCH:
{
  "incrementViews": 1
}

repeat
→ different state`,
        },
      ],
    },

    {
      id: "retry",
      title: "Why idempotency matters",
      body: "Network failures may leave a client unsure whether the server processed a request. Safe retries are much easier when an operation is idempotent.",
      codeExamples: [
        {
          id: "retry-flow",
          title: "Network uncertainty",
          language: "ts",
          code: `client sends request
↓
server processes it
↓
response lost
↓
client retries

Idempotent operation?
→ safer retry`,
        },
      ],
    },

    {
      id: "idempotency-key",
      title: "Idempotency keys",
      body: "For operations such as payment or order creation, APIs may accept an idempotency key so repeated POST requests can be recognized as the same logical operation.",
      codeExamples: [
        {
          id: "idempotency-key-example",
          title: "Request key",
          language: "bash",
          code: `POST /payments

Idempotency-Key: abc-123`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Do not assume HTTP method alone guarantees application-level safety. Business logic must actually preserve the intended idempotent behavior.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Classify these operations: read user, set status to done, increment login count, delete user, create order and replace profile.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be able to define idempotency and explain why GET, PUT and DELETE are generally treated as idempotent while POST usually is not.",
    },
  ],

  commonMistakes: [
    "Thinking idempotent means the response must always be identical.",
    "Assuming every PATCH is idempotent.",
    "Assuming POST can never be made retry-safe.",
    "Ignoring retry behavior in operations that charge money or create orders.",
  ],

  notebookNote:
    "Idempotent = isti request ponovljen više puta vodi ka istom intended final state-u. GET/PUT/DELETE su tipično idempotentni. POST obično nije. PATCH zavisi od semantics.",

  relatedLessonIds: ["rest-put-vs-patch", "rest-http-methods"],
};
