import { error } from '@sveltejs/kit';
import { normalize, resolve, sep } from 'node:path';

const ROOT = resolve('./data/assets');

export async function GET({ params }) {
	const full = resolve(ROOT, normalize(params.path));
	if (!full.startsWith(ROOT + sep)) throw error(403);

	const file = Bun.file(full);
	if (!(await file.exists())) throw error(404);

	return new Response(file, {
		headers: { 'Cache-Control': 'public, max-age=3600' }
	});
}
