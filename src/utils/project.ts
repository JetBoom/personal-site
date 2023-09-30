import { getCollection } from 'astro:content'

async function getProjectsFromCollection() {
	const results = await getCollection('project')
	return results ?? []
}

export const getProjects = async (max?: number) => {
	return (await getProjectsFromCollection())
		.filter(item => !item.data.draft)
		.sort((a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf())
		.slice(0, max)
}

export const getProjectTags = async () => {
	const posts = await getProjectsFromCollection()
	const tags = new Set(posts.map(item => item.data.tags).flat())
	return Array.from(tags)
}

export const getProjectsByTag = async (tag: string) => {
	const posts = await getProjects()
	return posts.filter(item => item.data.tags.includes(tag))
}
