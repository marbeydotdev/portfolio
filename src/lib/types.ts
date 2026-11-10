export interface Project {
	identifier: string;
	title: string;
	shortDescription: string;
	description: string;
	tags: string[];
	published: boolean;
	icon: string;
	dateStart: string;
	dateEnd: string | null;
	colorHue: number;
	content: string;
	includedOnCv: boolean;
	media: Media[];
}
export interface Blog {
	identifier: string;
	title: string;
	shortDescription: string;
	description: string;
	tags: string[];
	published: boolean;
	date: string;
	content: string;
	media: Media[];
}

export interface Media {
	filename: string;
	name: string;
	alt: string;
}
