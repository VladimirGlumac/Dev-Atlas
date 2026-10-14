import type { LearningSection } from "../types/learning";

export const gitSections: LearningSection[] = [
  {
    id: "git-foundations",
    technologyId: "git-github",
    title: "Git Foundations",
    slug: "foundations",
    description:
      "Repository basics, staging, commits and understanding Git state.",
    order: 1,
  },

  {
    id: "git-branches",
    technologyId: "git-github",
    title: "Branches & Merging",
    slug: "branches-merging",
    description: "Branching, merging and working safely on features.",
    order: 2,
  },

  {
    id: "git-remotes",
    technologyId: "git-github",
    title: "GitHub & Remotes",
    slug: "github-remotes",
    description:
      "Push, pull, fetch and collaborate through remote repositories.",
    order: 3,
  },

  {
    id: "git-recovery",
    technologyId: "git-github",
    title: "Undo & Recovery",
    slug: "undo-recovery",
    description:
      "Restore files, undo commits and recover safely from mistakes.",
    order: 4,
  },

  {
    id: "git-team-workflow",
    technologyId: "git-github",
    title: "Team Workflow",
    slug: "team-workflow",
    description:
      "Feature branches, pull requests, conflicts and production workflows.",
    order: 5,
  },

  {
    id: "git-practice",
    technologyId: "git-github",
    title: "Practice",
    slug: "practice",
    description: "Real Git exercises using branches, conflicts and GitHub.",
    order: 6,
  },
];
