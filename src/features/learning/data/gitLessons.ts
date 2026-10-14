import type { Lesson } from "../types/learning";

export const gitLessons: Lesson[] = [
  {
    id: "git-essential-commands",
    technologyId: "git-github",
    sectionId: "git-foundations",
    title: "Essential Git Commands",
    slug: "essential-commands",
    description:
      "Learn the Git commands you will use constantly during everyday development.",
    difficulty: "beginner",
    status: "published",
    order: 1,
  },

  {
    id: "git-staging-commits",
    technologyId: "git-github",
    sectionId: "git-foundations",
    title: "Staging & Commits",
    slug: "staging-commits",
    description:
      "Understand working directory, staging area and commit history.",
    difficulty: "beginner",
    status: "published",
    order: 2,
  },

  {
    id: "git-branches",
    technologyId: "git-github",
    sectionId: "git-branches",
    title: "Branches",
    slug: "branches",
    description: "Create and switch branches without affecting stable work.",
    difficulty: "beginner",
    status: "published",
    order: 1,
  },

  {
    id: "git-merge",
    technologyId: "git-github",
    sectionId: "git-branches",
    title: "Merge",
    slug: "merge",
    description: "Combine branch histories and understand merge commits.",
    difficulty: "intermediate",
    status: "published",
    order: 2,
  },

  {
    id: "git-push-pull-fetch",
    technologyId: "git-github",
    sectionId: "git-remotes",
    title: "Push, Pull & Fetch",
    slug: "push-pull-fetch",
    description:
      "Understand communication between local and remote repositories.",
    difficulty: "beginner",
    status: "published",
    order: 1,
  },

  {
    id: "git-reset-revert-restore",
    technologyId: "git-github",
    sectionId: "git-recovery",
    title: "Restore, Reset & Revert",
    slug: "restore-reset-revert",
    description:
      "Understand the important differences between Git undo commands.",
    difficulty: "intermediate",
    status: "published",
    order: 1,
  },

  {
    id: "git-stash",
    technologyId: "git-github",
    sectionId: "git-recovery",
    title: "Git Stash",
    slug: "stash",
    description: "Temporarily store unfinished work without creating a commit.",
    difficulty: "intermediate",
    status: "published",
    order: 2,
  },

  {
    id: "git-merge-conflicts",
    technologyId: "git-github",
    sectionId: "git-team-workflow",
    title: "Merge Conflicts",
    slug: "merge-conflicts",
    description:
      "Resolve conflicting changes safely and understand why conflicts happen.",
    difficulty: "intermediate",
    status: "published",
    order: 1,
  },

  {
    id: "git-pull-requests",
    technologyId: "git-github",
    sectionId: "git-team-workflow",
    title: "Pull Requests",
    slug: "pull-requests",
    description:
      "Understand review, feature branches and merging work through GitHub.",
    difficulty: "intermediate",
    status: "published",
    order: 2,
  },
];
