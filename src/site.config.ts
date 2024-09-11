interface SiteConfig {
	author: string
	email: string
	jobTitle: string
	title: string
	github: string
	description: string
	lang: string
	ogLocale: string
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
} as const
