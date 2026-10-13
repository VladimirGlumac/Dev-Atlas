import {
  findLessonById,
  getSectionById,
  getTechnologyById,
  getAllPublishedLessons,
} from "../../learning/services/learningService";
import { technologies } from "../../learning/data/technologies";
import { calculateTechnologyProgress } from "../../progress/utils/progressUtils";
import { buildLessonRoute } from "../../learning/utils/learningRoutes";
import { useBookmarks } from "../../bookmarks/hooks/useBookmarks";
import { useProgress } from "../../progress/hooks/useProgress";

export function useDashboardOverview() {
  const {
    progress,
    isLoading: isProgressLoading,
    isError: isProgressError,
  } = useProgress();

  const {
    bookmarks,
    isLoading: isBookmarksLoading,
    isError: isBookmarksError,
  } = useBookmarks();

  const publishedLessons = getAllPublishedLessons();

  const completedLessons = progress.filter(
    (item) => item.status === "completed",
  );

  const inProgressLessons = progress.filter(
    (item) => item.status === "in-progress",
  );

  const totalLessons = publishedLessons.length;

  const overallPercentage =
    totalLessons === 0
      ? 0
      : Math.round((completedLessons.length / totalLessons) * 100);

  const latestInProgress = [...inProgressLessons].sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
  )[0];

  let continueLearning:
    | {
        title: string;
        description: string;
        technologyName: string;
        sectionTitle: string;
        route: string;
      }
    | undefined;
  const recentActivity = [...progress]
    .sort(
      (a, b) =>
        new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
    )
    .slice(0, 5)
    .flatMap((item) => {
      const lesson = findLessonById(item.lessonId);

      if (!lesson) {
        return [];
      }

      const technology = getTechnologyById(lesson.technologyId);

      if (!technology) {
        return [];
      }

      const section = getSectionById(technology.id, lesson.sectionId);

      if (!section) {
        return [];
      }

      return [
        {
          id: item.id,
          status: item.status,
          updatedAt: item.updatedAt,

          lessonTitle: lesson.title,

          technologyName: technology.name,

          sectionTitle: section.title,

          route: buildLessonRoute(technology, section, lesson),
        },
      ];
    });
  const technologyProgress = technologies
    .map((technology) => {
      const lessons = publishedLessons.filter(
        (lesson) => lesson.technologyId === technology.id,
      );

      if (lessons.length === 0) {
        return null;
      }

      const summary = calculateTechnologyProgress(
        technology.id,
        lessons,
        progress,
      );

      return {
        technology,
        ...summary,
      };
    })
    .filter((item) => item !== null);

  if (latestInProgress) {
    const lesson = findLessonById(latestInProgress.lessonId);

    if (lesson) {
      const technology = getTechnologyById(lesson.technologyId);

      const section = technology
        ? getSectionById(technology.id, lesson.sectionId)
        : undefined;

      if (technology && section) {
        continueLearning = {
          title: lesson.title,
          description: lesson.description,
          technologyName: technology.name,
          sectionTitle: section.title,
          route: buildLessonRoute(technology, section, lesson),
        };
      }
    }
  }

  return {
    totalLessons,
    completedCount: completedLessons.length,
    inProgressCount: inProgressLessons.length,
    bookmarkCount: bookmarks.length,
    overallPercentage,

    continueLearning,

    isLoading: isProgressLoading || isBookmarksLoading,

    isError: isProgressError || isBookmarksError,
    recentActivity,
    technologyProgress,
  };
}
