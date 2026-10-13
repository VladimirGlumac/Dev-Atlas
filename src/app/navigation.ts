import {
  Bookmark,
  BookOpen,
  ChartNoAxesColumnIncreasing,
  Code2,
  FlaskConical,
  Gauge,
  House,
  MessageSquareText,
  Trophy,
  type LucideIcon,
} from "lucide-react";

export interface NavigationItem {
  label: string;
  to: string;
  icon: LucideIcon;
  mobile?: boolean;
}

export const navigationItems: NavigationItem[] = [
  {
    label: "Home",
    to: "/",
    icon: House,
    mobile: true,
  },
  {
    label: "Dashboard",
    to: "/dashboard",
    icon: Gauge,
  },
  {
    label: "Learn",
    to: "/learn",
    icon: BookOpen,
    mobile: true,
  },
  {
    label: "Playground",
    to: "/playground",
    icon: Code2,
    mobile: true,
  },
  {
    label: "API Lab",
    to: "/api-lab",
    icon: FlaskConical,
  },
  {
    label: "Challenges",
    to: "/challenges",
    icon: Trophy,
    mobile: true,
  },
  {
    label: "Interview Prep",
    to: "/interview",
    icon: MessageSquareText,
  },
  {
    label: "Bookmarks",
    to: "/bookmarks",
    icon: Bookmark,
  },
  {
    label: "Progress",
    to: "/progress",
    icon: ChartNoAxesColumnIncreasing,
    mobile: true,
  },
];
