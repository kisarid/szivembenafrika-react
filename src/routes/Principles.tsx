import StickyHeader from '@/components/layout/Header/StickyHeader';
import { useTranslation } from 'react-i18next';

export default function Principles() {
	const { t } = useTranslation('translation', { keyPrefix: 'principles' });

	return (
		<>
			<StickyHeader>{t('header')}</StickyHeader>
			<section>
				<p>
					<b>{t('1.title')}: </b>
					{t('1.text')}
				</p>
				<div className='pic right'>
					<img src='src/assets/images/principles.jpg' alt='' />
				</div>
				<p>
					<b>{t('2.title')}: </b>
					{t('2.text')}
				</p>
				<p>
					<b>{t('3.title')}: </b>
					{t('3.text')}
				</p>
				<p>
					<b>{t('4.title')}: </b>
					{t('4.text')}
				</p>
				<p>
					<b>{t('5.title')}: </b>
					{t('5.text')}
				</p>
				<p>
					<b>{t('6.title')}: </b>
					{t('6.text')}
				</p>
			</section>
		</>
	);
}
