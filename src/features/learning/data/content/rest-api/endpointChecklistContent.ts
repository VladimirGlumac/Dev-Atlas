import type { LessonContent } from "../../../types/learning";

export const endpointChecklistContent: LessonContent = {
  lessonId: "rest-endpoint-checklist",

  overview:
    "A repeatable endpoint checklist prevents common API design and security mistakes. Use it when designing new routes and reviewing existing ones.",

  mentalModel:
    "Do not ask only 'does this endpoint work?'. Ask whether its contract, validation, security, error handling and edge cases are correct.",

  sections: [
    {
      id: "route",
      title: "1. Resource & method",
      body: "Confirm that the URL identifies the correct resource and the HTTP method accurately describes the operation.",
      codeExamples: [
        {
          id: "route-example",
          title: "Example",
          language: "bash",
          code: `PATCH /issues/42`,
        },
      ],
    },

    {
      id: "inputs",
      title: "2. Identify all inputs",
      body: "List every external value the endpoint receives.",
      codeExamples: [
        {
          id: "input-example",
          title: "Input surfaces",
          language: "ts",
          code: `path params
query params
request body
auth credentials
relevant headers`,
        },
      ],
    },

    {
      id: "validation",
      title: "3. Validate inputs",
      body: "Parse types, reject invalid values and allow only known fields.",
      codeExamples: [
        {
          id: "validation-check",
          title: "Validation questions",
          language: "ts",
          code: `Is id valid?
Is body shape valid?
Are enum values valid?
Are unknown fields allowed?
Are limits bounded?`,
        },
      ],
    },

    {
      id: "authentication",
      title: "4. Authentication",
      body: "If the endpoint is protected, verify the caller's identity.",
    },

    {
      id: "authorization",
      title: "5. Authorization",
      body: "Verify permission for this exact resource and operation.",
      codeExamples: [
        {
          id: "authorization-question",
          title: "Example",
          language: "ts",
          code: `May this user edit
this specific issue?`,
        },
      ],
    },

    {
      id: "business-rules",
      title: "6. Business rules",
      body: "Validation proves the input shape. Business rules decide whether the operation is allowed in the domain.",
      codeExamples: [
        {
          id: "business-rule-example",
          title: "Example",
          language: "ts",
          code: `Shape valid:
status = "done"

Business rule:
closed project
cannot accept changes`,
        },
      ],
    },

    {
      id: "data-operation",
      title: "7. Perform data operation",
      body: "Read or modify only the required data and handle expected missing or conflicting states.",
    },

    {
      id: "response",
      title: "8. Return correct response",
      body: "Choose the correct status code and predictable response contract.",
      codeExamples: [
        {
          id: "response-example",
          title: "Updated issue",
          language: "bash",
          code: `200 OK

{
  "data": {
    "id": 42,
    "status": "done"
  }
}`,
        },
      ],
    },

    {
      id: "errors",
      title: "9. Handle expected errors",
      body: "Define responses for invalid input, missing resource, conflicts and permission failures.",
      codeExamples: [
        {
          id: "expected-errors",
          title: "Potential outcomes",
          language: "ts",
          code: `400 / 422
401
403
404
409`,
        },
      ],
    },

    {
      id: "logging",
      title: "10. Handle unexpected failures",
      body: "Log enough server-side context to diagnose unexpected failures without exposing sensitive diagnostics to the client.",
    },

    {
      id: "test",
      title: "11. Test important paths",
      body: "Test more than the happy path.",
      codeExamples: [
        {
          id: "test-checklist",
          title: "Endpoint tests",
          language: "ts",
          code: `□ happy path
□ invalid input
□ unauthenticated
□ unauthorized
□ not found
□ conflict
□ important edge cases`,
        },
      ],
    },

    {
      id: "full-checklist",
      title: "Full checklist",
      body: "Use this compact version when building future Node/Express endpoints.",
      codeExamples: [
        {
          id: "compact-checklist",
          title: "Definition of Done",
          language: "ts",
          code: `□ resource + method correct
□ params validated
□ query validated
□ body validated
□ authentication
□ authorization
□ business rules
□ safe DB operation
□ correct status
□ consistent response
□ safe errors
□ important tests`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "The exact checklist evolves by project, but having a repeatable review process is more reliable than relying on memory.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Apply the checklist to PATCH /issues/:issueId and write down every check that must happen before the database update.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "If asked how you would design an endpoint, walking through validation, auth, business rules, persistence, response and error handling demonstrates strong backend thinking.",
    },
  ],

  commonMistakes: [
    "Implementing only the happy path.",
    "Mixing validation and authorization concepts.",
    "Updating the database before permission checks.",
    "Returning inconsistent errors.",
    "Ignoring important edge cases.",
  ],

  notebookNote:
    "Endpoint Definition of Done: method/resource → validate all inputs → authenticate → authorize → business rules → DB operation → correct response → safe errors → tests.",

  relatedLessonIds: [
    "rest-best-practices",
    "rest-authentication-authorization",
  ],
};
