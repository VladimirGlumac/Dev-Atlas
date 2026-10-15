import type { LessonContent } from "../../../types/learning";

export const pullRequestsContent: LessonContent = {
  lessonId: "git-pull-requests",

  overview:
    "A Pull Request is a GitHub collaboration workflow for proposing that changes from one branch be reviewed and integrated into another branch.",

  mentalModel:
    "git push publishes a branch. A Pull Request starts a conversation about whether that branch should be merged into the target branch.",

  sections: [
    {
      id: "push-is-not-pr",
      title: "Push is not a Pull Request",
      body: "Pushing a feature branch only creates or updates that branch on GitHub. The Pull Request is created separately.",
      codeExamples: [
        {
          id: "push-pr-flow",
          title: "Feature to PR",
          language: "bash",
          code: `git push -u origin feature/user-auth

↓
remote branch exists

↓
Create Pull Request

↓
review

↓
merge`,
        },
      ],
    },

    {
      id: "base-compare",
      title: "Base and compare branches",
      body: "The base branch receives the changes. The compare branch contains the proposed changes.",
      codeExamples: [
        {
          id: "base-compare-example",
          title: "Typical PR",
          language: "bash",
          code: `base:
main

compare:
feature/user-auth`,
        },
      ],
    },

    {
      id: "review-changes",
      title: "Review the diff",
      body: "Before creating or merging a PR, inspect the changed files and verify that only intended changes are included.",
    },

    {
      id: "pr-description",
      title: "Write a useful description",
      body: "A good PR explains what changed, why it changed and anything reviewers should specifically test or notice.",
      codeExamples: [
        {
          id: "pr-description-example",
          title: "Example",
          language: "bash",
          code: `Add task cache updates

- use setQueryData after task mutations
- add optimistic toggle behavior
- rollback failed optimistic updates
- document cache lifecycle`,
        },
      ],
    },

    {
      id: "new-commits",
      title: "A PR follows the branch",
      body: "If you push another commit to the same feature branch, an open Pull Request automatically includes the new commit.",
      codeExamples: [
        {
          id: "pr-update-flow",
          title: "Update existing PR",
          language: "bash",
          code: `git add .

git commit -m "Fix optimistic rollback"

git push

→ existing PR updates automatically`,
        },
      ],
    },

    {
      id: "review",
      title: "Code review",
      body: "Review is an opportunity to find bugs, improve design, share knowledge and verify that the change fits the codebase.",
    },

    {
      id: "merge",
      title: "Merge the Pull Request",
      body: "Once checks and review are complete, the feature branch can be merged into the target branch.",
    },

    {
      id: "sync-local-main",
      title: "Update local main afterwards",
      body: "After GitHub merges the PR, your local main may still be behind the remote main.",
      codeExamples: [
        {
          id: "sync-main-example",
          title: "Synchronize local main",
          language: "bash",
          code: `git switch main

git pull`,
        },
      ],
    },

    {
      id: "cleanup",
      title: "Clean up the feature branch",
      body: "After verifying the merge, the completed local feature branch can normally be deleted.",
      codeExamples: [
        {
          id: "cleanup-example",
          title: "Delete local branch",
          language: "bash",
          code: `git branch -d feature/user-auth`,
        },
      ],
    },

    {
      id: "production-notes",
      title: "Production notes",
      body: "Keep PRs focused enough to review. Large unrelated PRs are harder to understand, test and safely merge.",
    },

    {
      id: "practice",
      title: "Practice",
      body: "Use the next DevAtlas feature branch to open a PR, inspect Files changed, add another commit to the same branch, push it and observe the existing PR update automatically.",
    },

    {
      id: "interview",
      title: "Interview angle",
      body: "Be able to explain the difference between pushing a branch, opening a Pull Request and merging that Pull Request.",
    },
  ],

  commonMistakes: [
    "Thinking git push automatically creates a PR.",
    "Opening a PR against the wrong base branch.",
    "Creating giant PRs with unrelated changes.",
    "Merging without reviewing Files changed.",
    "Forgetting to synchronize local main after the remote PR merge.",
  ],

  notebookNote:
    "push objavljuje branch. Pull Request predlaže merge branch-a u base branch i omogućava review. Novi push na isti feature branch automatski ažurira otvoreni PR.",

  relatedLessonIds: ["git-push-pull-fetch", "git-merge", "git-merge-conflicts"],
};
