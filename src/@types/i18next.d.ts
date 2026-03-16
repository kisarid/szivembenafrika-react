import { TranslationParagraph } from '@/interfaces/global';
import 'i18next';
import hu from '../../public/locales/hu/translation.json';

export type TranslationNamespace = typeof hu;
export type TranslationNamespaceKey = keyof TranslationNamespace;

declare module 'i18next' {
	interface CustomTypeOptions {
		resources: {
			translation: TranslationNamespace;
		};
	}
}
