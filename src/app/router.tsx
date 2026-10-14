import { Route, Routes } from "react-router";

import AppLayout from "../components/layout/AppLayout";

import HomePage from "../pages/HomePage";
import DashboardPage from "../pages/DashboardPage";
import LearnPage from "../pages/LearnPage";
import LoginPage from "../pages/LoginPage";
import TechnologyPage from "../pages/TechnologyPage";
import LessonPage from "../pages/LessonPage";
import BookmarksPage from "../pages/BookmarksPage";
import ProgressPage from "../pages/ProgressPage";
import ApiLabPage from "../pages/ApiLabPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/learn/:technologySlug" element={<TechnologyPage />} />
        <Route
          path="/learn/:technologySlug/:sectionSlug/:lessonSlug"
          element={<LessonPage />}
        />
        <Route path="/bookmarks" element={<BookmarksPage />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="/api-lab" element={<ApiLabPage />} />
      </Route>

      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}
