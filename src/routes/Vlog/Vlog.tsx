import StickyHeader from '@/components/StickyHeader/StickyHeader';
import { TranslationParagraph } from '@/interfaces/global';
import { getParagraphHtml } from '@/util';
import { useTranslation } from 'react-i18next';
import './Vlog.scss';

export default function Vlog() {
	const { t } = useTranslation('translation', { keyPrefix: 'vlog' });

	const sections = t('paragraphs') as TranslationParagraph[];

	return (
		<>
			<StickyHeader>Vlog</StickyHeader>

			{(t('paragraphs') as TranslationParagraph[]).map((p, i) => getParagraphHtml(p, `vlog.paragraphs.${i}`))}
		</>
	);
}
