import { Octokit } from 'octokit'

export type GitHubRepo = {
    user: string
    name: string
    description?: string
    language?: string
    stars: number
    forks: number
    created: Date
    updated: Date
}

interface GitHubRepoAPI {
    name: string
    description: string
    language: string
    stargazers_count: number
    forks: number
    created_at: string
    updated_at: string
    topics?: string[]
}

/**
 * Get all of a user's public GitHub repos via public GitHub API.
 * Sorts by stars > forks > name
 * @param user - User name
 * @returns a list of repositories
 */
export async function getGitHubRepos(user: string): Promise<GitHubRepo[]> {
    const repos: GitHubRepo[] = []

    try {
        let response = await new Octokit().paginate(`GET /users/${user}/repos`) as GitHubRepoAPI[]

        // Add "nolist" to the topics in the github settings modal for this repo to not appear.
        response = response.filter(item => !item.topics?.includes('nolist'))

        for (const repo of response) {
            repos.push({
                user,
                name: repo.name,
                description: repo.description || 'No description given.',
                language: repo.language || '',
                stars: repo.stargazers_count,
                forks: repo.forks,
                created: new Date(repo.created_at),
                updated: new Date(repo.updated_at),
            })
        }
    } catch (e) {
        console.error(e)
    }

    repos.sort((a, b) => {
        if (a.stars !== b.stars) return b.stars - a.stars
        if (a.forks !== b.forks) return b.forks - a.forks

        return a.name.localeCompare(b.name)
    })

    return repos
}
