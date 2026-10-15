import type { LessonContent } from "../../../types/learning";

export const httpMethodsContent: LessonContent = {
  lessonId: "rest-http-methods",

  overview:
    "HTTP methods communicate the intended operation on a resource. REST APIs usually use GET, POST, PUT, PATCH and DELETE to express common CRUD behavior.",

  mentalModel:
    "The URL identifies the resource. The HTTP method describes what you want to do with it.",

  sections: [
    {
      id: "get",
      title: "GET",
      body: "GET reads data and should not intentionally modify server state.",
      codeExamples: [
        {
          id: "get-examples",
          title: "Read resources",
          language: "bash",
          code: `GET /issues

GET /issues/42`,
        },
      ],
    },

    {
      id: "post",
      title: "POST",
      body: "POST commonly creates a new resource or triggers an operation whose result is not naturally represented as replacement of an existing resource.",
      codeExamples: [
        {
          id: "post-example",
          title: "Create issue",
          language: "bash",
          code: `POST /issues

{
  "title": "Login bug"
}`,
        },
      ],
    },

    {
      id: "put",
      title: "PUT",
      body: "PUT conceptually replaces the complete representation of a resource at a known URL.",
      codeExamples: [
        {
          id: "put-example",
          title: "Replace issue",
          language: "bash",
          code: `PUT /issues/42

{
  "title": "Updated title",
  "priority": "high",
  "status": "open"
}`,
        },
      ],
    },

    {
      id: "patch",
      title: "PATCH",
      body: "PATCH performs a partial update. Only changed fields need to be sent.",
      codeExamples: [
        {
          id: "patch-example",
          title: "Partial update",
          language: "bash",
          code: `PATCH /issues/42

{
  "status": "done"
}`,
        },
      ],
    },

    {
      id: "delete",
      title: "DELETE",
      body: "DELETE removes a resource.",
      codeExamples: [
        {
          id: "delete-example",
          title: "Delete issue",
          language: "bash",
          code: `DELETE /issues/42`,
        },
      ],
    },

    {
      id: "crud-map",
      title: "CRUD mapping",
      body: "HTTP methods often map naturally to CRUD operations.",
      codeExamples: [
        {
          id: "crud-map-example",
          title: "CRUD",
          language: "ts",
          code: `Create
→ POST

Read
→ GET

Update
→ PUT / PATCH

Delete
→ DELETE`,
        },
      ],
    },

    {
      id: "method-semantics",
      title: "Methods communicate intent",
      body: "Avoid using POST for every endpoint. Correct methods make APIs easier to understand, document and integrate with HTTP infrastructure.",
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Use methods according to resource semantics rather than frontend convenience. Method choice is part of the API contract.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Choose methods for: list users, create user, change only user email, replace user profile, delete user.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be able to explain GET, POST, PUT, PATCH and DELETE and especially the conceptual difference between PUT and PATCH.",
    },
  ],

  commonMistakes: [
    "Using POST for every operation.",
    "Using GET to mutate state.",
    "Treating PUT and PATCH as automatically identical.",
    "Putting verbs into every URL when the HTTP method already expresses the operation.",
  ],

  notebookNote:
    "URL kaže koji resource. HTTP method kaže šta radiš. GET read, POST create, PUT full replace, PATCH partial update, DELETE remove.",

  relatedLessonIds: [
    "rest-request-response",
    "rest-resource-urls",
    "rest-put-vs-patch",
  ],
};
