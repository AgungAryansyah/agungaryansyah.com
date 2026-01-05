export async function load() {
	const workFiles = import.meta.glob('../*/+page.md', { eager: true });

	const works = Object.entries(workFiles).map(([path, file]) => {
		// Extract slug from path: "./(work)/personal-website/+page.md" -> "personal-website"
		const slug = path.split('/')[1];
		const metadata = (file as { metadata: Record<string, string> }).metadata;

		return {
			slug,
			title: metadata.title,
			date: metadata.date,
			displayDate: metadata.displayDate
		};
	});

	// Sort by date (newest first)
	works.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return { works };
}
