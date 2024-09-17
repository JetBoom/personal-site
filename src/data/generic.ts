import { defineCollection, z } from 'astro:content'

const schema = z.object({})

export const GenericCollection = defineCollection({ schema, type: 'content' })

export type GenericCollectionType = z.infer<typeof schema>
