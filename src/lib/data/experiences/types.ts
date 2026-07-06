export interface Experience {
	title: string;
	organization?: string;
	period: string;
	sortDate: string;
	description: string;
	images?: { src: string; alt: string }[];
	links?: { text: string; url: string }[];
	layout?: string;
}
