import type { LessonContent } from "../../../types/learning";

export const essentialGitCommandsContent: LessonContent = {
  lessonId: "git-essential-commands",

  overview:
    "Git is a distributed version control system. The most important skill is understanding the flow between your working directory, staging area, local commit history and remote repository.",

  mentalModel:
    "Think of Git as several layers. You edit files in the working directory, choose changes for the staging area, create commits in local history, and then optionally push those commits to a remote repository such as GitHub.",

  sections: [
    {
      id: "git-status",
      title: "git status",
      body: "git status should be one of the commands you use most often. It shows the current branch and tells you which files are modified, staged or untracked.",
      codeExamples: [
        {
          id: "git-status-example",
          title: "Check repository state",
          language: "bash",
          code: `git status`,
          explanation:
            "Use this before committing, switching branches or when you are unsure what Git currently sees.",
        },
      ],
    },

    {
      id: "git-add",
      title: "git add",
      body: "git add moves selected changes into the staging area. Staging lets you decide exactly what will be included in the next commit.",
      codeExamples: [
        {
          id: "git-add-file",
          title: "Stage one file",
          language: "bash",
          code: `git add src/pages/DashboardPage.tsx`,
        },

        {
          id: "git-add-all",
          title: "Stage all current changes",
          language: "bash",
          code: `git add .`,
          explanation:
            "Convenient, but always check git status or git diff first so you know what you are staging.",
        },
      ],
    },

    {
      id: "git-commit",
      title: "git commit",
      body: "A commit records the staged changes as a permanent snapshot in your local Git history.",
      codeExamples: [
        {
          id: "git-commit-example",
          title: "Create a commit",
          language: "bash",
          code: `git commit -m "Add Git learning track"`,
          explanation:
            "A good commit message describes the result of the change, not every implementation detail.",
        },
      ],
    },

    {
      id: "git-diff",
      title: "git diff",
      body: "git diff lets you inspect changes before committing them.",
      codeExamples: [
        {
          id: "git-diff-working",
          title: "Unstaged changes",
          language: "bash",
          code: `git diff`,
        },

        {
          id: "git-diff-staged",
          title: "Staged changes",
          language: "bash",
          code: `git diff --staged`,
          explanation: "This shows what will actually enter the next commit.",
        },
      ],
    },

    {
      id: "git-log",
      title: "git log",
      body: "git log displays commit history and helps you understand how the repository evolved.",
      codeExamples: [
        {
          id: "git-log-example",
          title: "Readable history",
          language: "bash",
          code: `git log --oneline --graph --decorate`,
          explanation:
            "This compact format is useful for visualizing branch and commit history.",
        },
      ],
    },

    {
      id: "git-branch",
      title: "git branch",
      body: "Branches let you work on features or fixes without directly modifying the stable main branch.",
      codeExamples: [
        {
          id: "git-branch-list",
          title: "List branches",
          language: "bash",
          code: `git branch`,
        },

        {
          id: "git-switch-create",
          title: "Create and switch branch",
          language: "bash",
          code: `git switch -c feature/tanstack-cache-debug`,
          explanation:
            "The -c flag creates the branch and switches to it immediately.",
        },
      ],
    },

    {
      id: "git-push",
      title: "git push",
      body: "git push sends local commits to a remote repository such as GitHub.",
      codeExamples: [
        {
          id: "git-push-first",
          title: "Push a new branch",
          language: "bash",
          code: `git push -u origin feature/tanstack-cache-debug`,
          explanation:
            "The -u flag connects the local branch with its remote tracking branch.",
        },

        {
          id: "git-push-next",
          title: "Later pushes",
          language: "bash",
          code: `git push`,
        },
      ],
    },

    {
      id: "git-pull",
      title: "git pull",
      body: "git pull retrieves remote changes and integrates them into the current local branch.",
      codeExamples: [
        {
          id: "git-pull-example",
          title: "Update current branch",
          language: "bash",
          code: `git pull`,
        },
      ],
    },

    {
      id: "daily-workflow",
      title: "Daily workflow",
      body: "A typical safe workflow is to inspect changes, stage intentionally, commit a logical unit and push it to GitHub.",
      codeExamples: [
        {
          id: "daily-workflow-example",
          title: "Typical sequence",
          language: "bash",
          code: `git status
git diff

git add .

git diff --staged

git commit -m "Add TanStack cache debug panel"

git push`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Prefer small logical commits over giant commits containing unrelated work. Always inspect changes before committing. Avoid committing secrets, environment files, generated build output and dependency directories.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Create a feature branch for the next DevAtlas feature. Modify one file, inspect it with git diff, stage it, inspect the staged diff, commit it and push the branch to GitHub.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be ready to explain the difference between working directory, staging area, local repository and remote repository. Also know the difference between git add, commit and push.",
    },
  ],

  commonMistakes: [
    "Running git add . without checking what changed.",
    "Thinking git commit automatically uploads changes to GitHub.",
    "Making one huge commit containing unrelated features.",
    "Committing .env files or secrets.",
    "Working directly on main for every feature in a collaborative project.",
    "Using Git commands without checking git status when something feels wrong.",
  ],

  notebookNote:
    "Git flow: working directory → git add → staging area → git commit → local history → git push → GitHub. git status i git diff koristi često da znaš tačno šta radiš.",

  relatedLessonIds: [
    "git-staging-commits",
    "git-branches",
    "git-push-pull-fetch",
  ],
};
