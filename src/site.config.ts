interface SiteConfig {
	author: string
	email: string
	jobTitle: string
	title: string
	github: string
	description: string
	lang: string
	ogLocale: string

	giscus: {
		enabled: true
		repo: string
		repoId: string
		category: string
		categoryId: string
		theme: string
		lang: string
	} | (Record<string, unknown> & { enabled: false })
}

export const siteConfig: SiteConfig = {
    author: 'William Moodhe',
    email: 'williammoodhe@gmail.com',
    jobTitle: 'Full Stack Developer',
    title: 'William\'s Average Website',
    github: 'jetboom',
    description: 'My personal blog and portfolio.',
    lang: 'en-US',
    ogLocale: 'en_US',
    giscus: {
    	enabled: true,
        // Get your own giscus setup at https://giscus.app
        repo: 'jetboom/personal-site',
    	repoId: 'R_kgDOKYtB9w',
    	category: 'Site Comments',
    	categoryId: 'DIC_kwDOKYtB984CimXP',
    	theme: 'dark',
    	lang: 'en',
    },
} as const
