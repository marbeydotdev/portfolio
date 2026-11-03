import { getBlogs } from '#lib/projects.server.ts';

export const load = async () => {
	return {blogs: await getBlogs()}
}