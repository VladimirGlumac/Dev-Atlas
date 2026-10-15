import type { LessonContent } from "../../../types/learning";

export const reduxVsTanStackContent: LessonContent = {
  lessonId: "redux-vs-tanstack-query",

  overview:
    "Redux Toolkit and TanStack Query solve different state-management problems. Redux is primarily a client-state container, while TanStack Query specializes in synchronizing server state with the UI.",

  mentalModel:
    "Ask who owns the source of truth. If the server owns it, think TanStack Query. If the browser application owns a complex shared workflow, Redux may fit.",

  sections: [
    {
      id: "client-state",
      title: "Client state",
      body: "Client state exists because the application created and owns it.",
      codeExamples: [
        {
          id: "client-state-examples",
          title: "Possible Redux state",
          language: "ts",
          code: `editor workflow
multi-step wizard
complex UI permissions
shared client-side draft
cross-page client state`,
        },
      ],
    },

    {
      id: "server-state",
      title: "Server state",
      body: "Server state originates remotely and must stay synchronized with an external source.",
      codeExamples: [
        {
          id: "server-state-examples",
          title: "TanStack Query candidates",
          language: "ts",
          code: `users from API
issues from API
products from API
GitHub user
comments
orders`,
        },
      ],
    },

    {
      id: "server-concerns",
      title: "Server state has special concerns",
      body: "Remote data needs more than storage. It may become stale, refetch in the background, fail, be invalidated or exist in multiple cache states.",
      codeExamples: [
        {
          id: "server-concerns-example",
          title: "Server-state concerns",
          language: "ts",
          code: `loading
error
caching
staleTime
refetch
deduplication
invalidation
mutations
optimistic updates`,
        },
      ],
    },

    {
      id: "redux-manual",
      title: "Redux can do it, but...",
      body: "Redux can store fetched data, but you may end up manually implementing concerns that TanStack Query already provides.",
    },

    {
      id: "two-sources",
      title: "Avoid two sources of truth",
      body: "Do not copy the same server entity from TanStack Query into Redux merely because another component needs it.",
      codeExamples: [
        {
          id: "two-source-example",
          title: "Avoid duplicate ownership",
          language: "ts",
          code: `API
↓
TanStack Query cache
↓
copy same value
↓
Redux

Which one is current?

❌`,
        },
      ],
    },

    {
      id: "combine",
      title: "They can work together",
      body: "A real application may use both tools when they own different kinds of state.",
      codeExamples: [
        {
          id: "combine-example",
          title: "Example",
          language: "ts",
          code: `TanStack Query
→ fetch issues

Redux
→ complex issue-editor
draft workflow

URL
→ selected status filter

useState
→ modal open`,
        },
      ],
    },

    {
      id: "decision-tree",
      title: "Decision tree",
      body: "Start with ownership and scope before choosing a library.",
      codeExamples: [
        {
          id: "decision-tree-example",
          title: "Quick decision",
          language: "ts",
          code: `Does server own it?
→ TanStack Query

Only one component?
→ useState

Complex local transitions?
→ useReducer

Simple shared UI state?
→ Context may be enough

Complex shared client state?
→ Redux Toolkit`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Avoid choosing state libraries based on company fashion. Choose according to source of truth, synchronization needs, scope and complexity.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Classify ten pieces of state in an ecommerce app: product list, cart draft, modal, current page, order history, checkout wizard, search filter, authentication profile, product details and theme.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "A strong answer should distinguish client state from server state rather than simply saying Redux and TanStack Query are competing libraries.",
    },
  ],

  commonMistakes: [
    "Treating Redux Toolkit and TanStack Query as direct replacements for each other.",
    "Copying query data into Redux.",
    "Putting simple local UI state into Redux.",
    "Assuming global means Redux.",
    "Ignoring URL state.",
  ],

  notebookNote:
    "Redux Toolkit i TanStack Query nisu ista kategorija problema. Redux → complex shared client state. TanStack Query → server state. Najvažnije pitanje: ko je source of truth?",

  relatedLessonIds: [
    "redux-create-async-thunk",
    "redux-async-state",
    "react-state-ownership",
  ],
};
