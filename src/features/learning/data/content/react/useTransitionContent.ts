import type { LessonContent } from "../../../types/learning";

export const useTransitionContent: LessonContent = {
  lessonId: "react-use-transition",

  overview:
    "useTransition lets you mark some state updates as non-urgent so React can keep the interface responsive while rendering more expensive UI updates.",

  mentalModel:
    "Not every update has the same priority. Typing into an input is urgent because the user expects immediate feedback. Updating a large filtered list can be treated as a transition so React can prioritize the input first.",

  sections: [
    {
      id: "basic-syntax",
      title: "Basic syntax",
      body: "useTransition returns an isPending flag and a startTransition function. Wrap non-urgent state updates inside startTransition.",
      codeExamples: [
        {
          id: "transition-basic",
          title: "Basic transition",
          language: "tsx",
          code: `import { useState, useTransition } from "react";

export default function SearchPage() {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");

  const [isPending, startTransition] =
    useTransition();

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement>,
  ): void {
    const value = event.target.value;

    setInput(value);

    startTransition(() => {
      setSearch(value);
    });
  }

  return (
    <>
      <input
        value={input}
        onChange={handleChange}
      />

      {isPending && <p>Updating...</p>}

      <Results search={search} />
    </>
  );
}`,
          explanation:
            "The input state remains urgent, while the update that affects the heavier Results tree is marked as a transition.",
        },
      ],
    },

    {
      id: "urgent-vs-non-urgent",
      title: "Urgent vs non-urgent updates",
      body: "Urgent updates include direct user feedback such as typing, clicking or moving focus. Non-urgent updates are usually heavier UI changes that can wait briefly without making the interface feel broken.",
      codeExamples: [
        {
          id: "transition-priority",
          title: "Two priorities",
          language: "tsx",
          code: `setInput(value);

startTransition(() => {
  setSelectedFilter(value);
});`,
          explanation:
            "The user sees the input update immediately while React can schedule the heavier filter-related render separately.",
        },
      ],
    },

    {
      id: "is-pending",
      title: "Pending feedback",
      body: "isPending tells you that a transition is still being rendered. It can be used for subtle loading indicators or disabling secondary controls while keeping the existing UI visible.",
      codeExamples: [
        {
          id: "transition-pending",
          title: "Pending UI",
          language: "tsx",
          code: `{isPending && (
  <span>Updating results...</span>
)}`,
        },
      ],
    },

    {
      id: "transitions-and-server-data",
      title: "Transitions and server data",
      body: "useTransition does not replace a data-fetching library. It controls React rendering priority. Tools such as TanStack Query still handle server-state fetching, caching and synchronization.",
    },

    {
      id: "when-to-use",
      title: "When to use useTransition",
      body: "Use it when an update causes expensive rendering and should not block urgent interactions. Common examples include switching large tabs, filtering large interfaces or navigating between expensive views.",
    },

    {
      id: "when-not-to-use",
      title: "When not to use useTransition",
      body: "Do not use transitions for every state update. Simple state changes do not need them. Do not wrap the state controlling the user's immediate input value in a transition.",
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Transitions improve perceived responsiveness, not raw computation speed. If a calculation itself is extremely expensive, you may still need better algorithms, memoization, virtualization or server-side work.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Create a search input that filters a large list. Keep the input value urgent and update the filtered search value inside startTransition. Display an isPending indicator while the list updates.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be ready to explain that useTransition changes the priority of rendering work. It does not delay JavaScript manually, debounce input or replace server-state loading.",
    },
  ],

  commonMistakes: [
    "Wrapping the controlled input value itself in startTransition.",
    "Using useTransition for simple UI updates that are already fast.",
    "Thinking useTransition makes expensive algorithms faster.",
    "Using isPending as if it were a network loading state.",
    "Confusing transitions with debounce or throttling.",
  ],

  notebookNote:
    "useTransition deli urgent i non-urgent update-e. Direktan feedback korisniku ostaje urgentan, a skuplji render može ići kroz startTransition. isPending označava transition render, ne nužno API request.",

  relatedLessonIds: ["react-use-memo", "react-use-deferred-value"],
};
