import { CardCatalogueItem } from '@/interfaces/CardCatalogue';
import { useTranslation } from 'react-i18next';

const baseSrc = '/src/assets/images/where-we-help/';

export default function useWhereWeHelpCards(): CardCatalogueItem[] {
	const { t } = useTranslation('translation', { keyPrefix: 'where-we-help' });

	return [
		{
			id: 'manafwa',
			title: t('manafwa.title'),
			shortDesc: t('manafwa.shortDesc'),
			cover: { src: baseSrc + 'manafwa1.jpg' },
		},
		{
			id: 'karamoja',
			title: t('karamoja.title'),
			shortDesc: t('karamoja.shortDesc'),
			cover: { src: baseSrc + 'karamoja2.jpg' },
		},
		{
			id: 'nairobi',
			title: t('nairobi.title'),
			shortDesc: t('nairobi.shortDesc'),
			cover: { src: baseSrc + 'nairobi1.jpg' },
		},
		{
			id: 'mombasa',
			title: t('mombasa.title'),
			shortDesc: t('mombasa.shortDesc'),
			cover: { src: baseSrc + 'mombasa1.jpg' },
		},
	];
}
