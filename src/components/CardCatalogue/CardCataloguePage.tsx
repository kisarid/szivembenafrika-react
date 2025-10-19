import { CardCataloguePic } from '@/interfaces/CardCatalogue';
import useProjectsCards from '@/routes/Projects/ProjectsCards';
import useWhereWeHelpCards from '@/routes/WhereWeHelp/WhereWeHelpCards';
import { useTranslation } from 'react-i18next';
import { Fragment } from 'react/jsx-runtime';

const getPicHtml = (pic?: CardCataloguePic | CardCataloguePic[]) =>
	pic ? (
		Array.isArray(pic) ? (
			<div className='pic-grid'>
				{pic.map((p, j) => (
					<div key={j} className={`pic ${p.class}`}>
						<img src={p.src} />
					</div>
				))}
			</div>
		) : (
			<div className={`pic ${pic.class}`}>
				<img src={pic.src} />
			</div>
		)
	) : null;

export default function CardCataloguePage({ id, keyPrefix }: { id: string; keyPrefix: string }) {
	const { t } = useTranslation('translation', { keyPrefix: `${keyPrefix}.${id}` });

	const pics = [...useWhereWeHelpCards(), ...useProjectsCards()].find((card) => card.id === id)?.pics || {};
	console.log(t('paragraphs', { returnObjects: true }) as string[]);
	return (
		<section>
			{(t('paragraphs', { returnObjects: true }) as string[]).map((p, i, arr) => {
				const pic = pics[i];
				const picLast = i === arr.length - 1 ? pics[-1] : undefined;

				return (
					<Fragment key={id + i}>
						{getPicHtml(pic)}
						<p dangerouslySetInnerHTML={{ __html: p }}></p>
						{getPicHtml(picLast)}
					</Fragment>
				);
			})}
		</section>
	);
}
