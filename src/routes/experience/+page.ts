import type { Experience } from '$lib/data/experiences/types';

const imageModules = import.meta.glob<{ default: string }>(
	'../../lib/assets/*.{webp,png,jpg}',
	{ eager: true }
);

const imageMap: Record<string, string> = {};
for (const [path, mod] of Object.entries(imageModules)) {
	const name = path.split('/').pop()!.replace(/\.(webp|png|jpg)$/, '');
	imageMap[name] = mod.default;
}

interface RawMetadata {
	title: string;
	organization?: string;
	period: string;
	sortDate: string;
	description: string;
	images?: { src: string; alt: string }[];
	links?: { text: string; url: string }[];
	layout?: string;
}

const modules = import.meta.glob<{ metadata: RawMetadata }>(
	'../../lib/data/experiences/*.md',
	{ eager: true }
);

const experiences: Experience[] = Object.values(modules)
	.map((m) => ({
		...m.metadata,
		images: m.metadata.images?.map((img) => ({
			src: imageMap[img.src] ?? img.src,
			alt: img.alt
		}))
	}))
	.sort((a, b) => b.sortDate.localeCompare(a.sortDate));

export const prerender = true;

export function load() {
	return { experiences };
}
