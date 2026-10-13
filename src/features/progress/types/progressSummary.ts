export interface TechnologyProgressSummary {
  technologyId: string;

  totalLessons: number;
  completedLessons: number;
  inProgressLessons: number;

  percentage: number;
}
