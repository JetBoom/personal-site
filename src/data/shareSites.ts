import {
    defineCollection,
    getCollection,
    z,
    type CollectionEntry,
} from 'astro:content'

const schema = z.object({
    name: z.string(),
    href: z.string(),
    icon: z.string(),
})

export const ShareSitesCollection = defineCollection({ schema, type: 'data' })

export type ShareSiteType = z.infer<typeof schema>

export async function getShareSites() : Promise<CollectionEntry<'shareSites'>[]> {
    const items = await getCollection('shareSites')
    return items
}

/**
 * Transforms template href on a share link button.
 * @param templateURL Sharing URL template
 * @param url URL of the currently viewed page.
 * @param message Message, usually an article title.
 * @returns Final transformed href
 */
export function getShareHref(templateURL: string, url: string, message: string) : string {
    return templateURL
        .replace('{url}', encodeURIComponent(url))
        .replace('{message}', encodeURIComponent(message))
}
