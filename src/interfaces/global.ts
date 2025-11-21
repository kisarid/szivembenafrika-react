import { CSSProperties } from 'react';

export type Pic = {
	type?: 'pic';
	class?: string;
	style?: CSSProperties;
	src: string;
};

export type Header = {
	type: 'header';
	text: string;
	level?: 1 | 2 | 3 | 4 | 5 | 6;
};

export type List = {
	type: 'list';
	listType: 'ul' | 'ol';
	listItems: TranslationParagraph[];
};

export type TranslationParagraph = string | Pic | Pic[] | Header | List;
