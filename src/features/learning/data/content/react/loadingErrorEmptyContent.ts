import type { LessonContent } from "../../../types/learning";

export const loadingErrorEmptyContent: LessonContent = {
  lessonId: "react-loading-error-empty",

  overview:
    "Production interfaces should explicitly handle loading, error, empty and success states. A component is not complete just because the happy path renders correctly.",

  mentalModel:
    "For async UI, success is only one of several valid states. Design all important states deliberately.",

  sections: [
    {
      id: "four-states",
      title: "The four common states",
      body: "Many data-driven screens need at least loading, error, empty and success handling.",
      codeExamples: [
        {
          id: "four-states-example",
          title: "State model",
          language: "ts",
          code: `loading
error
empty
success`,
        },
      ],
    },

    {
      id: "loading",
      title: "Loading state",
      body: "Loading UI should communicate that work is happening without making the interface feel frozen.",
      codeExamples: [
        {
          id: "loading-example",
          title: "Query loading",
          language: "tsx",
          code: `if (query.isPending) {
  return <LoadingState />;
}`,
        },
      ],
    },

    {
      id: "error",
      title: "Error state",
      body: "Error UI should explain that something failed and offer recovery when possible.",
      codeExamples: [
        {
          id: "error-example",
          title: "Retry",
          language: "tsx",
          code: `if (query.isError) {
  return (
    <ErrorState
      message="Could not load issues."
      onRetry={() =>
        query.refetch()
      }
    />
  );
}`,
        },
      ],
    },

    {
      id: "empty",
      title: "Empty state",
      body: "An empty result is not necessarily an error. It often needs its own useful message and next action.",
      codeExamples: [
        {
          id: "empty-example",
          title: "No issues",
          language: "tsx",
          code: `if (
  query.data.length === 0
) {
  return (
    <EmptyState
      title="No issues yet"
      action="Create issue"
    />
  );
}`,
        },
      ],
    },

    {
      id: "success",
      title: "Success state",
      body: "Only after other states are handled should the component render its main successful content.",
    },

    {
      id: "background-fetch",
      title: "Initial loading vs background fetching",
      body: "Do not always replace existing content with a full loading screen when fresh data is being fetched in the background.",
      codeExamples: [
        {
          id: "background-fetch-example",
          title: "TanStack distinction",
          language: "ts",
          code: `isPending
→ no usable data yet

isFetching
→ request currently running

can be:
data visible
+
small refresh indicator`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "A page should not flash blank content during async transitions. Design states based on what the user needs to understand and do next.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Review the GitHub User Search and identify its loading, error, empty/not searched and success states.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be ready to explain why empty and error are different states and how isPending differs from background fetching.",
    },
  ],

  commonMistakes: [
    "Handling only loading and success.",
    "Treating empty results as errors.",
    "Replacing existing data with a full spinner during every background refetch.",
    "Showing generic errors with no retry path.",
  ],

  notebookNote:
    "Production async UI: loading, error, empty, success. Empty nije error. isPending znači nema usable data; isFetching može biti background refresh dok stari podaci ostaju vidljivi.",

  relatedLessonIds: ["react-api-boundaries", "react-testing-async-ui"],
};
