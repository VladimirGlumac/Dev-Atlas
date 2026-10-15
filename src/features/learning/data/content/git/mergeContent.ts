import type { LessonContent } from "../../../types/learning";

export const mergeContent: LessonContent = {
  lessonId: "git-merge",

  overview:
    "Merging combines changes from one branch into another. Understanding the current branch is critical because Git merges the specified branch into whichever branch you are currently on.",

  mentalModel:
    "git merge feature does not mean 'merge current into feature'. It means 'bring feature into my current branch'.",

  sections: [
    {
      id: "basic-merge",
      title: "Basic merge",
      body: "Switch to the target branch first, then merge the source branch into it.",
      codeExamples: [
        {
          id: "merge-basic-example",
          title: "Merge feature into main",
          language: "bash",
          code: `git switch main

git merge feature/user-auth`,
        },
      ],
    },

    {
      id: "fast-forward",
      title: "Fast-forward merge",
      body: "If main has not changed since the feature branch was created, Git may simply move the main branch pointer forward.",
      codeExamples: [
        {
          id: "fast-forward-model",
          title: "Before",
          language: "bash",
          code: `A --- B   main
       \\
        C --- D   feature`,
        },
        {
          id: "fast-forward-after",
          title: "After fast-forward",
          language: "bash",
          code: `A --- B --- C --- D
                  main
                  feature`,
        },
      ],
    },

    {
      id: "merge-commit",
      title: "Merge commit",
      body: "When both branches contain independent new commits, Git may create a merge commit connecting the histories.",
    },

    {
      id: "github-pr",
      title: "Merge through Pull Requests",
      body: "In team workflows, merging usually happens after code review through a GitHub Pull Request rather than manually merging directly into main.",
      codeExamples: [
        {
          id: "pr-flow",
          title: "Team flow",
          language: "bash",
          code: `feature branch
↓
push
↓
Pull Request
↓
review
↓
merge
↓
main`,
        },
      ],
    },

    {
      id: "delete-branch",
      title: "Delete finished branches",
      body: "After a feature is safely merged, its local branch can usually be removed.",
      codeExamples: [
        {
          id: "delete-branch-example",
          title: "Delete local branch",
          language: "bash",
          code: `git branch -d feature/user-auth`,
          explanation:
            "-d refuses to delete an unmerged branch, which makes it safer than force deletion.",
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Always confirm which branch you are on before merging. In collaborative repositories, prefer the team's Pull Request and merge policy.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Create a small feature branch, commit a change and merge it into a separate practice branch. Inspect the history with git log --oneline --graph --decorate.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Know what branch receives changes during git merge and understand the difference between a fast-forward and a merge commit at a conceptual level.",
    },
  ],

  commonMistakes: [
    "Running git merge while standing on the wrong branch.",
    "Merging unfinished code into main.",
    "Deleting a branch before confirming its work is safely merged.",
    "Ignoring repository PR policies.",
  ],

  notebookNote:
    "`git merge X` ubacuje X u trenutni branch. Zato prvo proveri gde se nalaziš. U timu se merge najčešće radi preko Pull Request-a posle review-a.",
  relatedLessonIds: [
    "git-branches",
    "git-merge-conflicts",
    "git-pull-requests",
  ],
};
