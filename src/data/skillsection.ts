import { defineCollection, getCollection, z } from 'astro:content'
import { sortByPriority } from '@/utils/string'

const schema = z.object({
	priority: z.number().optional(),
})

export const SkillSectionCollection = defineCollection({ schema, type: 'content' })

export type SkillSectionType = z.infer<typeof schema>

export async function getSkillSections() {
	let items = await getCollection('skillsection')
    items.sort(sortByPriority)
	return items
}
