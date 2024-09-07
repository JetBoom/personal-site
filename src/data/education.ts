import { defineCollection, getCollection, z } from 'astro:content'

const schema = z.object({
    degree: z.string(),
    year: z.number(),
    description: z.string().optional(),
    url: z.string().url().optional(),
    image: z.string().optional(),

    hidden: z.boolean().optional(),
})

export const EducationCollection = defineCollection({ schema, type: 'data' })

export type EducationType = z.infer<typeof schema>

export async function getEducation() {
	let items = await getCollection('education', item => !item.data.hidden) ?? []
    items.sort((a, b) => b.data.year - a.data.year)
	return items
}
