import { getProjects } from '#lib/projects.server.ts';

export const load = async () => {
	return {projects: await getProjects()}
}