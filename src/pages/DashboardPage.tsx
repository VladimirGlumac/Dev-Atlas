import {
  ArrowRight,
  Bookmark,
  BookOpenCheck,
  CirclePlay,
  GraduationCap,
} from "lucide-react";

import { Link } from "react-router";
import RecentActivity from "../features/dashboard/components/RecentActivity";
import DashboardStatCard from "../features/dashboard/components/DashboardStatCard";
import { useDashboardOverview } from "../features/dashboard/hooks/useDashboardOverview";
import TechnologyProgressList from "../features/dashboard/components/TechnologyProgressList";

export default function DashboardPage() {
  const {
    totalLessons,
    completedCount,
    inProgressCount,
    bookmarkCount,
    overallPercentage,
    continueLearning,
    recentActivity,
    isLoading,
    isError,
    technologyProgress,
  } = useDashboardOverview();

  if (isLoading) {
    return (
      <div className="px-6 py-10 lg:px-10">
        <p className="text-sm text-slate-500">Loading dashboard...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="px-6 py-10 lg:px-10">
        <p className="text-sm text-red-500">Failed to load dashboard.</p>
      </div>
    );
  }

  return (
    <div className="px-6 py-10 lg:px-10">
      <div className="mx-auto max-w-350">
        <header>
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
            Dashboard
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Your learning workspace
          </h1>

          <p className="mt-4 max-w-2xl leading-7 text-slate-600 dark:text-slate-400">
            Track your progress, continue active lessons and keep important
            material close.
          </p>
        </header>

        <section className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <DashboardStatCard
            label="Overall progress"
            value={`${overallPercentage}%`}
            description={`${completedCount} of ${totalLessons} published lessons completed`}
            icon={GraduationCap}
          />

          <DashboardStatCard
            label="Completed"
            value={completedCount}
            description="Lessons marked as completed"
            icon={BookOpenCheck}
          />

          <DashboardStatCard
            label="In progress"
            value={inProgressCount}
            description="Lessons currently being studied"
            icon={CirclePlay}
          />

          <DashboardStatCard
            label="Bookmarks"
            value={bookmarkCount}
            description="Saved lessons for quick reference"
            icon={Bookmark}
          />
        </section>

        <section className="mt-10">
          <div className="mb-4">
            <p className="text-sm font-medium text-slate-500">
              Continue learning
            </p>

            <h2 className="mt-1 text-2xl font-bold">
              Pick up where you left off
            </h2>
          </div>

          {continueLearning ? (
            <Link
              to={continueLearning.route}
              className="
                group block
                rounded-3xl
                border border-slate-200
                bg-white
                p-6
                shadow-sm
                transition
                hover:border-cyan-300
                hover:shadow-lg
                dark:border-slate-800
                dark:bg-slate-900
                dark:hover:border-cyan-800
              "
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                    {continueLearning.technologyName}
                    {" · "}
                    {continueLearning.sectionTitle}
                  </p>

                  <h3 className="mt-2 text-xl font-semibold">
                    {continueLearning.title}
                  </h3>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
                    {continueLearning.description}
                  </p>
                </div>

                <span
                  className="
                    inline-flex shrink-0
                    items-center gap-2
                    text-sm font-semibold
                    text-cyan-600
                    dark:text-cyan-400
                  "
                >
                  Continue
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          ) : (
            <div
              className="
                rounded-3xl
                border border-dashed
                border-slate-300
                p-8
                dark:border-slate-700
              "
            >
              <h3 className="font-semibold">Nothing in progress yet</h3>

              <p className="mt-2 text-sm text-slate-500">
                Open a lesson and mark it as in progress to continue it from
                here.
              </p>

              <Link
                to="/learn"
                className="
                  mt-5 inline-flex
                  items-center gap-2
                  text-sm font-semibold
                  text-cyan-600
                  dark:text-cyan-400
                "
              >
                Browse learning content
                <ArrowRight size={16} />
              </Link>
            </div>
          )}
        </section>

        <section className="mt-10">
          <div className="mb-4">
            <p className="text-sm font-medium text-slate-500">Learning path</p>

            <h2 className="mt-1 text-2xl font-bold">Progress by technology</h2>
          </div>

          <TechnologyProgressList items={technologyProgress} />
        </section>

        <section className="mt-10">
          <div className="mb-4">
            <p className="text-sm font-medium text-slate-500">Activity</p>

            <h2 className="mt-1 text-2xl font-bold">Recent activity</h2>
          </div>

          <RecentActivity items={recentActivity} />
        </section>
      </div>
    </div>
  );
}
