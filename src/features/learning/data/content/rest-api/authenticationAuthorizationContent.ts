import type { LessonContent } from "../../../types/learning";

export const authenticationAuthorizationContent: LessonContent = {
  lessonId: "rest-authentication-authorization",

  overview:
    "Authentication proves who the caller is. Authorization decides what that authenticated identity is allowed to do.",

  mentalModel:
    "Authentication answers 'who are you?'. Authorization answers 'may you perform this action?'.",

  sections: [
    {
      id: "authentication",
      title: "Authentication",
      body: "Authentication verifies identity through credentials such as sessions, cookies, access tokens or other mechanisms.",
      codeExamples: [
        {
          id: "auth-flow",
          title: "Identity flow",
          language: "ts",
          code: `credentials
↓
verify identity
↓
authenticated user`,
        },
      ],
    },

    {
      id: "authorization",
      title: "Authorization",
      body: "Authorization happens after identity is known and checks whether the user has permission to access a resource or perform an operation.",
      codeExamples: [
        {
          id: "authorization-flow",
          title: "Permission flow",
          language: "ts",
          code: `authenticated user
↓
role / ownership / permission check
↓
allow or deny`,
        },
      ],
    },

    {
      id: "401-vs-403",
      title: "401 vs 403",
      body: "401 generally means authentication is missing or invalid. 403 means identity is known but permission is denied.",
      codeExamples: [
        {
          id: "status-comparison",
          title: "Status distinction",
          language: "ts",
          code: `No valid identity
→ 401

Identity known
but action forbidden
→ 403`,
        },
      ],
    },

    {
      id: "ownership",
      title: "Resource ownership",
      body: "Authorization often depends on ownership rather than only roles.",
      codeExamples: [
        {
          id: "ownership-example",
          title: "Edit own issue",
          language: "ts",
          code: `user.id === issue.ownerId
→ allow edit

otherwise
→ deny`,
        },
      ],
    },

    {
      id: "roles",
      title: "Role-based authorization",
      body: "Roles such as admin, editor and user can simplify broad permission rules, but roles are not the only authorization model.",
      codeExamples: [
        {
          id: "role-example",
          title: "Admin-only action",
          language: "ts",
          code: `user.role === "admin"
→ may delete user`,
        },
      ],
    },

    {
      id: "frontend-warning",
      title: "Frontend checks are not security",
      body: "Hiding a button in React improves UX but does not enforce authorization. The backend must always verify permissions.",
      codeExamples: [
        {
          id: "frontend-security-rule",
          title: "Rule",
          language: "ts",
          code: `Frontend:
hide unavailable action

Backend:
enforce permission`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Perform authorization on the server for every protected operation. Never trust role or ownership claims sent by the client without verifying them against trusted server-side data.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Classify these as authentication or authorization: verifying password, checking admin role, validating session, checking issue ownership and reading a JWT identity.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be ready to clearly explain authentication vs authorization and the difference between 401 and 403.",
    },
  ],

  commonMistakes: [
    "Treating frontend route guards as real security.",
    "Confusing authentication with authorization.",
    "Returning 401 for every permission failure.",
    "Trusting client-supplied roles.",
  ],

  notebookNote:
    "Authentication = ko si. Authorization = šta smeš. Frontend može sakriti UI, ali backend mora da enforce-uje permission. 401 = nema validne autentifikacije, 403 = identitet poznat ali nema dozvolu.",

  relatedLessonIds: ["rest-status-codes", "rest-best-practices"],
};
