import MoreButton from '@/components/MoreButton';
import StickyHeader from '@/components/StickyHeader/StickyHeader';
import { useMemo } from 'react';
import { Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import './WhereWeHelp.scss';
import useWhereWeHelpCards from './WhereWeHelpCards';

export default function WhereWeHelp() {
	const location = useLocation();
	const navigate = useNavigate();
	const { t } = useTranslation('translation', { keyPrefix: 'where-we-help' });

	const cards = useWhereWeHelpCards();

	const selectedCard = useMemo(
		() => cards.find((card) => location.pathname.includes(card.id)),
		[cards, location.pathname]
	);

	const onCardClick = (id: string) => navigate('./' + id);

	const onBackClick = () => navigate('.');

	return (
		<div id='where-we-help'>
			<StickyHeader subheader={<b>{selectedCard?.title}</b>} onBackClick={selectedCard && onBackClick}>
				{t('title')}
			</StickyHeader>
			{selectedCard ? (
				<Outlet />
			) : (
				<>
					<i>{t('desc')}</i>
					<div className='where-we-help-cards'>
						{cards.map((card) => (
							<Card key={card.id} className='where-we-help-card' onClick={() => onCardClick(card.id)}>
								<Card.Title>{card.title}</Card.Title>
								<div className='pic'>
									<Card.Img
										variant='top'
										src={`/src/assets/images/where-we-help/${card.cover}.jpg`}
										alt={card.title}
									/>
								</div>
								<Card.Body>
									<Card.Text>{card.shortDesc}</Card.Text>
									<MoreButton />
								</Card.Body>
							</Card>
						))}
					</div>
				</>
			)}
		</div>
	);
}
