import type { LessonContent } from "../../../types/learning";

export const reduxBestPracticesContent: LessonContent = {
  lessonId: "redux-best-practices",

  overview:
    "Good Redux architecture is less about using Redux everywhere and more about carefully choosing what Redux owns, keeping state minimal and exposing predictable state transitions.",

  mentalModel:
    "Redux should simplify shared client state. If Redux makes a simple problem harder, it may be the wrong owner.",

  sections: [
    {
      id: "minimal-state",
      title: "Store minimal state",
      body: "Avoid storing values that can be derived from existing Redux state.",
      codeExamples: [
        {
          id: "minimal-state-example",
          title: "Prefer derivation",
          language: "ts",
          code: `state.tasks
→ store

completedTaskCount
→ selector

not both`,
        },
      ],
    },

    {
      id: "ownership",
      title: "Choose ownership first",
      body: "Before creating a slice, identify whether the state is local, URL-owned, server-owned or genuinely global client state.",
      codeExamples: [
        {
          id: "ownership-rule",
          title: "Decision order",
          language: "ts",
          code: `local UI?
→ useState

URL/shareable?
→ URL state

server-owned?
→ TanStack Query

complex shared client?
→ Redux Toolkit`,
        },
      ],
    },

    {
      id: "reducers-pure",
      title: "Keep reducers predictable",
      body: "Reducers should focus on state transitions and avoid network requests, timers or unrelated side effects.",
      codeExamples: [
        {
          id: "reducer-rule",
          title: "Reducer responsibility",
          language: "ts",
          code: `action
+
current state

↓
next state`,
        },
      ],
    },

    {
      id: "domain-actions",
      title: "Prefer meaningful actions",
      body: "Action names should describe domain events or clear state transitions rather than expose arbitrary implementation details.",
      codeExamples: [
        {
          id: "action-name-example",
          title: "Clear intent",
          language: "ts",
          code: `taskCompleted()

checkoutStepChanged()

editorSelectionCleared()

// clearer than:
setThing()
updateData()`,
        },
      ],
    },

    {
      id: "selectors",
      title: "Expose selectors",
      body: "Use selectors to centralize state access and derived values instead of spreading store shape knowledge across components.",
    },

    {
      id: "serializable-state",
      title: "Keep Redux state serializable",
      body: "Redux state and actions should usually contain serializable values so DevTools, persistence and debugging remain predictable.",
      codeExamples: [
        {
          id: "serializable-example",
          title: "Usually avoid storing",
          language: "ts",
          code: `DOM elements
functions
class instances
open WebSocket objects
Promise objects`,
        },
      ],
    },

    {
      id: "normalization",
      title: "Normalize complex entities when useful",
      body: "For client-owned entity collections with frequent lookup and updates, normalized state and createEntityAdapter can reduce complexity.",
    },

    {
      id: "do-not-duplicate",
      title: "Avoid duplicate sources of truth",
      body: "Do not keep the same authoritative value in local state, Redux and TanStack Query simultaneously.",
      codeExamples: [
        {
          id: "duplicate-source-example",
          title: "Bad ownership",
          language: "ts",
          code: `same user:

useState
+
Redux
+
TanStack cache

→ synchronization problems`,
        },
      ],
    },

    {
      id: "slice-size",
      title: "Keep slices domain-focused",
      body: "Avoid one giant appSlice. Split state by meaningful domain ownership rather than arbitrary file size.",
    },

    {
      id: "devtools",
      title: "Use Redux DevTools",
      body: "Redux DevTools can inspect dispatched actions and state transitions, which is one of Redux's strongest debugging advantages.",
    },

    {
      id: "checklist",
      title: "Redux decision checklist",
      body: "Before adding new Redux state, ask whether the state truly needs centralized client ownership.",
      codeExamples: [
        {
          id: "checklist-example",
          title: "Before creating a slice",
          language: "ts",
          code: `□ Is this client-owned state?
□ Is it shared widely?
□ Is the workflow complex?
□ Is local state insufficient?
□ Is Context becoming awkward?
□ Am I duplicating server state?
□ Can this value be derived?`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Redux is most valuable when it creates predictability. Keep state ownership explicit, actions meaningful and selectors focused.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Review five possible pieces of Redux state in a project and reject at least two that should belong to another owner.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "A strong Redux answer should discuss state ownership, serializability, selectors, normalized entities and avoiding duplicated server state.",
    },
  ],

  commonMistakes: [
    "Creating a giant appSlice.",
    "Storing derived values.",
    "Keeping non-serializable objects in Redux.",
    "Copying server data into Redux.",
    "Using vague action names.",
    "Introducing Redux before understanding the state problem.",
  ],

  notebookNote:
    "Redux best practice: minimal state, clear ownership, domain-focused slices, meaningful actions, selectors za reading/derivation, serializable state i bez duplicate source of truth.",

  relatedLessonIds: [
    "redux-vs-context",
    "redux-vs-tanstack-query",
    "redux-project-structure",
  ],
};
