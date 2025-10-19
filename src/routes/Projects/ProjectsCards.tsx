import { CardCatalogueItem } from '@/interfaces/CardCatalogue';
import { useTranslation } from 'react-i18next';

const baseSrc = '/src/assets/images/projects/';

export default function useProjectsCards(): CardCatalogueItem[] {
	const { t } = useTranslation('translation', { keyPrefix: 'projects' });

	return [
		{
			id: 'akitogogon',
			title: t('akitogogon.title'),
			cover: { src: baseSrc + 'akitogogon-1.jpg', style: { objectPosition: 'top' } },
			shortDesc: t('akitogogon.shortDesc'),
		},
		{
			id: 'noi-program',
			title: t('noi-program.title'),
			cover: { src: baseSrc + 'noi-program-3.jpg', style: { objectPosition: '30%' } },
			shortDesc: t('noi-program.shortDesc'),
		},
		{
			id: '84-nap',
			title: t('84days.title'),
			cover: { src: baseSrc + '84-nap-logo.png' },
			shortDesc: t('84days.shortDesc'),
		},
		{
			id: 'gyermektamogatas',
			title: t('supportchildren.title'),
			cover: { src: baseSrc + 'gyermektamogatas-projekt-2.jpg', style: { objectPosition: '60%' } },
			shortDesc: t('supportchildren.shortDesc'),
		},
		{
			id: 'shine',
			title: t('shine.title'),
			cover: { src: baseSrc + 'iskolafejlesztes-1.jpg' },
			shortDesc: t('shine.shortDesc'),
		},
		{
			id: 'graduate-a-girl',
			title: t('graduateagirl.title'),
			cover: { src: baseSrc + 'graduate-a-girl-projekt-1.jpg' },
			shortDesc: t('graduateagirl.shortDesc'),
		},
		{
			id: 'mtwapa',
			title: t('mtwapa.title'),
			cover: { src: baseSrc + 'mtwapa.jpg' },
			shortDesc: t('mtwapa.shortDesc'),
		},
		{
			id: 'eu-program',
			title: t('euprogram.title'),
			cover: { src: baseSrc + 'eu-2.jpg', style: { objectPosition: 'top' } },
			shortDesc: t('euprogram.shortDesc'),
		},
	];
}
