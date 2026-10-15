import type { LessonContent } from "../../../types/learning";

export const branchesContent: LessonContent = {
  lessonId: "git-branches",

  overview:
    "A Git branch is an independent line of development. Feature branches let developers work without placing unfinished changes directly on the stable main branch.",

  mentalModel:
    "A branch is not a complete copy of the repository. It is essentially a movable reference to a commit history.",

  sections: [
    {
      id: "list-branches",
      title: "List branches",
      body: "git branch shows local branches and marks the currently active branch.",
      codeExamples: [
        {
          id: "branch-list",
          title: "List branches",
          language: "bash",
          code: `git branch`,
        },
      ],
    },

    {
      id: "create-feature",
      title: "Create a feature branch",
      body: "Use git switch -c to create a new branch and immediately switch to it.",
      codeExamples: [
        {
          id: "switch-create",
          title: "Create feature branch",
          language: "bash",
          code: `git switch -c feature/user-auth`,
        },
      ],
    },

    {
      id: "switch-existing",
      title: "Switch branches",
      body: "Use git switch when the branch already exists.",
      codeExamples: [
        {
          id: "switch-main",
          title: "Return to main",
          language: "bash",
          code: `git switch main`,
        },
      ],
    },

    {
      id: "feature-workflow",
      title: "Feature workflow",
      body: "A common team workflow keeps main stable while changes are developed on short-lived branches.",
      codeExamples: [
        {
          id: "feature-flow",
          title: "Typical workflow",
          language: "bash",
          code: `git switch main

git pull

git switch -c feature/task-filter

# work...

git add .

git commit -m "Add task filtering"

git push -u origin feature/task-filter`,
        },
      ],
    },

    {
      id: "branch-naming",
      title: "Branch naming",
      body: "Use short descriptive names that communicate the purpose of the branch.",
      codeExamples: [
        {
          id: "branch-names",
          title: "Examples",
          language: "bash",
          code: `feature/user-auth
feature/dashboard-search
fix/login-validation
refactor/api-services
docs/git-handbook`,
        },
      ],
    },

    {
      id: "why-main",
      title: "Keep main stable",
      body: "In collaborative development, main usually represents code that has passed review and is expected to be deployable.",
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Create feature branches from an up-to-date base branch. Avoid keeping branches alive for unnecessarily long periods because divergence increases merge conflicts.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Create a feature branch, make one small change, commit it and push the branch without touching main.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be able to explain why teams use branches and what happens when you create a branch.",
    },
  ],

  commonMistakes: [
    "Doing every feature directly on main.",
    "Creating a branch from an outdated main.",
    "Keeping feature branches alive for months.",
    "Switching branches with unclear uncommitted changes.",
    "Using meaningless names such as test2 or newbranch.",
  ],

  notebookNote:
    "Branch = odvojena linija razvoja. Tipičan workflow: update main → napravi feature branch → radi → commit → push → PR → merge.",
  relatedLessonIds: ["git-merge", "git-pull-requests"],
};
