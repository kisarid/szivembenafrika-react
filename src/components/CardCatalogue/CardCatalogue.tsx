import { CardCatalogueItem } from '@/interfaces/CardCatalogue';
import DOMPurify from 'dompurify';
import { Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import MoreButton from '../MoreButton';
import './CardCatalogue.scss';

export default function CardCatalogue({
	cards,
	onCardClick,
	columns = 2,
}: {
	cards: CardCatalogueItem[];
	onCardClick: (id: string) => void;
	columns?: number;
}) {
	const { t } = useTranslation('translation', { keyPrefix: 'card-catalogue' });

	return (
		<div id='card-catalogue'>
			<i>{t('desc')}</i>
			<div className={`card-catalogue-cards ${columns ? `columns-${columns}` : ''}`}>
				{cards.map((card) => (
					<Card key={card.id} className='card-catalogue-card' onClick={() => onCardClick(card.id)}>
						<Card.Title>{card.header}</Card.Title>
						<div className='pic'>
							<Card.Img variant='top' src={card.cover.src} alt={card.header} style={card.cover.style} />
						</div>
						<Card.Body>
							<Card.Text
								dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(card.shortDesc) }}
							></Card.Text>
							<MoreButton />
						</Card.Body>
					</Card>
				))}
			</div>
		</div>
	);
}
