import type { LessonContent } from "../../../types/learning";

export const prefetchingContent: LessonContent = {
  lessonId: "tanstack-prefetching",

  overview:
    "Prefetching loads server data into the query cache before the user reaches the screen that needs it. When done selectively, navigation can feel almost instant.",

  mentalModel:
    "Predict useful future data and warm the cache before the consuming component mounts.",

  sections: [
    {
      id: "basic-prefetch",
      title: "prefetchQuery",
      body: "QueryClient can execute and cache a query before useQuery needs it.",
      codeExamples: [
        {
          id: "prefetch-example",
          title: "Prefetch issue",
          language: "tsx",
          code: `const queryClient =
  useQueryClient();

await queryClient
  .prefetchQuery({
    queryKey: [
      "issue",
      issueId,
    ],

    queryFn: () =>
      fetchIssue(
        issueId,
      ),

    staleTime:
      60_000,
  });`,
        },
      ],
    },

    {
      id: "navigation",
      title: "Prefetch before navigation",
      body: "A common pattern is prefetching detail data when the user shows intent to open an item.",
      codeExamples: [
        {
          id: "hover-prefetch-example",
          title: "Prefetch on intent",
          language: "tsx",
          code: `<Link
  to={
    \`/issues/\${issue.id}\`
  }
  onMouseEnter={() => {
    void queryClient
      .prefetchQuery({
        queryKey: [
          "issue",
          issue.id,
        ],

        queryFn: () =>
          fetchIssue(
            issue.id,
          ),
      });
  }}
>
  {issue.title}
</Link>`,
        },
      ],
    },

    {
      id: "same-key",
      title: "Use the exact same query identity",
      body: "Prefetching is useful only when the eventual useQuery uses the same key and compatible query function.",
      codeExamples: [
        {
          id: "same-key-example",
          title: "Cache reuse",
          language: "ts",
          code: `prefetch:
[
  "issue",
  42,
]

detail page:
[
  "issue",
  42,
]

→ same cache entry`,
        },
      ],
    },

    {
      id: "freshness",
      title: "Freshness still matters",
      body: "Prefetched data follows normal staleTime behavior. If it becomes stale before consumption, TanStack Query may refetch it.",
    },

    {
      id: "next-page",
      title: "Prefetch the next page",
      body: "Pagination interfaces can prefetch the likely next page after the current page succeeds.",
      codeExamples: [
        {
          id: "next-page-example",
          title: "Warm next page",
          language: "tsx",
          code: `void queryClient
  .prefetchQuery({
    queryKey: [
      "issues",
      page + 1,
    ],

    queryFn: () =>
      fetchIssues(
        page + 1,
      ),
  });`,
        },
      ],
    },

    {
      id: "cost",
      title: "Prefetching has a cost",
      body: "Every prefetch may create a network request and cache entry. Prefetch likely next actions, not every possible destination.",
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Use prefetching where navigation probability and latency justify the request. Avoid turning every hover into unnecessary background traffic.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Prefetch issue details when a user hovers or focuses an IssueCard link, then verify the detail route can reuse the cache.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Explain how prefetchQuery differs from useQuery and why matching query keys are critical for cache reuse.",
    },
  ],

  commonMistakes: [
    "Prefetching with a different query key from the destination query.",
    "Prefetching every item regardless of likely user intent.",
    "Assuming prefetched data never becomes stale.",
    "Using prefetching before basic query behavior is correct.",
  ],

  notebookNote:
    "Prefetching = unapred napuni query cache. Destination useQuery mora koristiti isti queryKey. Koristi ga za verovatne sledeće akcije, ne za sve moguće podatke.",

  relatedLessonIds: ["tanstack-pagination", "tanstack-stale-time"],
};
