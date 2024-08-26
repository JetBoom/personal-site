type SocialNetworkType = {
    name: string
    url: string
    icon: string
}

export const SOCIAL_NETWORKS: SocialNetworkType[] = [
	{
		name: 'Github',
		url: 'https://github.com/JetBoom',
		icon: 'skill-icons:github-dark',
	},

	{
		name: 'Instagram',
		url: 'https://instagram.com/regalartenjoyer',
		icon: 'skill-icons:instagram',
	},
] as const
