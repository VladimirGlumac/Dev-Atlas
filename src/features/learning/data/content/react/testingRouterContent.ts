import type { LessonContent } from "../../../types/learning";

export const testingRouterContent: LessonContent = {
  lessonId: "react-testing-router",

  overview:
    "Components that depend on React Router should be tested inside a router environment. Tests can provide an initial route and verify navigation through visible UI behavior.",

  mentalModel:
    "If a component expects router context in production, provide router context in the test too.",

  sections: [
    {
      id: "memory-router",
      title: "MemoryRouter",
      body: "MemoryRouter is useful for component tests because it keeps route history in memory without a real browser URL.",
      codeExamples: [
        {
          id: "memory-router-example",
          title: "Render with route",
          language: "tsx",
          code: `render(
  <MemoryRouter
    initialEntries={[
      "/issues/42",
    ]}
  >
    <Routes>
      <Route
        path="/issues/:issueId"
        element={<IssuePage />}
      />
    </Routes>
  </MemoryRouter>,
);`,
        },
      ],
    },

    {
      id: "params",
      title: "Route params",
      body: "Provide the URL shape that the component expects and assert the resulting UI.",
      codeExamples: [
        {
          id: "route-param-example",
          title: "useParams behavior",
          language: "tsx",
          code: `expect(
  screen.getByText(
    /issue 42/i,
  ),
).toBeInTheDocument();`,
        },
      ],
    },

    {
      id: "navigation",
      title: "Test navigation",
      body: "Click links or buttons and verify the destination UI rather than calling navigate directly.",
      codeExamples: [
        {
          id: "navigation-example",
          title: "Navigate through UI",
          language: "tsx",
          code: `await user.click(
  screen.getByRole(
    "link",
    { name: /dashboard/i },
  ),
);

expect(
  await screen.findByRole(
    "heading",
    { name: /dashboard/i },
  ),
).toBeInTheDocument();`,
        },
      ],
    },

    {
      id: "search-params",
      title: "URL search params",
      body: "If filters or pagination live in the URL, tests can start from specific search parameters and verify the resulting state.",
      codeExamples: [
        {
          id: "search-param-example",
          title: "Initial route",
          language: "tsx",
          code: `initialEntries={[
  "/issues?status=open&page=2",
]}`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Do not mock React Router unnecessarily when a lightweight in-memory router can exercise the real behavior.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Test a lesson route with technologySlug, sectionSlug and lessonSlug and verify that the correct lesson title renders.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Know why route-dependent components require router context and how MemoryRouter supports isolated route testing.",
    },
  ],

  commonMistakes: [
    "Rendering useNavigate/useParams components without a router.",
    "Mocking navigate when actual navigation can be tested.",
    "Testing route implementation instead of destination behavior.",
    "Ignoring URL search state.",
  ],

  notebookNote:
    "Router komponenta u testu mora imati router context. MemoryRouter + initialEntries omogućava route test bez pravog browser URL-a. Navigaciju testiraj klikom kroz UI.",

  relatedLessonIds: ["react-testing-user-event", "react-testing-async-ui"],
};
