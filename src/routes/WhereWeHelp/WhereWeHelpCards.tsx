import { CardCatalogueItem } from '@/interfaces/CardCatalogue';
import { useTranslation } from 'react-i18next';

const baseSrc = '/src/assets/images/where-we-help/';

export default function useWhereWeHelpCards(): CardCatalogueItem[] {
	const { t } = useTranslation('translation', { keyPrefix: 'where-we-help' });

	return [
		{
			id: 'manafwa',
			header: t('manafwa.header'),
			shortDesc: t('manafwa.shortDesc'),
			cover: { src: baseSrc + 'manafwa1.jpg' },
		},
		{
			id: 'karamoja',
			header: t('karamoja.header'),
			shortDesc: t('karamoja.shortDesc'),
			cover: { src: baseSrc + 'karamoja2.jpg' },
		},
		{
			id: 'nairobi',
			header: t('nairobi.header'),
			shortDesc: t('nairobi.shortDesc'),
			cover: { src: baseSrc + 'nairobi1.jpg' },
		},
		{
			id: 'mombasa',
			header: t('mombasa.header'),
			shortDesc: t('mombasa.shortDesc'),
			cover: { src: baseSrc + 'mombasa1.jpg' },
		},
	];
}
