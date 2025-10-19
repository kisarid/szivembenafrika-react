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
			pics: {
				0: { class: 'float-right', src: baseSrc + 'manafwa1.jpg' },
				4: { class: 'float-left', src: baseSrc + 'manafwa2.jpg' },
			},
		},
		{
			id: 'karamoja',
			title: t('karamoja.title'),
			shortDesc: t('karamoja.shortDesc'),
			cover: { src: baseSrc + 'karamoja2.jpg' },
			pics: {
				0: { class: 'float-right', src: baseSrc + 'karamoja4.jpg' },
				'-1': [
					{ class: 'top left', src: baseSrc + 'karamoja2.jpg' },
					{ class: 'bottom left', src: baseSrc + 'karamoja3.jpg' },
					{ class: 'span-vertical right', src: baseSrc + 'karamoja1.jpg' },
				],
			},
		},
		{
			id: 'nairobi',
			title: t('nairobi.title'),
			shortDesc: t('nairobi.shortDesc'),
			cover: { src: baseSrc + 'nairobi1.jpg' },
			pics: {
				0: { src: baseSrc + 'nairobi1.jpg' },
				5: { src: baseSrc + 'nairobi3.jpg' },
				9: { src: baseSrc + 'nairobi4.jpg' },
				'-1': { src: baseSrc + 'nairobi2.jpg' },
			},
		},
		{
			id: 'mombasa',
			title: t('mombasa.title'),
			shortDesc: t('mombasa.shortDesc'),
			cover: { src: baseSrc + 'mombasa1.jpg' },
			pics: {
				0: { src: baseSrc + 'mombasa1.jpg' },
				'-1': { src: baseSrc + 'mombasa2.jpg' },
			},
		},
	];
}
