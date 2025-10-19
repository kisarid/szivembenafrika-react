import { useTranslation } from 'react-i18next';
import { Fragment } from 'react/jsx-runtime';
import useWhereWeHelpCards from './WhereWeHelpCards';

export default function WhereWeHelpSubpage({ id }: { id: string }) {
	const { t } = useTranslation('translation', { keyPrefix: `where-we-help.${id}` });
	const pics = useWhereWeHelpCards().find((card) => card.id === id)?.pics || {};

	const getPicHtml = (pic?: (typeof pics)[0]) =>
		pic ? (
			Array.isArray(pic) ? (
				<div className='pic-grid'>
					{pic.map((p, j) => (
						<div key={j} className={`pic ${p.class}`}>
							<img src={'/src/assets/images/where-we-help/' + p.src} />
						</div>
					))}
				</div>
			) : (
				<div className={`pic ${pic.class}`}>
					<img src={'/src/assets/images/where-we-help/' + pic.src} />
				</div>
			)
		) : null;

	return (
		<section>
			{(t('paragraphs', { returnObjects: true }) as string[]).map((p, i, arr) => {
				const pic = pics[i];
				const picLast = i === arr.length - 1 ? pics[-1] : undefined;

				return (
					<Fragment key={id + i}>
						{getPicHtml(pic)}
						<p>{p}</p>
						{getPicHtml(picLast)}
					</Fragment>
				);
			})}
		</section>
	);
}
