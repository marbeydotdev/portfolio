import { getProjectIndex } from '#lib/data.server.ts';

export const getProjects = async () => {
	const projects = await getProjectIndex();
	return projects.filter(project => project.published);
}

export const getProject = async (id: string) => {
	const projects = await getProjects()
	return projects.find(p => p.identifier == id) ?? null
}