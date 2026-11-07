import { redirect } from '@sveltejs/kit';
import { getProject } from '#lib/data.server.ts';

export const load = async (event) => {
	const project = await getProject(event.params.slug);

	if (!project) {
		redirect(303, '/');
	}

	return { project: project };
};
