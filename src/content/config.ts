import { defineCollection, z } from 'astro:content'
import { ExperienceCollection } from '@/data/experience'

const post = defineCollection({
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string().max(80),
			description: z.string(),
			// Transform string to Date object
			pubDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			image: image(),
			category: z.string(),
			tags: z.array(z.string()),
			draft: z.boolean().default(false)
		})
})

export const collections = {
	post,
	experience: ExperienceCollection,
}
