import type { LessonContent } from "../../../types/learning";

export const useMemoContent: LessonContent = {
  lessonId: "react-use-memo",

  overview:
    "useMemo memoizes a calculated value between renders. React recalculates the value only when one of its dependencies changes.",

  mentalModel:
    "Think of useMemo as a cache for a calculation during rendering. React remembers the previously calculated result and can reuse it while the dependency values stay the same.",

  sections: [
    {
      id: "basic-syntax",
      title: "Basic syntax",
      body: "Pass a calculation function as the first argument and a dependency array as the second argument.",
      codeExamples: [
        {
          id: "use-memo-basic",
          title: "Memoized filtered list",
          language: "tsx",
          code: `import { useMemo } from "react";

const filteredDevelopers = useMemo(() => {
  return developers.filter((developer) =>
    developer.name
      .toLowerCase()
      .includes(search.toLowerCase()),
  );
}, [developers, search]);`,
          explanation:
            "The filter runs again only when developers or search changes.",
        },
      ],
    },

    {
      id: "expensive-calculations",
      title: "Expensive calculations",
      body: "The main use case is avoiding expensive recalculation when unrelated state causes the component to render again.",
      codeExamples: [
        {
          id: "use-memo-expensive",
          title: "Expensive derived value",
          language: "tsx",
          code: `const statistics = useMemo(() => {
  return calculateStatistics(issues);
}, [issues]);`,
          explanation:
            "If calculateStatistics is expensive, memoization can avoid repeating the work while issues has not changed.",
        },
      ],
    },

    {
      id: "referential-equality",
      title: "Referential equality",
      body: "Objects and arrays are reference values. Creating a new object during every render produces a new reference even when its contents look identical. useMemo can preserve the reference while dependencies stay unchanged.",
      codeExamples: [
        {
          id: "memo-object-reference",
          title: "Stable object reference",
          language: "tsx",
          code: `const filters = useMemo(
  () => ({
    status,
    priority,
  }),
  [status, priority],
);`,
          explanation:
            "The object keeps the same reference until status or priority changes.",
        },
      ],
    },

    {
      id: "memo-with-react-memo",
      title: "Using useMemo with memo",
      body: "Stable references can matter when passing objects or arrays into memoized child components. A new object reference can otherwise cause the child to rerender.",
      codeExamples: [
        {
          id: "memo-child-example",
          title: "Stable prop for a memoized child",
          language: "tsx",
          code: `const visibleIssues = useMemo(
  () => filterIssues(issues, filter),
  [issues, filter],
);

return (
  <IssueList issues={visibleIssues} />
);`,
        },
      ],
    },

    {
      id: "when-to-use",
      title: "When to use useMemo",
      body: "Use useMemo when a calculation is measurably expensive or when preserving a stable reference is important for another optimization such as memoized children or dependency stability.",
    },

    {
      id: "when-not-to-use",
      title: "When not to use useMemo",
      body: "Do not wrap every calculation in useMemo. Memoization itself has a cost and makes code more complex. Simple calculations are usually clearer without it.",
      codeExamples: [
        {
          id: "memo-unnecessary",
          title: "Unnecessary memoization",
          language: "tsx",
          code: `// Usually unnecessary
const fullName = useMemo(
  () => firstName + " " + lastName,
  [firstName, lastName],
);

// Simpler
const fullName =
  firstName + " " + lastName;`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Treat useMemo as a performance optimization, not as a guarantee. Your code should remain correct even if the memoized value is recalculated. Measure performance problems before adding memoization everywhere.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Create a list of issues with a search field and status filter. Derive the visible issues with useMemo and make the dependencies accurate.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be ready to explain the difference between useMemo and useCallback, what referential equality means, and why memoizing everything can make an application worse instead of better.",
    },
  ],

  commonMistakes: [
    "Using useMemo for trivial calculations.",
    "Missing dependencies.",
    "Using useMemo to fix incorrect state architecture.",
    "Assuming memoization guarantees that a value will never be recalculated.",
    "Creating unstable dependencies that make the memo useless.",
  ],

  notebookNote:
    "useMemo pamti rezultat računanja između rendera dok se dependencies ne promene. Koristi ga za skupa računanja ili stabilne object/array reference kada optimizacija stvarno ima smisla. Ne memoizuj sve automatski.",

  relatedLessonIds: ["react-use-callback", "react-use-state"],
};
