import { CardCataloguePic } from '@/interfaces/CardCatalogue';
import { TranslationParagraph } from '@/interfaces/global';
import DOMPurify from 'dompurify';
import { useTranslation } from 'react-i18next';

const getPicHtml = (pic?: CardCataloguePic | CardCataloguePic[], picId?: string) =>
	pic ? (
		Array.isArray(pic) ? (
			<div className='pic-grid' key={picId}>
				{pic.map((p, i) => (
					<div key={(picId || '') + i} className={`pic ${p.class}`}>
						<img src={p.src} />
					</div>
				))}
			</div>
		) : (
			<div className={`pic ${pic.class}`} key={picId}>
				<img src={pic.src} />
			</div>
		)
	) : null;

export default function CardCataloguePage({ id, keyPrefix }: { id: string; keyPrefix: string }) {
	const { t } = useTranslation('translation', { keyPrefix: `${keyPrefix}.${id}` });

	return (
		<section>
			{(t('paragraphs', { returnObjects: true }) as TranslationParagraph[]).map((p, i) => {
				const paragraphId = `${keyPrefix}.${id}.paragraphs.${i}`;

				if (typeof p === 'string') {
					return <p key={paragraphId} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(p) }}></p>;
				}

				if ('listType' in p) {
					const listItems = p.listItems.map((item, j) => {
						const listItemId = `${paragraphId}.listItems.${j}`;
						if (typeof item === 'string') {
							return (
								<li
									key={listItemId}
									dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item) }}
								></li>
							);
						}
						if (Array.isArray(item) || 'src' in item) {
							return getPicHtml(item, listItemId);
						}
						return null;
					});

					if (p.listType === 'ul') {
						return <ul key={paragraphId}>{listItems}</ul>;
					}
					if (p.listType === 'ol') {
						return <ol key={paragraphId}>{listItems}</ol>;
					}
					return null;
				}

				if (Array.isArray(p) || 'src' in p) {
					return <div key={paragraphId}>{getPicHtml(p, paragraphId)}</div>;
				}

				return null;
			})}
		</section>
	);
}
