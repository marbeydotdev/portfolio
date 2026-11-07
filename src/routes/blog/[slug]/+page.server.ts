import { redirect } from '@sveltejs/kit';
import { getBlog } from '#lib/data.server.ts';

export const load = async (event) => {
	const blog = await getBlog(event.params.slug);

	if (!blog) {
		redirect(303, '/blogs');
	}

	return { blog: blog };
};
