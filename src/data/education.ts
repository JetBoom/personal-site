import {
    defineCollection,
    getCollection,
    z,
    type CollectionEntry,
} from 'astro:content'

const schema = z.object({
    name: z.string(),
    degree: z.string(),
    subject: z.string().optional(),
    year: z.number(),
    url: z.string().url().optional(),
    image: z.string().optional(),
})

export const EducationCollection = defineCollection({ schema, type: 'content' })

export type EducationType = z.infer<typeof schema>

export async function getEducation() : Promise<CollectionEntry<'education'>[]> {
	let items = await getCollection('education')
    items.sort((a, b) => b.data.year - a.data.year)
	return items
}
