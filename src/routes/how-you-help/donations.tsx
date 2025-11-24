import ParagraphedSection from '@/components/ParagraphedSection/ParagraphedSection';
import StickyHeader from '@/components/StickyHeader/StickyHeader';
import { TranslationParagraph } from '@/interfaces/global';
import { getParagraphHtml } from '@/util';
import { useTranslation } from 'react-i18next';

export default function Donations() {
	return <ParagraphedSection keyPrefix='donations' />;
}
