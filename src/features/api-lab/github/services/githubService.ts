import type { GitHubUser } from "../types/github";

export async function fetchGitHubUser(username: string): Promise<GitHubUser> {
  const response = await fetch(
    `https://api.github.com/users/${encodeURIComponent(username)}`,
  );

  if (response.status === 404) {
    throw new Error("GitHub user not found.");
  }

  if (!response.ok) {
    throw new Error("Failed to load GitHub user.");
  }

  return response.json();
}
