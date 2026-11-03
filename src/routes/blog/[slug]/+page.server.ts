import { getBlog } from '#lib/projects.server.ts';
import { redirect } from '@sveltejs/kit';

export const load = async (event) => {
	const blog = await getBlog(event.params.slug)

	if (!blog) {
		redirect(303, "/blogs")
	}

	return {blog: blog}
}