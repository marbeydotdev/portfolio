import matter from '@11ty/gray-matter';
import type { Blog, Media, Project } from '#lib/types.ts';
import { DATA_PATH } from '$app/env/private';
import { matchesGlob, normalize } from 'node:path';

let projects: Project[] = [];
let blogs: Blog[] = [];

enum ScanTypes {
	Unknown,
	ProjectAsset,
	ProjectIndex,
	ProjectMediaDefinition,
	ProjectIcon,
	BlogAsset,
	BlogIndex,
	BlogMediaDefinition,
	BlogIcon
}

const scans: [string, ScanTypes][] = [
	[normalize('/assets/projects/*/*.*'), ScanTypes.ProjectAsset],
	[normalize('/projects/*/*.*'), ScanTypes.ProjectIndex],
	[normalize('/projects/*/media/*.md'), ScanTypes.ProjectMediaDefinition],
	[normalize('/assets/blogs/*/*.*'), ScanTypes.BlogAsset],
	[normalize('/blogs/*/*.*'), ScanTypes.BlogIndex],
	[normalize('/blogs/*/media/*.md'), ScanTypes.BlogMediaDefinition],
	[normalize('/projects/*/icon.*'), ScanTypes.ProjectIcon],
	[normalize('/blogs/*/icon.*'), ScanTypes.BlogIcon]
];

const readContentGlob = normalize('**/*.md');

function getType(normPath: string): ScanTypes {
	for (const scan of scans) {
		if (matchesGlob(normPath, scan[0])) {
			return scan[1];
		}
	}
	return ScanTypes.Unknown;
}

function categorizeScan(path: string) {
	const normPath = normalize(path).replace(normalize(DATA_PATH), '');

	const object: { type: ScanTypes; path: string; [key: string]: string | number } = {
		type: getType(normPath),
		path: normPath
	};

	switch (object.type) {
		case ScanTypes.ProjectAsset:
		case ScanTypes.ProjectIcon:
		case ScanTypes.BlogAsset:
		case ScanTypes.BlogIndex:
			object['webPath'] = normPath.replaceAll('\\', '/');
			object['identifier'] = normPath.split('/').pop();
	}

	return object;
}

async function scanEverything() {
	const results: { type: ScanTypes; path: string; [key: string]: string | number }[] = [];
	for await (const file of new Bun.Glob(DATA_PATH + '/**').scan()) {
		const read = categorizeScan(file);
		if (matchesGlob(normalize(file), readContentGlob)) {
			read['content'] = await Bun.file(file).text();
		}
		results.push(read);
	}

	return results;
}

async function updateAssets() {
	const scan = await scanEverything();

	projects = scan
		.filter((s) => s.type === ScanTypes.ProjectIndex)
		.map((s): Project => {
			const data = matter(s['content'] as string);
			return {
				...data.data,
				content: data.content,
				icon: scan.find((sc) => sc.type === ScanTypes.ProjectIcon)
			} as Project;
		});

	console.log(scan);
}

await updateAssets();

async function updateProjectIndex() {
	const projectTemp = [];

	const scan = new Bun.Glob(DATA_PATH + `/projects/**/index.md`).scan();

	for await (let file of scan) {
		const basePath = file.replace('\\index.md', '').replace('/', '\\');
		const parsedFm = matter(await Bun.file(file).text());
		const identifier = basePath.split('/').pop() ?? '';
		const m = await fetchMedia(basePath);

		projectTemp.push({
			...parsedFm.data,
			icon: `/assets/projects/${identifier}/${await getIcon(basePath)}`,
			identifier,
			content: parsedFm.content,
			media: m
		} as Project);
	}

	projects = projectTemp;
}

async function fetchMedia(basePath: string) {
	const m: Media[] = [];

	for await (const media of new Bun.Glob(basePath + '\\media\\*.md').scan()) {
		const parsedMedia = matter(await Bun.file(media).text());
		m.push(parsedMedia.data as Media);
	}

	return m;
}

async function updateBlogIndex() {
	const blogTemp = [];

	for (const file of new Bun.Glob(DATA_PATH + '/blogs/**/index.md').scanSync()) {
		const basePath = file.replace('\\index.md', '');
		const parsedFm = matter(await Bun.file(file).text());

		const m = await fetchMedia(basePath);

		blogTemp.push({
			...parsedFm.data,
			identifier: basePath.split('\\').pop() ?? '',
			content: parsedFm.content,
			media: m
		} as Blog);
	}

	blogs = blogTemp;
}

// await updateProjectIndex();
// await updateBlogIndex();

function updateLoop() {
	setTimeout(async () => {
		await updateProjectIndex();
		await updateBlogIndex();
		updateLoop();
	}, 5000);
}

// updateLoop();

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
