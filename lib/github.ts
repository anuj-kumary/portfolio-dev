import { GitHubRepo, GitHubUser } from "@/types";

const GITHUB_USERNAME = "anuj-kumary";
const BASE_URL = "https://api.github.com";

const headers: RequestInit["headers"] = {
  Accept: "application/vnd.github.v3+json",
  ...(process.env.GITHUB_TOKEN
    ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
    : {}),
};

// Specific repos to feature on the portfolio
const FEATURED_REPOS = [
  "OpenMetadata",
  "Code-Snippets-Builder",
  "Your-Github-Contributions",
  "mitro",
  "TechHub",
  "react-native-toastify",
];

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
    const results = await Promise.all(
      FEATURED_REPOS.map((name) =>
        fetch(`${BASE_URL}/repos/${GITHUB_USERNAME}/${name}`, {
          headers,
          next: { revalidate: 3600 },
        }).then((r) => (r.ok ? (r.json() as Promise<GitHubRepo>) : null))
      )
    );
    return results.filter(Boolean) as GitHubRepo[];
  } catch {
    return [];
  }
}

export async function getTopRepos(): Promise<GitHubRepo[]> {
  return getPublicRepos();
}
