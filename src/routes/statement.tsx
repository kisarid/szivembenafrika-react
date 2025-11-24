import StickyHeader from '@/components/StickyHeader/StickyHeader';
import { useTranslation } from 'react-i18next';

export default function Statement() {
	const { t } = useTranslation('translation', { keyPrefix: 'statement' });

	return (
		<>
			<StickyHeader subheader={t('subtitle', '')}>{t('title')}</StickyHeader>
			<section style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: 'fit-content' }}>
				<a href='/files/szivembenafrika_beszamolo_2024.pdf'>2024</a>
				<a href='/files/szivembenafrika_beszamolo_2023.pdf'>2023</a>
				<a href='/files/szivembenafrika_beszamolo_2022.pdf'>2022</a>
				<a href='/files/szivembenafrika_beszamolo_2021.pdf'>2021</a>
				<a href='/files/szivembenafrika_beszamolo_2020.pdf'>2020</a>
			</section>
		</>
	);
}
