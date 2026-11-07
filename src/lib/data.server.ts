import matter from '@11ty/gray-matter';
import type { Blog, Project } from '#lib/types.ts';
import { DATA_PATH } from '$app/env/private';

let projects: Project[] = [];
let blogs: Blog[] = [];

async function updateProjectIndex() {
	const projectTemp = [];

	const scan = new Bun.Glob(DATA_PATH + `/projects/**/index.md`).scan()

	for await (const file of scan) {
		const basePath = file.replace('\\index.md', '');
		const parsedFm = matter(await Bun.file(file).text());
		const identifier = basePath.split('\\').pop() ?? '';
		projectTemp.push({
			...parsedFm.data,
			icon: `/assets/projects/${identifier}/icon.png`,
			identifier,
			content: parsedFm.content
		} as Project);
	}

	projects = projectTemp;
}
async function updateBlogIndex() {
	const blogTemp = [];

	for (const file of new Bun.Glob(DATA_PATH + '/blogs/**/index.md').scanSync()) {
		const basePath = file.replace('\\index.md', '');
		const parsedFm = matter(await Bun.file(file).text());

		blogTemp.push({
			...parsedFm.data,
			identifier: basePath.split('\\').pop() ?? '',
			content: parsedFm.content
		} as Blog);
	}

	blogs = blogTemp;
}

await updateProjectIndex();
await updateBlogIndex();

function updateLoop() {
	setTimeout(async () => {
		await updateProjectIndex();
		await updateBlogIndex();
		updateLoop();
	}, 5000);
}

updateLoop();

export async function getProjects() {
	return projects;
}

export async function getProject(identifier: string) {
	return projects.find((p) => p.identifier == identifier) ?? null;
}

export async function getBlogs() {
	return blogs;
}

export async function getBlog(identifier: string) {
	return blogs.find((p) => p.identifier == identifier) ?? null;
}
