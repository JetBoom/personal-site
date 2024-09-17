import { defineCollection, getCollection, z } from 'astro:content'

const schema = z.object({
    name: z.string(),
})

export const AwardsCollection = defineCollection({ schema, type: 'content' })

export type AwardType = z.infer<typeof schema>

export async function getAwards() {
	let items = await getCollection('awards')
    items.sort((a, b) => a.id.localeCompare(b.id))
	return items
}
