import { useTranslation } from 'react-i18next';

type WhereWeHelpCardPic = {
	class?: string;
	src: string;
};

type WhereWeHelpCard = {
	id: string;
	title: string;
	shortDesc: string;
	cover: string;
	pics?: { [key: number]: WhereWeHelpCardPic | WhereWeHelpCardPic[] };
};

export default function useWhereWeHelpCards(): WhereWeHelpCard[] {
	const { t } = useTranslation('translation', { keyPrefix: 'where-we-help' });

	return [
		{
			id: 'manafwa',
			title: t('manafwa.title'),
			shortDesc: t('manafwa.shortDesc'),
			cover: 'manafwa1',
			pics: {
				0: { class: 'float-right', src: 'manafwa1.jpg' },
				4: { class: 'float-left', src: 'manafwa2.jpg' },
			},
		},
		{
			id: 'karamoja',
			title: t('karamoja.title'),
			shortDesc: t('karamoja.shortDesc'),
			cover: 'karamoja2',
			pics: {
				0: { class: 'float-right', src: 'karamoja4.jpg' },
				'-1': [
					{ class: 'top left', src: 'karamoja2.jpg' },
					{ class: 'bottom left', src: 'karamoja3.jpg' },
					{ class: 'span-vertical right', src: 'karamoja1.jpg' },
				],
			},
		},
		{
			id: 'nairobi',
			title: t('nairobi.title'),
			shortDesc: t('nairobi.shortDesc'),
			cover: 'nairobi1',
			pics: {
				0: { src: 'nairobi1.jpg' },
				5: { src: 'nairobi3.jpg' },
				9: { src: 'nairobi4.jpg' },
				'-1': { src: 'nairobi2.jpg' },
			},
		},
		{
			id: 'mombasa',
			title: t('mombasa.title'),
			shortDesc: t('mombasa.shortDesc'),
			cover: 'mombasa1',
			pics: {
				0: { src: 'mombasa1.jpg' },
				'-1': { src: 'mombasa2.jpg' },
			},
		},
	];
}
