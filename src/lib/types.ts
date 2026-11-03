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
}
