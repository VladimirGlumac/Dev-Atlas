import { Outlet } from "react-router";

import Footer from "./Footer";
import Header from "./Header";
import MobileNavigation from "./MobileNavigation";
import Sidebar from "./Sidebar";

export default function AppLayout() {
  return (
    <div
      className="
        min-h-screen
        bg-slate-50
        text-slate-900
        transition-colors
        dark:bg-slate-950
        dark:text-slate-100
      "
    >
      <Header />

      <div className="mx-auto flex w-full max-w-[1600px]">
        <Sidebar />

        <main
          className="
            min-w-0 flex-1
            pb-20 lg:pb-0
          "
        >
          <Outlet />
        </main>
      </div>

      <Footer />

      <MobileNavigation />
    </div>
  );
}
