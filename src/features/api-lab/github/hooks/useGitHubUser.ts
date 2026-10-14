import { useQuery } from "@tanstack/react-query";

import { fetchGitHubUser } from "../services/githubService";

export function useGitHubUser(username: string) {
  const normalizedUsername = username.trim().toLowerCase();

  return useQuery({
    queryKey: ["github-user", normalizedUsername],

    queryFn: () => fetchGitHubUser(normalizedUsername),

    enabled: normalizedUsername.length > 0,

    staleTime: 5 * 60 * 1000,
  });
}
