import StickyHeader from '@/components/StickyHeader/StickyHeader';
import { useTranslation } from 'react-i18next';

export default function Contact() {
	const { t } = useTranslation('translation', { keyPrefix: 'contact' });

	return (
		<>
			<StickyHeader>{t('title')}</StickyHeader>
			<section>
				<p>
					<b>Facebook: </b>
					<a
						href='https://www.facebook.com/szivembenszuletettafrika'
						target='_blank'
						rel='noopener noreferrer'
					>
						facebook.com/szivembenszuletettafrika
					</a>
				</p>
				<p>
					<b>Instagram: </b>
					<a
						href='https://www.instagram.com/szivembenszuletettafrika'
						target='_blank'
						rel='noopener noreferrer'
					>
						@szivembenszuletettafrika
					</a>
				</p>
				<p>
					<b>Email: </b>
					<a href='mailto:szivembenafrika.official@gmail.com'>szivembenafrika.official@gmail.com</a>
				</p>
				<p>
					<b>{t('address')}: </b>1068, Budapest, Király utca 80. fszt. 11
				</p>
			</section>
		</>
	);
}
