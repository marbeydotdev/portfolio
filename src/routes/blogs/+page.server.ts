import { getBlogs } from '#lib/data.server.ts';

export const load = async () => {
	return { blogs: await getBlogs() };
};
