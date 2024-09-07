import { defineCollection, getCollection, z } from 'astro:content'
import { sortByPriority } from '@/utils'

const schema = z.object({
	skills: z.array(z.string()),
	priority: z.number().optional(),
})

export const SkillCollection = defineCollection({ schema, type: 'data' })

export type SkillType = z.infer<typeof schema>

export async function getSkills() {
	let items = await getCollection('skills') ?? []
    items.sort(sortByPriority)
	// items.forEach(item => item.data.skills.sort((a: string, b: string) => a.localeCompare(b)))
	return items
}
