import StickyHeader from '@/components/StickyHeader/StickyHeader';
import { TranslationParagraph } from '@/interfaces/global';
import { getParagraphHtml } from '@/util';
import { useTranslation } from 'react-i18next';

export default function Principles() {
	const { t } = useTranslation('translation', { keyPrefix: 'principles' });

	return (
		<>
			<StickyHeader>{t('title')}</StickyHeader>
			<section>
				{(t('paragraphs', { returnObjects: true }) as TranslationParagraph[]).map((p, i) =>
					getParagraphHtml(p, `principles.paragraphs.${i}`)
				)}
			</section>
		</>
	);
}
