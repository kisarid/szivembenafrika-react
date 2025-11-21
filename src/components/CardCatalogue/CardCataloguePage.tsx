import { TranslationParagraph } from '@/interfaces/global';
import { getParagraphHtml } from '@/util';
import { useTranslation } from 'react-i18next';

export default function CardCataloguePage({ id, keyPrefix }: { id: string; keyPrefix: string }) {
	const { t } = useTranslation('translation', { keyPrefix: `${keyPrefix}.${id}` });

	return (
		<section>
			{(t('paragraphs', { returnObjects: true }) as TranslationParagraph[]).map((p, i) =>
				getParagraphHtml(p, `${keyPrefix}.${id}.paragraphs.${i}`)
			)}
		</section>
	);
}
