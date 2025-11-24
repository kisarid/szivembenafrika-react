import { CardCatalogueItem } from '@/interfaces/CardCatalogue';
import { useTranslation } from 'react-i18next';

const baseSrc = '/src/assets/images/projects/';

export default function useProjectsCards(): CardCatalogueItem[] {
	const { t } = useTranslation('translation', { keyPrefix: 'projects' });

	return [
		{
			id: 'akitogogon',
			header: t('akitogogon.header'),
			cover: { src: baseSrc + 'akitogogon-1.jpg', style: { objectPosition: 'top' } },
			shortDesc: t('akitogogon.shortDesc'),
		},
		{
			id: 'noi-program',
			header: t('noi-program.header'),
			cover: { src: baseSrc + 'noi-program-3.jpg', style: { objectPosition: '30%' } },
			shortDesc: t('noi-program.shortDesc'),
		},
		{
			id: '84-nap',
			header: t('84-nap.header'),
			cover: { src: baseSrc + '84-nap-logo.png' },
			shortDesc: t('84-nap.shortDesc'),
		},
		{
			id: 'gyermektamogatas',
			header: t('gyermektamogatas.header'),
			cover: { src: baseSrc + 'gyermektamogatas-projekt-2.jpg', style: { objectPosition: '60%' } },
			shortDesc: t('gyermektamogatas.shortDesc'),
		},
		{
			id: 'shine',
			header: t('shine.header'),
			cover: { src: baseSrc + 'iskolafejlesztes-1.jpg' },
			shortDesc: t('shine.shortDesc'),
		},
		{
			id: 'graduate-a-girl',
			header: t('graduate-a-girl.header'),
			cover: { src: baseSrc + 'graduate-a-girl-projekt-1.jpg' },
			shortDesc: t('graduate-a-girl.shortDesc'),
		},
		{
			id: 'mtwapa',
			header: t('mtwapa.header'),
			cover: { src: baseSrc + 'mtwapa.jpg' },
			shortDesc: t('mtwapa.shortDesc'),
		},
		{
			id: 'eu-program',
			header: t('eu-program.header'),
			cover: { src: baseSrc + 'eu-2.jpg', style: { objectPosition: 'top' } },
			shortDesc: t('eu-program.shortDesc'),
		},
	];
}
