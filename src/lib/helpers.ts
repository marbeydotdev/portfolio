export function tagColor(tag: string) {
	let hash = 0;
	for (let i = 0; i < tag.length; i++) {
		hash = (hash * 33 + tag.charCodeAt(i)) | 0;
	}
	const hue = Math.abs(hash) % 360;
	return `hsl(${hue}deg 20% 30%)`;
}
