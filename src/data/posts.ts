import {
    defineCollection,
    getCollection,
    z,
    type CollectionEntry,
} from 'astro:content'

export const PostsCollection = defineCollection({
    schema: ({ image }) => z.object({
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
        draft: z.boolean().default(false),
    }),
    type: 'content',
})

async function getPostsFromCollection() : Promise<CollectionEntry<'posts'>[]> {
    return await getCollection('posts')
}

export async function getPostCategories() {
    const posts = await getPostsFromCollection()
    const categories = new Set(posts.map((post) => post.data.category))
    return Array.from(categories)
}

export async function getPosts(max?: number) : Promise<CollectionEntry<'posts'>[]> {
    let posts = await getPostsFromCollection()
    posts = posts
        .filter(post => !post.data.draft)
        .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
        .slice(0, max)
    return posts
}

export async function getTags() : Promise<string[]> {
    const posts = await getPostsFromCollection()
    const tags = new Set(posts.map((post) => post.data.tags).flat())
    return Array.from(tags)
}

export async function getPostByTag(tag: string) : Promise<CollectionEntry<'posts'>[]> {
    const posts = await getPosts()
    return posts.filter((post) => post.data.tags.includes(tag))
}

export async function filterPostsByCategory(category: string) : Promise<CollectionEntry<'posts'>[]> {
    const posts = await getPosts()
    return posts.filter((post) => post.data.category.toLowerCase() === category)
}
