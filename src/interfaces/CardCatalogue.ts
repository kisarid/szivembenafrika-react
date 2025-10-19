import { CSSProperties } from 'react';

export type CardCataloguePic = {
	class?: string;
	style?: CSSProperties;
	src: string;
};

export type CardCatalogueItem = {
	id: string;
	title: string;
	shortDesc: string;
	cover: CardCataloguePic;
	pics?: { [key: number]: CardCataloguePic | CardCataloguePic[] };
};
