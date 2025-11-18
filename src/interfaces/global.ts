import { CardCataloguePic } from './CardCatalogue';

export type TranslationParagraph =
	| string
	| CardCataloguePic
	| CardCataloguePic[]
	| { listType: 'ul' | 'ol'; listItems: TranslationParagraph[] };
