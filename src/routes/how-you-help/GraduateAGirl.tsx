import StickyHeader from '@/components/StickyHeader/StickyHeader';
import { TranslationParagraph } from '@/interfaces/global';
import { getParagraphHtml } from '@/util';
import { useTranslation } from 'react-i18next';

export default function GraduateAGirl() {
	const { t } = useTranslation('translation', { keyPrefix: 'graduate-a-girl' });

	return (
		<>
			<StickyHeader subheader={t('subtitle')}>{t('title')}</StickyHeader>
			<section>
				{(t('paragraphs', { returnObjects: true }) as TranslationParagraph[]).map((p, i) =>
					getParagraphHtml(p, `graduate-a-girl.paragraphs.${i}`)
				)}
			</section>
		</>
	);
}
