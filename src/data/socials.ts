import { defineCollection, getCollection, z } from 'astro:content'
import { sortByPriority } from '@/utils/string'

const schema = z.object({
	name: z.string(),
	url: z.string().url(),
	icon: z.string(),
	priority: z.number().optional(),
})

export const SocialsCollection = defineCollection({ schema, type: 'data' })

export type SocialType = z.infer<typeof schema>

export async function getSocials() {
	let items = await getCollection('socials') ?? []
    items.sort(sortByPriority)
	return items
}
