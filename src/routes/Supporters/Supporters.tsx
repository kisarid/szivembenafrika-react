import StickyHeader from '@/components/StickyHeader/StickyHeader';
import { useTranslation } from 'react-i18next';
import './Supporters.scss';

const supporters = [
	{
		link: 'https://hungaryhelps.gov.hu/',
		src: 'logo-hunhelps.png',
	},
	{
		link: 'https://emilla.me/',
		src: 'logo-emilla.png',
	},
	{
		link: 'https://poloneked.hu/',
		src: 'logo-poloneked.png',
	},
	{
		link: 'https://www.digitalpress.hu/',
		src: 'logo-digitalpress.png',
	},
	{
		link: 'https://hooplasewing.com/',
		src: 'logo-hoopla.jpg',
	},
	{
		link: 'https://www.purelifefoundation.eu/',
		src: 'logo-purelife.jpg',
	},
	{
		link: 'https://www.facebook.com/dorinkastudiohungary/',
		src: 'logo-dorinka.png',
	},
	{
		link: 'https://zsolya.com/',
		src: 'logo-zsolya.png',
	},
	{
		link: 'https://wanderergraphic.com/',
		src: 'logo_wanderergraphic.png',
	},
	{
		link: 'https://www.czikkcakkdesign.com/',
		src: 'logo_panni.png',
	},
	{
		link: 'https://www.szelencecafe.hu/',
		src: 'logo_szelence.png',
	},
	{
		link: 'https://zugmuhely.com/',
		src: 'logo-zug.png',
	},
	{
		link: 'https://harrerchocolat.com/',
		src: 'logo_harrer.png',
	},
	{
		link: 'https://chococard.hu/',
		src: 'logo_beantobear.jpg',
	},
	{
		link: 'https://popzrt.hu/',
		src: 'logo-popmerch.png',
	},
];

export default function Supporters() {
	const { t } = useTranslation('translation', { keyPrefix: 'supporters' });

	return (
		<>
			<StickyHeader>{t('title')}</StickyHeader>
			<section>
				<div id='supporters'>
					{supporters.map((supporter) => (
						<div className='logo' key={supporter.src}>
							<img src={'/src/assets/icons/' + supporter.src} />
						</div>
					))}
				</div>
			</section>
		</>
	);
}
