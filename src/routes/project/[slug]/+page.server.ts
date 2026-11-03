import { getProject } from '#lib/projects.server.ts';
import { redirect } from '@sveltejs/kit';

export const load = async (event) => {
	const project = await getProject(event.params.slug)

	if (!project) {
		redirect(303, "/")
	}

	return {project: project}
}