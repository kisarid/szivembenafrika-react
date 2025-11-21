import StickyHeader from '@/components/StickyHeader/StickyHeader';
import { TranslationParagraph } from '@/interfaces/global';
import { getParagraphHtml } from '@/util';
import { useTranslation } from 'react-i18next';

export default function EducationProgramKenya() {
	const { t } = useTranslation('translation', { keyPrefix: 'education-program-kenya' });

	return (
		<>
			<StickyHeader>{t('title')}</StickyHeader>
			<section>
				{(t('paragraphs', { returnObjects: true }) as TranslationParagraph[]).map((p, i) =>
					getParagraphHtml(p, `education-program-kenya.paragraphs.${i}`)
				)}
			</section>
		</>
	);
}
