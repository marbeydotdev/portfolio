const modules = import.meta.glob('/blog/*.md', {
	eager: true,
	query: '?raw'
});

export function encodeSlug(slug: string){
	return slug.replaceAll(" ", "_")
}

export function decodeSlug(slug: string){
	return slug.replaceAll("_", " ")
}

export const posts = Object.entries(modules).map(([path, module]) => {
	const slug = path.split('/').pop()?.replace('.md', '');
	return {
		slug,
		content: ((module as {default: string}).default),
		path
	};
});

console.log(posts);