export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
  fork: boolean;
}

export interface GitHubUser {
  login: string;
  name: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
}

export interface TechCategory {
  name: string;
  items: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  tech: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
