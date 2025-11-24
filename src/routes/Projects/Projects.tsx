import CardCatalogue from '@/components/CardCatalogue/CardCatalogue';
import StickyHeader from '@/components/StickyHeader/StickyHeader';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import './Projects.scss';
import useProjectsCards from './ProjectsCards';

export default function Projects() {
	const location = useLocation();
	const navigate = useNavigate();
	const { t } = useTranslation('translation', { keyPrefix: 'projects' });

	const cards = useProjectsCards();

	const selectedCard = useMemo(
		() => cards.find((card) => location.pathname.includes(card.id)),
		[cards, location.pathname]
	);

	const onCardClick = (id: string) => navigate('./' + id);

	const onBackClick = () => navigate('.');

	return (
		<div id='projects'>
			<StickyHeader subheader={<b>{selectedCard?.header}</b>} onBackClick={selectedCard && onBackClick}>
				{t('title')}
			</StickyHeader>
			{selectedCard ? <Outlet /> : <CardCatalogue cards={cards} onCardClick={onCardClick} columns={3} />}
		</div>
	);
}
