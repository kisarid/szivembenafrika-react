export interface Bio {
	id: string;
	name: string;
	image: string;
	imageSmall?: string;
	shortBio?: string | string[];
	longBio?: string[];
	objectPosition: string;
}

export interface ChildBio extends Bio {
	isSupported: boolean;
}
