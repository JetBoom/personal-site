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

/**
 * Get all of a user's public GitHub repos via public GitHub API.
 * @param user - User name
 * @returns a list of repositories
 */
export async function getGitHubRepos(user: string): Promise<GitHubRepo[]> {
    const repos: GitHubRepo[] = []

    try {
        const response = await fetch(`https://api.github.com/users/${user}/repos`)
        let json = await response.json()

        json = json.filter((item: any) => !item.topics?.includes('nolist'))

        for (const repo of json) {
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
    } catch (e: any) {
        console.error(e)
    }

    repos.sort((a, b) => {
        if (a.stars !== b.stars) return b.stars - a.stars
        if (a.forks !== b.forks) return b.forks - a.forks

        return a.name.localeCompare(b.name)
    })

    return repos
}
