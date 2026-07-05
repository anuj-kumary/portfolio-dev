import { GitHubRepo, GitHubUser } from "@/types";

const GITHUB_USERNAME = "anuj-kumary";
const BASE_URL = "https://api.github.com";

const headers: RequestInit["headers"] = {
  Accept: "application/vnd.github.v3+json",
  ...(process.env.GITHUB_TOKEN
    ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
    : {}),
};

export async function getGitHubUser(): Promise<GitHubUser | null> {
  try {
    const res = await fetch(`${BASE_URL}/users/${GITHUB_USERNAME}`, {
      headers,
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function getPublicRepos(): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      `${BASE_URL}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=30&type=public`,
      { headers, next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const repos: GitHubRepo[] = await res.json();
    return repos.filter((r) => !r.fork).slice(0, 12);
  } catch {
    return [];
  }
}

export async function getTopRepos(): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      `${BASE_URL}/users/${GITHUB_USERNAME}/repos?sort=stars&per_page=6&type=public`,
      { headers, next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const repos: GitHubRepo[] = await res.json();
    return repos.filter((r) => !r.fork);
  } catch {
    return [];
  }
}
