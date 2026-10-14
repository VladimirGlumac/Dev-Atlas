export interface GitHubUser {
  login: string;
  id: number;

  avatar_url: string;
  html_url: string;

  name: string | null;
  bio: string | null;

  followers: number;
  following: number;

  public_repos: number;
}
