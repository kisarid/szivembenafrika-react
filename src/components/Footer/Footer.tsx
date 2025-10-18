import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { ReactSVG } from 'react-svg';
import NewsletterModal from '../NewsletterModal/NewsletterModal';
import './Footer.scss';

export default function Footer() {
	const { t } = useTranslation('translation', { keyPrefix: 'footer' });
	const [showNewsletterModal, setShowNewsletterModal] = useState(false);

	useEffect(() => {
		if (localStorage.getItem('newsletter-modal-seen') !== 'true') {
			setShowNewsletterModal(true);
			localStorage.setItem('newsletter-modal-seen', 'true');
		}
	}, []);

	return (
		<div id='footer'>
			<Container>
				<div className='content'>
					<div className='title'>{t('name')}</div>
					<div className='logos'>
						<div className='link' onClick={() => setShowNewsletterModal(true)}>
							{t('newsletter')}
						</div>
						<a
							href='https://www.facebook.com/szivembenszuletettafrika'
							target='_blank'
							rel='noopener noreferrer'
						>
							<ReactSVG src='src/assets/icons/facebook-logo.svg' />
						</a>
						<a
							href='https://www.instagram.com/szivembenszuletettafrika'
							target='_blank'
							rel='noopener noreferrer'
						>
							<ReactSVG src='src/assets/icons/instagram-logo.svg' />
						</a>
					</div>
				</div>
			</Container>
			<NewsletterModal show={showNewsletterModal} onHide={() => setShowNewsletterModal(false)} />
		</div>
	);
}
