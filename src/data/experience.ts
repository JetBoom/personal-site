import { defineCollection, getCollection, z } from 'astro:content'

const schema = z.object({
    name: z.string(),
    title: z.string(),
    startMonth: z.number().int().gte(1).lte(12),
    startYear: z.number(),
    endMonth: z.number().int().gte(1).lte(12).optional(),
    endYear: z.number().optional(),
    location: z.string().optional(),
    url: z.string().url().optional(),
    linkedin: z.string().optional(),
    image: z.string().optional(),
})

export const ExperienceCollection = defineCollection({ schema, type: 'content' })

export type ExperienceType = z.infer<typeof schema>

export async function getExperience() {
	let items = await getCollection('experience')

    items.sort((a, b) => {
        const startA = new Date(a.data.startYear, a.data.startMonth + 1)
        const startB = new Date(b.data.startYear, b.data.startMonth + 1)
        return startB.valueOf() - startA.valueOf()
    })

	return items
}
