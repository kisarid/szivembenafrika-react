import { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import YoutubeVideo from '../YoutubeVideo/YoutubeVideo';
import './VideoGallery.scss';

export default function VideoGallery({ eps, wrapperKey }: { eps: string[]; wrapperKey: string }) {
	const { t } = useTranslation('translation', { keyPrefix: 'vlog' });

	const [isOpen, setIsOpen] = useState(false);

	const moreText = t('more-episodes');
	const lessText = t('less-episodes');

	const displayedEps = eps.slice(0, 3);
	const hiddenEps = eps.slice(3);

	return (
		<div key={wrapperKey} className='video-gallery'>
			{displayedEps.map((ep, i) => (
				<div key={ep}>
					<div className='video-gallery-header'>{t('episode', { nr: i + 1 })}</div>
					<YoutubeVideo url={ep} />
				</div>
			))}
			{hiddenEps.length > 0 ? (
				<>
					<Collapse in={isOpen}>
						<div>
							<div className='video-gallery-inner'>
								{hiddenEps.map((ep, i) => (
									<div key={ep}>
										<div className='video-gallery-header'>
											{t('episode', { nr: displayedEps.length + i + 1 })}
										</div>
										<YoutubeVideo url={ep} />
									</div>
								))}
							</div>
						</div>
					</Collapse>
					<div className='link' onClick={() => setIsOpen(!isOpen)}>
						{isOpen ? lessText : moreText}
					</div>
				</>
			) : null}
		</div>
	);
}
