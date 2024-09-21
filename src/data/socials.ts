import {
    defineCollection,
    getCollection,
    z,
    type CollectionEntry,
} from 'astro:content'
import { sortByPriority } from '@/utils/string'

const schema = z.object({
    name: z.string(),
    url: z.string().url(),
    icon: z.string(),
    priority: z.number().optional(),
})

export const SocialsCollection = defineCollection({ schema, type: 'data' })

export type SocialType = z.infer<typeof schema>

export async function getSocials() : Promise<CollectionEntry<'socials'>[]>{
    const items = await getCollection('socials')
    items.sort(sortByPriority)
    return items
}
