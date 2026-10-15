import type { LessonContent } from "../../../types/learning";

export const stagingCommitsContent: LessonContent = {
  lessonId: "git-staging-commits",

  overview:
    "Git does not automatically commit every changed file. Changes move through the working directory, staging area and finally into the repository history as commits.",

  mentalModel:
    "Editing a file does not mean it will enter the next commit. The staging area lets you deliberately choose which changes belong together.",

  sections: [
    {
      id: "three-states",
      title: "Three important states",
      body: "Understanding working directory, staging area and commit history makes most everyday Git commands much easier to reason about.",
      codeExamples: [
        {
          id: "three-states-flow",
          title: "Git flow",
          language: "bash",
          code: `working directory
↓
git add
↓
staging area
↓
git commit
↓
local repository history`,
        },
      ],
    },

    {
      id: "working-directory",
      title: "Working directory",
      body: "The working directory contains the files you are currently editing.",
      codeExamples: [
        {
          id: "working-status",
          title: "Inspect changed files",
          language: "bash",
          code: `git status`,
          explanation:
            "Modified and untracked files appear here before they are staged.",
        },
      ],
    },

    {
      id: "staging-area",
      title: "Staging area",
      body: "The staging area contains the exact changes selected for the next commit.",
      codeExamples: [
        {
          id: "stage-file",
          title: "Stage one file",
          language: "bash",
          code: `git add src/pages/DashboardPage.tsx`,
        },
        {
          id: "stage-all",
          title: "Stage all current changes",
          language: "bash",
          code: `git add .`,
        },
      ],
    },

    {
      id: "inspect-before-commit",
      title: "Inspect before committing",
      body: "Use git diff for unstaged changes and git diff --staged for changes that will enter the next commit.",
      codeExamples: [
        {
          id: "diff-example",
          title: "Inspect changes",
          language: "bash",
          code: `git diff

git diff --staged`,
        },
      ],
    },

    {
      id: "commit",
      title: "Create a commit",
      body: "A commit records the currently staged snapshot in local repository history.",
      codeExamples: [
        {
          id: "commit-example",
          title: "Commit staged work",
          language: "bash",
          code: `git commit -m "Add Git branching lesson"`,
        },
      ],
    },

    {
      id: "commit-message",
      title: "Good commit messages",
      body: "A useful commit message describes the logical result of the change.",
      codeExamples: [
        {
          id: "commit-message-examples",
          title: "Good examples",
          language: "bash",
          code: `git commit -m "Add task mutation lab"

git commit -m "Fix mobile navigation focus"

git commit -m "Add TypeScript runtime validation lesson"`,
        },
      ],
    },

    {
      id: "logical-commits",
      title: "Logical commits",
      body: "Prefer several focused commits over one giant commit containing unrelated work.",
      codeExamples: [
        {
          id: "logical-example",
          title: "Better history",
          language: "bash",
          code: `Add authentication service

Add login form

Add authentication tests`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Before every commit, inspect status and staged changes. Never commit secrets simply because git add . is convenient.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Modify two unrelated files. Stage only one of them, inspect git diff and git diff --staged, then commit only the staged change.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be able to explain the difference between working directory, staging area and commit history.",
    },
  ],

  commonMistakes: [
    "Thinking git add uploads files to GitHub.",
    "Thinking git commit automatically includes every modified file.",
    "Running git add . without inspecting changes.",
    "Combining unrelated changes into one huge commit.",
    "Committing secrets or generated files.",
  ],

  notebookNote:
    "Working directory = izmene na fajlovima. git add → staging area. git commit → lokalna istorija. Pre commita proveri git status i git diff --staged.",
  relatedLessonIds: ["git-essential-commands", "git-branches"],
};
