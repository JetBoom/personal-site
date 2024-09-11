/** Strips out the protocol:// part of url. */
export function stripProtocol(href: string) : string {
    const url = new URL(href)

    href = url.host
    if (url.pathname !== '/') href += url.pathname
    
    return href
}

/**
 * Converts text to a slug.
 * @param text
 * @returns Slug id representation of the text.
 * @example sluglify('article title') -> 'article-title'
 */
export function sluglify(text: string) : string {
	return text.replace(/\s+/g, '-')
}

/**
 * Converts a slug to text.
 * @param id
 * @returns Plainly readable text version of the id.
 * @example unsluglify('this-is-an-id') // -> 'this is an id'
 */
export function unsluglify(id: string) : string {
	return id.replace(/-/g, ' ')
}

/**
 * Converts strings to Proper Case.
 * Will assume anything 3 characters or less is an acronym.
 */
export function properCase(text: string) : string {
    // Assuming an acronym
    if (text.length <= 3) return text.toUpperCase()

    return text
        .split(' ')
        .map(t => t.at(0)?.toUpperCase() + t.slice(1))
        .join(' ')
}

/**
 * Converts a year and month to a readable date string.
 * @param year The year.
 * @param month The month from 1 to 12.
 * @returns A date string in the form MM/YYYY or Present if year or month aren't provided.
 * @example getDisplayDate(2024, 5) // -> '05/2024'
 */
export function getDisplayDate(year?: number, month?: number) : string {
    if (!year || !month) return 'Present'

    return `${String(month).padStart(2, '0')}/${year}`
}

interface ISortableAstroContent {
    data: { priority?: number, name?: string }
    id: string
}

/**
 * Sort function for Astro content items that have a "priority" key.
 * Items with the same priority are sorted alphebatically by their name or id.
*/
export function sortByPriority(a: ISortableAstroContent, b: ISortableAstroContent) : number {
    if (a.data.priority !== b.data.priority) return (b.data.priority || 0) - (a.data.priority || 0)

    return (a.data.name || a.id).localeCompare((b.data.name || b.id))
}