import {
    getGitHubEvents,
    getGitHubRepositories,
    getGitHubUser,
  } from "./github";
  
  export async function getGitHubData() {
    const [user, repositories, events] =
      await Promise.all([
        getGitHubUser(),
        getGitHubRepositories(),
        getGitHubEvents(),
      ]);
  
    const publicRepositories = repositories.filter(
      (repository) => !repository.fork,
    );
  
    const totalStars = publicRepositories.reduce(
      (total, repository) =>
        total + repository.stargazers_count,
      0,
    );
  
    const languages = publicRepositories.reduce<
      Record<string, number>
    >((result, repository) => {
      if (!repository.language) {
        return result;
      }
  
      result[repository.language] =
        (result[repository.language] ?? 0) + 1;
  
      return result;
    }, {});
  
    const topLanguages = Object.entries(languages)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([language]) => language);
  
    return {
      user,
  
      repositories: publicRepositories,
  
      events,
  
      stats: {
        repositories: publicRepositories.length,
        stars: totalStars,
        followers: user.followers,
        topLanguages,
      },
    };
  }