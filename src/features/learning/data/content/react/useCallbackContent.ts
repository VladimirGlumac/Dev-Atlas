import type { LessonContent } from "../../../types/learning";

export const useCallbackContent: LessonContent = {
  lessonId: "react-use-callback",

  overview:
    "useCallback memoizes a function reference between renders. React returns the same function reference until one of its dependencies changes.",

  mentalModel:
    "Functions created inside a component are new objects on every render. useCallback lets React reuse the previous function reference while its dependencies remain unchanged.",

  sections: [
    {
      id: "basic-syntax",
      title: "Basic syntax",
      body: "Pass the function you want to preserve and the values that the function depends on.",
      codeExamples: [
        {
          id: "use-callback-basic",
          title: "Memoized callback",
          language: "tsx",
          code: `import { useCallback } from "react";

const handleDelete = useCallback(
  (id: number) => {
    setIssues((currentIssues) =>
      currentIssues.filter(
        (issue) => issue.id !== id,
      ),
    );
  },
  [],
);`,
          explanation:
            "Because the callback uses the functional setter, it does not need issues in its dependency array.",
        },
      ],
    },

    {
      id: "function-reference",
      title: "Function references",
      body: "Without useCallback, a function declared inside the component gets a new reference after every render.",
      codeExamples: [
        {
          id: "callback-reference",
          title: "New function on every render",
          language: "tsx",
          code: `function Parent() {
  const handleSave = () => {
    console.log("save");
  };

  return (
    <Child onSave={handleSave} />
  );
}`,
          explanation:
            "Even though the function body is identical, handleSave is a new function object after each render.",
        },
      ],
    },

    {
      id: "with-memo",
      title: "Using useCallback with memo",
      body: "useCallback is most useful when a function is passed to a memoized child component and a stable function reference prevents unnecessary child rerenders.",
      codeExamples: [
        {
          id: "callback-memo-child",
          title: "Stable callback prop",
          language: "tsx",
          code: `const handleSelect = useCallback(
  (id: number) => {
    setSelectedId(id);
  },
  [],
);

return (
  <MemoizedIssueList
    onSelect={handleSelect}
  />
);`,
        },
      ],
    },

    {
      id: "dependencies",
      title: "Dependencies",
      body: "Every reactive value read inside the callback should normally appear in the dependency array. Functional state updates can sometimes remove a state value from the dependency list.",
      codeExamples: [
        {
          id: "callback-dependencies",
          title: "Dependency example",
          language: "tsx",
          code: `const handleSearch = useCallback(() => {
  fetchResults(searchTerm);
}, [searchTerm]);`,
        },
      ],
    },

    {
      id: "use-callback-vs-use-memo",
      title: "useCallback vs useMemo",
      body: "useMemo memoizes a calculated value. useCallback memoizes the function itself.",
      codeExamples: [
        {
          id: "callback-vs-memo",
          title: "Comparison",
          language: "tsx",
          code: `const value = useMemo(
  () => calculateValue(data),
  [data],
);

const callback = useCallback(
  () => saveData(data),
  [data],
);`,
        },
      ],
    },

    {
      id: "when-to-use",
      title: "When to use useCallback",
      body: "Use it when stable function identity matters: memoized children, hook dependencies, or APIs that rely on the same callback reference.",
    },

    {
      id: "when-not-to-use",
      title: "When not to use useCallback",
      body: "Do not wrap every event handler in useCallback. A normal function is often simpler and perfectly fast enough.",
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "useCallback is a performance tool, not a default coding style. First identify why stable identity matters. If the child is not memoized and the callback is not used as a dependency, useCallback may provide no useful benefit.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Create a memoized list component that receives an onSelect callback. Compare behavior with and without useCallback and inspect rerenders with React DevTools.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be ready to explain why a function gets a new reference each render, when that matters, and why useCallback alone does not prevent a child component from rerendering.",
    },
  ],

  commonMistakes: [
    "Wrapping every function in useCallback.",
    "Missing dependencies.",
    "Assuming useCallback prevents the parent component from rerendering.",
    "Using useCallback while the child is not memoized and function identity does not matter.",
    "Using stale state inside a callback instead of a functional state update.",
  ],

  notebookNote:
    "useCallback pamti referencu funkcije između rendera dok se dependencies ne promene. Najviše smisla ima sa memoizovanim child komponentama ili kada callback koristiš kao dependency. Ne koristi ga automatski za svaki handler.",

  relatedLessonIds: ["react-use-memo", "react-use-state"],
};
