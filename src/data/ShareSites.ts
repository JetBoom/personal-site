import TwitterIcon from '@/components/icons/TwitterIcon'
import LinkedinIcon from '@/components/icons/linkedinIcon'

type ShareSiteType = {
	name: string
	href: (url: string, message: string) => string
	icon: any
}

export const SHARE_SITES: ShareSiteType[] = [
	{
		name: 'Twitter',
		href: (url, message) => `https://twitter.com/intent/tweet?text=${message + ' ' + url}`,
		icon: TwitterIcon
	},
    {
        name: 'LinkedIn',
        href: (url, message) => `https://www.linkedin.com/shareArticle?mini=true&url=${url}`,
        icon: LinkedinIcon,
    },
]
