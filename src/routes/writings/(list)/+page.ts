export async function load() {
	const workFiles = import.meta.glob('../*/+page.md', { eager: true });

	type Work = {
		slug: string;
		title: string;
		date?: string;
		displayDate?: string;
	};

	const works: Work[] = Object.entries(workFiles).map(([path, file]) => {
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

	function extractYear(w: Work): string {
		// Prefer a parseable date field
		if (w.date) {
			const d = new Date(w.date);
			if (!Number.isNaN(d.getTime())) return String(d.getFullYear());
		}

		// Fallback: find a 4-digit year in displayDate
		if (w.displayDate) {
			const m = w.displayDate.match(/(19|20)\d{2}/);
			if (m) return m[0];
		}

		return 'Unknown';
	}

	// Group works by year
	const groupsMap = works.reduce((map: Map<string, Work[]>, w) => {
		const year = extractYear(w);
		if (!map.has(year)) map.set(year, []);
		map.get(year)!.push(w);
		return map;
	}, new Map<string, Work[]>());

	// Convert to array and sort
	const worksByYear = Array.from(groupsMap.entries())
		.map(([year, items]) => {
			// sort items by date (newest first) if date available, otherwise keep original order
			items.sort((a, b) => {
				const ta = a.date ? new Date(a.date).getTime() : 0;
				const tb = b.date ? new Date(b.date).getTime() : 0;
				return tb - ta;
			});
			return { year, works: items };
		})
		.sort((a, b) => {
			// Put 'Unknown' last
			if (a.year === 'Unknown') return 1;
			if (b.year === 'Unknown') return -1;
			return Number(b.year) - Number(a.year);
		});

	return { worksByYear };
}
