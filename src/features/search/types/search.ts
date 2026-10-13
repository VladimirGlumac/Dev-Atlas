export type SearchResultType = "technology" | "section" | "lesson";

export interface SearchResult {
  id: string;
  type: SearchResultType;

  title: string;
  description?: string;

  route: string;
}
