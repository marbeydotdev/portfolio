import { getBlogIndex, getProjectIndex } from '#lib/data.server.ts';

export const getProjects = async () => {
	const projects = await getProjectIndex();
	return projects.filter(project => project.published);
}

export const getProject = async (id: string) => {
	const projects = await getProjects()
	return projects.find(p => p.identifier == id) ?? null
}

export const getBlogs = async () => {
	const blogs = await getBlogIndex();
	return blogs.filter(b => b.published)
}

export const getBlog = async (id: string) => {
	const blogs = await getBlogs();
	return blogs.find(b => b.identifier == id) ?? null;
};