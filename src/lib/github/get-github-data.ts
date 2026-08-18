import {
  getGitHubEvents,
  getGitHubRepositories,
  getGitHubUser,
} from "./github";

export async function getGitHubData() {
  const results = await Promise.allSettled([
    getGitHubUser(),
    getGitHubRepositories(),
    getGitHubEvents(),
  ]);

  const userResult = results[0];
  const repositoriesResult = results[1];
  const eventsResult = results[2];

  // User and repositories are required
  // for the GitHub section to work.
  if (
    userResult.status === "rejected" ||
    repositoriesResult.status === "rejected"
  ) {
    throw new Error(
      "Unable to load GitHub profile data.",
    );
  }

  const user = userResult.value;
  const repositories = repositoriesResult.value;

  // Events are optional. If GitHub's events
  // endpoint fails, the rest of the section
  // can still work.
  const events =
    eventsResult.status === "fulfilled"
      ? eventsResult.value
      : [];

  /*
   * github.ts already requests:
   *
   * /repos?sort=updated
   *
   * Therefore repositories are already ordered
   * by their most recent update.
   */
  const publicRepositories =
    repositories.filter(
      (repository) => !repository.fork,
    );

  /*
   * Calculate total stars across public
   * non-fork repositories.
   */
  const totalStars =
    publicRepositories.reduce(
      (total, repository) =>
        total +
        repository.stargazers_count,
      0,
    );

  /*
   * Count repository languages.
   */
  const languages =
    publicRepositories.reduce<
      Record<string, number>
    >((result, repository) => {
      if (!repository.language) {
        return result;
      }

      result[repository.language] =
        (result[repository.language] ?? 0) + 1;

      return result;
    }, {});

  /*
   * Get the five most frequently used
   * languages.
   */
  const topLanguages =
    Object.entries(languages)
      .sort(
        ([, a], [, b]) => b - a,
      )
      .slice(0, 5)
      .map(
        ([language]) => language,
      );

  return {
    user,

    repositories: publicRepositories,

    events,

    stats: {
      repositories:
        publicRepositories.length,

      stars: totalStars,

      followers: user.followers,

      topLanguages,
    },
  };
}