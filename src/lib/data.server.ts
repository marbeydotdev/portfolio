import matter from '@11ty/gray-matter';
import { read } from '$app/server';
import type { Project } from '#lib/types.ts';

export async function getProjectIndex() {
	const projects: Project[] = [];

	for (const file of Object.keys(import.meta.glob('/src/data/**/index.md'))) {
		const basePath = file.replace('/index.md', '');
		const parsedFm = matter(await read(file).text());
		projects.push({
			...parsedFm.data,
			icon: basePath + '/icon.png',
			identifier: basePath.split('/').pop() ?? '',
			content: parsedFm.content
		} as Project);
	}

	return projects;
}