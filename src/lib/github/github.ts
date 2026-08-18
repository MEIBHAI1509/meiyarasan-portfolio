import type {
    GitHubEvent,
    GitHubRepository,
    GitHubUser,
  } from "@/types/github/types";
  
  const GITHUB_API = "https://api.github.com";
  const GITHUB_USERNAME = "MEIBHAI1509";
  
  const headers = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2026-03-10",
  };
  
  async function githubFetch<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${GITHUB_API}${endpoint}`, {
      headers,
  
      next: {
        revalidate: 3600,
      },
    });
  
    if (!response.ok) {
      throw new Error(
        `GitHub API error: ${response.status}`,
      );
    }
  
    return response.json();
  }
  
  export async function getGitHubUser() {
    return githubFetch<GitHubUser>(
      `/users/${GITHUB_USERNAME}`,
    );
  }
  
  export async function getGitHubRepositories() {
    return githubFetch<GitHubRepository[]>(
      `/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
    );
  }
  
  export async function getGitHubEvents() {
    return githubFetch<GitHubEvent[]>(
      `/users/${GITHUB_USERNAME}/events/public?per_page=30`,
    );
  }