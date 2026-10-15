import type { LessonContent } from "../../../types/learning";

export const pushPullFetchContent: LessonContent = {
  lessonId: "git-push-pull-fetch",

  overview:
    "Git remotes let your local repository communicate with repositories hosted elsewhere, such as GitHub. push uploads commits, fetch downloads remote information, and pull downloads and integrates remote changes.",

  mentalModel:
    "Your local repository and GitHub repository are separate copies. Git commands synchronize them deliberately; saving or committing locally does not automatically update GitHub.",

  sections: [
    {
      id: "remote",
      title: "Remote repositories",
      body: "A remote is a named reference to another Git repository. The default GitHub remote is commonly called origin.",
      codeExamples: [
        {
          id: "remote-list",
          title: "Inspect remotes",
          language: "bash",
          code: `git remote -v`,
        },
      ],
    },

    {
      id: "push",
      title: "git push",
      body: "push sends local commits to a remote repository.",
      codeExamples: [
        {
          id: "push-existing",
          title: "Push tracked branch",
          language: "bash",
          code: `git push`,
        },
        {
          id: "push-new",
          title: "First push of new branch",
          language: "bash",
          code: `git push -u origin feature/user-auth`,
          explanation:
            "-u sets the upstream tracking branch so later pushes can usually use only git push.",
        },
      ],
    },

    {
      id: "fetch",
      title: "git fetch",
      body: "fetch downloads information about remote commits and branches without modifying your current working branch.",
      codeExamples: [
        {
          id: "fetch-example",
          title: "Download remote information",
          language: "bash",
          code: `git fetch origin`,
        },
      ],
    },

    {
      id: "pull",
      title: "git pull",
      body: "pull fetches remote changes and then integrates them into your current branch.",
      codeExamples: [
        {
          id: "pull-example",
          title: "Update current branch",
          language: "bash",
          code: `git pull`,
        },
      ],
    },

    {
      id: "fetch-vs-pull",
      title: "fetch vs pull",
      body: "fetch is useful when you want to inspect remote changes before integrating them. pull is convenient when you already intend to bring those changes into the current branch.",
      codeExamples: [
        {
          id: "fetch-pull-flow",
          title: "Difference",
          language: "bash",
          code: `git fetch
→ download remote state
→ current branch unchanged

git pull
→ fetch
→ integrate remote changes`,
        },
      ],
    },

    {
      id: "remote-tracking",
      title: "Remote-tracking branches",
      body: "Names such as origin/main represent Git's latest known state of a remote branch.",
      codeExamples: [
        {
          id: "tracking-example",
          title: "Inspect history",
          language: "bash",
          code: `git log --oneline --graph --decorate --all`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Before starting new work, update your base branch. Do not blindly pull when you have unclear local changes. Use git status first.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Create and push a feature branch, inspect it on GitHub, then return to main and use fetch to inspect remote state without merging anything.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be able to clearly explain the difference between push, fetch and pull.",
    },
  ],

  commonMistakes: [
    "Thinking commit automatically sends work to GitHub.",
    "Confusing fetch with pull.",
    "Pushing to the wrong branch.",
    "Pulling while unclear local changes are present.",
    "Forgetting that origin/main and local main are different references.",
  ],

  notebookNote:
    "push = lokalni commits → remote. fetch = preuzmi remote informacije bez menjanja current branch-a. pull = fetch + integracija promena.",

  relatedLessonIds: ["git-branches", "git-pull-requests"],
};
