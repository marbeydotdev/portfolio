import { getProjects } from '#lib/data.server.ts';

export const load = async () => {
	return { projects: await getProjects() };
};
