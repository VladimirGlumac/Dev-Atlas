import type { LessonContent } from "../../../types/learning";

export const resourceUrlsContent: LessonContent = {
  lessonId: "rest-resource-urls",

  overview:
    "REST APIs usually model domain concepts as resources. URLs identify those resources, while HTTP methods communicate the operation being performed.",

  mentalModel:
    "URL answers 'what resource?'. HTTP method answers 'what should happen to it?'.",

  sections: [
    {
      id: "resources",
      title: "Think in resources",
      body: "Resources are domain entities or collections such as users, issues, comments, orders or products.",
      codeExamples: [
        {
          id: "resource-examples",
          title: "Resource examples",
          language: "bash",
          code: `/users
/issues
/products
/orders
/comments`,
        },
      ],
    },

    {
      id: "collection-vs-single",
      title: "Collection vs single resource",
      body: "A collection URL represents many resources, while an identifier targets one specific resource.",
      codeExamples: [
        {
          id: "collection-single-example",
          title: "Issues",
          language: "bash",
          code: `GET /issues
→ all issues

GET /issues/42
→ issue 42`,
        },
      ],
    },

    {
      id: "avoid-verbs",
      title: "Avoid action verbs in ordinary CRUD URLs",
      body: "The HTTP method already communicates most CRUD operations, so URLs usually stay noun-based.",
      codeExamples: [
        {
          id: "verb-comparison",
          title: "Prefer resource-oriented routes",
          language: "bash",
          code: `Usually avoid:

GET /getIssues
POST /createIssue
POST /deleteIssue/42

Prefer:

GET /issues
POST /issues
DELETE /issues/42`,
        },
      ],
    },

    {
      id: "plural-nouns",
      title: "Use consistent naming",
      body: "Many REST APIs use plural nouns for collections. The most important rule is consistency across the API.",
      codeExamples: [
        {
          id: "plural-example",
          title: "Consistent style",
          language: "bash",
          code: `/users
/users/42

/issues
/issues/10`,
        },
      ],
    },

    {
      id: "nested-resources",
      title: "Nested resources",
      body: "Nested routes can express ownership or containment when the relationship is meaningful.",
      codeExamples: [
        {
          id: "nested-example",
          title: "Issue comments",
          language: "bash",
          code: `GET /issues/42/comments

POST /issues/42/comments`,
        },
      ],
    },

    {
      id: "avoid-deep-nesting",
      title: "Avoid excessive nesting",
      body: "Deep route hierarchies quickly become difficult to use and often reveal that resources should have their own identifiers.",
      codeExamples: [
        {
          id: "deep-nesting-example",
          title: "Usually avoid",
          language: "bash",
          code: `/organizations/1/projects/2/issues/3/comments/4/replies/5`,
        },
      ],
    },

    {
      id: "domain-actions",
      title: "What about real actions?",
      body: "Not every operation maps cleanly to CRUD. Domain actions may justify action-style endpoints when they represent real business operations.",
      codeExamples: [
        {
          id: "domain-action-example",
          title: "Action examples",
          language: "bash",
          code: `POST /orders/42/cancel

POST /users/10/password-reset`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Start from domain resources, not controller names or database table details. Keep naming predictable across the entire API.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Design routes for listing projects, reading one project, creating an issue inside a project and deleting one issue.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be ready to explain why REST URLs generally use nouns while HTTP methods carry operation semantics.",
    },
  ],

  commonMistakes: [
    "Putting CRUD verbs into every URL.",
    "Designing URLs around backend controller names.",
    "Using inconsistent singular and plural naming.",
    "Creating extremely deep nested routes.",
    "Treating every business operation as standard CRUD.",
  ],

  notebookNote:
    "REST URL identifikuje resource, method definiše operaciju. Preferiraj noun-based routes poput /issues i /issues/:id. Nested routes koristi kada relationship stvarno ima smisla.",

  relatedLessonIds: ["rest-http-methods", "rest-path-query-params"],
};
