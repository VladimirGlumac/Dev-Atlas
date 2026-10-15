import type { LessonContent } from "../../../types/learning";

export const apiVersioningContent: LessonContent = {
  lessonId: "rest-api-versioning",

  overview:
    "API versioning helps evolve public contracts while giving existing consumers time to migrate away from breaking changes.",

  mentalModel:
    "An API contract may have many consumers. Breaking that contract can break applications you do not deploy together with the server.",

  sections: [
    {
      id: "breaking-change",
      title: "What is a breaking change?",
      body: "A breaking change requires existing clients to change in order to continue working correctly.",
      codeExamples: [
        {
          id: "breaking-example",
          title: "Examples",
          language: "ts",
          code: `rename response field
remove endpoint
change field type
change required input
change response meaning`,
        },
      ],
    },

    {
      id: "url-versioning",
      title: "URL versioning",
      body: "A common and simple versioning style places the major API version in the URL.",
      codeExamples: [
        {
          id: "url-version-example",
          title: "Versioned routes",
          language: "bash",
          code: `/api/v1/users

/api/v2/users`,
        },
      ],
    },

    {
      id: "header-versioning",
      title: "Header-based versioning",
      body: "Some APIs negotiate versions through headers, though this can be less visible and harder to inspect manually.",
    },

    {
      id: "do-not-version-everything",
      title: "Not every change needs a new version",
      body: "Adding an optional response field or a new endpoint may be backward compatible and not require a new major version.",
      codeExamples: [
        {
          id: "compatible-change",
          title: "Usually compatible",
          language: "ts",
          code: `existing:
{
  id,
  name
}

new:
{
  id,
  name,
  avatarUrl
}

if avatarUrl is additive,
existing clients may still work`,
        },
      ],
    },

    {
      id: "deprecation",
      title: "Deprecation",
      body: "When old versions must be removed, consumers should receive clear migration guidance and enough time to upgrade.",
    },

    {
      id: "internal-api",
      title: "Internal APIs",
      body: "Closely coordinated frontend and backend applications may not need formal versioning early, especially when both are deployed together.",
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Do not introduce versioning mechanically. Version when compatibility boundaries and consumer independence justify it.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Classify whether these likely require a new major version: adding optional field, removing field, changing id from number to string, adding endpoint and changing required request body.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Explain what makes a change breaking and why versioning is more important for independently deployed API consumers.",
    },
  ],

  commonMistakes: [
    "Creating v2 for every small additive change.",
    "Making breaking changes with no migration plan.",
    "Keeping deprecated versions forever.",
    "Versioning internal APIs without any real compatibility need.",
  ],

  notebookNote:
    "API versioning štiti postojeće consumers od breaking changes. /api/v1 je jednostavan pristup. Nova verzija je za stvarne contract-breaking promene, ne za svaku malu izmenu.",

  relatedLessonIds: ["rest-best-practices", "rest-endpoint-checklist"],
};
