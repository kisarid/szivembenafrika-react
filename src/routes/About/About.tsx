import StickyHeader from '@/components/layout/Header/StickyHeader';
import { Bio } from '@/interfaces/Bio.ts';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './About.scss';
import { teamMembers } from './teamMembers.ts';
import TeamModal from './TeamModal.tsx';
import TeamSwiper from './TeamSwiper.tsx';
import { volunteers } from './volunteers.ts';

export default function About() {
	const { t } = useTranslation('translation', { keyPrefix: 'about' });

	const [selectedBio, setSelectedBio] = useState<Bio>();

	console.log(t(`szbalazs.longBio`, {}));

	const teamMembersWithBios: Bio[] = useMemo(
		() =>
			teamMembers.map((teamMember) => ({
				...teamMember,
				shortBio: t(`${teamMember.id}.shortBio`),
				longBio: t(`${teamMember.id}.longBio`, { returnObjects: true }) as string[],
			})),
		[t]
	);

	const volunteersWithBios: Bio[] = useMemo(
		() =>
			volunteers.map((volunteer) => ({
				...volunteer,
				longBio: t(`${volunteer.id}.longBio`, { returnObjects: true }) as string[],
			})),
		[t]
	);

	const onSwiperCardClick = (id: string) =>
		setSelectedBio([...teamMembersWithBios, ...volunteersWithBios].find((bio) => bio.id === id));

	return (
		<div id='about'>
			<StickyHeader>{t('header')}</StickyHeader>
			<section>
				<div className='moyo-header'>{t('title1')}</div>
				<p>{t('p1')}</p>5865
				<div className='pic'>
					<img src='src/assets/images/about.jpg' alt='' />
				</div>
			</section>
			<section style={{ marginTop: '40px' }}>
				<div className='moyo-header'>{t('title2')}</div>
				<TeamSwiper bios={teamMembersWithBios} onClick={onSwiperCardClick} />
			</section>
			<section>
				<div className='moyo-header'>{t('title3')}</div>
				<TeamSwiper bios={volunteersWithBios} onClick={onSwiperCardClick} />
			</section>
			<TeamModal show={!!selectedBio} bio={selectedBio} onHide={() => setSelectedBio(undefined)} />
		</div>
	);
}
