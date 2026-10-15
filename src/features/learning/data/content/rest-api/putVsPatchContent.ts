import type { LessonContent } from "../../../types/learning";

export const putVsPatchContent: LessonContent = {
  lessonId: "rest-put-vs-patch",

  overview:
    "PUT and PATCH both update resources but communicate different semantics. PUT conceptually replaces a resource representation, while PATCH applies partial changes.",

  mentalModel:
    "PUT = here is the desired complete representation. PATCH = change only these fields.",

  sections: [
    {
      id: "put",
      title: "PUT",
      body: "PUT commonly represents replacement of the target resource with the provided representation.",
      codeExamples: [
        {
          id: "put-example",
          title: "Replace issue",
          language: "bash",
          code: `PUT /issues/42

{
  "title": "Login bug",
  "status": "open",
  "priority": "high",
  "assigneeId": 7
}`,
        },
      ],
    },

    {
      id: "patch",
      title: "PATCH",
      body: "PATCH communicates a partial modification of the resource.",
      codeExamples: [
        {
          id: "patch-example",
          title: "Change status only",
          language: "bash",
          code: `PATCH /issues/42

{
  "status": "done"
}`,
        },
      ],
    },

    {
      id: "form-example",
      title: "Practical frontend example",
      body: "A small edit form that changes only one or two fields often maps naturally to PATCH.",
      codeExamples: [
        {
          id: "frontend-patch-example",
          title: "Change priority",
          language: "ts",
          code: `await fetch(
  "/api/issues/42",
  {
    method: "PATCH",

    headers: {
      "Content-Type":
        "application/json",
    },

    body:
      JSON.stringify({
        priority: "high",
      }),
  },
);`,
        },
      ],
    },

    {
      id: "backend-validation",
      title: "Validation differs",
      body: "A replacement-style PUT schema may require the complete representation, while PATCH commonly validates an object where allowed update fields are optional.",
      codeExamples: [
        {
          id: "validation-model",
          title: "Conceptual schemas",
          language: "ts",
          code: `PUT:
{
  title: required,
  status: required,
  priority: required
}

PATCH:
{
  title?: string,
  status?: Status,
  priority?: Priority
}`,
        },
      ],
    },

    {
      id: "not-universal",
      title: "API conventions can vary",
      body: "Some real-world APIs use PUT and PATCH less strictly. What matters is that your API documents and applies its semantics consistently.",
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Choose semantics intentionally and keep validation aligned with them. Do not label an endpoint PUT while silently treating every missing field as 'leave unchanged' unless that is an explicit API convention.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Choose PUT or PATCH for replacing an entire user settings object, changing only email, changing one issue status and replacing a full saved profile.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Explain PUT as complete replacement semantics and PATCH as partial modification, while acknowledging that practical APIs sometimes define their own documented conventions.",
    },
  ],

  commonMistakes: [
    "Treating PUT and PATCH as identical without a convention.",
    "Using PATCH but allowing arbitrary fields with no validation.",
    "Making PUT partial by accident.",
    "Updating immutable fields such as ids through generic PATCH logic.",
  ],

  notebookNote:
    "PUT = conceptual full replacement. PATCH = partial update. Validation treba da prati semantics: PUT obično očekuje kompletan shape, PATCH dozvoljava samo određena optional update polja.",

  relatedLessonIds: ["rest-http-methods", "rest-idempotency"],
};
